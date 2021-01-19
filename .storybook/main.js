const path = require('path');
const rootDir = path.resolve(__dirname, '..');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
    stories: ['../src/**/story/*.tsx'],
    logLevel: 'debug',
    addons: [
        '@storybook/preset-scss',
        {
            name: '@storybook/addon-essentials',
            options: {
                backgrounds: false,
            },
        },
        '@storybook/addon-storysource',
        {
            name: '@storybook/addon-docs',
            options: {
                sourceLoaderOptions: {
                    parser: 'typescript',
                    injectStoryParameters: false,
                },
            },
        },
        '@storybook/addon-controls',
    ],
    typescript: {
        check: true,
        checkOptions: {},
        reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {
            shouldExtractLiteralValuesFromEnum: true,
            propFilter: (prop, component) => {
               if (prop.declarations !== undefined && prop.declarations.length > 0) {
                 const hasPropAdditionalDescription = prop.declarations.find((declaration) => {
                   return !declaration.fileName.includes("node_modules");
                 });

                 return Boolean(hasPropAdditionalDescription);
               }

               return true;
            },
        },
    },
    webpackFinal: async (config, options = { lessOptions: {} }) => {
        config.module.rules = [...config.module.rules];
        config.resolve = {
            ...config.resolve,
            extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
            alias: {
                ...config.resolve.alias,
                src: path.resolve(rootDir, 'src'),
            },
        };

        config.resolve.plugins.push(
            new TsconfigPathsPlugin({
                configFile: path.resolve(rootDir, 'tsconfig.json'),
            })
        );
        return config;
    },
};
