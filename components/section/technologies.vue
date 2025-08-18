<template>
  <section id="technologies" class="py-12 px-4 bg-custom-dark">
    <div class="container mx-auto">
      <h2
        ref="titleRef"
        class="title-block text-3xl font-space-grotesk text-center mb-12 bg-gradient-to-b from-custom-gray to-custom-white text-transparent bg-clip-text"
      >
        {{ $t('technologies.title') }}
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Frontend -->
        <div ref="frontendRef" class="category-block space-y-8">
          <h3 class="text-xl font-space-grotesk text-custom-orange mb-6">
            {{ $t('technologies.categories.frontend') }}
          </h3>
          <div class="space-y-6">
            <div
              v-for="(tech, index) in frontendTechs"
              :key="index"
              :ref="(el) => (techRefs[index] = el)"
              class="tech-block bg-[#090402] p-6 rounded-lg border border-custom-border transition-all duration-300 hover:-translate-y-2 hover:border-custom-orange"
            >
              <div class="flex items-center mb-4">
                <component :is="tech.icon" class="text-custom-orange mr-4 w-9 h-9" aria-hidden="true" />
                <h4 class="text-custom-white">{{ $t(`technologies.frontend.${tech.key}.name`) }}</h4>
              </div>
              <p class="text-custom-gray">
                {{ $t(`technologies.frontend.${tech.key}.description`) }}
              </p>
            </div>
          </div>
        </div>

        <!-- Backend -->
        <div ref="backendRef" class="category-block space-y-8">
          <h3 class="text-xl font-space-grotesk text-custom-orange mb-6">
            {{ $t('technologies.categories.backend') }}
          </h3>
          <div class="space-y-6">
            <div
              v-for="(tech, index) in backendTechs"
              :key="index"
              :ref="(el) => (techRefs[frontendTechs.length + index] = el)"
              class="tech-block bg-[#090402] p-6 rounded-lg border border-custom-border transition-all duration-300 hover:-translate-y-2 hover:border-custom-orange"
            >
              <div class="flex items-center mb-4">
                <component :is="tech.icon" class="text-custom-orange mr-4 w-9 h-9" aria-hidden="true" />
                <h4 class="text-custom-white">{{ $t(`technologies.backend.${tech.key}.name`) }}</h4>
              </div>
              <p class="text-custom-gray">
                {{ $t(`technologies.backend.${tech.key}.description`) }}
              </p>
            </div>
          </div>
        </div>

        <!-- Хмарні сервіси -->
        <div ref="cloudRef" class="category-block space-y-8">
          <h3 class="text-xl font-space-grotesk text-custom-orange mb-6">
            {{ $t('technologies.categories.cloud') }}
          </h3>
          <div class="space-y-6">
            <div
              v-for="(tech, index) in cloudTechs"
              :key="index"
              :ref="(el) => (techRefs[frontendTechs.length + backendTechs.length + index] = el)"
              class="tech-block bg-[#090402] p-6 rounded-lg border border-custom-border transition-all duration-300 hover:-translate-y-2 hover:border-custom-orange"
            >
              <div class="flex items-center mb-4">
                <component :is="tech.icon" class="text-custom-orange mr-4 w-9 h-9" aria-hidden="true" />
                <h4 class="text-custom-white">{{ $t(`technologies.cloud.${tech.key}.name`) }}</h4>
              </div>
              <p class="text-custom-gray">
                {{ $t(`technologies.cloud.${tech.key}.description`) }}
              </p>
            </div>
          </div>
        </div>

        <!-- Інструменти та платежі -->
        <div ref="toolsRef" class="category-block space-y-8">
          <h3 class="text-xl font-space-grotesk text-custom-orange mb-6">
            {{ $t('technologies.categories.tools') }}
          </h3>
          <div class="space-y-6">
            <div
              v-for="(tech, index) in toolsTechs"
              :key="index"
              :ref="(el) => (techRefs[frontendTechs.length + backendTechs.length + cloudTechs.length + index] = el)"
              class="tech-block bg-[#090402] p-6 rounded-lg border border-custom-border transition-all duration-300 hover:-translate-y-2 hover:border-custom-orange"
            >
              <div class="flex items-center mb-4">
                <component :is="tech.icon" class="text-custom-orange mr-4 w-9 h-9" aria-hidden="true" />
                <h4 class="text-custom-white">{{ $t(`technologies.tools.${tech.key}.name`) }}</h4>
              </div>
              <p class="text-custom-gray">
                {{ $t(`technologies.tools.${tech.key}.description`) }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
// Імпортуйте ВСІ SVG-компоненти, які потрібні для технологій:
import IconVuejs from '@/components/icon/vuejs.vue';
import IconReact from '@/components/icon/react.vue';
import IconPwa from '@/components/icon/pwa.vue';
import IconTailwindcss from '@/components/icon/tailwindcss.vue';
import IconCode from '@/components/icon/code.vue';
import IconMapMarkerAlt from '@/components/icon/map-marker-alt.vue';

import IconNodeJs from '@/components/icon/node-js.vue';
import IconServer from '@/components/icon/server.vue';
import IconPostgresql from '@/components/icon/postgresql.vue';
import IconDatabase from '@/components/icon/database.vue';
import IconDocker from '@/components/icon/docker.vue';

import IconAws from '@/components/icon/aws.vue';
import IconMicrosoft from '@/components/icon/microsoft.vue';
import IconGoogle from '@/components/icon/google.vue';
import IconCloud from '@/components/icon/cloud.vue';

import IconWordpress from '@/components/icon/wordpress.vue';
import IconGithub from '@/components/icon/github.vue';
import IconFigma from '@/components/icon/figma.vue';
import IconCreditCard from '@/components/icon/credit-card.vue';
import IconLock from '@/components/icon/lock.vue';

// Дані технологій (оновіть імена компонентів згідно разташування файлів!)
const frontendTechs = [
  { key: 'react_next', icon: IconReact },
  { key: 'vue_nuxt', icon: IconVuejs },
  { key: 'pwa', icon: IconPwa },
  { key: 'tailwindcss', icon: IconTailwindcss },
  { key: 'typescript', icon: IconCode },
  { key: 'leaflet', icon: IconMapMarkerAlt },
];

const backendTechs = [
  { key: 'nodejs', icon: IconNodeJs },
  { key: 'nestjs', icon: IconServer },
  { key: 'postgresql', icon: IconPostgresql },
  { key: 'mysql', icon: IconDatabase },
  { key: 'swagger', icon: IconCode },
  { key: 'docker', icon: IconDocker },
];

const cloudTechs = [
  { key: 'aws', icon: IconAws },
  { key: 'azure', icon: IconMicrosoft },
  { key: 'google_cloud', icon: IconGoogle },
  { key: 'oracle_cloud', icon: IconCloud },
  { key: 'cloudflare', icon: IconCloud },
];

const toolsTechs = [
  { key: 'wordpress', icon: IconWordpress },
  { key: 'git', icon: IconGithub },
  { key: 'figma', icon: IconFigma },
  { key: 'liqpay', icon: IconCreditCard },
  { key: 'oauth2', icon: IconLock },
  { key: 'eslint_prettier', icon: IconCode },
];

// Refs для відстеження елементів
const titleRef = ref(null);
const frontendRef = ref(null);
const backendRef = ref(null);
const cloudRef = ref(null);
const toolsRef = ref(null);
const techRefs = ref([]);

// IntersectionObserver як і було, нічого майже міняти не треба:
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === titleRef.value) {
            entry.target.classList.add('animate-scale-in');
            setTimeout(() => {
              if (frontendRef.value) frontendRef.value.classList.add('animate-scale-in');
              if (backendRef.value) backendRef.value.classList.add('animate-scale-in');
              if (cloudRef.value) cloudRef.value.classList.add('animate-scale-in');
              if (toolsRef.value) toolsRef.value.classList.add('animate-scale-in');
            }, 300);
          } else {
            entry.target.classList.add('animate-scale-in');
          }
          observer.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: '0px 0px -15% 0px',
      threshold: 0.1,
    },
  );
  if (titleRef.value) observer.observe(titleRef.value);
  if (frontendRef.value) observer.observe(frontendRef.value);
  if (backendRef.value) observer.observe(backendRef.value);
  if (cloudRef.value) observer.observe(cloudRef.value);
  if (toolsRef.value) observer.observe(toolsRef.value);
  techRefs.value.forEach((el) => {
    if (el) observer.observe(el);
  });

  onUnmounted(() => {
    if (titleRef.value) observer.unobserve(titleRef.value);
    if (frontendRef.value) observer.unobserve(frontendRef.value);
    if (backendRef.value) observer.unobserve(backendRef.value);
    if (cloudRef.value) observer.unobserve(cloudRef.value);
    if (toolsRef.value) observer.unobserve(toolsRef.value);
    techRefs.value.forEach((el) => {
      if (el) observer.unobserve(el);
    });
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
.category-block,
.tech-block {
  transform: scale(0);
  opacity: 0;
}
</style>
