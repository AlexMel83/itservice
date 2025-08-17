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
                <font-awesome-icon :icon="[tech.iconType, tech.icon]" class="text-4xl text-custom-orange mr-4" />
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
                <font-awesome-icon :icon="[tech.iconType, tech.icon]" class="text-4xl text-custom-orange mr-4" />
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
                <font-awesome-icon :icon="[tech.iconType, tech.icon]" class="text-4xl text-custom-orange mr-4" />
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
                <font-awesome-icon :icon="[tech.iconType, tech.icon]" class="text-4xl text-custom-orange mr-4" />
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

// Дані технологій — структура з типом іконки
const frontendTechs = [
  { key: 'react_next', icon: 'react', iconType: 'fab' },
  { key: 'vue_nuxt', icon: 'vuejs', iconType: 'fab' },
  { key: 'pwa', icon: 'mobile-alt', iconType: 'fas' },
  { key: 'tailwindcss', icon: 'css3', iconType: 'fab' },
  { key: 'typescript', icon: 'code', iconType: 'fas' },
  { key: 'leaflet', icon: 'map-marked-alt', iconType: 'fas' },
];

const backendTechs = [
  { key: 'nodejs', icon: 'node-js', iconType: 'fab' },
  { key: 'nestjs', icon: 'server', iconType: 'fas' },
  { key: 'postgresql', icon: 'database', iconType: 'fas' },
  { key: 'mysql', icon: 'database', iconType: 'fas' },
  { key: 'swagger', icon: 'file-code', iconType: 'fas' },
  { key: 'docker', icon: 'docker', iconType: 'fab' },
];

const cloudTechs = [
  { key: 'aws', icon: 'aws', iconType: 'fab' },
  { key: 'azure', icon: 'microsoft', iconType: 'fab' },
  { key: 'google_cloud', icon: 'google', iconType: 'fab' },
  { key: 'oracle_cloud', icon: 'cloud', iconType: 'fas' },
  { key: 'cloudflare', icon: 'shield-alt', iconType: 'fas' },
];

const toolsTechs = [
  { key: 'wordpress', icon: 'wordpress', iconType: 'fab' },
  { key: 'git', icon: 'git-alt', iconType: 'fab' },
  { key: 'figma', icon: 'pencil-ruler', iconType: 'fas' },
  { key: 'liqpay', icon: 'credit-card', iconType: 'fas' },
  { key: 'oauth2', icon: 'lock', iconType: 'fas' },
  { key: 'eslint_prettier', icon: 'code', iconType: 'fas' },
];

// Refs для відстеження елементів
const titleRef = ref(null);
const frontendRef = ref(null);
const backendRef = ref(null);
const cloudRef = ref(null);
const toolsRef = ref(null);
const techRefs = ref([]);

// Налаштування IntersectionObserver
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
