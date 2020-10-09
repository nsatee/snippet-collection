import React from "react";
import styled, { css } from "styled-components";
import { Flex } from "../../elements/Grid";
import TopicSection from "./TopicSection";
import { useRoute } from "wouter";
import { useQuery } from "@apollo/client";
import { useMainUI } from "../../UIController/MainController";
import { getStory } from "../../graphql/story";
import DescInput from "./DescInput";
import MainPlaceholder from "./MainPlaceholder";
import MainDesc from "./MainDesc";
import EmptyDesc from "./EmptyDesc";

const MainContent: React.FC = () => {
  const [match, params] = useRoute("/:section");
  const [, setUI] = useMainUI();
  const { data, loading } = useQuery(getStory, {
    variables: {
      id: params?.section || "",
    },
  });

  React.useLayoutEffect(() => {
    !loading &&
      setUI({
        descData: data?.getStory.description,
        isEmpty: data?.getStory.description === null,
        data: data?.getStory,
      });
  }, [data, loading, setUI]);

  return (
    <Content>
      {loading ? (
        <p>Loading...</p>
      ) : match ? (
        <Flex direction="column" style={{ height: "100%" }} gap="s">
          <MainDesc />
          <EmptyDesc />
          <DescInput />
          <TopicSection />
        </Flex>
      ) : (
        <MainPlaceholder />
      )}
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
