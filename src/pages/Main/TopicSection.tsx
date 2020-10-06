import React from "react";
import styled from "styled-components";
import Button from "../../elements/Button";
import Grid, { Flex } from "../../elements/Grid";
import Text from "../../elements/Text";
import { FiMoreVertical, FiPlus } from "react-icons/fi";

const TopicSection = () => {
  return (
    <Container>
      <Grid gap="l">
        <Flex align="center" justify="between">
          <Text.h1>Topics</Text.h1>
          <Button size="s">
            <FiPlus size={16} />
          </Button>
        </Flex>
        <Grid gap="m">
          <Flex gap="xs">
            <Button color="base" style={{ textAlign: "left", flex: 1 }}>
              Loop
            </Button>
            <Button color="base">
              <FiMoreVertical />
            </Button>
          </Flex>
        </Grid>
      </Grid>
    </Container>
  );
};

const Container = styled.div`
  padding: ${({ theme }) => theme.boxModel.l};
  margin-top: ${({ theme }) => theme.boxModel.xl};
  border: 1px solid ${({ theme }) => theme.colors.base};
  border-radius: ${({ theme }) => theme.boxModel.m};
  box-shadow: ${({ theme }) => theme.shadows.lightSmooth};
`;

export default TopicSection;
