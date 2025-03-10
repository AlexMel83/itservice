<template>
  <section id="about" class="py-12 px-4">
    <div class="container mx-auto">
      <h2
        ref="titleRef"
        class="text-3xl font-space-grotesk text-center mb-12 bg-gradient-to-b from-custom-gray to-custom-white text-transparent bg-clip-text animate-fade-in"
        style="--delay: 0ms; --initial-state: 0"
      >
        {{ t('about.title') }}
      </h2>
      <div class="flex flex-col md:flex-row items-stretch gap-8">
        <div
          ref="aboutImageRef"
          class="md:w-1/2 flex h-[400px] animate-fade-in"
          style="--delay: 200ms; --initial-state: 0"
        >
          <img
            src="https://ucarecdn.com/d7edf35c-4872-4871-a068-5047b93b13ea/-/format/auto/"
            alt="Our development team at work"
            class="rounded-lg border border-custom-border w-full object-cover object-[center_100%]"
          />
        </div>
        <div
          ref="aboutTextRef"
          class="md:w-1/2 flex flex-col justify-center bg-gradient-to-b from-custom-dark to-[#2E2927] p-8 rounded-lg border border-[#2C2722] animate-fade-in"
          style="--delay: 400ms; --initial-state: 0"
        >
          <p class="text-custom-gray text-sm mb-4">
            {{ t('about.description1') }}
          </p>
          <p class="text-custom-gray text-sm mb-4">
            {{ t('about.description2') }}
          </p>
          <p class="text-custom-gray text-sm">
            {{ t('about.description3') }}
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

// i18n
const { t } = useI18n();

// Pinia store для анимации
const animationStore = useAnimationStore();
const SECTION_ID = 'about-section';

// Refs для отслеживания элементов
const titleRef = ref(null);
const aboutImageRef = ref(null);
const aboutTextRef = ref(null);

// Установка CSS переменной --initial-state
const setElementInitialState = (el, value) => {
  if (el) {
    el.style.setProperty('--initial-state', value);
  }
};

// Настройка Intersection Observer
const setupIntersectionObserver = () => {
  const alreadyAnimated = animationStore.isSectionAnimated(SECTION_ID);

  if (alreadyAnimated) {
    setElementInitialState(titleRef.value, 1);
    setElementInitialState(aboutImageRef.value, 1);
    setElementInitialState(aboutTextRef.value, 1);
    return null;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setElementInitialState(entry.target, 1);
          observer.unobserve(entry.target);
        }
      });
      animationStore.setSectionAnimated(SECTION_ID);
    },
    {
      rootMargin: '0px 0px -15% 0px',
      threshold: 0.1,
    },
  );

  if (titleRef.value) observer.observe(titleRef.value);
  if (aboutImageRef.value) observer.observe(aboutImageRef.value);
  if (aboutTextRef.value) observer.observe(aboutTextRef.value);

  return observer;
};

let observer = null;

onMounted(() => {
  nextTick(() => {
    observer = setupIntersectionObserver();
  });
});

onUnmounted(() => {
  if (observer) observer.disconnect();
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
