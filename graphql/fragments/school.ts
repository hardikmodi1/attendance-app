import { gql } from "@apollo/client";

export const schoolFragment = gql`
  fragment School on School {
    id
    createdAt
    setupComplete
    email
    name
    address
    headName
  }
`;
