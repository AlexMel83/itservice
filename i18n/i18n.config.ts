export default defineI18nConfig(() => ({
  fallbackLocale: 'uk',
  legacy: false,
  messages: {
    en: {
      menu: {
        home: 'Home',
        technologies: 'Technologies',
        services: 'Services',
        about: 'About Us',
        colaborations: 'Collaborations',
        contacts: 'Contacts',
      },
      home: {
        title: 'IT solutions for your business',
        description:
          'Professional website development, 360° photography, and virtual tours. Special conditions for veterans and IDPs.',
        orderButton: 'Order a service',
        services: {
          webDevelopment: {
            title: 'Website Development',
            description: 'Creating modern web solutions for your business',
          },
          photo360: {
            title: '360° Photography',
            description: 'Professional panoramic photography of premises and territories',
          },
          virtualTours: {
            title: 'Virtual Tours',
            description: 'Creating interactive 3D tours for your locations',
          },
        },
      },
    },
    uk: {
      menu: {
        home: 'Головна',
        technologies: 'Технології',
        services: 'Послуги',
        about: 'Про нас',
        colaborations: 'Співпраця',
        contacts: 'Контакти',
      },
      home: {
        title: 'IT-рішення для вашого бізнесу',
        description:
          'Професійна розробка сайтів, 360° зйомка та створення віртуальних турів. Особливі умови для ветеранів та ВПО.',
        orderButton: 'Замовити послугу',
        services: {
          webDevelopment: {
            title: 'Розробка сайтів',
            description: 'Створення сучасних веб-рішень для вашого бізнесу',
          },
          photo360: {
            title: '360° зйомка',
            description: 'Професійна панорамна фотозйомка приміщень та територій',
          },
          virtualTours: {
            title: 'Віртуальні тури',
            description: 'Створення інтерактивних 3D-турів по вашим об’єктам',
          },
        },
      },
    },
  },
}));
