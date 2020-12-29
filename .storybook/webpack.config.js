module.exports = async ({ config }) => {
    const fileLoaderRule = config.module.rules.find(({ test }) => new RegExp(test || '').test('.svg'));
    fileLoaderRule.exclude = /\.svg$/;
    config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });
    return config;
};
