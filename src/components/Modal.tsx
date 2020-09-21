import React from "react";
import styled, { css } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

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

const Body = styled.div`
  padding: ${({ theme }) => theme.spacing.l}px;
`;

export const ModalFooter = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xl}px;
`;

const Title = styled.h2`
  ${({ theme }) => css`
    font-weight: bold;
    font-size: ${theme.spacing.xl}px;
    letter-spacing: 0.02em;
    margin-bottom: ${theme.spacing.xl}px;
    padding: ${theme.spacing.l}px;
    background: ${theme.colors.background.light};
  `}
`;

const Container = styled.div<{ active?: boolean }>`
  ${({ active }) => css`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: grid;
    place-items: center;
    opacity: 1;
    transition: 0.2s;

    ${!active &&
    css`
      opacity: 0;
      cursor: default;
      pointer-events: none;
    `}
  `}
`;

const Overlay = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: block;
  position: absolute;
  background: rgba(0, 0, 0, 0.3);
  cursor: pointer;
`;

const Box = styled(motion.div)`
  ${({ theme }) => css`
    background: white;
    position: relative;
    max-width: 500px;
    width: 100vw;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
      0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
      0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
  `}
  border-radius: 8px;
  overflow: hidden;
`;

export default Modal;
