import React from "react";
import { useRecoilState } from "recoil";
import {
  DraftEditorCommand,
  DraftHandleValue,
  EditorState,
  getDefaultKeyBinding,
  KeyBindingUtil,
  RichUtils,
} from "draft-js";
import { textEditorState } from "../../store/textEditor.ctx";

export const useKeys = () => {
  const [, setEditorState] = useRecoilState(textEditorState);
  const handleKeyCommand = (
    command: DraftEditorCommand,
    editorState: EditorState
  ): DraftHandleValue => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (command === "strikethrough") {
      RichUtils.toggleInlineStyle(editorState, "STRIKETHROUGH");
    }
    if (command === "code") {
      setEditorState(RichUtils.toggleCode(editorState));
    }
    if (newState) {
      setEditorState(newState);
      return "handled";
    }
    return "not-handled";
  };

  const keyBindingFunction = (event: React.KeyboardEvent<{}>) => {
    if (
      KeyBindingUtil.hasCommandModifier(event) &&
      (event.ctrlKey || event.metaKey) &&
      event.key === "/"
    ) {
      return "strikethrough";
    }

    if (
      KeyBindingUtil.hasCommandModifier(event) &&
      (event.ctrlKey || event.metaKey) &&
      event.key === "\\"
    ) {
      return "code";
    }

    return getDefaultKeyBinding(event);
  };

  return { handleKeyCommand, keyBindingFunction };
};
