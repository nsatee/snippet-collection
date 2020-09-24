import styled, { css } from "styled-components";
import { setColor, textColor } from "../Theme";
import { ColorType } from "../Theme/colors";
import { BoxModelType } from "../Theme/spacing";
type ButtonStyleType = "bordered" | "solid" | "ghost" | "plain";

export type ButtonProps = {
  size?: BoxModelType;
  color?: ColorType;
  variant?: ButtonStyleType;
  disabled?: boolean;
  active?: boolean;
  full?: boolean;
};

const solidButton = css<ButtonProps>`
  ${({ theme, color = "primary", size = "m", full }) => css`
    background: ${theme.colors[color]};
    border: 1px solid ${theme.colors[color]};
    padding: calc(${theme.boxModel[size]}) calc(${theme.boxModel[size]} * 2);
    font-size: calc(${theme.boxModel[size]} * 2);
    color: ${textColor(theme.colors[color])};
    width: ${full && 100}%;
    border-radius: ${theme.boxModel.m};
    outline: 0;
    cursor: pointer;
    transition: 0.1s;

    &:hover {
      background: ${setColor(theme.colors[color]).darken[2]};
      border: 1px solid ${setColor(theme.colors[color]).darken[2]};
    }
  `}
`;

const plainButton = css<ButtonProps>`
  ${({ theme, color = "primary" }) => css`
    ${solidButton}
    background-color: transparent;
    color: ${({ theme }) => theme.colors[color]};
    border-color: transparent;

    &:hover {
      background: ${setColor(theme.colors[color]).brighten[8]};
      border-color: ${setColor(theme.colors[color]).brighten[8]};
    }
  `}
`;

const ghostButton = css<ButtonProps>`
  ${({ theme, color = "primary" }) => css`
    ${plainButton}
    background-color: transparent;
    border-color: ${theme.colors[color]};

    &:hover {
      color: ${textColor(theme.colors[color])};
      background: ${theme.colors[color]};
      border-color: ${theme.colors[color]};
    }
  `}
`;

export const ButtonEl = styled.button<ButtonProps>`
  ${({ variant }) => {
    switch (variant) {
      case "plain":
        return plainButton;
      case "ghost":
        return ghostButton;
      default:
        return solidButton;
    }
  }}
`;
