import { gql } from "@apollo/client";
import { schoolFragment } from "../fragments/school";

export const registerSchoolMutation = gql`
  mutation registerSchool($registerInput: RegisterInput!) {
    registerSchool(registerInput: $registerInput) {
      ...School
    }
    ${schoolFragment}
  }
`;
