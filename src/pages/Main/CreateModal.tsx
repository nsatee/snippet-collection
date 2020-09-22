import React from "react";
import Button from "../../components/Button";
import { Field, Input } from "../../components/Form";
import { Flex } from "../../components/Grid";
import Modal, { ModalFooter } from "../../components/Modal";

const CreateModal: React.FC<{ active: boolean; onClose: () => void }> = ({
  active,
  onClose,
}) => {
  return (
    <Modal title="Create section" active={active} onClose={onClose}>
      <Field>
        <Input autoFocus />
      </Field>
      <ModalFooter>
        <Flex justify="end" align="center" gap="m">
          <Button display="plain" color="error" onClick={onClose}>
            Cancel
          </Button>
          <Button dimension="s">Create</Button>
        </Flex>
      </ModalFooter>
    </Modal>
  );
};

export default CreateModal;
