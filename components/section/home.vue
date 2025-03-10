<template>
  <section id="home" class="min-h-[900px] relative flex items-center pt-[80px]">
    <div class="absolute inset-0" :style="backgroundStyle"></div>
    <div class="container mx-auto text-center relative z-10 px-4">
      <h1
        ref="titleRef"
        class="text-4xl md:text-6xl font-space-grotesk mb-6 bg-gradient-to-b from-custom-gray to-custom-white text-transparent bg-clip-text animate-fade-in"
        style="--delay: 0ms; --initial-state: 0"
      >
        {{ t('home.title') }}
      </h1>
      <p ref="textRef" class="text-xl mb-8 text-custom-gray animate-fade-in" style="--delay: 200ms; --initial-state: 0">
        {{ t('home.description') }}
      </p>
      <button
        ref="buttonRef"
        class="bg-custom-orange text-custom-white px-8 py-3 rounded-full hover:bg-custom-border transition-colors animate-fade-in"
        style="--delay: 400ms; --initial-state: 0"
      >
        {{ t('home.orderButton') }}
      </button>
      <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="(service, index) in serviceKeys"
          :key="service"
          ref="serviceRefs"
          class="bg-[#1C1C1C] p-6 rounded-lg hover:bg-custom-dark hover:shadow-lg transition-all duration-300 animate-fade-in"
          :style="`--delay: ${600 + index * 200}ms; --initial-state: 0;`"
        >
          <i :class="[services[service].icon, 'text-custom-orange text-3xl mb-4']"></i>
          <h3 class="text-custom-white text-xl mb-2">
            {{ t(`home.services.${service}.title`) }}
          </h3>
          <p class="text-custom-gray">
            {{ t(`home.services.${service}.description`) }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';
import { useI18n } from 'vue-i18n';
import { useAnimationStore } from '~/stores/animation';

const { t } = useI18n();
const animationStore = useAnimationStore();

// ID секции для хранения в Pinia
const SECTION_ID = 'home-section';

// Доступные услуги
const services = {
  webDevelopment: { icon: 'fas fa-code' },
  photo360: { icon: 'fas fa-camera' },
  virtualTours: { icon: 'fas fa-vr-cardboard' },
};
const serviceKeys = Object.keys(services);

// Рефы для элементов
const titleRef = ref(null);
const textRef = ref(null);
const buttonRef = ref(null);
const serviceRefs = ref([]);

// Фон секции
const backgroundStyle = {
  backgroundImage: `linear-gradient(to bottom, rgba(9, 4, 2, 0.4), rgba(0, 0, 0, 1)), url(https://ucarecdn.com/0bd7b53d-60eb-4db2-815e-e3d4f1d84b7f/-/format/auto/)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

// Установка CSS переменной --initial-state для анимированных элементов
const setElementInitialState = (el, value) => {
  if (el) {
    el.style.setProperty('--initial-state', value);
  }
};

// Создаем и настраиваем Intersection Observer
const setupIntersectionObserver = () => {
  // Проверяем, была ли секция уже анимирована через Pinia
  const alreadyAnimated = animationStore.isSectionAnimated(SECTION_ID);

  if (alreadyAnimated) {
    // Если уже анимирована, устанавливаем начальное состояние в 1 для всех элементов
    setElementInitialState(titleRef.value, 1);
    setElementInitialState(textRef.value, 1);
    setElementInitialState(buttonRef.value, 1);
    serviceRefs.value.forEach((ref) => {
      setElementInitialState(ref, 1);
    });
    return null; // Не создаем observer
  }

  const options = {
    root: null,
    rootMargin: '0px 0px -20% 0px', // Триггер когда элемент выше нижней 1/5 экрана
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    let allVisible = true;
    let hasIntersectingElements = false;

    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        hasIntersectingElements = true;
        // Устанавливаем CSS переменную для запуска анимации
        setElementInitialState(entry.target, 1);

        // Отключаем наблюдение за элементом после его появления
        observer.unobserve(entry.target);
      } else {
        allVisible = false;
      }
    });

    // Если все наблюдаемые элементы стали видимыми или хотя бы один стал видимым и больше нет наблюдаемых элементов
    if ((allVisible && hasIntersectingElements) || document.querySelectorAll('.animate-fade-in').length === 0) {
      // Сохраняем состояние в Pinia
      animationStore.setSectionAnimated(SECTION_ID);
    }
  }, options);

  // Наблюдаем за всеми элементами
  if (titleRef.value) observer.observe(titleRef.value);
  if (textRef.value) observer.observe(textRef.value);
  if (buttonRef.value) observer.observe(buttonRef.value);

  serviceRefs.value.forEach((ref) => {
    if (ref) observer.observe(ref);
  });

  return observer;
};

let observer = null;

onMounted(() => {
  // Дожидаемся следующего тика рендеринга, чтобы рефы были доступны
  nextTick(() => {
    observer = setupIntersectionObserver();

    // Обработчик для навигации (если вы используете router)
    window.addEventListener('popstate', () => {
      if (observer) {
        observer.disconnect();
      }
      observer = setupIntersectionObserver();
    });
  });
});
</script>

<style scoped>
.animate-fade-in {
  opacity: var(--initial-state, 0);
  transform: translateY(calc((1 - var(--initial-state, 0)) * 40px));
  transition:
    opacity 700ms,
    transform 700ms;
  transition-delay: var(--delay, 0ms);
}
</style>
