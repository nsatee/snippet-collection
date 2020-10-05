import React, {
  FC,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Button from "../Button";
import Card from "../Card";
import { AnimatePresence } from "framer-motion";
import { useOutsideClick } from "../../util/useOutsideClick";
import { useResizeRect } from "../../util/useResizeRect";
import { FiChevronDown } from "react-icons/fi";

const ListContainer = styled(Card)`
  position: absolute;
  border-radius: ${({ theme }) => theme.boxModel.m};
  box-shadow: ${({ theme }) => theme.shadows.smooth};
  overflow-y: scroll;
  max-height: 300px;
  padding: 4px;
`;

export const List = styled(Button)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  height: 42px;
`;

const DropdownList: FC<{ pos?: DOMRect; open: boolean }> = ({
  children,
  pos,
  open,
}) => {
  const inlineElStyle: React.CSSProperties = pos
    ? {
        top: pos?.bottom + 8,
        left: pos?.left,
      }
    : {};
  return pos
    ? ReactDOM.createPortal(
        <AnimatePresence>
          {open && (
            <ListContainer
              width={`${pos.width}px`}
              padding="none"
              style={inlineElStyle}
              initial={{ opacity: 5, height: 0, originY: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              {children}
            </ListContainer>
          )}
        </AnimatePresence>,
        document.querySelector("#modal-root")!
      )
    : null;
};

const DDIcon = styled.div<{ open?: boolean }>`
  transition: 0.2s;
  margin-bottom: ${({ open }) => (open ? "4px" : "-4px")};
  transform: ${({ open }) => (open ? "rotate(-180deg)" : "rotate(0deg)")};
  transform-origin: center;
`;
type OptionType = { label?: string; value: string };
type ChildrenProps = {
  active: boolean;
  data: OptionType;
  initProps: {
    onClick: () => void;
    key: string;
  };
};

const Dropdown: FC<{
  options: { label?: string; value: string }[];
  onChange: (args?: { label?: string; value: string }) => void;
  active: { label?: string; value: string };
  children: (args: ChildrenProps) => React.ReactNode;
}> = ({ options, onChange, active, children }) => {
  const inputRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [inputPos, setInputPos] = useState<DOMRect>();
  const [selected, setSelected] = useState<OptionType>(active);
  const valueIndex = useMemo(() => options.map((option) => option.value), [
    options,
  ]);
  const [activeIndex, setActiveIndex] = useState<number>(
    valueIndex.indexOf(active.value)
  );
  useOutsideClick(containerRef, {
    onClickOutside: () => setOpen(false),
  });
  const inputRect = useResizeRect(inputRef);

  useEffect(() => {
    inputRef.current! && setInputPos(inputRef.current!.getBoundingClientRect());
  }, [inputRef]);

  const keydownListener = useCallback(
    (event: KeyboardEvent) => {
      const key = event.key;
      const optionsLength = valueIndex.length - 1;
      if (key === "ArrowDown") {
        return setActiveIndex((index) => {
          if (index === optionsLength) {
            return 0;
          }
          return index + 1;
        });
      }
      if (key === "ArrowUp") {
        return setActiveIndex((index) => {
          if (index <= 0) {
            return optionsLength;
          }
          return index - 1;
        });
      }
      if (key === "Escape") {
        return setOpen(false);
      }
    },
    [valueIndex.length]
  );

  useEffect(() => {
    setSelected(options[activeIndex]);
  }, [activeIndex, options]);

  const memoKeydown = useMemo(() => keydownListener, [keydownListener]);

  useEffect(() => {
    if (open) {
      window.addEventListener("keydown", memoKeydown);
    } else {
      window.removeEventListener("keydown", memoKeydown);
    }
  }, [memoKeydown, open]);

  return (
    <div ref={containerRef}>
      <List
        full
        color="base"
        noHovered
        ref={inputRef}
        onClick={() => setOpen(!open)}
        onKeyDown={(event) =>
          event.key === "Enter" && onChange(options[activeIndex])
        }
      >
        {selected.label}
        <DDIcon open={open}>
          <FiChevronDown size={24} />
        </DDIcon>
      </List>
      <DropdownList pos={inputRect?.rect || inputPos} open={open}>
        {options.map((option, index) =>
          children({
            active: selected.value === option.value,
            data: option,
            initProps: {
              onClick: () => {
                setOpen(false);
                setSelected(option);
                setActiveIndex(index);
                onChange(option);
              },
              key: option.value,
            },
          })
        )}
      </DropdownList>
    </div>
  );
};

export default Dropdown;
