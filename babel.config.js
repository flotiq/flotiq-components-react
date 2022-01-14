module.exports = (api) => {
    api.cache(true);

    const presets = ['@babel/preset-react'];
    const plugins = ['macros'];

    return {
        presets,
        plugins,
    };
};
