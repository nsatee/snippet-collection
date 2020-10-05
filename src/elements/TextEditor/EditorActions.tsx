import { DraftInlineStyleType } from "draft-js";
import React from "react";
import { useRecoilValue } from "recoil";
import {
  actionTemplateState,
  inlineStyleState,
} from "../../store/textEditor.ctx";
import Button from "../Button";
import Dropdown, { List } from "../Dropdown";
import Grid, { Flex } from "../Grid";
import { useBlockStyle } from "./blockFunction";
import { useInlineStyle } from "./inlineStyleFunction";

const EditorActions = () => {
  const inlineStyle = useRecoilValue(inlineStyleState);
  const template = useRecoilValue(actionTemplateState);
  const { toggleBlock } = useBlockStyle();
  const inlineFunc = useInlineStyle();

  return (
    <React.Fragment>
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
        <Dropdown
          options={Object.keys(template.blockList).map((option) => ({
            value: option,
            label: template.blockList[option].label,
          }))}
          onChange={(option) => toggleBlock(option?.value!)}
          active={{ value: "unstyled", label: "Unstyled" }}
        >
          {({ data, initProps, active }) => (
            <List full active={active} color="base" {...initProps}>
              {data.label}
            </List>
          )}
        </Dropdown>
      </Grid>
    </React.Fragment>
  );
};

export default EditorActions;
