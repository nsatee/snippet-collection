import chroma from "chroma-js";
import React from "react";
import styled, { css } from "styled-components";
import Button from "../../elements/Button";
import { setColor } from "../../elements/Theme";
import Grid from "../../elements/Grid";
import { useQuery, gql } from "@apollo/client";
import { Link } from "wouter";
import initMainUI, { useMainUI } from "../../UIController/MainController";
import { useRoute } from "wouter";

export const GET_STORIES = gql`
  query getStories {
    getStories {
      _id
      description
      title
    }
  }
`;

const Side: React.FC<{ handleOpen: () => void }> = ({ handleOpen }) => {
  const [match, params] = useRoute("/:section");
  const [, setUI] = useMainUI();
  const { loading, error, data } = useQuery(GET_STORIES);
  if (error) return <h1>It's error</h1>;
  return (
    <Container>
      <Button
        full
        onClick={handleOpen}
        style={{ marginBottom: 36 }}
        color="success"
      >
        Create collection
      </Button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Grid gap="s">
          {data.getStories.map(
            (data: {
              _id: string;
              description: string | null;
              title: string;
            }) => {
              return (
                <Link
                  href={`/${data._id}`}
                  key={data._id}
                  onClick={() => setUI(initMainUI)}
                >
                  <Button
                    full
                    color={
                      match
                        ? params?.section === data._id
                          ? "secondary"
                          : "primary"
                        : "primary"
                    }
                  >
                    {data.title}
                  </Button>
                </Link>
              );
            }
          )}
        </Grid>
      )}
    </Container>
  );
};

const Container = styled.aside`
  ${({ theme }) => css`
    min-width: 300px;
    max-width: 400px;
    width: 30vw;
    height: 100vh;
    overflow-y: scroll;
    position: sticky;
    top: 0;
    padding: ${theme.boxModel.xxl};
    background-color: ${theme.colors.base};
    border-right: 1px solid ${setColor(theme.colors.base).darken[1]};

    &::-webkit-scrollbar {
      width: 5px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
      background: transparent;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: ${chroma(theme.colors.gray).alpha(0.3).css()};
      border-radius: 999px;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background: ${chroma(theme.colors.gray).alpha(0.4).css()};
    }
  `}
`;

export default Side;
