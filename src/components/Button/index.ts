import styled, { css } from "styled-components";
import { ColorsType } from "../Theme/Color";
import rgba from "hex-to-rgba";
import chroma from "chroma-js";

type ButtonType = {
  dimension?: "s" | "m" | "l";
  color?: ColorsType;
  display?: "bordered" | "solid" | "ghost" | "plain";
  disabled?: boolean;
  active?: boolean;
  expanded?: boolean;
} & React.HTMLProps<HTMLButtonElement>;

const Button = styled.button<ButtonType>`
  ${({
    theme,
    dimension = "m",
    color = "primary",
    display = "solid",
    disabled,
    active,
    expanded,
  }) =>
    css`
      outline: 0;
      padding: ${theme.spacing[dimension] * 1.5}px
        ${theme.spacing[dimension] * 2}px;
      background-color: ${display === "solid"
        ? theme.colors[color].base
        : "transparent"};
      font-size: ${theme.spacing.l}px;
      border: 0;
      color: ${chroma(theme.colors[color].base).brighten(2).css()};
      font-weight: bold;
      cursor: ${!disabled && "pointer"};
      box-shadow: ${display === "solid" &&
      `0 5px 20px ${rgba(theme.colors[color].base, 0.6)}`};
      transition: 0.1s;
      opacity: ${disabled && 0.4};
      width: ${expanded && "100%"};
      border-radius: 8px;
      overflow: hidden;

      ${active &&
      css`
        background-color: ${theme.colors[color].light};
        box-shadow: ${display === "ghost" &&
        `0 5px 20px ${rgba(theme.colors[color].base, 0.9)}`};
        color: ${chroma(theme.colors[color].base).darken(1).css()};
      `}

      ${display === "plain" &&
      css`
        background: transparent !important;
        padding: 0;
        color: ${theme.colors[color].base};
      `}

      ${!disabled &&
      css`
        &:hover {
          color: ${chroma(theme.colors[color].base).darken(1).css()};
          background-color: ${display === "solid"
            ? theme.colors[color].light
            : theme.colors[color].base};
          box-shadow: ${display === "ghost" &&
          `0 5px 20px ${rgba(theme.colors[color].base, 0.9)}`};
        }
      `}
    `}
`;

export default Button;
