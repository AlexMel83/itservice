<template>
  <section id="services" class="py-12 px-4">
    <div class="container mx-auto">
      <h2
        ref="titleRef"
        class="title-block text-3xl font-space-grotesk text-center mb-12 bg-gradient-to-b from-custom-gray to-custom-white text-transparent bg-clip-text animate-fade-in"
        style="--delay: 0ms; --initial-state: 0"
      >
        {{ t('services.title') }}
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <div
          v-for="(price, index) in pricingItems"
          :key="index"
          :ref="(el) => (priceRefs[index] = el)"
          class="price-block bg-[#090402] p-8 rounded-lg border border-custom-border transition-all duration-300 hover:-translate-y-2 hover:border-custom-orange animate-fade-in"
          :class="{ 'bg-gradient-to-b from-custom-dark to-[#2E2927] border-[#2C2722]': price.popular }"
          :style="{ '--delay': `${200 + index * 100}ms`, '--initial-state': 0 }"
        >
          <div
            v-if="price.popular"
            class="absolute -top-3 right-4 bg-gradient-to-b from-custom-dark to-[#2E2927] text-custom-orange text-xs font-bold px-3 py-1 rounded-full border border-custom-orange animate-pulse"
          >
            {{ t('services.popular') }}
          </div>
          <h3 class="text-xl font-space-grotesk text-center mb-4 text-custom-white">
            {{ t(`services.items.${price.key}.title`) }}
          </h3>
          <div class="text-center mb-6">
            <div>
              <span class="text-4xl font-bold text-custom-white">
                {{ t(`services.items.${price.key}.price`, { value: price.price }) }}
              </span>
              <span class="text-custom-gray"> {{ t('services.currency') }}</span>
            </div>
            <div v-if="price.monthly" class="text-sm text-custom-gray mt-2">
              {{ t(`services.items.${price.key}.monthly`, { value: price.monthly }) }}
            </div>
          </div>
          <ul class="space-y-3 mb-8 text-custom-gray">
            <li v-for="(feature, i) in price.features" :key="i" class="flex items-center">
              <Icon name="material-symbols:check" class="w-6 h-6 sm:w-8 sm:h-8" />
              <span>{{ t(`services.items.${price.key}.features.${i}`) }}</span>
            </li>
          </ul>
          <button
            aria-label="замовити послугу"
            class="w-full bg-custom-orange text-custom-white py-3 rounded-full hover:bg-custom-border transition-colors"
            @click="openModal(price)"
          >
            {{ t('services.order') }}
          </button>
        </div>
      </div>
      <p class="text-center text-custom-gray mt-8">{{ t('services.discount') }}</p>
    </div>

    <!-- Модалка заказа услуги -->
    <div
      v-if="isModalOpen"
      class="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50 p-4 sm:p-6"
    >
      <div
        class="relative bg-[#1C1C1C] rounded-lg border border-[#5C5C5C] w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl p-4 sm:p-6 md:p-8 max-h-screen overflow-y-auto"
      >
        <!-- Кнопка закриття -->
        <button
          aria-label="закрити"
          @click="closeModal"
          class="absolute top-3 right-3 sm:top-4 sm:right-4 text-custom-white hover:text-custom-orange"
        >
          <Icon name="material-symbols:close" class="w-6 h-6 sm:w-8 sm:h-8" />
        </button>

        <!-- Заголовок модалки -->
        <h3 class="text-center text-custom-white text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6">
          {{ t('services.modal.title') }} {{ selectedService ? t(`services.items.${selectedService.key}.title`) : '' }}
        </h3>

        <form v-if="!isSuccess" @submit.prevent="validateForm" class="flex flex-col gap-4">
          <!-- Ім'я -->
          <div class="flex flex-col">
            <label for="name" class="text-[#A39F9D] font-medium mb-1 sm:mb-2">{{ t('services.modal.name') }}</label>
            <input
              id="name"
              v-model="orderForm.name"
              type="text"
              class="w-full bg-[#1C1C1C] text-[#F5F5F5] px-3 sm:px-4 py-2 rounded-lg border border-[#5C5C5C] focus:outline-none focus:border-[#FF5500]"
              :class="{ 'border-red-500': errors.name }"
            />
            <p v-if="errors.name" class="text-red-500 text-sm mt-1">{{ errors.name }}</p>
          </div>

          <!-- Email -->
          <div class="flex flex-col">
            <label for="email" class="text-[#A39F9D] font-medium mb-1 sm:mb-2">{{ t('services.modal.email') }}</label>
            <input
              id="email"
              v-model="orderForm.email"
              type="email"
              class="w-full bg-[#1C1C1C] text-[#F5F5F5] px-3 sm:px-4 py-2 rounded-lg border border-[#5C5C5C] focus:outline-none focus:border-[#FF5500]"
              :class="{ 'border-red-500': errors.email }"
            />
            <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
          </div>

          <!-- Телефон -->
          <div class="flex flex-col">
            <label for="phone" class="text-[#A39F9D] font-medium mb-1 sm:mb-2">{{ t('services.modal.phone') }}</label>
            <input
              id="phone"
              v-model="orderForm.phone"
              type="tel"
              class="w-full bg-[#1C1C1C] text-[#F5F5F5] px-3 sm:px-4 py-2 rounded-lg border border-[#5C5C5C] focus:outline-none focus:border-[#FF5500]"
              :class="{ 'border-red-500': errors.phone }"
            />
            <p v-if="errors.phone" class="text-red-500 text-sm mt-1">{{ errors.phone }}</p>
          </div>

          <!-- Повідомлення -->
          <div class="flex flex-col">
            <label for="message" class="text-[#A39F9D] font-medium mb-1 sm:mb-2">{{
              t('services.modal.message')
            }}</label>
            <textarea
              id="message"
              v-model="orderForm.message"
              class="w-full bg-[#1C1C1C] text-[#F5F5F5] px-3 sm:px-4 py-2 rounded-lg border border-[#5C5C5C] focus:outline-none focus:border-[#FF5500]"
              rows="4"
            ></textarea>
          </div>

          <!-- Кнопка відправки -->
          <button
            aria-label="submit order"
            type="submit"
            class="w-full bg-custom-orange text-custom-white py-3 rounded-full hover:bg-custom-border transition-colors font-semibold"
          >
            {{ t('services.modal.submit') }}
          </button>
        </form>

        <p v-else class="text-center text-green-500 mt-4">{{ successMessage }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';
import { useI18n } from 'vue-i18n';
import { useAnimationStore } from '~/stores/animation';
import * as yup from 'yup';

const { t } = useI18n();

const animationStore = useAnimationStore();
const SECTION_ID = 'services-section';

const pricingItems = [
  { key: 'tech_support', price: 500, features: Array(5).fill('') },
  { key: 'photo_360', price: 500, monthly: 'per panorama', features: Array(5).fill('') },
  { key: 'virtual_3d_tours', price: 3000, popular: true, features: Array(5).fill('') },
  { key: 'business_card_site', price: 3000, monthly: 200, features: Array(5).fill('') },
  { key: 'wordpress', price: 7000, monthly: 200, popular: true, features: Array(5).fill('') },
  { key: 'custom_design', price: 15000, monthly: 200, features: Array(5).fill('') },
  { key: 'full_stack_dev', price: 40000, monthly: 400, popular: true, features: Array(5).fill('') },
];

const titleRef = ref(null);
const priceRefs = ref([]);

const setElementInitialState = (el, value) => {
  if (el) {
    el.style.setProperty('--initial-state', value);
  }
};

const setupIntersectionObserver = () => {
  const alreadyAnimated = animationStore.isSectionAnimated(SECTION_ID);

  if (alreadyAnimated) {
    setElementInitialState(titleRef.value, 1);
    priceRefs.value.forEach((el) => setElementInitialState(el, 1));
    return null;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      if (!isModalOpen.value) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setElementInitialState(entry.target, 1);
            observer.unobserve(entry.target);
          }
        });
        animationStore.setSectionAnimated(SECTION_ID);
      }
    },
    { rootMargin: '0px 0px -15% 0px', threshold: 0.1 },
  );

  if (titleRef.value) observer.observe(titleRef.value);
  priceRefs.value.forEach((el) => {
    if (el) observer.observe(el);
  });

  return observer;
};

