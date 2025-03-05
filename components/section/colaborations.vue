<template>
  <section id="collaboration" class="py-12 px-4 bg-custom-dark">
    <div class="container mx-auto">
      <h2
        ref="titleRef"
        class="title-block text-3xl font-space-grotesk text-center mb-8 bg-gradient-to-b from-custom-gray to-custom-white text-transparent bg-clip-text"
      >
        Запрошуємо до співпраці
      </h2>
      <div
        ref="collaborationRef"
        class="collaboration-block bg-gradient-to-b from-custom-dark to-[#2E2927] p-8 rounded-lg border border-[#2C2722] max-w-3xl mx-auto"
      >
        <p ref="textRef" class="text-block text-custom-gray text-lg mb-6 text-center">
          Шукаємо талановитих фахівців у Старокостянтинові для створення потужної локальної ІТ-спільноти та реалізації
          важливих соціальних проектів
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div ref="leftBlockRef" class="block-item p-4 border border-custom-border rounded-lg">
            <h3 class="text-custom-orange font-semibold mb-3">Кого ми шукаємо:</h3>
            <ul class="text-custom-gray space-y-2">
              <li>• UI/UX Дизайнерів</li>
              <li>• QA інженерів</li>
              <li>• Project Managers</li>
              <li>• Frontend/Backend розробників</li>
            </ul>
          </div>
          <div ref="rightBlockRef" class="block-item p-4 border border-custom-border rounded-lg">
            <h3 class="text-custom-orange font-semibold mb-3">Що ми пропонуємо:</h3>
            <ul class="text-custom-gray space-y-2">
              <li>• Дольову участь у проектах</li>
              <li>• Соціально важливі проекти</li>
              <li>• Командну розробку для швидшої реалізації</li>
              <li>• Зразкові проекти для портфоліо</li>
            </ul>
          </div>
        </div>
        <div class="text-center">
          <p class="text-custom-gray mb-4">Надсилайте ваші пропозиції та побажання на адресу:</p>
          <NuxtLink
            to="mailto:it@starkon.pp.ua?subject=співпраця"
            class="text-custom-orange hover:text-custom-orange transition-colors text-lg font-semibold"
          >
            it@starkon.pp.ua
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// Refs для отслеживания элементов
const titleRef = ref(null);
const textRef = ref(null);
const collaborationRef = ref(null);
const leftBlockRef = ref(null);
const rightBlockRef = ref(null);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Последовательное добавление классов с задержкой
          if (entry.target === titleRef.value) {
            entry.target.classList.add('animate-scale-in');
            setTimeout(() => {
              if (textRef.value) textRef.value.classList.add('animate-scale-in');
            }, 300); // Задержка 0.3s для текста
            setTimeout(() => {
              if (collaborationRef.value) {
                collaborationRef.value.classList.add('animate-scale-in');
                if (leftBlockRef.value) leftBlockRef.value.classList.add('animate-scale-in');
                if (rightBlockRef.value) rightBlockRef.value.classList.add('animate-scale-in');
              }
            }, 600); // Задержка 0.6s для блоков
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
.collaboration-block,
.block-item {
  transform: scale(0);
  opacity: 0;
}
</style>
