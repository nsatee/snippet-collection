import React from "react";
import { useSlate } from "slate-react";
import Button, { GroupButton } from "../Button";
import { Flex } from "../Grid";
import { useEditorLocal } from "./editorState";
import {
  BsTextCenter,
  BsTextLeft,
  BsTextRight,
  BsTypeH1,
  BsTypeH2,
  BsTypeH3,
  BsTypeItalic,
  BsTypeStrikethrough,
  BsTypeUnderline,
  BsTypeBold,
  BsCode,
} from "react-icons/bs";

const ActionComponent = () => {
  const { CustomEditor } = useEditorLocal();
  const editor = useSlate();
  const cmdObjectRender = [
    [
      {
        label: <BsTypeBold />,
        cmd: () => CustomEditor.toggleMark(editor, "bold"),
        alt: "Bold",
        active: CustomEditor.isMarkActive(editor, "bold"),
      },
      {
        label: <BsTypeUnderline />,
        cmd: () => CustomEditor.toggleMark(editor, "underline"),
        alt: "Underline",
        active: CustomEditor.isMarkActive(editor, "underline"),
      },
      {
        label: <BsTypeItalic />,
        cmd: () => CustomEditor.toggleMark(editor, "italic"),
        alt: "Italic",
        active: CustomEditor.isMarkActive(editor, "italic"),
      },
      {
        label: <BsTypeStrikethrough />,
        cmd: () => CustomEditor.toggleMark(editor, "strike"),
        alt: "Strikethrough",
        active: CustomEditor.isMarkActive(editor, "strike"),
      },
      {
        label: <BsCode />,
        cmd: () => CustomEditor.toggleMark(editor, "code"),
        alt: "Code line",
        active: CustomEditor.isMarkActive(editor, "code"),
      },
    ],
    [
      {
        label: <BsTypeH1 />,
        cmd: () => CustomEditor.toggleHeaderBlock(editor, "h1"),
        alt: "Header 1",
        active: CustomEditor.isHeaderBlockActive(editor, "h1"),
      },
      {
        label: <BsTypeH2 />,
        cmd: () => CustomEditor.toggleHeaderBlock(editor, "h2"),
        alt: "Header 2",
        active: CustomEditor.isHeaderBlockActive(editor, "h2"),
      },
      {
        label: <BsTypeH3 />,
        cmd: () => CustomEditor.toggleHeaderBlock(editor, "h3"),
        alt: "Header 3",
        active: CustomEditor.isHeaderBlockActive(editor, "h3"),
      },
    ],
    [
      {
        label: <BsTextLeft />,
        cmd: () => CustomEditor.toggleAlign(editor, "left"),
        alt: "Align left",
        active: CustomEditor.isAlignActive(editor, "left"),
      },
      {
        label: <BsTextCenter />,
        cmd: () => CustomEditor.toggleAlign(editor, "center"),
        alt: "Align center",
        active: CustomEditor.isAlignActive(editor, "center"),
      },
      {
        label: <BsTextRight />,
        cmd: () => CustomEditor.toggleAlign(editor, "right"),
        alt: "Align right",
        active: CustomEditor.isAlignActive(editor, "right"),
      },
    ],
  ];

  return (
    <Flex wrapping justify="end">
      {cmdObjectRender.map((list, index) => {
        return (
          <GroupButton style={{ margin: 4 }} key={index}>
            <Flex key={index}>
              {list.map((btn) => (
                <Button
                  active={btn.active}
                  key={btn.alt}
                  square
                  variant="bordered"
                  onClick={() => btn.cmd()}
                >
                  {btn.label}
                </Button>
              ))}
            </Flex>
          </GroupButton>
        );
      })}
    </Flex>
  );
};

export default ActionComponent;
