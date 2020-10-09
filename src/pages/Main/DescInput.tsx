import React from "react";
import { useMutation } from "@apollo/client";
import { useRoute } from "wouter";
import { useMainUI } from "../../UIController/MainController";
import TextEditor from "../../elements/TextEditor";
import { Flex } from "../../elements/Grid";
import Button from "../../elements/Button";
import { UPDATE_STORY } from "../../graphql/story";

const DescInput: React.FC = () => {
  const [, params] = useRoute("/:section");
  const [ui, setUI] = useMainUI();
  const [updateStory] = useMutation(UPDATE_STORY);

  const handleSaveDesc = () => {
    updateStory({
      variables: {
        id: params!.section,
        title: ui.headerRef?.current?.innerText,
        description: ui.descData,
      },
    });
  };

  return (
    <div>
      {(ui.descData! || ui.editing) && (
        <TextEditor
          readMode={!ui.editing}
          value={ui.data?.description}
          onChange={(e) => {
            setUI({
              changed: true,
              descData: e,
            });
          }}
        />
      )}
      {ui.editing && (
        <Flex gap="s" justify="end" style={{ marginTop: 12 }}>
          <Button
            onClick={() => {
              setUI({
                descData: ui.data?.description,
                editing: false,
              });
            }}
          >
            Cancel
          </Button>
          <Button
            color="success"
            onClick={handleSaveDesc}
            disabled={!ui.changed!}
          >
            {ui.changed === null || ui.changed ? "Save" : "Saved"}
          </Button>
        </Flex>
      )}
    </div>
  );
};

export default DescInput;
