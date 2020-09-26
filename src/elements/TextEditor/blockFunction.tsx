import Draft, { DraftBlockType, RichUtils } from "draft-js";
import Immutable from "immutable";
import Text from "../Text";
import { useRecoilState } from "recoil";
import { textEditorState } from "../../store/textEditor.ctx";

export const useBlockStyle = () => {
  const [editorState, setEditorState] = useRecoilState(textEditorState);

  const blockRenderMap = Immutable.Map({
    "header-one": {
      element: Text.h1,
    },
    "header-two": {
      element: Text.h2,
    },
    "header-three": {
      element: Text.h3,
    },
    "header-four": {
      element: Text.h4,
    },
  });

  const extendedBlockRenderMap = Draft.DefaultDraftBlockRenderMap.merge(
    blockRenderMap
  );

  const toggleBlock = (type: DraftBlockType) => {
    setEditorState(RichUtils.toggleBlockType(editorState, type));
  };

  return { blockRenderMap, extendedBlockRenderMap, toggleBlock };
};
