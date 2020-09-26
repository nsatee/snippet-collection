import React from "react";
import { EditorState } from "draft-js";
import { atom, selector } from "recoil";
import { BiStrikethrough } from "react-icons/bi";
import { FiBold, FiUnderline, FiItalic, FiCode } from "react-icons/fi";

export const textEditorState = atom({
  key: "textEditorState",
  default: EditorState.createEmpty(),
});

export const actionTemplateState = atom({
  key: "actionTemplateState",
  default: {
    inlineList: {
      BOLD: { label: <FiBold />, alt: "Bold" },
      ITALIC: { label: <FiItalic />, alt: "Italic" },
      UNDERLINE: { label: <FiUnderline />, alt: "Underline" },
      STRIKETHROUGH: {
        label: <BiStrikethrough />,
        alt: "Strike through",
      },
      CODE: { label: <FiCode />, alt: "Code" },
    } as { [key: string]: { label: JSX.Element; alt: string } },
    blockList: {
      unstyled: { label: "Unstyled", alt: "unstyled" },
      "header-one": { label: "Header 1", alt: "H1" },
      "header-two": { label: "Header 2", alt: "H2" },
      "header-three": { label: "Header 3", alt: "H3" },
      "header-four": { label: "Header 4", alt: "H4" },
      blockquote: { label: "Block quote", alt: "Quote" },
    } as { [key: string]: { label: string; alt: string } },
  },
});

export const selectorState = selector({
  key: "selectorState", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    return get(textEditorState).getSelection();
  },
});
export const inlineStyleState = selector({
  key: "inlineStyleState", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    return get(textEditorState).getCurrentInlineStyle();
  },
});

export const blockTypeState = selector({
  key: "blockTypeState", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    return get(textEditorState)
      .getCurrentContent()
      .getBlockForKey(get(selectorState).getStartKey())
      .getType();
  },
});
