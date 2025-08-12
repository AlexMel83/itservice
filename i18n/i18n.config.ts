export default defineI18nConfig(() => ({
  locale: 'uk',
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
        title: 'Virtual 3D Tours and IT Solutions for Business in Starokostiantyniv',
        description: [
          'Innovative 3D tours, 360° photography and creation of modern websites in Starokostyantyniv.',
          'Special offers for regular customers and veterans.',
        ],
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
        form: {
          modalTitleOrder: 'Order a service',
          modalTitleSubmitted: 'Request submitted',
          name: 'Your name',
          phone: 'Your phone',
          phone_error: 'Enter a valid phone number',
          email: 'Your e-mail',
          email_error: 'Enter a valid e-mail',
          message: 'Message',
          submit: 'Submit request',
          successMessage: 'Thank you for your request! We will contact you shortly.',
          errorMessage: 'An error occurred while sending the request. Please try again.',
          services: {
            title: 'Service of interest',
            placeholder: 'Select a service',
            development: 'Website development',
            photo360: '360° Photography',
            virtualTours: 'Virtual Tours',
            other: 'Other',
            error: 'Please select a service',
          },
        },
      },
      technologies: {
        title: 'Technologies We Use',
        categories: {
          frontend: 'Frontend',
          backend: 'Backend',
          cloud: 'Cloud Services',
          tools: 'Tools & Payments',
        },
        frontend: {
          react_next: {
            name: 'React/Next.js',
            description: 'Powerful frameworks for building SEO-optimized applications',
          },
          vue_nuxt: {
            name: 'Vue.js/Nuxt',
            description: 'Progressive frameworks for rapid development',
          },
          pwa: {
            name: 'PWA',
            description: 'Progressive web apps with offline support',
          },
          tailwindcss: {
            name: 'TailwindCSS',
            description: 'Flexible styling system for responsive design',
          },
          typescript: {
            name: 'TypeScript',
            description: 'Reliable and safe development',
          },
          leaflet: {
            name: 'Leaflet',
            description: 'Interactive maps and geolocation',
          },
        },
        backend: {
          nodejs: {
            name: 'Node.js',
            description: 'Fast and scalable server-side runtime',
          },
          nestjs: {
            name: 'NestJS',
            description: 'Progressive Node.js framework for efficient server-side applications',
          },
          postgresql: {
            name: 'PostgreSQL',
            description: 'Reliable database for complex projects',
          },
          mysql: {
            name: 'MySQL',
            description: 'Popular relational database for web applications',
          },
          swagger: {
            name: 'Swagger',
            description: 'Automated API documentation and testing',
          },
          docker: {
            name: 'Docker',
            description: 'Containerization for stable deployment',
          },
        },
        cloud: {
          aws: {
            name: 'AWS',
            description: 'Scalable cloud infrastructure',
          },
          azure: {
            name: 'Azure',
            description: 'Enterprise cloud solutions from Microsoft',
          },
          google_cloud: {
            name: 'Google Cloud',
            description: 'Innovative cloud technologies and workspace',
          },
          oracle_cloud: {
            name: 'Oracle Cloud',
            description: 'Reliable enterprise solutions',
          },
          cloudflare: {
            name: 'Cloudflare',
            description: 'Protection and performance optimization for websites',
          },
        },
        tools: {
          wordpress: {
            name: 'WordPress',
            description: 'Flexible content management system',
          },
          git: {
            name: 'Git',
            description: 'Version control and team collaboration',
          },
          figma: {
            name: 'Figma',
            description: 'Modern design and prototyping',
          },
          liqpay: {
            name: 'LiqPay',
            description: 'Secure payments for Ukrainian businesses',
          },
          oauth2: {
            name: 'OAuth 2.0',
            description: 'Secure authorization and authentication',
          },
          eslint_prettier: {
            name: 'ESLint/Prettier',
            description: 'Code standardization and formatting',
          },
        },
      },
      services: {
        title: 'Our Services and Prices',
        popular: 'POPULAR',
        currency: 'UAH',
        order: 'Order',
        discount: '* Special discounts for veterans and IDPs',
        modal: {
          title: 'Order a service',
          name: 'Name',
          email: 'Email',
          phone: 'Phone',
          message: 'Message',
          submit: 'Submit',
          close: 'Close',
          success: 'Thank you for your order! We will contact you shortly.',
          error: 'Error while sending.',
          validation: {
            required: 'This field is required',
            email: 'Enter a valid email',
            phone: 'Enter a valid phone number',
          },
        },
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
        title: 'Віртуальні 3D тури та IT-рішення для бізнесу в Старокостянтинові',
        description: [
          'Інноваційні 3D-тури, 360° зйомка та створення сучасних сайтів у Старокостянтинові.',
          'Спеціальні пропозиції для постійних клієнтів і ветеранів.',
        ],
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
        form: {
          modalTitleOrder: 'Замовити послугу',
          modalTitleSubmitted: 'Заявка відправлена',
          name: 'Ваше ім’я',
          phone: 'Ваш телефон',
          phone_error: 'Введіть коректний номер телефону',
          email: 'Ваше e-mail',
          email_error: 'Введіть коректний e-mail',
          message: 'Повідомлення',
          submit: 'Надіслати заявку',
          successMessage: 'Дякуємо за заявку! Ми зв’яжемося з вами найближчим часом.',
          errorMessage: 'Під час відправлення заявки виникла помилка. Спробуйте ще раз.',
          services: {
            title: 'Послуга, що цікавить',
            placeholder: 'Оберіть послугу',
            development: 'Розробка сайту',
            photo360: '360° Фотозйомка',
            virtualTours: 'Віртуальні тури',
            other: 'Інше',
            error: 'Будь ласка, оберіть послугу',
          },
        },
      },
      technologies: {
        title: 'Технології, які ми використовуємо',
        categories: {
          frontend: 'Frontend',
          backend: 'Backend',
          cloud: 'Хмарні сервіси',
          tools: 'Інструменти та платежі',
        },
        frontend: {
          react_next: {
            name: 'React/Next.js',
            description: 'Потужні фреймворки для створення SEO-оптимізованих додатків',
          },
          vue_nuxt: {
            name: 'Vue.js/Nuxt',
            description: 'Прогресивні фреймворки для швидкої розробки',
          },
          pwa: {
            name: 'PWA',
            description: 'Прогресивні веб-додатки з офлайн підтримкою',
          },
          tailwindcss: {
            name: 'TailwindCSS',
            description: 'Гнучка система стилізації для адаптивного дизайну',
          },
          typescript: {
            name: 'TypeScript',
            description: 'Надійна та безпечна розробка',
          },
          leaflet: {
            name: 'Leaflet',
            description: 'Інтерактивні карти та геолокація',
          },
        },
        backend: {
          nodejs: {
            name: 'Node.js',
            description: 'Швидкий та масштабований серверний runtime',
          },
          nestjs: {
            name: 'NestJS',
            description: 'Прогресивний Node.js фреймворк для побудови ефективних серверних додатків',
          },
          postgresql: {
            name: 'PostgreSQL',
            description: 'Надійна база даних для складних проектів',
          },
          mysql: {
            name: 'MySQL',
            description: 'Популярна реляційна база даних для веб-додатків',
          },
          swagger: {
            name: 'Swagger',
            description: 'Автоматична документація API та тестування',
          },
          docker: {
            name: 'Docker',
            description: 'Контейнеризація для стабільного розгортання',
          },
        },
        cloud: {
          aws: {
            name: 'AWS',
            description: 'Масштабована хмарна інфраструктура',
          },
          azure: {
            name: 'Azure',
            description: 'Корпоративні хмарні рішення від Microsoft',
          },
          google_cloud: {
            name: 'Google Cloud',
            description: 'Інноваційні хмарні технології та workspace',
          },
          oracle_cloud: {
            name: 'Oracle Cloud',
            description: 'Надійні корпоративні рішення',
          },
          cloudflare: {
            name: 'Cloudflare',
            description: 'Захист та оптимізація продуктивності сайту',
          },
        },
        tools: {
          wordpress: {
            name: 'WordPress',
            description: 'Гнучка система управління контентом',
          },
          git: {
            name: 'Git',
            description: 'Контроль версій та командна робота',
          },
          figma: {
            name: 'Figma',
            description: 'Сучасний дизайн та прототипування',
          },
          liqpay: {
            name: 'LiqPay',
            description: 'Безпечні платежі для українського бізнесу',
          },
          oauth2: {
            name: 'OAuth 2.0',
            description: 'Безпечна авторизація та автентифікація',
          },
          eslint_prettier: {
            name: 'ESLint/Prettier',
            description: 'Стандартизація та форматування коду',
          },
        },
      },
      services: {
        title: 'Наші послуги та ціни',
        popular: 'ПОПУЛЯРНЕ',
        currency: 'грн',
        order: 'Замовити',
        discount: '* Спеціальні знижки для ветеранів та ВПО',
        modal: {
          title: 'Замовлення послуги',
          name: "Ім'я",
          email: 'Електронна пошта',
          phone: 'Телефон',
          message: 'Повідомлення',
          submit: 'Відправити',
          close: 'Закрити',
          success: "Дякуємо за замовлення! Ми зв'яжемось з Вами найближчим часом.",
          error: 'Помилка при відправці.',
          validation: {
            required: "Це поле обов'язкове",
            email: 'Введіть коректний email',
            phone: 'Введіть коректний телефон',
          },
        },
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
