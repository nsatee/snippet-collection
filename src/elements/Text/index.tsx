import styled, { css } from "styled-components";
import { ColorType } from "../Theme/colors";

export type TextAlignType = "center" | "left" | "right";

type TextProps = {
  color?: ColorType;
  bold?: boolean;
  strike?: boolean;
  underline?: boolean;
  italic?: boolean;
  code?: boolean;
  align?: TextAlignType;
};

const CommonText = css<TextProps>`
  ${({ theme, color, align, italic, strike, underline, code }) => css`
    position: relative;
    color: ${color ? theme.colors[color] : "inherit"};
    text-align: ${align && align};
    font-style: ${italic && "italic"};
    box-shadow: ${code && "0 0 0 1px rgba(0, 0, 0, .2)"};
    font-family: ${code && "monospace"};
    border-radius: ${code && "4px"};
    padding: ${code && "0px 8px"};

    &:before {
      content: ${strike && '""'};
      position: absolute;
      display: block;
      height: 2px;
      width: 100%;
      top: 50%;
      left: 0;
      background: ${theme.colors.error};
    }

    &:after {
      content: ${underline && '""'};
      position: absolute;
      display: block;
      height: 2px;
      width: 100%;
      bottom: 0.1rem;
      left: 0;
      background: ${theme.colors.primary};
    }
  `}
`;

const Header = css<TextProps>`
  ${({ bold = true }) => css`
    ${CommonText}
    font-weight: ${bold && "bold"} !important;

    [placeholder] {
      font-weight: ${bold && "bold"} !important;
    }
  `}
`;

const Content = css<TextProps>`
  ${({ bold = false }) => css`
    ${CommonText}
    font-weight: ${bold ? "bold !important" : "normal"};
  `}
`;

const H1 = css<TextProps>`
  ${Header}
  font-size: 32px;
  line-height: 48px;
`;

const H2 = css<TextProps>`
  ${Header}
  font-size: 24px;
  line-height: 40px;
`;

const H3 = css<TextProps>`
  ${Header}
  font-size: 18px;
  line-height: 32px;
`;

const H4 = css<TextProps>`
  ${Header}
  font-size: 16px;
  line-height: 24px;
`;

const Body = css<TextProps>`
  ${Content}
  font-size: 16px;
  line-height: 24px;
`;

const Small = css<TextProps>`
  ${Content}
  font-size: 12px;
  line-height: 20px;
`;

const Label = css<TextProps>`
  ${Small}
  text-transform: upppercase;
`;

const Text = {
  h1: styled.h1`
    ${H1}
  `,
  h2: styled.h2`
    ${H2}
  `,
  h3: styled.h3`
    ${H3}
  `,
  h4: styled.h4`
    ${H4}
  `,
  p: styled.p`
    ${Body}
  `,
  small: styled.small`
    ${Small}
  `,
  label: styled.span`
    ${Label}
  `,
};

export default Text;
