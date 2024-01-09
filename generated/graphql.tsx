import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTimeISO: { input: any; output: any; }
};

export type CompleteSetupInput = {
  headName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type CompleteSetupOutput = {
  __typename?: 'CompleteSetupOutput';
  accessToken: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
  school: School;
};

export type Mutation = {
  __typename?: 'Mutation';
  completeSetup: CompleteSetupOutput;
  registerSchool: School;
};


export type MutationCompleteSetupArgs = {
  completeSetupInput: CompleteSetupInput;
};


export type MutationRegisterSchoolArgs = {
  registerInput: RegisterInput;
};

export type Query = {
  __typename?: 'Query';
  hello: Scalars['String']['output'];
};

export type RegisterInput = {
  address: Scalars['String']['input'];
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type School = {
  __typename?: 'School';
  address: Scalars['String']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  email: Scalars['String']['output'];
  headName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  setupComplete: Scalars['Boolean']['output'];
};

export type SchoolFragment = { __typename?: 'School', id: string, createdAt: any, setupComplete: boolean, email: string, name: string, address: string, headName: string };

export type CompleteSetupMutationVariables = Exact<{
  completeSetupInput: CompleteSetupInput;
}>;


export type CompleteSetupMutation = { __typename?: 'Mutation', completeSetup: { __typename?: 'CompleteSetupOutput', accessToken: string, refreshToken: string, school: { __typename?: 'School', id: string, createdAt: any, setupComplete: boolean, email: string, name: string, address: string, headName: string } } };

export type RegisterSchoolMutationVariables = Exact<{
  registerInput: RegisterInput;
}>;


export type RegisterSchoolMutation = { __typename?: 'Mutation', registerSchool: { __typename?: 'School', id: string, createdAt: any, setupComplete: boolean, email: string, name: string, address: string, headName: string } };

export const SchoolFragmentDoc = gql`
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
export const CompleteSetupDocument = gql`
    mutation completeSetup($completeSetupInput: CompleteSetupInput!) {
  completeSetup(completeSetupInput: $completeSetupInput) {
    school {
      ...School
    }
    accessToken
    refreshToken
  }
}
    ${SchoolFragmentDoc}`;
export type CompleteSetupMutationFn = Apollo.MutationFunction<CompleteSetupMutation, CompleteSetupMutationVariables>;

/**
 * __useCompleteSetupMutation__
 *
 * To run a mutation, you first call `useCompleteSetupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCompleteSetupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [completeSetupMutation, { data, loading, error }] = useCompleteSetupMutation({
 *   variables: {
 *      completeSetupInput: // value for 'completeSetupInput'
 *   },
 * });
 */
export function useCompleteSetupMutation(baseOptions?: Apollo.MutationHookOptions<CompleteSetupMutation, CompleteSetupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CompleteSetupMutation, CompleteSetupMutationVariables>(CompleteSetupDocument, options);
      }
export type CompleteSetupMutationHookResult = ReturnType<typeof useCompleteSetupMutation>;
export type CompleteSetupMutationResult = Apollo.MutationResult<CompleteSetupMutation>;
export type CompleteSetupMutationOptions = Apollo.BaseMutationOptions<CompleteSetupMutation, CompleteSetupMutationVariables>;
export const RegisterSchoolDocument = gql`
    mutation registerSchool($registerInput: RegisterInput!) {
  registerSchool(registerInput: $registerInput) {
    ...School
  }
}
    ${SchoolFragmentDoc}`;
export type RegisterSchoolMutationFn = Apollo.MutationFunction<RegisterSchoolMutation, RegisterSchoolMutationVariables>;

/**
 * __useRegisterSchoolMutation__
 *
 * To run a mutation, you first call `useRegisterSchoolMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterSchoolMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerSchoolMutation, { data, loading, error }] = useRegisterSchoolMutation({
 *   variables: {
 *      registerInput: // value for 'registerInput'
 *   },
 * });
 */
export function useRegisterSchoolMutation(baseOptions?: Apollo.MutationHookOptions<RegisterSchoolMutation, RegisterSchoolMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterSchoolMutation, RegisterSchoolMutationVariables>(RegisterSchoolDocument, options);
      }
export type RegisterSchoolMutationHookResult = ReturnType<typeof useRegisterSchoolMutation>;
export type RegisterSchoolMutationResult = Apollo.MutationResult<RegisterSchoolMutation>;
export type RegisterSchoolMutationOptions = Apollo.BaseMutationOptions<RegisterSchoolMutation, RegisterSchoolMutationVariables>;