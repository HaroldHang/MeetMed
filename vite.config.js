import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
const path = require('path')

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/scss/style.scss','resources/js/app.jsx', 'plugins/themify-icons/themify-icons.cssplugins/themify-icons/themify-icons.css'],
            refresh: true,
        }),
        react(),
    ],
    resolve: {
        alias: {
            '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
        }
    },

});
