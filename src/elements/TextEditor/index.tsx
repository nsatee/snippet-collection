import React, { FC } from "react";
import { Editor } from "draft-js";
import { EditorContainer } from "./styled";
import { useBlockStyle } from "./blockFunction";
import { useRecoilState } from "recoil";
import { textEditorState } from "../../store/textEditor.ctx";
import { useKeys } from "./keysFunction";
import EditorActions from "./EditorActions";

const TextEditor: FC = () => {
  const [editorState, setEditorState] = useRecoilState(textEditorState);
  const { extendedBlockRenderMap } = useBlockStyle();
  const { handleKeyCommand, keyBindingFunction } = useKeys();

  return (
    <React.Fragment>
      <EditorActions />
      <EditorContainer padding="none" type="ghost">
        <Editor
          editorState={editorState}
          onChange={setEditorState}
          handleKeyCommand={handleKeyCommand}
          keyBindingFn={keyBindingFunction}
          blockRenderMap={extendedBlockRenderMap}
          placeholder="Editing content..."
        />
      </EditorContainer>
    </React.Fragment>
  );
};

export default TextEditor;
