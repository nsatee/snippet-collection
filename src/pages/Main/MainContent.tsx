import React, { FC, useState } from "react";
import styled, { css } from "styled-components";
import Button from "../../elements/Button";
import Grid, { Flex } from "../../elements/Grid";
import Text from "../../elements/Text";
import Card from "../../elements/Card";

import { ReactComponent as NewDocHero } from "../../assets/newDoc.svg";
import TextEditor from "../../elements/TextEditor";
import TopicSection from "./TopicSection";

const EmptyDesc: FC = () => {
  return (
    <Grid gap="l" center>
      <Card background="none" width="300">
        <NewDocHero width="100%" height="300" />
      </Card>
      <Text.p align="center">
        You can add some description, so it's more clear what this section is
        all about
      </Text.p>
      <Button>Create description</Button>
    </Grid>
  );
};
const MainContent: FC = () => {
  const [isEmpty] = useState(false);
  return (
    <Content>
      <Flex direction="column" style={{ height: "100%" }} gap="s">
        <Flex align="center" gap="s">
          <Text.h1>JavaScript</Text.h1>
          <Button size="s" variant="ghost">
            Edit
          </Button>
        </Flex>
        {isEmpty && <EmptyDesc />}
        <TextEditor />
        <Flex gap="s" justify="end">
          <Button>Cancel</Button>
          <Button color="success">Save</Button>
        </Flex>
        <TopicSection />
      </Flex>
    </Content>
  );
};

export const Content = styled.main`
  ${({ theme }) => css`
    height: 100vh;
    overflow-x: scroll;
    display: block;
    position: relative;
    flex: 1;
    background-color: ${theme.colors.background};
    padding: ${theme.boxModel.xl};
  `}
`;

export default MainContent;
