import React, { forwardRef, HTMLAttributes, MutableRefObject } from "react";
import { ButtonEl } from "./styled";
import { ButtonProps } from "./styled";

const Button = forwardRef(
  (
    props: ButtonProps & HTMLAttributes<HTMLButtonElement>,
    ref:
      | ((instance: HTMLButtonElement | null) => void)
      | MutableRefObject<HTMLButtonElement | null>
      | null
  ) => {
    return <ButtonEl ref={ref} {...props} />;
  }
);

export default Button;
