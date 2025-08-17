<template>
  <section id="home" class="min-h-[900px] relative flex items-center pt-[80px] md:pt-0">
    <NuxtImg
      src="/img/pexels-buro-millennial.jpg"
      alt="Background preload"
      fetchpriority="high"
      style="display: none"
      width="1920"
      height="1080"
    />
    <div class="absolute inset-0" :style="backgroundStyle"></div>
    <div class="container mx-auto text-center relative z-10 px-4">
      <h1
        ref="titleRef"
        class="text-4xl md:text-6xl font-space-grotesk mb-6 bg-gradient-to-b from-custom-gray to-custom-white text-transparent bg-clip-text animate-fade-in"
        style="--delay: 0ms; --initial-state: 0"
      >
        {{ t('home.title') }}
      </h1>
      <p ref="textRef1" class="text-xl text-custom-gray animate-fade-in" style="--delay: 200ms; --initial-state: 0">
        {{ t('home.description[0]') }}
      </p>
      <p
        ref="textRef2"
        class="text-lg mb-8 text-custom-gray animate-fade-in"
        style="--delay: 300ms; --initial-state: 0"
      >
        {{ t('home.description[1]') }}
      </p>
      <button
        ref="buttonRef"
        @click="openModal"
        aria-label="замовити послугу"
        class="bg-custom-orange text-custom-white px-8 py-3 rounded-full hover:bg-custom-border transition-colors animate-fade-in"
        style="--delay: 400ms; --initial-state: 0"
      >
        {{ t('home.orderButton') }}
      </button>
      <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <a
          v-for="(service, index) in serviceKeys"
          :key="service"
          ref="serviceRefs"
          class="bg-[#1C1C1C] p-6 rounded-lg hover:bg-custom-dark hover:shadow-lg transition-all duration-300 animate-fade-in"
          :href="service === 'webDevelopment' ? 'https://memory.pp.ua/' : 'https://castle.starkon.pp.ua/'"
          target="_blank"
          :style="`--delay: ${600 + index * 200}ms; --initial-state: 0;`"
        >
          <i :class="[services[service].icon, 'text-custom-orange text-3xl mb-4']"></i>
          <h2 class="text-custom-white text-xl mb-2">
            {{ t(`home.services.${service}.title`) }}
          </h2>
          <p class="text-custom-gray">
            {{ t(`home.services.${service}.description`) }}
          </p>
        </a>
      </div>
    </div>

    <!-- Модальное окно -->
    <div
      v-if="isModalOpen"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-500"
      :class="{ 'backdrop-blur-sm': isModalOpen }"
    >
      <div
        class="bg-[#090402] p-8 rounded-lg border border-[#5C5C5C] max-w-md w-full transition-transform duration-500 transform scale-95 opacity-0"
        :class="{ 'opacity-100 transform scale-100': isModalOpen }"
      >
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-xl font-space-grotesk text-[#F5F5F5]">{{ modalTitle }}</h2>
          <button aria-label="закрити">
            @click="closeModal" class="text-[#A39F9D] hover:text-[#FF5500]">
            <i class="fas fa-times"></i>
          </button>
        </div>
        <form v-if="!isFormSubmitted" @submit.prevent="submitForm" class="space-y-4">
          <div>
            <label class="block text-[#A39F9D] mb-2">{{ t('home.form.name') }}</label>
            <input
              v-model="form.name"
              name="name"
              type="text"
              required
              class="w-full bg-[#1C1C1C] text-[#F5F5F5] px-4 py-2 rounded-lg border border-[#5C5C5C] focus:outline-none focus:border-[#FF5500]"
            />
          </div>
          <div>
            <label class="block text-[#A39F9D] mb-2">{{ t('home.form.email') }}</label>
            <input
              v-model="form.email"
              type="email"
              class="w-full bg-[#1C1C1C] text-[#F5F5F5] px-4 py-2 rounded-lg border border-[#5C5C5C] focus:outline-none focus:border-[#FF5500]"
              required
              @blur="isFormTouched = true"
            />
            <p v-if="isFormTouched && !isEmailValid" class="text-red-500 text-sm mt-1">
              {{ t('home.form.email_error') }}
            </p>
          </div>
          <div>
            <label class="block text-[#A39F9D] mb-2">{{ t('home.form.phone') }}</label>
            <input
              v-model="form.phone"
              type="tel"
              placeholder="380987654321"
              class="w-full bg-[#1C1C1C] text-[#F5F5F5] px-4 py-2 rounded-lg border border-[#5C5C5C] focus:outline-none focus:border-[#FF5500]"
              required
              @blur="isFormTouched = true"
            />
            <p v-if="isFormTouched && !isPhoneValid" class="text-red-500 text-sm mt-1">
              {{ t('home.form.phone_error') }}
            </p>
          </div>
          <div>
            <label class="block text-[#A39F9D] mb-2">{{ t('home.form.services.title') }}</label>
            <select
              v-model="form.service"
              name="service"
              required
              @blur="isFormTouched = true"
              class="w-full bg-[#1C1C1C] text-[#F5F5F5] px-4 py-2 rounded-lg border border-[#5C5C5C] focus:outline-none focus:border-[#FF5500]"
            >
              <option value="">{{ t('home.form.services.placeholder') }}</option>
              <option value="website">{{ t('home.form.services.development') }}</option>
              <option value="360">{{ t('home.form.services.photo360') }}</option>
              <option value="virtual-tour">{{ t('home.form.services.virtualTours') }}</option>
              <option value="360">{{ t('home.form.services.other') }}</option>
            </select>
            <p v-if="isFormTouched && !isServiceValid" class="text-red-500 text-sm mt-1">
              {{ t('home.form.services.error') }}
            </p>
          </div>
          <div>
            <label class="block text-[#A39F9D] mb-2">{{ t('home.form.message') }}</label>
            <textarea
              v-model="form.message"
              name="message"
              class="w-full bg-[#1C1C1C] text-[#F5F5F5] px-4 py-2 rounded-lg border border-[#5C5C5C] focus:outline-none focus:border-[#FF5500] h-32"
            ></textarea>
          </div>
          <button
            aria-label="submit form"
            type="submit"
            class="w-full bg-[#FF5500] text-[#F5F5F5] py-3 rounded-full hover:bg-[#5C5C5C] transition-colors"
            :disabled="!isFormValid"
          >
            {{ t('home.form.submit') }}
          </button>
        </form>
        <div v-else class="text-center">
          <p class="text-[#F5F5F5] text-lg">{{ successMessage }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';
import { useI18n } from 'vue-i18n';
import { useAnimationStore } from '~/stores/animation';

const { t } = useI18n();
const animationStore = useAnimationStore();

// ID секции для хранения в Pinia
const SECTION_ID = 'home-section';

// Доступные услуги
const services = {
  webDevelopment: { icon: 'fas fa-code' },
  photo360: { icon: 'fas fa-camera' },
  virtualTours: { icon: 'fas fa-vr-cardboard' },
};
const serviceKeys = Object.keys(services);

// Рефы для элементов
const titleRef = ref(null);
const textRef1 = ref(null);
const textRef2 = ref(null);
const buttonRef = ref(null);
const serviceRefs = ref([]);

// Фон секции
const backgroundStyle = {
  backgroundImage: `linear-gradient(to bottom, rgba(9, 4, 2, 0.4), rgba(0, 0, 0, 1)), url(/img/pexels-buro-millennial.jpg)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

// Установка CSS переменной --initial-state для анимированных элементов
const setElementInitialState = (el, value) => {
  if (el) {
    el.style.setProperty('--initial-state', value);
  }
};

// Создаем и настраиваем Intersection Observer
const setupIntersectionObserver = () => {
  // Проверяем, была ли секция уже анимирована через Pinia
  const alreadyAnimated = animationStore.isSectionAnimated(SECTION_ID);

  if (alreadyAnimated) {
    // Если уже анимирована, устанавливаем начальное состояние в 1 для всех элементов
    setElementInitialState(titleRef.value, 1);
    setElementInitialState(textRef1.value, 1);
    setElementInitialState(textRef2.value, 1);
    setElementInitialState(buttonRef.value, 1);
    serviceRefs.value.forEach((ref) => {
      setElementInitialState(ref, 1);
    });
    return null; // Не создаем observer
  }

  const options = {
    root: null,
    rootMargin: '0px 0px -20% 0px', // Триггер когда элемент выше нижней 1/5 экрана
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    let allVisible = true;
    let hasIntersectingElements = false;

    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        hasIntersectingElements = true;
        // Устанавливаем CSS переменную для запуска анимации
        setElementInitialState(entry.target, 1);

        // Отключаем наблюдение за элементом после его появления
        observer.unobserve(entry.target);
      } else {
        allVisible = false;
      }
    });

    // Если все наблюдаемые элементы стали видимыми или хотя бы один стал видимым и больше нет наблюдаемых элементов
    if ((allVisible && hasIntersectingElements) || document.querySelectorAll('.animate-fade-in').length === 0) {
      // Сохраняем состояние в Pinia
      animationStore.setSectionAnimated(SECTION_ID);
    }
  }, options);

  // Наблюдаем за всеми элементами
  if (titleRef.value) observer.observe(titleRef.value);
  if (textRef1.value) observer.observe(textRef1.value);
  if (textRef2.value) observer.observe(textRef2.value);
  if (buttonRef.value) observer.observe(buttonRef.value);

  serviceRefs.value.forEach((ref) => {
    if (ref) observer.observe(ref);
  });

  return observer;
};

let observer = null;

onMounted(() => {
  // Дожидаемся следующего тика рендеринга, чтобы рефы были доступны
  nextTick(() => {
    observer = setupIntersectionObserver();

    // Обработчик для навигации (если вы используете router)
    window.addEventListener('popstate', () => {
      if (observer) {
        observer.disconnect();
      }
      observer = setupIntersectionObserver();
    });
  });
});

const form = ref({
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
});

const isModalOpen = ref(false);
const isFormSubmitted = ref(false);
const isFormTouched = ref(false);
const modalTitle = computed(() =>
  isFormSubmitted.value ? t('home.form.modalTitleSubmitted') : t('home.form.modalTitleOrder'),
);
const successMessage = t('home.form.successMessage');

const isEmailValid = computed(() => {
  return isFormTouched.value && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email);
});
const isPhoneValid = computed(() => {
  return isFormTouched.value && /^\+380\d{9}$|^0\d{9}$|^\d{9}$/.test(form.value.phone);
});
const isServiceValid = computed(() => {
  return isFormTouched.value && form.value.service !== '';
});

const isFormValid = computed(() => isEmailValid.value && isPhoneValid.value && isServiceValid.value);

const openModal = () => (isModalOpen.value = true);
const closeModal = () => {
  isModalOpen.value = false;
  isFormSubmitted.value = false;
  form.value = { name: '', email: '', phone: '', service: '', message: '' }; // Очистка формы
};

async function submitForm() {
  isFormTouched.value = true;
  if (!isFormValid.value) return; // Если форма не валидна, не отправляем

  try {
    const response = await fetch('/api/telegram', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: `Нове замовлення: 
- Ім'я: ${form.value.name}
- Email: ${form.value.email}
- Телефон: ${form.value.phone}
- Послуга: ${form.value.service}
- Повідомлення: ${form.value.message}`,
      }),
    });

    const result = await response.json();
    if (result.ok) {
      isFormSubmitted.value = true; // Успешная отправка
    } else {
      console.error('Ошибка:', result);
      alert(t('home.form.errorMessage'));
    }
  } catch (error) {
    console.error('Ошибка:', error);
    alert(t('home.form.errorMessage'));
  }
}
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
</style>
