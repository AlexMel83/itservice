<template>
  <section id="services" class="py-12 px-4">
    <div class="container mx-auto">
      <h2
        ref="titleRef"
        class="title-block text-3xl font-space-grotesk text-center mb-12 bg-gradient-to-b from-custom-gray to-custom-white text-transparent bg-clip-text"
      >
        Наші послуги та ціни
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <div
          v-for="(price, index) in pricingItems"
          :key="index"
          :ref="(el) => (priceRefs[index] = el)"
          class="price-block bg-[#090402] p-8 rounded-lg border border-custom-border transition-all duration-300 hover:-translate-y-2 hover:border-custom-orange"
          :class="{ 'bg-gradient-to-b from-custom-dark to-[#2E2927] border-[#2C2722]': price.popular }"
        >
          <div
            v-if="price.popular"
            class="absolute -top-3 right-4 bg-gradient-to-b from-custom-dark to-[#2E2927] text-custom-orange text-xs font-bold px-3 py-1 rounded-full border border-custom-orange animate-pulse"
          >
            ПОПУЛЯРНЕ
          </div>
          <h3 class="text-xl font-space-grotesk text-center mb-4 text-custom-white">
            {{ price.title }}
          </h3>
          <div class="text-center mb-6">
            <div>
              <span class="text-4xl font-bold text-custom-white">{{ price.price }}</span>
              <span class="text-custom-gray"> грн</span>
            </div>
            <div v-if="price.monthly" class="text-sm text-custom-gray mt-2">{{ price.monthly }}</div>
          </div>
          <ul class="space-y-3 mb-8 text-custom-gray">
            <li v-for="(feature, i) in price.features" :key="i" class="flex items-center">
              <i class="fas fa-check text-custom-orange mr-2"></i>
              <span>{{ feature }}</span>
            </li>
          </ul>
          <button
            class="w-full bg-custom-orange text-custom-white py-3 rounded-full hover:bg-custom-border transition-colors"
          >
            Замовити
          </button>
        </div>
      </div>
      <p class="text-center text-custom-gray mt-8">* Спеціальні знижки для ветеранів та ВПО</p>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// Данные для карточек
const pricingItems = [
  {
    title: 'Технічна підтримка',
    price: 'від 300',
    features: [
      'Виправлення помилок на сайті',
      'Оновлення контенту',
      'Налаштування серверів',
      'Базова SEO-оптимізація',
      'Технічні консультації',
    ],
  },
  {
    title: '360° Фотозйомка',
    price: 'від 400',
    monthly: 'за панораму',
    features: [
      'Професійна панорамна зйомка',
      'Обробка та оптимізація фото',
      'Інтеграція на сайти',
      'Публікація в соцмережах',
      'Висока якість зображень',
    ],
  },
  {
    title: 'Віртуальні 3D тури',
    price: 'від 2000',
    popular: true,
    features: [
      'Створення інтерактивних турів',
      'Оптимізація для веб',
      'Інтеграція на сайти',
      'Публікація в Google View',
      'Брендування та кастомізація',
    ],
  },
  {
    title: 'Сайт-візитка',
    price: 'від 1000',
    monthly: 'від 100 грн/міс',
    features: [
      'Адаптивний дизайн',
      'До 5 сторінок',
      'Форма зворотного зв’язку',
      'Базова SEO-оптимізація',
      'SSL-сертифікат',
    ],
  },
  {
    title: 'WordPress',
    price: 'від 3000',
    monthly: 'від 100 грн/міс',
    popular: true,
    features: [
      'Преміум шаблон на вибір',
      'Установка необхідних плагінів',
      'Інтеграція з соцмережами',
      'Розширена SEO-оптимізація',
      'Навчання користування',
    ],
  },
  {
    title: 'Індивідуальний дизайн',
    price: 'від 10000',
    monthly: 'від 100 грн/міс',
    features: [
      'Унікальний дизайн',
      'Необмежена кількість сторінок',
      'Інтеграція з CRM',
      'Повна SEO-оптимізація',
      'Підтримка 24/7',
    ],
  },
  {
    title: 'Full-stack розробка',
    price: 'від 20000',
    monthly: 'від 200 грн/міс',
    popular: true,
    features: [
      'Розробка на Nuxt3/Vue',
      'Високопродуктивний backend',
      'Складні інтеграції',
      'Масштабована архітектура',
      'Преміум підтримка',
    ],
  },
];

// Refs для отслеживания элементов
const titleRef = ref(null);
const priceRefs = ref([]);

// Настройка IntersectionObserver
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Последовательное добавление классов с задержкой
          if (entry.target === titleRef.value) {
            entry.target.classList.add('animate-scale-in');
            setTimeout(() => {
              priceRefs.value.forEach((el) => {
                if (el) el.classList.add('animate-scale-in');
              });
            }, 300); // Задержка 0.3s для карточек после заголовка
          }
          observer.unobserve(entry.target); // Останавливаем наблюдение после анимации
        }
      });
    },
    {
      rootMargin: '0px 0px -15% 0px', // Анимация в нижних 15% экрана
      threshold: 0.1, // Срабатывает, когда видно 10% элемента
    },
  );

  // Наблюдаем только за заголовком, чтобы запустить последовательность
  if (titleRef.value) observer.observe(titleRef.value);

  onUnmounted(() => {
    if (titleRef.value) observer.unobserve(titleRef.value);
  });
});
</script>

<style scoped>
/* Анимация масштабирования */
.animate-scale-in {
  animation: scaleIn 1s ease-out forwards; /* Увеличена длительность до 1s для плавности */
}

@keyframes scaleIn {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

/* Начальное состояние для элементов перед анимацией */
.title-block,
.price-block {
  transform: scale(0);
  opacity: 0;
}
</style>
