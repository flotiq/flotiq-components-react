module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    presets: [
        require('./src/tailwind.preset'),
    ],
    theme: {
    },
    plugins: [],
    prefix: 'fq-',
    important: true,
    corePlugins: {
        preflight: false,
    },
    safelist: require('./src/tailwind.safelist'),
};
