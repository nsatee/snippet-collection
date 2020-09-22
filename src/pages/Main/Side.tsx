import chroma from "chroma-js";
import React from "react";
import styled, { css } from "styled-components";
import Button from "../../components/Button";
import ExpandList from "../../components/ExpandList";

const Side: React.FC<{ handleOpen: () => void }> = ({ handleOpen }) => {
  return (
    <Container>
      <Button
        expanded
        onClick={handleOpen}
        style={{ marginBottom: 36 }}
        color="success"
      >
        Create collection
      </Button>
      <ExpandList />
    </Container>
  );
};

const Container = styled.aside`
  ${({ theme }) => css`
    min-width: 300px;
    width: 30vw;
    height: 100vh;
    overflow-y: scroll;
    position: sticky;
    top: 0;
    padding: ${theme.spacing.xxl}px;

    &::-webkit-scrollbar {
      width: 5px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
      background: transparent;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: ${chroma(theme.colors.gray.dark).alpha(0.3).css()};
      border-radius: 999px;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background: ${chroma(theme.colors.gray.dark).alpha(0.4).css()};
    }
  `}
`;

export default Side;
