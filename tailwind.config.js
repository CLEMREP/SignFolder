const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Public Sans', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: {
                    main: '#3366FF',
                    lighter: '#D6E4FF',
                    light: '#84A9FF',
                    darker: '#091A7A',
                    dark: '#1939B7',
                },
                success: {
                    main: '#36B37E',
                    lighter: '#D8FBDE',
                    light: '#86E8AB',
                    darker: '#0A5554',
                    dark: '#1B806A',
                },
                warning: {
                    main: '#FFAB00',
                    lighter: '#FFF5CC',
                    light: '#FFD666',
                    darker: '#7A4100',
                    dark: '#B76E00',
                },
                error: {
                    main: '#FF5630',
                    lighter: '#FFE9D5',
                    light: '#FFAC82',
                    darker: '#7A0916',
                    dark: '#B71D18',
                },
                background: {
                    light: {
                        default: '#F9FAFB',
                        paper: '#FFFFFF',
                        neutral: '#F4F6F8',
                    },
                    dark: {
                        default: '#161C24',
                        paper: '#212B36',
                        neutral: '#919EAB29',
                    },
                },
                text: {
                    light: {
                        primary: '#212B36',
                        secondary: '#637381',
                        disabled: '#919EAB',
                    },
                    dark: {
                        primary: '#FFFFFF',
                        secondary: '#919EAB',
                        disabled: '#637381',
                    }
                }
            }
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
