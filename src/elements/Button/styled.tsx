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
  square?: boolean;
  noHovered?: boolean;
};

const solidButton = css<ButtonProps>`
  ${({
    theme,
    color = "primary",
    size = "m",
    full,
    active,
    square,
    noHovered,
  }) => css`
    display: ${square ? "grid" : "auto"};
    place-items: ${square && "center"};
    background-color: ${theme.colors[color]};
    border: 1px solid ${theme.colors[color]};
    padding: ${
      !square
        ? `calc(${theme.boxModel[size]}) calc(${theme.boxModel[size]} * 2)`
        : 0
    };
    font-size: calc(${theme.boxModel[size]} * 2);
    color: ${textColor(theme.colors[color])};
    width: ${full ? "100%" : square && "42px"};
    height: ${square && "42px"};
    border-radius: ${theme.boxModel.m};
    outline: 0;
    cursor: pointer;
    transition: 0.1s;
    display: ${square && "grid"},
    place-items: ${square && "center"},
    ${
      active &&
      css`
         {
          background-color: ${setColor(theme.colors[color]).darken[2]};
          border: 1px solid ${setColor(theme.colors[color]).darken[2]};
        }
      `
    }

    &:hover {
      ${
        !noHovered &&
        css`
          background-color: ${setColor(theme.colors[color]).darken[2]};
          border: 1px solid ${setColor(theme.colors[color]).darken[2]};
        `
      }
    }
  `}
`;

const boardedButton = css<ButtonProps>`
  ${({ theme, color = "primary", active }) => css`
    ${solidButton}
    background-color: ${active ? theme.colors[color] : "transparent"};
    color: ${active ? textColor(theme.colors[color]) : theme.colors[color]};

    &:hover {
      background-color: ${theme.colors[color]};
      color: ${textColor(theme.colors[color])};
    }
  `}
`;

const plainButton = css<ButtonProps>`
  ${({ theme, color = "primary", active }) => css`
    ${solidButton}
    background-color: transparent;
    color: ${({ theme }) => theme.colors[color]};
    border-color: transparent;

    ${active &&
    css`
      background: ${setColor(theme.colors[color]).brighten[8]};
      border-color: ${setColor(theme.colors[color]).brighten[8]};
    `}

    &:hover {
      background: ${setColor(theme.colors[color]).brighten[8]};
      border-color: ${setColor(theme.colors[color]).brighten[8]};
    }
  `}
`;

const ghostButton = css<ButtonProps>`
  ${({ theme, color = "primary", active }) => css`
    ${plainButton}
    background-color: transparent;
    border-color: ${theme.colors[color]};

    ${active &&
    css`
      color: ${textColor(theme.colors[color])};
      background: ${theme.colors[color]};
      border-color: ${theme.colors[color]};
    `}

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
      case "bordered":
        return boardedButton;
      default:
        return solidButton;
    }
  }}
`;
