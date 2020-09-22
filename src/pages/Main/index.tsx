import React from "react";
import styled, { css } from "styled-components";
import { MainContainer } from "../../components/Grid";
import CreateModal from "./CreateModal";
import Side from "./Side";

const Main: React.FC = () => {
  const [creatingSection, setCreatingSection] = React.useState(false);
  return (
    <MainContainer direction="row">
      <Side handleOpen={() => setCreatingSection(true)} />
      <Content>content</Content>
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
  `}
`;

export default Main;
