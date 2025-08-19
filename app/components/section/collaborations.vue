<template>
  <section
    id="collaboration"
    class="min-h-screen flex flex-col justify-center items-center py-12 px-4 bg-custom-dark overflow-visible"
  >
    <div class="container mx-auto">
      <h2
        ref="titleRef"
        class="text-3xl font-space-grotesk text-center mb-8 bg-gradient-to-b from-custom-gray to-custom-white text-transparent bg-clip-text animate-fade-in"
        style="--delay: 0ms; --initial-state: 0"
      >
        {{ t('collaboration.title') }}
      </h2>
      <div
        ref="collaborationRef"
        class="bg-gradient-to-b from-custom-dark to-[#2E2927] p-8 rounded-lg border border-[#2C2722] max-w-3xl mx-auto animate-fade-in"
        style="--delay: 200ms; --initial-state: 0"
      >
        <p
          ref="textRef"
          class="text-custom-gray text-lg mb-6 text-center animate-fade-in"
          style="--delay: 400ms; --initial-state: 0"
        >
          {{ t('collaboration.description') }}
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div
            ref="leftBlockRef"
            class="p-4 border border-custom-border rounded-lg animate-fade-in"
            style="--delay: 600ms; --initial-state: 0"
          >
            <h3 class="text-custom-orange font-semibold mb-3">{{ t('collaboration.lookingFor.title') }}</h3>
            <ul class="text-custom-gray space-y-2">
              <li v-for="item in lookingFor" :key="item">{{ item }}</li>
            </ul>
          </div>
          <div
            ref="rightBlockRef"
            class="p-4 border border-custom-border rounded-lg animate-fade-in"
            style="--delay: 800ms; --initial-state: 0"
          >
            <h3 class="text-custom-orange font-semibold mb-3">{{ t('collaboration.offering.title') }}</h3>
            <ul class="text-custom-gray space-y-2">
              <li v-for="item in offering" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>
        <div class="text-center">
          <p class="text-custom-gray mb-4">{{ t('collaboration.contactText') }}</p>
          <NuxtLink
            to="mailto:it@starkon.pp.ua?subject=співпраця"
            class="text-custom-orange hover:text-custom-orange transition-colors text-lg font-semibold"
          >
            it@starkon.pp.ua
          </NuxtLink>
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
const SECTION_ID = 'collaboration-section';

// Refs для отслеживания элементов
const titleRef = ref(null);
const textRef = ref(null);
const collaborationRef = ref(null);
const leftBlockRef = ref(null);
const rightBlockRef = ref(null);

// Списки для перевода
const lookingFor = computed(() => [
  t('collaboration.lookingFor.items.designers'),
  t('collaboration.lookingFor.items.qa'),
  t('collaboration.lookingFor.items.pm'),
  t('collaboration.lookingFor.items.developers'),
]);

const offering = computed(() => [
  t('collaboration.offering.items.share'),
  t('collaboration.offering.items.social'),
  t('collaboration.offering.items.team'),
  t('collaboration.offering.items.portfolio'),
]);

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
    setElementInitialState(collaborationRef.value, 1);
    setElementInitialState(textRef.value, 1);
    setElementInitialState(leftBlockRef.value, 1);
    setElementInitialState(rightBlockRef.value, 1);
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
  if (collaborationRef.value) observer.observe(collaborationRef.value);
  if (textRef.value) observer.observe(textRef.value);
  if (leftBlockRef.value) observer.observe(leftBlockRef.value);
  if (rightBlockRef.value) observer.observe(rightBlockRef.value);

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
