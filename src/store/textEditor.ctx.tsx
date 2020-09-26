import { EditorState } from "draft-js";
import { atom, selector } from "recoil";

export const textEditorState = atom({
  key: "textEditorState",
  default: EditorState.createEmpty(),
});

export const actionTemplateState = atom({
  key: "actionTemplateState",
  default: {
    inlineList: {
      BOLD: { label: "B", alt: "Bold" },
      ITALIC: { label: "I", alt: "Italic" },
      UNDERLINE: { label: "U", alt: "Underline" },
      STRIKETHROUGH: { label: "-", alt: "Strike through" },
      CODE: { label: "<>", alt: "Code" },
    } as { [key: string]: { label: string; alt: string } },
    blockList: {
      "header-one": { label: "h1", alt: "Bold" },
      "header-two": { label: "h2", alt: "Italic" },
      "header-three": { label: "h3", alt: "Italic" },
      "header-four": { label: "h4", alt: "Italic" },
      blockquote: { label: '"', alt: "Underline" },
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
