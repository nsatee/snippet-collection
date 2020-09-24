import React, { forwardRef, HTMLAttributes, MutableRefObject } from "react";
import { ButtonEl } from "./styled";
import Text from "../Text";
import { ButtonProps } from "./styled";

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
        {props.size === "s" ? (
          <Text.small>{props.children}</Text.small>
        ) : (
          <Text.h4>{props.children}</Text.h4>
        )}
      </ButtonEl>
    );
  }
);

export default Button;
