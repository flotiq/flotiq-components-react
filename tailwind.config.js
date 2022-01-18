module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    presets: [
        require('./src/components/tailwind.preset'),
    ],
    theme: {
    },
    plugins: [],
    safelist: require('./src/components/tailwind.safelist'),
};
