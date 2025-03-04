export default defineI18nConfig(() => ({
  fallbackLocale: 'uk',
  legacy: false,
  messages: {
    en: {
      menu: {
        home: 'Home',
        services: 'Services',
        prices: 'Prices',
        about: 'About',
        contacts: 'Contacts',
        blog: 'Blog',
      },
    },
    uk: {
      menu: {
        home: 'Головна',
        services: 'Послуги',
        prices: 'Ціни',
        about: 'Про нас',
        contacts: 'Контакти',
        blog: 'Блог',
      },
    },
  },
}));
