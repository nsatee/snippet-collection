import React from "react";
import styled, { css } from "styled-components";
import rgba from "hex-to-rgba";

type BadgeProps = {
  children: React.ReactNode;
  text: null | string | number;
} & React.HTMLProps<HTMLDivElement>;

const BadgeDisplay = styled.small`
  ${({ theme }) => css`
    display: grid;
    place-items: center;
    height: 18px;
    min-width: 18px;
    background-color: ${theme.error.dark};
    color: ${theme.background.base};
    border-radius: 99999px;
    font-size: 10px;
    position: absolute;
    top: -10px;
    right: -10px;
    box-shadow: 0 0 10px ${rgba(theme.error.dark, 0.7)};
    padding: 4px;
  `}
`;

const BadgeContainer = styled.div`
  position: relative;
`;

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>((props, ref) => (
  <BadgeContainer ref={ref}>
    <BadgeDisplay>{props.text}</BadgeDisplay>
    {props.children}
  </BadgeContainer>
));

export default Badge;
