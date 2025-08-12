<template>
  <div class="min-h-screen bg-custom-black font-inter">
    <MetaTags
      :title="$t('home.title')"
      :description="$t('home.description[0]') + ' ' + $t('home.description[1]')"
      :image="'/img/360-virtual-tour.jpg'"
      :structuredData="{
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'IT-Starkon',
        image: 'https://it.starkon.pp.ua/img/360-virtual-tour.jpg',
        url: 'https://it.starkon.pp.ua',
        telephone: '+380954664190',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Старокостянтинів',
          addressCountry: 'UA',
        },
        description:
          'Інноваційні IT-рішення для бізнесу у Старокостянтинові: розробка сайтів, 360° зйомка та створення віртуальних 3D турів. Спеціальні пропозиції для постійних клієнтів і ветеранів.',
        priceRange: '$$',
        openingHours: 'Mo-Fr 09:00-18:00',
        sameAs: ['https://t.me/@itstarkon'],
      }"
    />
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
