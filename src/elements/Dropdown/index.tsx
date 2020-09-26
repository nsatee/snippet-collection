import React, { FC, useEffect, useRef, useState } from "react";
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
`;

const List = styled(Button)`
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

const DDIcon = styled.div<{ active?: boolean }>`
  transition: 0.2s;
  margin-bottom: ${({ active }) => (active ? "4px" : "-4px")};
  transform: ${({ active }) => (active ? "rotate(-180deg)" : "rotate(0deg)")};
  transform-origin: center;
`;

const Dropdown: FC<{
  options: { label?: string; value: string }[];
  onChange: (args?: { label?: string; value: string }) => void;
  chosen: { label?: string; value: string };
}> = ({ options, onChange, chosen }) => {
  const inputRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [inputPos, setInputPos] = useState<DOMRect>();
  const [selected, setSelected] = useState<{ label?: string; value: string }>(
    chosen
  );
  useOutsideClick(containerRef, {
    onClickOutside: () => setActive(false),
  });
  const inputRect = useResizeRect(inputRef);

  useEffect(() => {
    inputRef.current! && setInputPos(inputRef.current!.getBoundingClientRect());
  }, [inputRef]);
  return (
    <div ref={containerRef}>
      <List full color="base" ref={inputRef} onClick={() => setActive(!active)}>
        {selected.label}
        <DDIcon active={active}>
          <FiChevronDown size={24} />
        </DDIcon>
      </List>
      <DropdownList pos={inputRect?.rect || inputPos} open={active}>
        {options.map((option) => (
          <List
            full
            key={option.value}
            color="base"
            onClick={() => {
              setActive(false);
              setSelected(option);
              onChange(option);
            }}
          >
            {option.label || option.value}
          </List>
        ))}
      </DropdownList>
    </div>
  );
};

export default Dropdown;
