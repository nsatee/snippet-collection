import React from "react";
import styled, { css } from "styled-components";
import Button from "../../components/Button";
import { Field, Input } from "../../components/Form";
import { Flex, MainContainer } from "../../components/Grid";
import Modal, { ModalFooter } from "../../components/Modal";

const Main = () => {
  return (
    <MainContainer direction="row">
      <Side>
        <Button expanded>Create section</Button>
      </Side>
      <Content>content</Content>
      <Modal title="Create section">
        <Field>
          <Input autoFocus />
        </Field>
        <ModalFooter>
          <Flex justify="end" align="center" gap="m">
            <Button display="plain" color="error">
              Cancel
            </Button>
            <Button dimension="s">Create</Button>
          </Flex>
        </ModalFooter>
      </Modal>
    </MainContainer>
  );
};

export const Side = styled.aside`
  ${({ theme }) => css`
    min-width: 300px;
    width: 30vw;
    height: 100vh;
    overflow: scroll;
    position: sticky;
    top: 0;
    padding-right: ${theme.spacing.xxl}px;
  `}
`;

export const Content = styled.main`
  ${({}) => css`
    flex: 1;
  `}
`;

export default Main;
