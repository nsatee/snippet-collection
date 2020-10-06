import React, { FC, useMemo, useState } from "react";
import { createEditor, Node } from "slate";
import { Slate, Editable, withReact, useSlate } from "slate-react";
import isHotkey from "is-hotkey";
import { BlockFormat, MarkFormat, useEditorLocal } from "./editorState";
import { withHistory } from "slate-history";
import ActionComponent from "./ActionComponent";
import { TextAlignType } from "../Text";

const TextEditor: FC = () => {
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);
  const [value, setValue] = useState<Node[]>([
    {
      type: "p",
      children: [{ text: "" }],
      align: "left",
      as: "block",
    },
  ]);

  return (
    <Slate
      editor={editor}
      value={value}
      onChange={(newValue) => setValue(newValue)}
    >
      <ActionComponent />
      <EditorContainer />
    </Slate>
  );
};

const MARK_HOTKEYS = {
  "mod+b": "bold",
  "mod+i": "italic",
  "mod+u": "underline",
  "mod+shift+x": "strike",
  "mod+'": "code",
} as { [key: string]: MarkFormat };

const ALIGN_HOTKEYS = {
  "mod+alt+l": "left",
  "mod+alt+c": "center",
  "mod+alt+r": "right",
} as { [key: string]: TextAlignType };

const HEADER_HOTKEYS = {
  "mod+alt+shift+1": "h1",
  "mod+alt+shift+2": "h2",
  "mod+alt+shift+3": "h3",
  "mod+alt+shift+4": "h4",
} as { [key: string]: BlockFormat };

const EditorContainer: FC<{}> = () => {
  const { renderElement, CustomEditor, renderLeaf } = useEditorLocal();
  const editor = useSlate();

  return (
    <Editable
      placeholder="Content goes here"
      renderElement={renderElement}
      renderLeaf={renderLeaf}
      style={{ flex: 1, width: "100%" }}
      onKeyDown={(event) => {
        if (isHotkey("tab", event.nativeEvent)) {
          event.preventDefault();
          return editor.insertText("\t");
        }

        for (const hotkey in MARK_HOTKEYS) {
          if (isHotkey(hotkey, event.nativeEvent)) {
            event.preventDefault();
            const mark = MARK_HOTKEYS[hotkey];
            CustomEditor.toggleMark(editor, mark);
          }
        }

        for (const hotkey in ALIGN_HOTKEYS) {
          if (isHotkey(hotkey, event.nativeEvent)) {
            event.preventDefault();
            const mark = ALIGN_HOTKEYS[hotkey];
            CustomEditor.toggleAlign(editor, mark);
          }
        }

        for (const hotkey in HEADER_HOTKEYS) {
          if (isHotkey(hotkey, event.nativeEvent)) {
            event.preventDefault();
            const mark = HEADER_HOTKEYS[hotkey];
            CustomEditor.toggleHeaderBlock(editor, mark);
          }
        }
      }}
    />
  );
};

export default TextEditor;
