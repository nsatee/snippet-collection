import React from "react";
import { RenderElementProps, RenderLeafProps } from "slate-react";
import TextEl, { TextAlignType } from "../Text";

type TextType = keyof typeof TextEl;
export const BlockElement = (props: RenderElementProps) => {
  return (
    <div>
      {React.createElement(TextEl[props.element.type as TextType], {
        ...props.attributes,
        align: props.element.align as TextAlignType,
        children: props.children,
      })}
    </div>
  );
};

export const LeafElement = (props: RenderLeafProps) => {
  return (
    <span>
      {React.createElement(TextEl.p, {
        ...props.attributes,
        ...props.leaf,
        as: "span",
        children: props.children,
        style: { fontSize: "inherit", fontWeight: "inherit" },
      })}
    </span>
  );
};
