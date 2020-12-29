export const parameters = {};

export const globalTypes = {
    theme: {
        name: 'Theme',
        description: 'Global theme for components',
        defaultValue: 'light',
        toolbar: {
            items: [
                { value: 'light', title: 'light', icon: 'circlehollow' },
                { value: 'dark', title: 'dark', icon: 'circle' },
            ],
        },
    },
    locale: {
        name: 'Locale',
        description: 'Internationalization locale',
        defaultValue: 'en',
        toolbar: {
            icon: 'globe',
            items: [
                { value: 'en', right: '🇺🇸', title: 'English' },
                { value: 'ru', right: 'ru', title: 'Русский' },
            ],
        },
    },
    market: {
        name: 'Market',
        description: 'Current market',
        defaultValue: 'BTC/USD',
        toolbar: {
            icon: 'credit',
            items: [
                { value: 'BTC/USD', title: 'BTC/USD' },
                { value: 'ETH/BTC', title: 'ETH/BTC' },
                { value: 'ETH/USD', title: 'ETH/USD' },
            ],
        },
    },
};
