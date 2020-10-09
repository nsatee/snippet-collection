import React from "react";
import styled from "styled-components";
import Button from "../../elements/Button";
import { Flex } from "../../elements/Grid";
import { useMainUI } from "../../UIController/MainController";
import Text from "../../elements/Text";
import ConfirmDelete from "./ConfirmDelete";

const MainDesc: React.FC = () => {
  const [ui, setUI] = useMainUI();
  const headerRef = React.useRef<HTMLHeadingElement>(null);

  return (
    <Flex align="center" gap="s" justify="between">
      <HeaderStyle
        contentEditable={ui.editing}
        suppressContentEditableWarning={true}
        ref={headerRef}
        onKeyDown={(e) => e.key === "Enter" && e.preventDefault()}
        onInput={(e) => headerRef.current! && setUI({ headerRef })}
      >
        {ui.data?.title}
      </HeaderStyle>

      {!ui.editing && (
        <Button
          size="s"
          variant="ghost"
          onClick={() => setUI({ editing: true })}
        >
          Edit
        </Button>
      )}
      {ui.editing && (
        <Button
          size="s"
          color="error"
          variant="ghost"
          onClick={() => setUI({ deletingActive: true })}
        >
          Delete
        </Button>
      )}

      <ConfirmDelete />
    </Flex>
  );
};

const HeaderStyle = styled(Text.h1)`
  outline-offset: ${({ theme }) => theme.boxModel.s};
  * {
    font-weight: bold !important;
    font-style: normal !important;
  }
`;

export default MainDesc;
