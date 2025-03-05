<template>
  <div>
    <!-- <section id="pricing" className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-space-grotesk text-center mb-12 bg-gradient-to-b from-[#A39F9D] to-[#F5F5F5] text-transparent bg-clip-text">
            Наші послуги та ціни
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <div
              className="bg-[#090402] p-8 rounded-lg border border-[#5C5C5C]"
              style={{ animation: "slideUp 0.6s ease-out" }}
            >
              <h3 className="text-xl font-space-grotesk text-center mb-4 text-[#F5F5F5]">
                Технічна підтримка
              </h3>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-[#F5F5F5]">
                  від 300
                </span>
                <span className="text-[#A39F9D]"> грн</span>
              </div>
              <ul className="space-y-3 mb-8 text-[#A39F9D]">
                <li className="flex items-center">
                  <i className="fas fa-check text-[#FF5500] mr-2"></i>
                  <span>Виправлення помилок на сайті</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-[#FF5500] mr-2"></i>
                  <span>Оновлення контенту</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-[#FF5500] mr-2"></i>
                  <span>Налаштування серверів</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-[#FF5500] mr-2"></i>
                  <span>Базова SEO-оптимізація</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-[#FF5500] mr-2"></i>
                  <span>Технічні консультації</span>
                </li>
              </ul>
              <button className="w-full bg-[#FF5500] text-[#F5F5F5] py-3 rounded-full hover:bg-[#5C5C5C] transition-colors">
                Замовити
              </button>
            </div>
            <div
              className="bg-[#090402] p-8 rounded-lg border border-[#5C5C5C]"
              style={{
                animation: "slideUp 0.6s ease-out 0.1s",
                animationFillMode: "backwards",
              }}
            >
              <h3 className="text-xl font-space-grotesk text-center mb-4 text-[#F5F5F5]">
                360° Фотозйомка
              </h3>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-[#F5F5F5]">
                  від 400
                </span>
                <span className="text-[#A39F9D]"> грн</span>
                <div className="text-sm text-[#A39F9D] mt-2">за панораму</div>
              </div>
              <ul className="space-y-3 mb-8 text-[#A39F9D]">
                <li className="flex items-center">
                  <i className="fas fa-check text-[#FF5500] mr-2"></i>
                  <span>Професійна панорамна зйомка</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-[#FF5500] mr-2"></i>
                  <span>Обробка та оптимізація фото</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-[#FF5500] mr-2"></i>
                  <span>Інтеграція на сайти</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-[#FF5500] mr-2"></i>
                  <span>Публікація в соцмережах</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-[#FF5500] mr-2"></i>
                  <span>Висока якість зображень</span>
                </li>
              </ul>
              <button className="w-full bg-[#FF5500] text-[#F5F5F5] py-3 rounded-full hover:bg-[#5C5C5C] transition-colors">
                Замовити
              </button>
            </div>
            <div
              className="bg-gradient-to-b from-[#080301] to-[#2E2927] p-8 rounded-lg border border-[#2C2722] relative"
              style={{
                animation: "slideUp 0.6s ease-out 0.2s",
                animationFillMode: "backwards",
              }}
            >
              <div className="absolute -top-3 right-4 bg-gradient-to-b from-[#080301] to-[#2E2927] text-[#FF5500] text-xs font-bold px-3 py-1 rounded-full border border-[#FF5500] animate-pulse">
                ПОПУЛЯРНЕ
              </div>
              <h3 className="text-xl font-space-grotesk text-center mb-4 text-[#F5F5F5]">
                Віртуальні 3D тури
              </h3>
              <div className="text-center mb-6">
                <div>
                  <span className="text-4xl font-bold text-[#F5F5F5]">
                    від 2000
                  </span>
                  <span className="text-[#A39F9D]"> грн</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8 text-[#A39F9D]">
                <li className="flex items-center">
                  <i className="fas fa-check text-[#FF5500] mr-2"></i>
                  <span>Створення інтерактивних турів</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-[#FF5500] mr-2"></i>
                  <span>Оптимізація для веб</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-[#FF5500] mr-2"></i>
                  <span>Інтеграція на сайти</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-[#FF5500] mr-2"></i>
                  <span>Публікація в Google View</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-[#FF5500] mr-2"></i>
                  <span>Брендування та кастомізація</span>
                </li>
              </ul>
              <button className="w-full bg-[#FF5500] text-[#F5F5F5] py-3 rounded-full hover:bg-[#5C5C5C] transition-colors">
                Замовити
              </button>
            </div>
            <div
              className="bg-[#090402] p-8 rounded-lg border border-[#5C5C5C]"
              style={{
                animation: "slideUp 0.6s ease-out 0.3s",
                animationFillMode: "backwards",
              }}
            >
              <h3 className="text-xl font-space-grotesk text-center mb-4 text-[#F5F5F5]">
                Сайт-візитка
              </h3>
              <div className="text-center mb-6">
                <div>
                  <span className="text-4xl font-bold text-[#F5F5F5]">
                    від 1000
                  </span>
                  <span className="text-[#A39F9D]"> грн</span>
                </div>
                <div className="text-sm text-[#A39F9D] mt-2">
                  від 100 грн/міс
                </div>
              </div>
              <ul className="space-y-3 mb-8 text-[#A39F9D]">
                <li className="flex items-center">
                  <i className="fas fa-check text-[#FF5500] mr-2"></i>
                  <span>Адаптивний дизайн</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-[#FF5500] mr-2"></i>
                  <span>До 5 сторінок</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-[#FF5500] mr-2"></i>
                  <span>Форма зворотного зв'язку</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-[#FF5500] mr-2"></i>
                  <span>Базова SEO-оптимізація</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-[#FF5500] mr-2"></i>
                  <span>SSL-сертифікат</span>
                </li>
              </ul>
              <button className="w-full bg-[#FF5500] text-[#F5F5F5] py-3 rounded-full hover:bg-[#5C5C5C] transition-colors">
                Замовити
              </button>
            </div>
            <div
              className="bg-gradient-to-b from-[#080301] to-[#2E2927] p-8 rounded-lg border border-[#2C2722] relative"
              style={{
                animation: "slideUp 0.6s ease-out 0.4s",
                animationFillMode: "backwards",
              }}
            >
              <div className="absolute -top-3 right-4 bg-gradient-to-b from-[#080301] to-[#2E2927] text-[#FF5500] text-xs font-bold px-3 py-1 rounded-full border border-[#FF5500] animate-pulse">
                ПОПУЛЯРНЕ
              </div>
              <h3 className="text-xl font-space-grotesk text-center mb-4 text-[#F5F5F5]">
                WordPress
              </h3>
              <div className="text-center mb-6">
                <div>
                  <span className="text-4xl font-bold text-[#F5F5F5]">
                    від 3000
                  </span>
                  <span className="text-[#A39F9D]"> грн</span>
                </div>
                <div className="text-sm text-[#A39F9D] mt-2">
                  від 100 грн/міс
                </div>
              </div>
              <ul className="space-y-3 mb-8 text-[#A39F9D]">
                <li className="flex items-center">
                  <i className="fas fa-check text-[#FF5500] mr-2"></i>
                  <span>Преміум шаблон на вибір</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-[#FF5500] mr-2"></i>
                  <span>Установка необхідних плагінів</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-[#FF5500] mr-2"></i>
                  <span>Інтеграція з соцмережами</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-[#FF5500] mr-2"></i>
                  <span>Розширена SEO-оптимізація</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-[#FF5500] mr-2"></i>
                  <span>Навчання користування</span>
                </li>
              </ul>
              <button className="w-full bg-[#FF5500] text-[#F5F5F5] py-3 rounded-full hover:bg-[#5C5C5C] transition-colors">
                Замовити
              </button>
            </div>
            <div
              className="bg-[#090402] p-8 rounded-lg border border-[#5C5C5C]"
              style={{
                animation: "slideUp 0.6s ease-out 0.5s",
                animationFillMode: "backwards",
              }}
            >
              <h3 className="text-xl font-space-grotesk text-center mb-4 text-[#F5F5F5]">
                Індивідуальний дизайн
              </h3>
              <div className="text-center mb-6">
                <div>
                  <span className="text-4xl font-bold text-[#F5F5F5]">
                    від 10000
                  </span>
                  <span className="text-[#A39F9D]"> грн</span>
                </div>
                <div className="text-sm text-[#A39F9D] mt-2">
                  від 100 грн/міс
                </div>
              </div>
              <ul className="space-y-3 mb-8 text-[#A39F9D]">
                <li className="flex items-center">
                  <i className="fas fa-check text-[#FF5500] mr-2"></i>
                  <span>Унікальний дизайн</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-[#FF5500] mr-2"></i>
                  <span>Необмежена кількість сторінок</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-[#FF5500] mr-2"></i>
                  <span>Інтеграція з CRM</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-[#FF5500] mr-2"></i>
                  <span>Повна SEO-оптимізація</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-[#FF5500] mr-2"></i>
                  <span>Підтримка 24/7</span>
                </li>
              </ul>
              <button className="w-full bg-[#FF5500] text-[#F5F5F5] py-3 rounded-full hover:bg-[#5C5C5C] transition-colors">
                Замовити
              </button>
            </div>
            <div
              className="bg-gradient-to-b from-[#080301] to-[#2E2927] p-8 rounded-lg border border-[#2C2722]"
              style={{
                animation: "slideUp 0.6s ease-out 0.6s",
                animationFillMode: "backwards",
              }}
            >
              <h3 className="text-xl font-space-grotesk text-center mb-4 text-[#F5F5F5]">
                Full-stack розробка
              </h3>
              <div className="text-center mb-6">
                <div>
                  <span className="text-4xl font-bold text-[#F5F5F5]">
                    від 20000
                  </span>
                  <span className="text-[#A39F9D]"> грн</span>
                </div>
                <div className="text-sm text-[#A39F9D] mt-2">
                  від 200 грн/міс
                </div>
              </div>
              <ul className="space-y-3 mb-8 text-[#A39F9D]">
                <li className="flex items-center">
                  <i className="fas fa-check text-[#FF5500] mr-2"></i>
                  <span>Розробка на Nuxt3/Vue</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-[#FF5500] mr-2"></i>
                  <span>Високопродуктивний backend</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-[#FF5500] mr-2"></i>
                  <span>Складні інтеграції</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-[#FF5500] mr-2"></i>
                  <span>Масштабована архітектура</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check text-[#FF5500] mr-2"></i>
                  <span>Преміум підтримка</span>
                </li>
              </ul>
              <button className="w-full bg-[#FF5500] text-[#F5F5F5] py-3 rounded-full hover:bg-[#5C5C5C] transition-colors">
                Замовити
              </button>
            </div>
          </div>
          <p className="text-center text-[#A39F9D] mt-8">
            * Спеціальні знижки для ветеранів та ВПО
          </p>
        </div>
    </section>

    <section id="about" className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-space-grotesk text-center mb-12 bg-gradient-to-b from-[#A39F9D] to-[#F5F5F5] text-transparent bg-clip-text">
            Про нашу команду
          </h2>
          <div className="flex flex-col md:flex-row items-stretch gap-8">
            <div className="md:w-1/2 flex h-[400px]">
              <img
                src="https://ucarecdn.com/d7edf35c-4872-4871-a068-5047b93b13ea/-/format/auto/"
                alt="Наша команда розробників за роботою"
                className="rounded-lg border border-[#5C5C5C] w-full object-cover object-[center_100%]"
              />
            </div>
            <div className="md:w-1/2 flex flex-col justify-center bg-gradient-to-b from-[#080301] to-[#2E2927] p-8 rounded-lg border border-[#2C2722]">
              <p className="text-[#A39F9D] text-sm mb-4">
                IT.Starkon - ваш локальний партнер у світі технологій в
                Хмельницькому районі. Базуючись у Старокостянтинові, ми
                забезпечуємо персональний підхід та постійний зв'язок з кожним
                клієнтом.
              </p>
              <p className="text-[#A39F9D] text-sm mb-4">
                Наша місія - створювати сучасні, доступні та ефективні цифрові
                рішення, які працюють на ваш бізнес 24/7. Ми не просто
                розробляємо сайти - ми будуємо надійні онлайн-платформи для
                вашого успіху.
              </p>
              <p className="text-[#A39F9D] text-sm">
                Ми завжди на зв'язку для консультацій та підтримки, готові
                оперативно вносити зміни в дизайн, контент та функціонал
                відповідно до ваших потреб. Інтегруємо найсучасніші технології,
                щоб ваш проект завжди був на крок попереду.
              </p>
            </div>
          </div>
        </div>
      </section> -->

    <!-- <section id="collaboration" className="py-12 px-4 bg-[#080301]">
    <div className="container mx-auto">
      <h2 className="text-3xl font-space-grotesk text-center mb-8 bg-gradient-to-b from-[#A39F9D] to-[#F5F5F5] text-transparent bg-clip-text">
        Запрошуємо до співпраці
      </h2>
      <div className="bg-gradient-to-b from-[#080301] to-[#2E2927] p-8 rounded-lg border border-[#2C2722] max-w-3xl mx-auto">
        <p className="text-[#A39F9D] text-lg mb-6 text-center">
          Шукаємо талановитих фахівців у Старокостянтинові для створення
          потужної локальної ІТ-спільноти та реалізації важливих соціальних
          проектів
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="p-4 border border-[#5C5C5C] rounded-lg">
            <h3 className="text-[#FF5500] font-semibold mb-3">
              Кого ми шукаємо:
            </h3>
            <ul className="text-[#A39F9D] space-y-2">
              <li>• UI/UX Дизайнерів</li>
              <li>• QA інженерів</li>
              <li>• Project Managers</li>
              <li>• Frontend/Backend розробників</li>
            </ul>
          </div>
          <div className="p-4 border border-[#5C5C5C] rounded-lg">
            <h3 className="text-[#FF5500] font-semibold mb-3">
              Що ми пропонуємо:
            </h3>
            <ul className="text-[#A39F9D] space-y-2">
              <li>• Дольову участь у проектах</li>
              <li>• Соціально важливі проекти</li>
              <li>• Командну розробку для швидшої реалізації</li>
              <li>• Зразкові проекти для портфоліо</li>
            </ul>
          </div>
        </div>
        <div className="text-center">
          <p className="text-[#A39F9D] mb-4">
            Надсилайте ваші пропозиції та побажання на адресу:
          </p>
          <a
            href="mailto:it@starkon.pp.ua?subject=співпраця"
            className="text-[#FF5500] hover:text-[#FF7733] transition-colors text-lg font-semibold"
          >
            it@starkon.pp.ua
          </a>
          <p className="text-[#A39F9D] mt-2 text-sm">
          </p>
        </div>
      </div>
    </div>
    </section> -->
  </div>
</template>
