<template>
  <section id="about" class="py-12 px-4">
    <div class="container mx-auto">
      <h2
        ref="titleRef"
        class="title-block text-3xl font-space-grotesk text-center mb-12 bg-gradient-to-b from-[#A39F9D] to-[#F5F5F5] text-transparent bg-clip-text"
      >
        Про нашу команду
      </h2>
      <div class="flex flex-col md:flex-row items-stretch gap-8">
        <div ref="aboutImageRef" class="about-block md:w-1/2 flex h-[400px]">
          <img
            src="https://ucarecdn.com/d7edf35c-4872-4871-a068-5047b93b13ea/-/format/auto/"
            alt="Наша команда розробників за роботою"
            class="rounded-lg border border-[#5C5C5C] w-full object-cover object-[center_100%]"
          />
        </div>
        <div
          ref="aboutTextRef"
          class="about-block md:w-1/2 flex flex-col justify-center bg-gradient-to-b from-[#080301] to-[#2E2927] p-8 rounded-lg border border-[#2C2722]"
        >
          <p class="text-[#A39F9D] text-sm mb-4">
            IT.Starkon - ваш локальний партнер у світі технологій в Хмельницькому районі. Базуючись у Старокостянтинові,
            ми забезпечуємо персональний підхід та постійний зв'язок з кожним клієнтом.
          </p>
          <p class="text-[#A39F9D] text-sm mb-4">
            Наша місія - створювати сучасні, доступні та ефективні цифрові рішення, які працюють на ваш бізнес 24/7. Ми
            не просто розробляємо сайти - ми будуємо надійні онлайн-платформи для вашого успіху.
          </p>
          <p class="text-[#A39F9D] text-sm">
            Ми завжди на зв'язку для консультацій та підтримки, готові оперативно вносити зміни в дизайн, контент та
            функціонал відповідно до ваших потреб. Інтегруємо найсучасніші технології, щоб ваш проект завжди був на крок
            попереду.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// Refs для отслеживания элементов
const titleRef = ref(null);
const aboutImageRef = ref(null);
const aboutTextRef = ref(null);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Последовательное добавление классов с задержкой
          if (entry.target === titleRef.value) {
            entry.target.classList.add('animate-scale-in');
            setTimeout(() => {
              if (aboutImageRef.value) aboutImageRef.value.classList.add('animate-scale-in');
              if (aboutTextRef.value) aboutTextRef.value.classList.add('animate-scale-in');
            }, 300); // Задержка 0.3s для блоков после заголовка
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
.about-block {
  transform: scale(0);
  opacity: 0;
}
</style>
