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
      <HeaderMenuDesctop />
      <HeaderButtons :isMenuOpen="isMenuOpen" @toggleMenu="toggleMenu" />
    </div>
    <HeaderMenuMobile :isMenuOpen="isMenuOpen" @closeMenu="isMenuOpen = false" />
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const activeSection = ref('');

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
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
