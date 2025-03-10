<!-- pages/index.vue -->
<template>
  <div class="min-h-screen bg-custom-black font-inter">
    <SectionHome />
    <SectionTechnologies />
    <SectionServices />
    <SectionAbout />
    <SectionCollaborations />
  </div>
</template>

<script setup>
// Компоненты уже подключены через layout, поэтому здесь ничего не нужно
</script>

<style scoped>
/* Анимации, которые были в исходном коде, можно оставить здесь, если они используются в секциях */
.animate-slide-up {
  animation: slideUp 0.6s ease-out;
}

.animate-slide-up-delayed {
  animation: slideUp 0.6s ease-out 0.3s backwards;
}

.animate-slide-up-delayed-02 {
  animation: slideUp 0.6s ease-out 0.2s backwards;
}

.animate-slide-up-delayed-04 {
  animation: slideUp 0.6s ease-out 0.4s backwards;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.5);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
