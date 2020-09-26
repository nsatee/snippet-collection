import { DraftInlineStyleType, RichUtils } from "draft-js";
import { textEditorState } from "../../store/textEditor.ctx";
import { useRecoilState } from "recoil";

export const useInlineStyle = () => {
  const [editorState, setEditorState] = useRecoilState(textEditorState);
  const inlineFunc = (type: DraftInlineStyleType) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, type));
  };
  return inlineFunc;
};
