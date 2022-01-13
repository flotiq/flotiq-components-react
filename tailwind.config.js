// eslint-disable-next-line import/no-extraneous-dependencies
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: [
                    'Inter',
                    ...defaultTheme.fontFamily.sans,
                ],
            },
            colors: {
                primary: {
                    DEFAULT: '#0083FC',
                    50: '#B5DBFF',
                    100: '#A0D1FF',
                    200: '#77BEFF',
                    300: '#4FAAFF',
                    400: '#2697FF',
                    500: '#0083FC',
                    600: '#015bd7',
                    700: '#00498C',
                    800: '#002C54',
                    900: '#000E1C',
                },
            },
        },
    },
    plugins: [],
};
