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

export type DecodeResponse = {
  __typename?: 'DecodeResponse';
  errors?: Maybe<Array<FieldError>>;
  originalUrl?: Maybe<Scalars['String']>;
};

export type EncodeResponse = {
  __typename?: 'EncodeResponse';
  errors?: Maybe<Array<FieldError>>;
  url?: Maybe<Url>;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  decode: DecodeResponse;
  encode: EncodeResponse;
};


export type MutationDecodeArgs = {
  url: Scalars['String'];
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
  originalUrl: Scalars['String'];
  shortUrl: Scalars['String'];
  uuid: Scalars['String'];
};

export type EncodeResponseFragment = { __typename?: 'EncodeResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, url?: { __typename?: 'Url', uuid: string, shortUrl: string, originalUrl: string } | null };

export type RegularErrorFragment = { __typename?: 'FieldError', field: string, message: string };

export type UrlSnippetFragment = { __typename?: 'Url', uuid: string, shortUrl: string, originalUrl: string };

export type DecodeMutationVariables = Exact<{
  url: Scalars['String'];
}>;


export type DecodeMutation = { __typename?: 'Mutation', decode: { __typename?: 'DecodeResponse', originalUrl?: string | null } };

export type EncodeMutationVariables = Exact<{
  url: Scalars['String'];
}>;


export type EncodeMutation = { __typename?: 'Mutation', encode: { __typename?: 'EncodeResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, url?: { __typename?: 'Url', uuid: string, shortUrl: string, originalUrl: string } | null } };

export type GetUrlsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUrlsQuery = { __typename?: 'Query', getUrls: Array<{ __typename?: 'Url', uuid: string, shortUrl: string, originalUrl: string }> };

export const RegularErrorFragmentDoc = gql`
    fragment RegularError on FieldError {
  field
  message
}
    `;
export const UrlSnippetFragmentDoc = gql`
    fragment UrlSnippet on Url {
  uuid
  shortUrl
  originalUrl
}
    `;
export const EncodeResponseFragmentDoc = gql`
    fragment EncodeResponse on EncodeResponse {
  errors {
    ...RegularError
  }
  url {
    ...UrlSnippet
  }
}
    ${RegularErrorFragmentDoc}
${UrlSnippetFragmentDoc}`;
export const DecodeDocument = gql`
    mutation Decode($url: String!) {
  decode(url: $url) {
    originalUrl
  }
}
    `;
export type DecodeMutationFn = Apollo.MutationFunction<DecodeMutation, DecodeMutationVariables>;

/**
 * __useDecodeMutation__
 *
 * To run a mutation, you first call `useDecodeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDecodeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [decodeMutation, { data, loading, error }] = useDecodeMutation({
 *   variables: {
 *      url: // value for 'url'
 *   },
 * });
 */
export function useDecodeMutation(baseOptions?: Apollo.MutationHookOptions<DecodeMutation, DecodeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DecodeMutation, DecodeMutationVariables>(DecodeDocument, options);
      }
export type DecodeMutationHookResult = ReturnType<typeof useDecodeMutation>;
export type DecodeMutationResult = Apollo.MutationResult<DecodeMutation>;
export type DecodeMutationOptions = Apollo.BaseMutationOptions<DecodeMutation, DecodeMutationVariables>;
export const EncodeDocument = gql`
    mutation Encode($url: String!) {
  encode(url: $url) {
    ...EncodeResponse
  }
}
    ${EncodeResponseFragmentDoc}`;
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
export const GetUrlsDocument = gql`
    query GetUrls {
  getUrls {
    ...UrlSnippet
  }
}
    ${UrlSnippetFragmentDoc}`;

/**
 * __useGetUrlsQuery__
 *
 * To run a query within a React component, call `useGetUrlsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUrlsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUrlsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUrlsQuery(baseOptions?: Apollo.QueryHookOptions<GetUrlsQuery, GetUrlsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUrlsQuery, GetUrlsQueryVariables>(GetUrlsDocument, options);
      }
export function useGetUrlsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUrlsQuery, GetUrlsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUrlsQuery, GetUrlsQueryVariables>(GetUrlsDocument, options);
        }
export type GetUrlsQueryHookResult = ReturnType<typeof useGetUrlsQuery>;
export type GetUrlsLazyQueryHookResult = ReturnType<typeof useGetUrlsLazyQuery>;
export type GetUrlsQueryResult = Apollo.QueryResult<GetUrlsQuery, GetUrlsQueryVariables>;