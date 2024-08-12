"use strict";
/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['./src/**/*.{html,js,ts,jsx,tsx,svelte}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#e4f8e7',
                    100: '#c4eeca',
                    200: '#a1e3aa',
                    300: '#7ed889',
                    400: '#61ce6e',
                    500: '#45c354', // Original color
                    600: '#3eb94d',
                    700: '#34ad43',
                    800: '#2aa139',
                    900: '#188126',
                },
                secondary: {
                    50: '#f2f2f2',
                    100: '#e6e6e6',
                    200: '#cccccc',
                    300: '#b3b3b3',
                    400: '#999999',
                    500: '#808080', // Original color
                    600: '#737373',
                    700: '#666666',
                    800: '#4d4d4d',
                    900: '#333333',
                },
                tertiary: {
                    50: '#eef6f7',
                    100: '#d3e9ec',
                    200: '#b6dadf',
                    300: '#99cad2',
                    400: '#80bcc8',
                    500: '#67aebf', // Original color
                    600: '#5da6b8',
                    700: '#509cae',
                    800: '#4492a4',
                    900: '#2d8093',
                },
                success: {
                    50: '#e6f9e8',
                    100: '#c4eec9',
                    200: '#a1e3a7',
                    300: '#7ed886',
                    400: '#61ce6b',
                    500: '#45c352', // Original color
                    600: '#3eb94b',
                    700: '#34ad41',
                    800: '#2aa137',
                    900: '#188123',
                },
                warning: {
                    50: '#fff7e6',
                    100: '#ffecc1',
                    200: '#ffdf97',
                    300: '#ffd26d',
                    400: '#ffc947',
                    500: '#ffbf21', // Original color
                    600: '#e6ac1e',
                    700: '#cc991b',
                    800: '#b38618',
                    900: '#805b12',
                },
                error: {
                    50: '#fdecea',
                    100: '#f9d1d0',
                    200: '#f4b2b0',
                    300: '#ee9290',
                    400: '#e87676',
                    500: '#e25a5b', // Original color
                    600: '#d6534f',
                    700: '#c84a44',
                    800: '#ba4139',
                    900: '#a43129',
                },
            },
            backgroundColor: {
                'surface-50': 'var(--surface-50)',
                'surface-100': 'var(--surface-100)',
                'surface-200': 'var(--surface-200)',
                'surface-300': 'var(--surface-300)',
                'surface-400': 'var(--surface-400)',
                'surface-500': 'var(--surface-500)',
                'surface-600': 'var(--surface-600)',
                'surface-700': 'var(--surface-700)',
                'surface-800': 'var(--surface-800)',
                'surface-900': 'var(--surface-900)',
            },
            textColor: {
                'surface-50': 'var(--surface-50)',
                'surface-100': 'var(--surface-100)',
                'surface-200': 'var(--surface-200)',
                'surface-300': 'var(--surface-300)',
                'surface-400': 'var(--surface-400)',
                'surface-500': 'var(--surface-500)',
                'surface-600': 'var(--surface-600)',
                'surface-700': 'var(--surface-700)',
                'surface-800': 'var(--surface-800)',
                'surface-900': 'var(--surface-900)',
            },
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
            },
        },
    },
    variants: {
        extend: {
            backgroundColor: ['dark'],
            textColor: ['dark'],
        },
    },
    plugins: [],
};
