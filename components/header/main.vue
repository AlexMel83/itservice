<template>
  <nav class="bg-custom-black text-custom-white p-4 fixed w-full z-50 border-b border-custom-border">
    <div class="container mx-auto flex justify-between items-center">
      <NuxtLink
        to="/#home"
        class="text-xl font-space-grotesk hover:text-custom-orange transition-colors scroll-mt-[80px]"
        @click.prevent="scrollToSection('home')"
      >
        IT-Starkon
      </NuxtLink>
      <HeaderMenuDesctop :activeSection="activeSection" />
      <HeaderButtons :isMenuOpen="isMenuOpen" @toggleMenu="toggleMenu" />
    </div>
    <HeaderMenuMobile :isMenuOpen="isMenuOpen" @closeMenu="isMenuOpen = false" />
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';

const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const activeSection = ref('');

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    activeSection.value = sectionId;
    console.log(`Clicked: activeSection set to ${sectionId}`);
  } else {
    console.warn(`Element with id "${sectionId}" not found`);
  }
};

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        console.log(`Global observer: ${entry.target.id} is intersecting: ${entry.isIntersecting}`);
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id;
        }
      });
    },
    { threshold: 0.3, rootMargin: '0px 0px -10% 0px' },
  );

  const sections = ['home', 'technologies', 'services', 'about', 'collaboration', 'contacts'];

  // Ждем полной загрузки DOM
  nextTick(() => {
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
        console.log(`Observing section: ${sectionId}`); // Отладка
      } else {
        console.warn(`Section "${sectionId}" not found in DOM on initial mount`);
      }
    });

    // Дополнительная проверка через 1 секунду для асинхронных компонентов
    setTimeout(() => {
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element && !observer.takeRecords().some((entry) => entry.target.id === sectionId)) {
          observer.observe(element);
          console.log(`Late observing section: ${sectionId}`);
        }
      });
    }, 1000);
  });

  onUnmounted(() => {
    observer.disconnect();
  });
});
</script>
