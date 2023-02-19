import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  encode: Url;
};


export type MutationEncodeArgs = {
  url: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getUrls: Array<Url>;
};

export type Url = {
  __typename?: 'Url';
  shortUrl: Scalars['String'];
  uuid: Scalars['String'];
};

export type EncodeMutationVariables = Exact<{
  url: Scalars['String'];
}>;


export type EncodeMutation = { __typename?: 'Mutation', encode: { __typename?: 'Url', uuid: string, shortUrl: string } };


export const EncodeDocument = gql`
    mutation Encode($url: String!) {
  encode(url: $url) {
    uuid
    shortUrl
  }
}
    `;
export type EncodeMutationFn = Apollo.MutationFunction<EncodeMutation, EncodeMutationVariables>;

/**
 * __useEncodeMutation__
 *
 * To run a mutation, you first call `useEncodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEncodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [encodeMutation, { data, loading, error }] = useEncodeMutation({
 *   variables: {
 *      url: // value for 'url'
 *   },
 * });
 */
export function useEncodeMutation(baseOptions?: Apollo.MutationHookOptions<EncodeMutation, EncodeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EncodeMutation, EncodeMutationVariables>(EncodeDocument, options);
      }
export type EncodeMutationHookResult = ReturnType<typeof useEncodeMutation>;
export type EncodeMutationResult = Apollo.MutationResult<EncodeMutation>;
export type EncodeMutationOptions = Apollo.BaseMutationOptions<EncodeMutation, EncodeMutationVariables>;