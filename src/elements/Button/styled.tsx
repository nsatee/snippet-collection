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
    border: 2px solid ${theme.colors[color]};
    padding: calc(${theme.boxModel[size]} * 1.5)
      calc(${theme.boxModel[size]} * 2);
    font-size: calc(${theme.boxModel[size]} * 2);
    color: ${textColor(theme.colors[color])};
    width: ${full && 100}%;
    border-radius: ${theme.boxModel.m};
    outline: 0;
    cursor: pointer;

    &:hover {
      background: ${setColor(theme.colors[color]).darken[2]};
      border: 2px solid ${setColor(theme.colors[color]).darken[2]};
    }
  `}
`;

export const ButtonEl = styled.button<ButtonProps>`
  ${({ variant }) => {
    switch (variant) {
      default:
        return solidButton;
    }
  }}
`;
