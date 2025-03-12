<template>
  <section id="services" class="py-12 px-4">
    <div class="container mx-auto">
      <h2
        ref="titleRef"
        class="title-block text-3xl font-space-grotesk text-center mb-12 bg-gradient-to-b from-custom-gray to-custom-white text-transparent bg-clip-text"
      >
        {{ $t('services.title') }}
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <div
          v-for="(price, index) in pricingItems"
          :key="index"
          :ref="(el) => (priceRefs[index] = el)"
          class="price-block bg-[#090402] p-8 rounded-lg border border-custom-border transition-all duration-300 hover:-translate-y-2 hover:border-custom-orange"
          :class="{ 'bg-gradient-to-b from-custom-dark to-[#2E2927] border-[#2C2722]': price.popular }"
        >
          <div
            v-if="price.popular"
            class="absolute -top-3 right-4 bg-gradient-to-b from-custom-dark to-[#2E2927] text-custom-orange text-xs font-bold px-3 py-1 rounded-full border border-custom-orange animate-pulse"
          >
            {{ $t('services.popular') }}
          </div>
          <h3 class="text-xl font-space-grotesk text-center mb-4 text-custom-white">
            {{ $t(`services.items.${price.key}.title`) }}
          </h3>
          <div class="text-center mb-6">
            <div>
              <span class="text-4xl font-bold text-custom-white">
                {{ $t(`services.items.${price.key}.price`, { value: price.price }) }}
              </span>
              <span class="text-custom-gray"> {{ $t('services.currency') }}</span>
            </div>
            <div v-if="price.monthly" class="text-sm text-custom-gray mt-2">
              {{ $t(`services.items.${price.key}.monthly`, { value: price.monthly }) }}
            </div>
          </div>
          <ul class="space-y-3 mb-8 text-custom-gray">
            <li v-for="(feature, i) in price.features" :key="i" class="flex items-center">
              <i class="fas fa-check text-custom-orange mr-2"></i>
              <span>{{ $t(`services.items.${price.key}.features.${i}`) }}</span>
            </li>
          </ul>
          <button
            class="w-full bg-custom-orange text-custom-white py-3 rounded-full hover:bg-custom-border transition-colors"
          >
            {{ $t('services.order') }}
          </button>
        </div>
      </div>
      <p class="text-center text-custom-gray mt-8">{{ $t('services.discount') }}</p>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// Данные для карточек — только числа и структура
const pricingItems = [
  {
    key: 'tech_support',
    price: 300, // Только число
    features: Array(5).fill(''),
  },
  {
    key: 'photo_360',
    price: 400,
    monthly: 'per panorama', // Оставляем как идентификатор, переводим в локалях
    features: Array(5).fill(''),
  },
  {
    key: 'virtual_3d_tours',
    price: 2000,
    popular: true,
    features: Array(5).fill(''),
  },
  {
    key: 'business_card_site',
    price: 1000,
    monthly: 100, // Только число
    features: Array(5).fill(''),
  },
  {
    key: 'wordpress',
    price: 3000,
    monthly: 100,
    popular: true,
    features: Array(5).fill(''),
  },
  {
    key: 'custom_design',
    price: 10000,
    monthly: 100,
    features: Array(5).fill(''),
  },
  {
    key: 'full_stack_dev',
    price: 20000,
    monthly: 200,
    popular: true,
    features: Array(5).fill(''),
  },
];

// Refs для отслеживания элементов
const titleRef = ref(null);
const priceRefs = ref([]);

// Настройка IntersectionObserver
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === titleRef.value) {
            entry.target.classList.add('animate-scale-in');
            setTimeout(() => {
              priceRefs.value.forEach((el) => {
                if (el) el.classList.add('animate-scale-in');
              });
            }, 300);
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

  onUnmounted(() => {
    if (titleRef.value) observer.unobserve(titleRef.value);
  });
});
</script>

<style scoped>
/* Анимация масштабирования */
.animate-scale-in {
  animation: scaleIn 1s ease-out forwards;
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

.title-block,
.price-block {
  transform: scale(0);
  opacity: 0;
}
</style>
