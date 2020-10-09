import React, { useState } from "react";
import Button from "../../elements/Button";
import { Field, Input } from "../../elements/Form";
import { Flex } from "../../elements/Grid";
import Modal, { ModalFooter } from "../../elements/Modal";
import { gql, useMutation } from "@apollo/client";
import { GET_STORIES } from "./Side";

const CREATE_STORY = gql`
  mutation CreateStory($title: String!) {
    CreateStory(title: $title) {
      _id
      title
      description
    }
  }
`;

const CreateModal: React.FC<{ active: boolean; onClose: () => void }> = ({
  active,
  onClose,
}) => {
  const [createStory] = useMutation(CREATE_STORY, {
    update(cache, { data }) {
      const res = data?.CreateStory;
      const state = cache.readQuery({
        query: GET_STORIES,
      }) as { [key: string]: any };
      cache.writeQuery({
        query: GET_STORIES,
        data: {
          getStories: state?.getStories.concat(res),
        },
      });
    },
  });

  const [title, setTitle] = useState("");
  const handleClose = () => {
    onClose();
    setTitle("");
  };
  const handleSubmit = () => {
    createStory({ variables: { title } });
    handleClose();
  };
  return (
    <Modal title="Create section" active={active} onClose={onClose}>
      <Field>
        <Input
          value={title}
          autoFocus
          placeholder="Section title"
          onChange={(e) => setTitle(e.target.value)}
        />
      </Field>
      <ModalFooter>
        <Flex justify="end" align="center" gap="xs">
          <Button variant="plain" color="error" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>Create</Button>
        </Flex>
      </ModalFooter>
    </Modal>
  );
};

export default CreateModal;
