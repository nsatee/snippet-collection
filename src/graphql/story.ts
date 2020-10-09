import { gql } from "@apollo/client";

export const getStory = gql`
  query getStory($id: ID!) {
    getStory(id: $id) {
      _id
      title
      description
    }
  }
`;

export const UPDATE_STORY = gql`
  mutation updateStory($title: String, $id: ID!, $description: String) {
    updateStory(title: $title, description: $description, id: $id) {
      _id
      title
      description
    }
  }
`;

export const DELETE_STORY = gql`
  mutation deleteStory($id: ID!) {
    deleteStory(id: $id) {
      _id
      status
      message
    }
  }
`;
