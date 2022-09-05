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
    safelist: require('./src/tailwind.safelist'),
};
