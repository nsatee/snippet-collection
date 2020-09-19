import React from "react";
import styled, { css } from "styled-components";

const Modal: React.FC<{ title?: string; active?: boolean }> = ({
  title,
  active,
  children,
}) => {
  return (
    <Container>
      <Overlay />
      <Box>
        {title && <Title>{title}</Title>}
        <Body>{children}</Body>
      </Box>
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

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: grid;
  place-items: center;
`;

const Overlay = styled(Container)`
  position: absolute;
  background: rgba(0, 0, 0, 0.3);
`;

const Box = styled.div`
  ${({ theme }) => css`
    background: white;
    position: relative;
    max-width: 500px;
    width: 100vw;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
      0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
      0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
  `}
`;

export default Modal;
