import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    schema: 'https://api.pawlytics.com/api/graphql',
    documents: ['src/**/*.{ts,tsx}'],
    generates: {
        './src/__generated__/': {
            preset: 'client',
            plugins: [],
            presetConfig: {
                gqlTagName: 'gql',
            },
            config: {
                documentMode: 'string',
            },
        },
        './src/__generated__/resolvers-types.ts': {
            plugins: [
                "typescript",
                "typescript-resolvers"
            ],
        }
    },
};

export default config;
