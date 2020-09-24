import React from "react";
import styled, { css } from "styled-components";
import Button from "../../elements/Button";
import { MainContainer } from "../../elements/Grid";
import CreateModal from "./CreateModal";
import Side from "./Side";

const Main: React.FC = () => {
  const [creatingSection, setCreatingSection] = React.useState(true);
  return (
    <MainContainer direction="row">
      <Side handleOpen={() => setCreatingSection(true)} />
      <Content>
        <Button color="foreground" active={true} size="xl">
          Hello
        </Button>
      </Content>
      <CreateModal
        active={creatingSection}
        onClose={() => setCreatingSection(false)}
      />
    </MainContainer>
  );
};

export const Content = styled.main`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.background};
  `}
`;

export default Main;
