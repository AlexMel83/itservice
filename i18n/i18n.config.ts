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
      services: {
        title: 'Our Services and Prices',
        popular: 'POPULAR',
        currency: 'UAH',
        order: 'Order',
        discount: '* Special discounts for veterans and IDPs',
        items: {
          tech_support: {
            title: 'Technical Support',
            price: 'from {value}',
            monthly: '',
            features: {
              '0': 'Website bug fixing',
              '1': 'Content updates',
              '2': 'Server configuration',
              '3': 'Basic SEO optimization',
              '4': 'Technical consultations',
            },
          },
          photo_360: {
            title: '360° Photography',
            price: 'from {value}',
            monthly: 'per panorama',
            features: {
              '0': 'Professional panoramic shooting',
              '1': 'Photo processing and optimization',
              '2': 'Website integration',
              '3': 'Social media publishing',
              '4': 'High-quality images',
            },
          },
          virtual_3d_tours: {
            title: 'Virtual 3D Tours',
            price: 'from {value}',
            monthly: '',
            features: {
              '0': 'Interactive tour creation',
              '1': 'Web optimization',
              '2': 'Website integration',
              '3': 'Google View publishing',
              '4': 'Branding and customization',
            },
          },
          business_card_site: {
            title: 'Business Card Website',
            price: 'from {value}',
            monthly: 'from {value} UAH/month',
            features: {
              '0': 'Responsive design',
              '1': 'Up to 5 pages',
              '2': 'Contact form',
              '3': 'Basic SEO optimization',
              '4': 'SSL certificate',
            },
          },
          wordpress: {
            title: 'WordPress',
            price: 'from {value}',
            monthly: 'from {value} UAH/month',
            features: {
              '0': 'Premium template selection',
              '1': 'Essential plugin installation',
              '2': 'Social media integration',
              '3': 'Advanced SEO optimization',
              '4': 'User training',
            },
          },
          custom_design: {
            title: 'Custom Design',
            price: 'from {value}',
            monthly: 'from {value} UAH/month',
            features: {
              '0': 'Unique design',
              '1': 'Unlimited pages',
              '2': 'CRM integration',
              '3': 'Full SEO optimization',
              '4': '24/7 support',
            },
          },
          full_stack_dev: {
            title: 'Full-stack Development',
            price: 'from {value}',
            monthly: 'from {value} UAH/month',
            features: {
              '0': 'Development with Nuxt3/Vue',
              '1': 'High-performance backend',
              '2': 'Complex integrations',
              '3': 'Scalable architecture',
              '4': 'Premium support',
            },
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
      footer: {
        contacts: 'Contact Information',
        address: '11 Medzhybizka St., Starokostiantyniv,',
        copyright: 'All rights reserved.',
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
      services: {
        title: 'Наші послуги та ціни',
        popular: 'ПОПУЛЯРНЕ',
        currency: 'грн',
        order: 'Замовити',
        discount: '* Спеціальні знижки для ветеранів та ВПО',
        items: {
          tech_support: {
            title: 'Технічна підтримка',
            price: 'від {value}',
            monthly: '',
            features: {
              '0': 'Виправлення помилок на сайті',
              '1': 'Оновлення контенту',
              '2': 'Налаштування серверів',
              '3': 'Базова SEO-оптимізація',
              '4': 'Технічні консультації',
            },
          },
          photo_360: {
            title: '360° Фотозйомка',
            price: 'від {value}',
            monthly: 'за панораму',
            features: {
              '0': 'Професійна панорамна зйомка',
              '1': 'Обробка та оптимізація фото',
              '2': 'Інтеграція на сайти',
              '3': 'Публікація в соцмережах',
              '4': 'Висока якість зображень',
            },
          },
          virtual_3d_tours: {
            title: 'Віртуальні 3D тури',
            price: 'від {value}',
            monthly: '',
            features: {
              '0': 'Створення інтерактивних турів',
              '1': 'Оптимізація для веб',
              '2': 'Інтеграція на сайти',
              '3': 'Публікація в Google View',
              '4': 'Брендування та кастомізація',
            },
          },
          business_card_site: {
            title: 'Сайт-візитка',
            price: 'від {value}',
            monthly: 'від {value} грн/міс',
            features: {
              '0': 'Адаптивний дизайн',
              '1': 'До 5 сторінок',
              '2': 'Форма зворотного зв’язку',
              '3': 'Базова SEO-оптимізація',
              '4': 'SSL-сертифікат',
            },
          },
          wordpress: {
            title: 'WordPress',
            price: 'від {value}',
            monthly: 'від {value} грн/міс',
            features: {
              '0': 'Преміум шаблон на вибір',
              '1': 'Установка необхідних плагінів',
              '2': 'Інтеграція з соцмережами',
              '3': 'Розширена SEO-оптимізація',
              '4': 'Навчання користування',
            },
          },
          custom_design: {
            title: 'Індивідуальний дизайн',
            price: 'від {value}',
            monthly: 'від {value} грн/міс',
            features: {
              '0': 'Унікальний дизайн',
              '1': 'Необмежена кількість сторінок',
              '2': 'Інтеграція з CRM',
              '3': 'Повна SEO-оптимізація',
              '4': 'Підтримка 24/7',
            },
          },
          full_stack_dev: {
            title: 'Full-stack розробка',
            price: 'від {value}',
            monthly: 'від {value} грн/міс',
            features: {
              '0': 'Розробка на Nuxt3/Vue',
              '1': 'Високопродуктивний backend',
              '2': 'Складні інтеграції',
              '3': 'Масштабована архітектура',
              '4': 'Преміум підтримка',
            },
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
      footer: {
        contacts: 'Контактна інформація',
        address: 'вул. Меджибижська, 11, Старокостянтинів,',
        copyright: 'Всі права захищені.',
      },
    },
  },
}));
