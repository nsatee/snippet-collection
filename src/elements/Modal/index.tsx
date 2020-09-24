import React from "react";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import { Body, Box, Container, Overlay, Title } from "./styled";

const Modal: React.FC<{
  title?: string;
  active?: boolean;
  onClose: () => void;
}> = ({ title, active, children, onClose }) => {
  return (
    <Container active={active}>
      <AnimatePresence>
        {active && (
          <Overlay
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && (
          <Box initial={{ y: 40 }} animate={{ y: 0 }} exit={{ y: 40 }}>
            {title && <Title>{title}</Title>}
            <Body>{children}</Body>
          </Box>
        )}
      </AnimatePresence>
    </Container>
  );
};

export const ModalFooter = styled.div`
  margin-top: ${({ theme }) => theme.boxModel.xl};
`;

export default Modal;
