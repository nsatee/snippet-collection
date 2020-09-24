import React from "react";
import styled, { css } from "styled-components";
import Button from "../../elements/Button";
import { Flex } from "../../elements/Grid";
import Text from "../../elements/Text";

const MainContent = () => {
  return (
    <Content>
      <Flex align="center" gap="s">
        <Text.h1>JavaScript</Text.h1>
        <Button size="s" variant="ghost">
          Edit
        </Button>
      </Flex>
    </Content>
  );
};

export const Content = styled.main`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.background};
    padding: ${theme.boxModel.xl};
  `}
`;

export default MainContent;
