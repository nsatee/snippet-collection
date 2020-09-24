import React from "react";
import Button from "../../elements/Button";
import { Field, Input } from "../../elements/Form";
import { Flex } from "../../elements/Grid";
import Modal, { ModalFooter } from "../../elements/Modal";

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
          <Button variant="plain" color="error" onClick={onClose}>
            Cancel
          </Button>
          <Button size="s">Create</Button>
        </Flex>
      </ModalFooter>
    </Modal>
  );
};

export default CreateModal;
