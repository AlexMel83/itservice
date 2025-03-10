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
        collaborations: 'Collaborations',
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
      about: {
        title: 'About Our Team',
        description1:
          'IT.Starkon is your local technology partner in the Khmelnytskyi region. Based in Starokostiantyniv, we provide a personalized approach and constant communication with every client.',
        description2:
          'Our mission is to create modern, accessible, and effective digital solutions that work for your business 24/7. We don’t just build websites - we create reliable online platforms for your success.',
        description3:
          'We are always available for consultations and support, ready to quickly adapt design, content, and functionality to your needs. We integrate cutting-edge technologies to keep your project one step ahead.',
      },
      collaboration: {
        title: 'We Invite You to Collaborate',
        description:
          'We are looking for talented professionals in Starokostiantyniv to build a strong local IT community and implement impactful social projects',
        lookingFor: {
          title: 'Who We Are Looking For:',
          items: {
            designers: '• UI/UX Designers',
            qa: '• QA Engineers',
            pm: '• Project Managers',
            developers: '• Frontend/Backend Developers',
          },
        },
        offering: {
          title: 'What We Offer:',
          items: {
            share: '• Equity participation in projects',
            social: '• Socially significant projects',
            team: '• Team development for faster implementation',
            portfolio: '• Showcase projects for your portfolio',
          },
        },
        contactText: 'Send your proposals and suggestions to:',
      },
    },
    uk: {
      menu: {
        home: 'Головна',
        technologies: 'Технології',
        services: 'Послуги',
        about: 'Про нас',
        collaborations: 'Співпраця',
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
      about: {
        title: 'Про нашу команду',
        description1:
          "IT.Starkon - ваш локальний партнер у світі технологій в Хмельницькому районі. Базуючись у Старокостянтинові, ми забезпечуємо персональний підхід та постійний зв'язок з кожним клієнтом.",
        description2:
          'Наша місія - створювати сучасні, доступні та ефективні цифрові рішення, які працюють на ваш бізнес 24/7. Ми не просто розробляємо сайти - ми будуємо надійні онлайн-платформи для вашого успіху.',
        description3:
          "Ми завжди на зв'язку для консультацій та підтримки, готові оперативно вносити зміни в дизайн, контент та функціонал відповідно до ваших потреб. Інтегруємо найсучасніші технології, щоб ваш проект завжди був на крок попереду.",
      },
      collaboration: {
        title: 'Запрошуємо до співпраці',
        description:
          'Шукаємо талановитих фахівців у Старокостянтинові для створення потужної локальної ІТ-спільноти та реалізації важливих соціальних проектів',
        lookingFor: {
          title: 'Кого ми шукаємо:',
          items: {
            designers: '• UI/UX Дизайнерів',
            qa: '• QA інженерів',
            pm: '• Project Managers',
            developers: '• Frontend/Backend розробників',
          },
        },
        offering: {
          title: 'Що ми пропонуємо:',
          items: {
            share: '• Дольову участь у проектах',
            social: '• Соціально важливі проекти',
            team: '• Командну розробку для швидшої реалізації',
            portfolio: '• Зразкові проекти для портфоліо',
          },
        },
        contactText: 'Надсилайте ваші пропозиції та побажання на адресу:',
      },
    },
  },
}));
