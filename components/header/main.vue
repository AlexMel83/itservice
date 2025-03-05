<template>
  <nav class="bg-custom-black text-custom-white p-4 fixed w-full z-50 border-b border-custom-border">
    <div class="container mx-auto flex justify-between items-center">
      <NuxtLink
        to="/#home"
        class="text-xl font-space-grotesk hover:text-custom-orange transition-colors"
        @click.prevent="scrollToSection('home')"
      >
        IT-Starkon
      </NuxtLink>

      <div class="hidden md:flex items-center space-x-6">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.id"
          :to="`#${link.id}`"
          :class="['hover:text-custom-orange transition-colors', { 'text-custom-orange': activeSection === link.id }]"
          @click.prevent="scrollToSection(link.id)"
        >
          {{ link.text }}
        </NuxtLink>

        <div class="relative">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Поиск..."
            class="bg-[#1C1C1C] text-custom-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-custom-orange"
          />
          <i class="fas fa-search absolute right-3 top-1/2 transform -translate-y-1/2 text-custom-gray"></i>
        </div>
      </div>

      <button @click="isMenuOpen = !isMenuOpen" class="md:hidden text-custom-orange">
        <i class="fas fa-bars text-2xl"></i>
      </button>
    </div>

    <div
      v-if="isMenuOpen"
      class="md:hidden absolute top-full left-0 right-0 bg-custom-black border-b border-custom-border p-4"
    >
      <div class="mb-4">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Пошук..."
          class="w-full bg-[#1C1C1C] text-custom-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-custom-orange"
        />
      </div>
      <NuxtLink
        v-for="link in navLinks"
        :key="link.id"
        :to="`#${link.id}`"
        :class="[
          'block py-2 hover:text-custom-orange transition-colors',
          { 'text-custom-orange': activeSection === link.id },
        ]"
        @click="closeMenuAndScroll(link.id)"
      >
        {{ link.text }}
      </NuxtLink>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isMenuOpen = ref(false);
const activeSection = ref('');
const searchQuery = ref('');

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

const closeMenuAndScroll = (sectionId) => {
  isMenuOpen.value = false;
  scrollToSection(sectionId);
};

// Логика наблюдения за секциями
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id;
        }
      });
    },
    { threshold: 0.2 },
  );

  document.querySelectorAll('[id]').forEach((element) => {
    observer.observe(element);
  });

  onUnmounted(() => {
    observer.disconnect();
  });
});
</script>
