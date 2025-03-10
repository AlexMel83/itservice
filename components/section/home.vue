<template>
  <section id="home" class="min-h-[900px] relative flex items-center pt-[80px]">
    <div class="absolute inset-0" :style="backgroundStyle"></div>
    <div class="container mx-auto text-center relative z-10 px-4">
      <h1
        ref="titleRef"
        class="text-4xl md:text-6xl font-space-grotesk mb-6 bg-gradient-to-b from-custom-gray to-custom-white text-transparent bg-clip-text"
      >
        {{ t('home.title') }}
      </h1>
      <p ref="textRef" class="text-xl mb-8 text-custom-gray">
        {{ t('home.description') }}
      </p>
      <button
        ref="buttonRef"
        class="bg-custom-orange text-custom-white px-8 py-3 rounded-full hover:bg-custom-border transition-colors"
      >
        {{ t('home.orderButton') }}
      </button>
      <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="(service, index) in serviceKeys"
          :key="index"
          class="bg-[#1C1C1C] p-6 rounded-lg hover:bg-custom-dark hover:shadow-lg transition-all duration-300"
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
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

// Доступные услуги
const services = {
  webDevelopment: { icon: 'fas fa-code' },
  photo360: { icon: 'fas fa-camera' },
  virtualTours: { icon: 'fas fa-vr-cardboard' },
};

const serviceKeys = Object.keys(services);

// Фон секции
const backgroundStyle = {
  backgroundImage: `linear-gradient(to bottom, rgba(9, 4, 2, 0.4), rgba(0, 0, 0, 1)), url(https://ucarecdn.com/0bd7b53d-60eb-4db2-815e-e3d4f1d84b7f/-/format/auto/)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

onMounted(() => {
  // Здесь ничего не нужно, если анимации не используются
});
</script>
