import React, { forwardRef, HTMLAttributes, MutableRefObject } from "react";
import { ButtonEl } from "./styled";
import Text from "../Text";
import { ButtonProps } from "./styled";
import styled, { css } from "styled-components";
import { Flex } from "../Grid";

const Button = forwardRef(
  (
    props: ButtonProps & HTMLAttributes<HTMLButtonElement>,
    ref:
      | ((instance: HTMLButtonElement | null) => void)
      | MutableRefObject<HTMLButtonElement | null>
      | null
  ) => {
    return (
      <ButtonEl ref={ref} {...props}>
        {typeof props.children === "string" ? (
          props.size === "s" ? (
            <Text.small bold>{props.children}</Text.small>
          ) : (
            <Text.h4>{props.children}</Text.h4>
          )
        ) : (
          props.children
        )}
      </ButtonEl>
    );
  }
);

export const GroupButton = styled(Flex)`
  ${({ theme }) => css`
    background: ${theme.colors.base};
    border-radius: ${theme.boxModel.m};

    ${ButtonEl} {
      border: 0;
    }
  `}
`;

export default Button;
