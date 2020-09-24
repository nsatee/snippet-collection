import React from "react";
import { MainContainer } from "../../elements/Grid";
import CreateModal from "./CreateModal";
import MainContent from "./MainContent";
import Side from "./Side";

const Main: React.FC = () => {
  const [creatingSection, setCreatingSection] = React.useState(false);
  return (
    <MainContainer direction="row">
      <Side handleOpen={() => setCreatingSection(true)} />
      <MainContent />
      <CreateModal
        active={creatingSection}
        onClose={() => setCreatingSection(false)}
      />
    </MainContainer>
  );
};

export default Main;
