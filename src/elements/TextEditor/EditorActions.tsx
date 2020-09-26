import { DraftBlockType, DraftInlineStyleType } from "draft-js";
import React from "react";
import { useRecoilValue } from "recoil";
import {
  actionTemplateState,
  blockTypeState,
  inlineStyleState,
} from "../../store/textEditor.ctx";
import Button from "../Button";
import Grid, { Flex } from "../Grid";
import { useBlockStyle } from "./blockFunction";
import { useInlineStyle } from "./inlineStyleFunction";

const EditorActions = () => {
  const inlineStyle = useRecoilValue(inlineStyleState);
  const blockType = useRecoilValue(blockTypeState);
  const template = useRecoilValue(actionTemplateState);
  const { toggleBlock } = useBlockStyle();
  const inlineFunc = useInlineStyle();

  return (
    <Grid gap="s" col="2">
      <Flex gap="s">
        {Object.keys(template.inlineList).map((type) => (
          <Button
            square
            variant="bordered"
            onClick={() => inlineFunc(type as DraftInlineStyleType)}
            key={type}
            active={inlineStyle.has(type)}
          >
            {template.inlineList[type].label}
          </Button>
        ))}
      </Flex>
      <Flex gap="s">
        {Object.keys(template.blockList).map((type) => (
          <Button
            square
            variant="bordered"
            onClick={() => toggleBlock(type as DraftBlockType)}
            key={type}
            active={blockType === type}
          >
            {template.blockList[type].label}
          </Button>
        ))}
      </Flex>
    </Grid>
  );
};

export default EditorActions;
