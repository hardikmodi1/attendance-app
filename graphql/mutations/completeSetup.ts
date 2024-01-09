import { gql } from "@apollo/client";
import { schoolFragment } from "../fragments/school";

export const completeSetup = gql`
  mutation completeSetup($completeSetupInput: CompleteSetupInput!) {
    completeSetup(completeSetupInput: $completeSetupInput) {
      school{
        ...School
      }
      accessToken
      refreshToken
    }
    ${schoolFragment}
  }
`;
