/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n    query OrganizationPets {\n        organization_pets2(\n            filter: {\n                organization_pet_status: ADOPTABLE\n            }\n            organization_id: \"\"\n        ) {\n            entities {\n                id\n                status\n                adoption_fee {\n                    amount\n                    currency\n                }\n                pet {\n                    name\n                    status\n                    status_details\n                    description\n                    species\n                    breed_cat\n                    mixed\n                    estimated_birth_date\n                    special_needs\n                    distinguishing_marks\n                    weight_lbs\n                    youtube_video_url\n                    gender\n                    siblings {\n                        id\n                        name\n                    }\n                    images {\n                        url\n                    }\n                }\n            }\n        }\n    }\n": typeof types.OrganizationPetsDocument,
};
const documents: Documents = {
    "\n    query OrganizationPets {\n        organization_pets2(\n            filter: {\n                organization_pet_status: ADOPTABLE\n            }\n            organization_id: \"\"\n        ) {\n            entities {\n                id\n                status\n                adoption_fee {\n                    amount\n                    currency\n                }\n                pet {\n                    name\n                    status\n                    status_details\n                    description\n                    species\n                    breed_cat\n                    mixed\n                    estimated_birth_date\n                    special_needs\n                    distinguishing_marks\n                    weight_lbs\n                    youtube_video_url\n                    gender\n                    siblings {\n                        id\n                        name\n                    }\n                    images {\n                        url\n                    }\n                }\n            }\n        }\n    }\n": types.OrganizationPetsDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query OrganizationPets {\n        organization_pets2(\n            filter: {\n                organization_pet_status: ADOPTABLE\n            }\n            organization_id: \"\"\n        ) {\n            entities {\n                id\n                status\n                adoption_fee {\n                    amount\n                    currency\n                }\n                pet {\n                    name\n                    status\n                    status_details\n                    description\n                    species\n                    breed_cat\n                    mixed\n                    estimated_birth_date\n                    special_needs\n                    distinguishing_marks\n                    weight_lbs\n                    youtube_video_url\n                    gender\n                    siblings {\n                        id\n                        name\n                    }\n                    images {\n                        url\n                    }\n                }\n            }\n        }\n    }\n"): (typeof documents)["\n    query OrganizationPets {\n        organization_pets2(\n            filter: {\n                organization_pet_status: ADOPTABLE\n            }\n            organization_id: \"\"\n        ) {\n            entities {\n                id\n                status\n                adoption_fee {\n                    amount\n                    currency\n                }\n                pet {\n                    name\n                    status\n                    status_details\n                    description\n                    species\n                    breed_cat\n                    mixed\n                    estimated_birth_date\n                    special_needs\n                    distinguishing_marks\n                    weight_lbs\n                    youtube_video_url\n                    gender\n                    siblings {\n                        id\n                        name\n                    }\n                    images {\n                        url\n                    }\n                }\n            }\n        }\n    }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;