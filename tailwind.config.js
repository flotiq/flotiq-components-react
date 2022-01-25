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
    safelist: require('./src/tailwind.safelist'),
};
