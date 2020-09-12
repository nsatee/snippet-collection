import styled, { css } from "styled-components";
import { ThemeName } from "../Theme/Color";
import rgba from "hex-to-rgba";

type ButtonType = {
  dimension?: "s" | "m" | "l";
  color?: ThemeName;
  display?: "bordered" | "solid" | "ghost";
  disabled?: boolean;
  active?: boolean;
} & React.HTMLProps<HTMLButtonElement>;

enum ButtonSize {
  s = 8,
  m = 12,
  l = 16,
}

const Button = styled.button<ButtonType>`
  ${({
    theme,
    dimension = "m",
    color = "primary",
    display = "solid",
    disabled,
    active,
  }) =>
    css`
      padding: ${ButtonSize[dimension]}px ${ButtonSize[dimension] * 2}px;
      background-color: ${display === "solid"
        ? theme[color].base
        : "transparent"};
      font-size: ${ButtonSize[dimension] + 4}px;
      border: 3px solid
        ${(["bordered", "solid"] as typeof display[]).includes(display)
          ? theme[color].base
          : "transparent"};
      color: ${theme[color].dark};
      font-weight: bold;
      cursor: ${!disabled && "pointer"};
      border-radius: 12px;
      box-shadow: ${display === "solid" &&
      `0 5px 20px ${rgba(theme[color].base, 0.9)}`};
      transition: 0.1s;
      opacity: ${disabled && 0.4};

      ${active &&
      css`
        background-color: ${display === "solid"
          ? theme[color].light
          : theme[color].base};
        box-shadow: ${display === "ghost" &&
        `0 5px 20px ${rgba(theme[color].base, 0.9)}`};
      `}

      ${!disabled &&
      css`
        &:hover {
          background-color: ${display === "solid"
            ? theme[color].light
            : theme[color].base};
          box-shadow: ${display === "ghost" &&
          `0 5px 20px ${rgba(theme[color].base, 0.9)}`};
        }

        &:active {
          background-color: ${display === "solid"
            ? theme[color].base
            : "transparent"};
        }
      `}
    `}
`;

export default Button;
