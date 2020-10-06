import React, { useCallback } from "react";
import { Editor, Transforms } from "slate";
import { RenderElementProps, RenderLeafProps } from "slate-react";
import { TextAlignType } from "../Text";
import { BlockElement, LeafElement } from "./CustomRender";

export type MarkFormat = "bold" | "strike" | "underline" | "italic" | "code";
export type BlockFormat = "h1" | "h2" | "h3" | "h4" | "p";

export const useEditorLocal = () => {
  const renderElement = useCallback((props) => {
    return <BlockElement {...props} />;
  }, []) as ((props: RenderElementProps) => JSX.Element) | undefined;

  const renderLeaf = useCallback((props) => {
    return <LeafElement {...props} />;
  }, []) as ((props: RenderLeafProps) => JSX.Element) | undefined;

  const CustomEditor = {
    isMarkActive(editor: Editor, format: MarkFormat) {
      const marks = Editor.marks(editor);
      return marks ? marks[format] === true : false;
    },

    isAlignActive(editor: Editor, type: TextAlignType) {
      const [match] = Editor.nodes(editor, {
        match: (n) => n.align === type,
      });
      return !!match;
    },

    isHeaderBlockActive(editor: Editor, type: BlockFormat) {
      const [match] = Editor.nodes(editor, {
        match: (n) => n.type === type,
      });

      return !!match;
    },

    toggleMark(editor: Editor, format: MarkFormat) {
      const isActive = CustomEditor.isMarkActive(editor, format);
      if (isActive) {
        Editor.removeMark(editor, format);
      } else {
        Editor.addMark(editor, format, true);
      }
    },

    toggleAlign(editor: Editor, type: TextAlignType) {
      const isActive = CustomEditor.isAlignActive(editor, type);
      Transforms.setNodes(
        editor,
        { align: isActive ? "left" : type, as: "block" },
        { match: (n) => Editor.isBlock(editor, n) }
      );
    },

    toggleHeaderBlock(editor: Editor, type: BlockFormat) {
      const isActive = CustomEditor.isHeaderBlockActive(editor, type);
      Transforms.setNodes(
        editor,
        { type: isActive ? "p" : type, as: "block" },
        { match: (n) => Editor.isBlock(editor, n) }
      );
    },
  };
  return { renderElement, CustomEditor, renderLeaf };
};
