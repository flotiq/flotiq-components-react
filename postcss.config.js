module.exports = (ctx) => ({
    map: ctx.options.map,
    parser: ctx.options.parser,
    plugins: {
        'postcss-import': {},
        tailwindcss: {},
        autoprefixer: {},
    },
});
