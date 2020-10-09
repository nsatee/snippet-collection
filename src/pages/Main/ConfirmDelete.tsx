import { useMutation } from "@apollo/client";
import React from "react";
import { useLocation, useRoute } from "wouter";
import Button from "../../elements/Button";
import { Flex } from "../../elements/Grid";
import Modal, { ModalFooter } from "../../elements/Modal";
import Text from "../../elements/Text";
import { DELETE_STORY } from "../../graphql/story";
import { useMainUI } from "../../UIController/MainController";
import { GET_STORIES } from "./Side";

const ConfirmDelete: React.FC = () => {
  const [, params] = useRoute("/:section");
  const [ui, setUI] = useMainUI();
  const [, setLocation] = useLocation();
  const [deleteStory] = useMutation(DELETE_STORY, {
    update(cache, { data }) {
      const res = data?.deleteStory;
      const state = cache.readQuery({
        query: GET_STORIES,
      }) as { [key: string]: any };

      cache.writeQuery({
        query: GET_STORIES,
        data: {
          getStories: state.getStories.filter(
            (item: { _id: string }) => item._id !== res._id
          ),
        },
      });
    },
  });
  const deleteSection = () => {
    deleteStory({
      variables: {
        id: params!.section,
      },
    });
    setLocation("/");
    setUI({ deletingActive: false });
  };

  return (
    <Modal
      title="Delete section"
      active={ui.deletingActive}
      onClose={() => setUI({ deletingActive: false })}
    >
      <Text.p>
        Are you sure to delete <strong>this</strong>
      </Text.p>
      <ModalFooter>
        <Flex justify="end" gap="s" align="center">
          <Button color="base" onClick={() => setUI({ deletingActive: false })}>
            Cancel
          </Button>
          <Button color="error" onClick={deleteSection}>
            Confirm
          </Button>
        </Flex>
      </ModalFooter>
    </Modal>
  );
};

export default ConfirmDelete;