let observer = null;

onMounted(() => {
  nextTick(() => {
    observer = setupIntersectionObserver();
  });
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});

const isModalOpen = ref(false);
const isSuccess = ref(false);
const formError = ref(false);
const selectedService = ref(null);

const successMessage = t('services.modal.success');

const openModal = (price) => {
  selectedService.value = { ...price };
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
  // Перезапуск анімації після закриття модалки
  animationStore.resetSectionAnimation(SECTION_ID);
  nextTick(() => {
    setupIntersectionObserver();
  });
};

const submitForm = async () => {
  formError.value = false;

  if (!orderForm.value.name || !orderForm.value.email || !orderForm.value.message) {
    formError.value = true;
    return;
  }

  const message = `
    ${t('services.modal.title')}: ${t(`services.items.${selectedService.value.key}.title`)}
    ${t('services.modal.name')}: ${orderForm.value.name}
    ${t('services.modal.email')}: ${orderForm.value.email}
    ${t('services.modal.phone')}: ${orderForm.value.phone}
    ${t('services.modal.message')}: ${orderForm.value.message}
  `;

  try {
    await fetch('/api/telegram', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    isSuccess.value = true;
  } catch (error) {
    console.error('Помилка при відправці', error);
    formError.value = true;
  }
};

const orderForm = ref({
  name: '',
  email: '',
  phone: '',
  message: '',
});

const validationSchema = yup.object({
  name: yup.string().required(t('services.modal.validation.required')),
  email: yup.string().email(t('services.modal.validation.email')).required(t('services.modal.validation.required')),
  phone: yup
    .string()
    .matches(/^\+?\d{10,14}$/, t('services.modal.validation.phone'))
    .required(t('services.modal.validation.required')),
  message: yup.string(),
});

const errors = ref({});

const validateForm = async () => {
  try {
    await validationSchema.validate(orderForm.value, { abortEarly: false });
    errors.value = {};
    submitForm(); // Логіка відправки форми
  } catch (err) {
    errors.value = err.inner.reduce((acc, error) => {
      acc[error.path] = error.message;
      return acc;
    }, {});
  }
};
</script>

<style scoped>
.animate-fade-in {
  opacity: var(--initial-state, 0);
  transform: translateY(calc((1 - var(--initial-state, 0)) * 40px));
  transition:
    opacity 700ms,
    transform 700ms;
  transition-delay: var(--delay, 0ms);
}

.modal-overlay {
  animation: fadeIn 0.3s ease-out;
}
.modal-content {
  animation: slideUp 0.3s ease-out;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes slideUp {
  0% {
    transform: translateY(20px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
