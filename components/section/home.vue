<template>
  <section id="home" class="h-[900px] relative flex items-center">
    <div class="absolute inset-0" :style="backgroundStyle"></div>
    <div class="container mx-auto text-center relative z-10 px-4">
      <h1
        ref="titleRef"
        class="title-block text-4xl md:text-6xl font-space-grotesk mb-6 bg-gradient-to-b from-custom-gray to-custom-white text-transparent bg-clip-text"
      >
        IT-рішення для вашого бізнесу
      </h1>
      <p ref="textRef" class="text-block text-xl mb-8 text-custom-gray">
        Професійна розробка сайтів, 360° зйомка та створення віртуальних турів.
        <br />
        Особливі умови для ветеранів та ВПО.
      </p>
      <button
        ref="buttonRef"
        class="button-block bg-custom-orange text-custom-white px-8 py-3 rounded-full hover:bg-custom-border transition-colors"
      >
        Замовити послугу
      </button>
      <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="(service, index) in services"
          :key="index"
          :ref="(el) => (serviceRefs[index] = el)"
          class="service-block bg-[#1C1C1C] p-6 rounded-lg hover:bg-custom-dark hover:shadow-lg transition-all duration-300"
        >
          <i :class="[service.icon, 'text-custom-orange text-3xl mb-4']"></i>
          <h3 class="text-custom-white text-xl mb-2">{{ service.title }}</h3>
          <p class="text-custom-gray">{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// Данные для карточек услуг
const services = [
  {
    title: 'Розробка сайтів',
    icon: 'fas fa-code',
    description: 'Створення сучасних веб-рішень для вашого бізнесу',
  },
  {
    title: '360° зйомка',
    icon: 'fas fa-camera',
    description: 'Професійна панорамна фотозйомка приміщень та територій',
  },
  {
    title: 'Віртуальні тури',
    icon: 'fas fa-vr-cardboard',
    description: 'Створення інтерактивних 3D-турів по вашим об’єктам',
  },
];

// Стиль фона
const backgroundStyle = {
  backgroundImage: `linear-gradient(to bottom, rgba(9, 4, 2, 0.4), rgba(0, 0, 0, 1)), url(https://ucarecdn.com/0bd7b53d-60eb-4db2-815e-e3d4f1d84b7f/-/format/auto/)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

// Refs для отслеживания элементов
const titleRef = ref(null);
const textRef = ref(null);
const buttonRef = ref(null);
const serviceRefs = ref([]);

// Настройка анимации при загрузке
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === titleRef.value) {
            entry.target.classList.add('animate-scale-in');
            setTimeout(() => {
              if (textRef.value) textRef.value.classList.add('animate-scale-in');
              if (buttonRef.value) buttonRef.value.classList.add('animate-scale-in');
            }, 300); // Задержка 0.3s для текста и кнопки
            setTimeout(() => {
              serviceRefs.value.forEach((el) => {
                if (el) el.classList.add('animate-scale-in');
              });
            }, 600); // Задержка 0.6s для карточек
          }
          observer.unobserve(entry.target); // Останавливаем наблюдение после анимации
        }
      });
    },
    {
      rootMargin: '0px 0px -15% 0px', // Анимация в нижних 15% экрана
      threshold: 0.1, // Срабатывает, когда видно 10% элемента
    },
  );

  // Наблюдаем только за заголовком, чтобы запустить последовательность
  if (titleRef.value) observer.observe(titleRef.value);

  onUnmounted(() => {
    if (titleRef.value) observer.unobserve(titleRef.value);
  });
});
</script>

<style scoped>
/* Анимация масштабирования */
.animate-scale-in {
  animation: scaleIn 1s ease-out forwards; /* Увеличена длительность до 1s для плавности */
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

/* Начальное состояние для элементов перед анимацией */
.title-block,
.text-block,
.button-block,
.service-block {
  transform: scale(0);
  opacity: 0;
}
</style>
