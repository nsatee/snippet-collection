import styled, { css } from "styled-components";
import { setColor } from "../Theme";
import { ColorType } from "../Theme/colors";
import { BoxModelType } from "../Theme/spacing";
import { motion } from "framer-motion";

type CardProps = {
  background?: ColorType | "none";
  width?: string;
  height?: string;
  padding?: BoxModelType | "none";
  type?: "ghost" | "normal" | "none";
};

const GhostStyle = css`
  ${({ theme }) => css`
    background: transparent;
    border: 1px solid ${setColor(theme.colors.base).darken[2]};
  `}
`;

const Card = styled(motion.div)<CardProps>`
  ${({
    theme,
    background = "base",
    width = "100%",
    height,
    padding,
    type,
  }) => css`
    display: block;
    border-radius: ${theme.boxModel.s};
    background-color: ${!type &&
    (background === "none" ? "transparent" : theme.colors[background])};
    padding: ${padding !== "none" || padding
      ? "unset"
      : theme.boxModel[padding]};
    width: ${width};
    height: ${height};
    ${type === "ghost" && GhostStyle}
  `}
`;

export default Card;
