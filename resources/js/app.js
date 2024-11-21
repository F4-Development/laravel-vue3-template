import './bootstrap';
import '../css/app.css';

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';
import PrimeVue from 'primevue/config';
import CustomPreset from '@/Themes/CustomPreset.js';
import { createI18n } from 'vue-i18n';
import ruMessages from '../lang/ru_RU.json';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
} else {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.toggle('dark', prefersDark);
}

const messages = {
    'ru-RU': ruMessages,
};
let defaultLocale = navigator.language || navigator.userLanguage;

const i18n = createI18n({
    locale: localStorage.getItem('lang') || defaultLocale,
    fallbackLocale: localStorage.getItem('lang') || defaultLocale,
    messages
});

createInertiaApp({
    title: (title) => `${appName} - ${title}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .use(PrimeVue, {
                theme: {
                    preset: CustomPreset.getPreset(),
                    options: {
                        darkModeSelector: '.dark',
                    }
                }
            })
            .use(i18n)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
