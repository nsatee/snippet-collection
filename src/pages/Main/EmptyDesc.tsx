import React from "react";
import Card from "../../elements/Card";
import Grid from "../../elements/Grid";
import { ReactComponent as NewDocHero } from "../../assets/newDoc.svg";
import Text from "../../elements/Text";
import Button from "../../elements/Button";
import { useMainUI } from "../../UIController/MainController";

const EmptyDesc: React.FC = () => {
  const [ui, setUI] = useMainUI();
  return ui.descData === null && !ui.editing ? (
    <Grid gap="l" center>
      <Card background="none" width="300">
        <NewDocHero width="100%" height="300" />
      </Card>
      <Text.p align="center">
        You can add some description, so it's more clear what this section is
        all about
      </Text.p>
      <Button onClick={() => setUI({ editing: true })}>
        Create description
      </Button>
    </Grid>
  ) : null;
};

export default EmptyDesc;
