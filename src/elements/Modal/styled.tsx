import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import { setColor } from "../Theme";

export const Body = styled.div`
  padding: ${({ theme }) => theme.boxModel.l};
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-weight: bold;
    font-size: ${theme.boxModel.xl};
    letter-spacing: 0.02em;
    margin-bottom: ${theme.boxModel.xl};
    padding: ${theme.boxModel.l};
    background: ${theme.colors.base};
    border-bottom: 1px solid ${setColor(theme.colors.base).darken[1]};
  `}
`;

export const Container = styled.div<{ active?: boolean }>`
  ${({ active, theme }) => css`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: grid;
    place-items: center;
    opacity: 1;
    transition: 0.2s;
    padding: ${theme.boxModel.l}px;

    ${!active &&
    css`
      opacity: 0;
      cursor: default;
      pointer-events: none;
    `}
  `}
`;

export const Overlay = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: block;
  position: absolute;
  background: rgba(0, 0, 0, 0.3);
  cursor: pointer;
`;

export const Box = styled(motion.div)`
  ${({ theme }) => css`
    background: white;
    position: relative;
    max-width: 500px;
    width: 100%;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
      0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
      0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
  `}
  border-radius: 8px;
  overflow: hidden;
`;
