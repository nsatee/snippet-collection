import React, { FC, useEffect, useMemo, useState } from "react";
import { createEditor, Node } from "slate";
import { Slate, Editable, withReact, useSlate } from "slate-react";
import isHotkey from "is-hotkey";
import { BlockFormat, MarkFormat, useEditorLocal } from "./editorState";
import { withHistory } from "slate-history";
import ActionComponent from "./ActionComponent";
import { TextAlignType } from "../Text";

const NodeStarter = [
  {
    type: "p",
    children: [{ text: "" }],
    align: "left",
    as: "block",
  },
];

const TextEditor: FC<{
  value?: string | null;
  onChange?: (data: string) => void;
  readMode?: boolean;
  autoFocus?: boolean;
}> = ({ value, onChange = () => {}, readMode, autoFocus }) => {
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);
  const [data, setValue] = useState<Node[]>(
    Boolean(value) ? JSON.parse(value!) : NodeStarter
  );

  useEffect(() => {
    setValue(Boolean(value) ? JSON.parse(value!) : NodeStarter);
  }, [value, readMode]);

  return (
    <Slate
      editor={editor}
      value={data}
      onChange={(newValue) => {
        setValue(newValue);
        onChange(JSON.stringify(newValue));
      }}
    >
      {!readMode && <ActionComponent />}
      <EditorContainer readMode={readMode} autoFocus={autoFocus} />
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

const EditorContainer: FC<{ readMode?: boolean; autoFocus?: boolean }> = ({
  readMode,
  autoFocus,
}) => {
  const { renderElement, CustomEditor, renderLeaf } = useEditorLocal();
  const editor = useSlate();
  const editorInputStyle = !readMode
    ? {
        minHeight: 150,
        border: "1px solid rgba(0, 0, 0, 0.2)",
        borderRadius: 12,
        padding: 12,
      }
    : {};

  return (
    <Editable
      placeholder="Content goes here"
      renderElement={renderElement}
      renderLeaf={renderLeaf}
      readOnly={readMode}
      style={editorInputStyle}
      autoFocus={autoFocus}
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
