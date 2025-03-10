<template>
  <div class="hidden md:flex items-center space-x-6 flex-1 justify-center">
    <NuxtLink
      v-for="link in navLinks"
      :key="link.id"
      :to="`#${link.id}`"
      :class="['hover:text-custom-orange transition-colors', { 'text-custom-orange': activeSection === link.id }]"
      @click.prevent="scrollToSection(link.id)"
    >
      {{ link.text }}
    </NuxtLink>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const activeSection = ref('');
const navLinks = computed(() => [
  { id: 'home', text: t('menu.home') },
  { id: 'technologies', text: t('menu.technologies') },
  { id: 'services', text: t('menu.services') },
  { id: 'about', text: t('menu.about') },
  { id: 'colaborations', text: t('menu.colaborations') },
  { id: 'contacts', text: t('menu.contacts') },
]);

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>
