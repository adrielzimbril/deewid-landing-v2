/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{html,js}',
        'node_modules/@frostui/tailwindcss/dist/*.js'
    ],
    darkMode: ['class'],
    theme: {
        screens: {
			DEFAULT: '390px',
            'sm': '576px',
            'md': '768px',
            'lg': '992px',
            'xl': '1170px',
            '2xl': '1440px',
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '1rem',
                md: '1rem',
                lg: '1rem',
                xl: '3rem',
                '2xl': '8rem',
            },
        },
        fontFamily: {
            'body': ['Manrope', 'Inter', 'sans-serif'],
        },
        borderRadius: {
            'none': '0',
            DEFAULT: '.675rem',
            'sm': '.25rem',
            'md': '.375rem',
            'lg': '.5rem',
            'full': '9999px',
            'xl': '.925rem',
        },
        extend: {
            colors: {
                primary: '#083C2F',
                secondary: '#C9F269',
                accent: '#C9F269',
                colorCodGray: '#0A0A0A',
                transparent: 'transparent',
                current: 'currentColor',
                white: '#FFFFFF',
                light: '#F5F8FA',
                green: '#00FF00',
                slate: {
                    base: '#5A5D79',
                    50: '#F4F4F6',
                    100: '#E7E8EC',
                    200: '#C4C5CF',
                    300: '#A1A2B3',
                    400: '#7D7F96',
                    500: '#5A5D79',
                    600: '#363A5D',
                    700: '#131740',
                    800: '#101436',
                    900: '#0D102D',
                },
            },
        },
    },

    plugins: [
        require('@frostui/tailwindcss/plugin'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
    ],
}