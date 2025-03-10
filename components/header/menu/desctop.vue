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
const activeSection = ref('');
const navLinks = [
  { id: 'home', text: 'Головна' },
  { id: 'technologies', text: 'Технології' },
  { id: 'services', text: 'Послуги' },
  { id: 'about', text: 'Про нас' },
  { id: 'colaborations', text: 'Співпраця' },
  { id: 'contacts', text: 'Контакти' },
];

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>
