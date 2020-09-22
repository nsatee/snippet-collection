import chroma from "chroma-js";
import { motion, Variants } from "framer-motion";
import React from "react";
import styled from "styled-components";
import Button from "./Button";

const ExpandList = () => {
  const [show, setShow] = React.useState(false);
  const variants: Variants = {
    active: {
      height: "auto",
      transition: { duration: 0.2 },
    },
    inactive: {
      height: 0,
      transition: { duration: 0.2 },
    },
  };
  return (
    <ExpandContainer>
      <Button
        expanded
        onClick={() => {
          setShow(!show);
        }}
        active={show}
      >
        Javascript
      </Button>
      <GroupList
        show={show}
        variants={variants}
        animate={show ? "active" : "inactive"}
      >
        <GroupListContent>
          <List>hello</List>
          <List>hello</List>
          <List>hello</List>
          <List>hello</List>
          <List>hello</List>
          <List>hello</List>
          <List>hello</List>
          <List>hello</List>
          <List>hello</List>
          <List>hello</List>
          <List>hello</List>
          <List>hello</List>
          <List>hello</List>
          <List>hello</List>
        </GroupListContent>
      </GroupList>
    </ExpandContainer>
  );
};

export const List = styled.div`
  border-bottom: 1px solid
    ${({ theme }) => chroma(theme.colors.primary.base).alpha(0.3).css()};
  padding: ${({ theme }) => theme.spacing.l}px;
  color: ${({ theme }) => theme.colors.primary.base};
  cursor: pointer;
  transition: 0.1s;

  &:hover {
    background: ${({ theme }) =>
      chroma(theme.colors.primary.base).alpha(0.05).css()};
  }
`;

export const GroupList = styled(motion.div)<{ show: boolean }>`
  width: 100%;
  height: 0;
  margin: ${({ theme }) => theme.spacing.s}px 0;
  overflow: hidden;

  ${List}:last-child {
    border: 0;
  }
`;

export const GroupListContent = styled.div`
  border: 1px solid
    ${({ theme }) => chroma(theme.colors.primary.base).alpha(0.3).css()};
  border-radius: ${({ theme }) => theme.spacing.s}px;
`;

const ExpandContainer = styled.div`
  width: 100%;
`;

export default ExpandList;
