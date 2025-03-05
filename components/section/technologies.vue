<template>
  <section id="technologies" class="py-12 px-4 bg-custom-dark">
    <div class="container mx-auto">
      <h2
        ref="titleRef"
        class="title-block text-3xl font-space-grotesk text-center mb-12 bg-gradient-to-b from-custom-gray to-custom-white text-transparent bg-clip-text"
      >
        Технології, які ми використовуємо
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Frontend -->
        <div ref="frontendRef" class="category-block space-y-8">
          <h3 class="text-xl font-space-grotesk text-custom-orange mb-6">Frontend</h3>
          <div class="space-y-6">
            <div
              v-for="(tech, index) in frontendTechs"
              :key="index"
              :ref="(el) => (techRefs[index] = el)"
              class="tech-block bg-[#090402] p-6 rounded-lg border border-custom-border transition-all duration-300 hover:-translate-y-2 hover:border-custom-orange"
            >
              <div class="flex items-center mb-4">
                <i :class="[tech.icon, 'text-4xl text-custom-orange mr-4']"></i>
                <h4 class="text-custom-white">{{ tech.name }}</h4>
              </div>
              <p class="text-custom-gray">{{ tech.description }}</p>
            </div>
          </div>
        </div>

        <!-- Backend -->
        <div ref="backendRef" class="category-block space-y-8">
          <h3 class="text-xl font-space-grotesk text-custom-orange mb-6">Backend</h3>
          <div class="space-y-6">
            <div
              v-for="(tech, index) in backendTechs"
              :key="index"
              :ref="(el) => (techRefs[frontendTechs.length + index] = el)"
              class="tech-block bg-[#090402] p-6 rounded-lg border border-custom-border transition-all duration-300 hover:-translate-y-2 hover:border-custom-orange"
            >
              <div class="flex items-center mb-4">
                <i :class="[tech.icon, 'text-4xl text-custom-orange mr-4']"></i>
                <h4 class="text-custom-white">{{ tech.name }}</h4>
              </div>
              <p class="text-custom-gray">{{ tech.description }}</p>
            </div>
          </div>
        </div>

        <!-- Хмарні сервіси -->
        <div ref="cloudRef" class="category-block space-y-8">
          <h3 class="text-xl font-space-grotesk text-custom-orange mb-6">Хмарні сервіси</h3>
          <div class="space-y-6">
            <div
              v-for="(tech, index) in cloudTechs"
              :key="index"
              :ref="(el) => (techRefs[frontendTechs.length + backendTechs.length + index] = el)"
              class="tech-block bg-[#090402] p-6 rounded-lg border border-custom-border transition-all duration-300 hover:-translate-y-2 hover:border-custom-orange"
            >
              <div class="flex items-center mb-4">
                <i :class="[tech.icon, 'text-4xl text-custom-orange mr-4']"></i>
                <h4 class="text-custom-white">{{ tech.name }}</h4>
              </div>
              <p class="text-custom-gray">{{ tech.description }}</p>
            </div>
          </div>
        </div>

        <!-- Інструменти та платежі -->
        <div ref="toolsRef" class="category-block space-y-8">
          <h3 class="text-xl font-space-grotesk text-custom-orange mb-6">Інструменти та платежі</h3>
          <div class="space-y-6">
            <div
              v-for="(tech, index) in toolsTechs"
              :key="index"
              :ref="(el) => (techRefs[frontendTechs.length + backendTechs.length + cloudTechs.length + index] = el)"
              class="tech-block bg-[#090402] p-6 rounded-lg border border-custom-border transition-all duration-300 hover:-translate-y-2 hover:border-custom-orange"
            >
              <div class="flex items-center mb-4">
                <i :class="[tech.icon, 'text-4xl text-custom-orange mr-4']"></i>
                <h4 class="text-custom-white">{{ tech.name }}</h4>
              </div>
              <p class="text-custom-gray">{{ tech.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// Данные технологий
const frontendTechs = [
  {
    name: 'React/Next.js',
    icon: 'fab fa-react',
    description: 'Потужні фреймворки для створення SEO-оптимізованих додатків',
  },
  { name: 'Vue.js/Nuxt', icon: 'fab fa-vuejs', description: 'Прогресивні фреймворки для швидкої розробки' },
  { name: 'PWA', icon: 'fas fa-mobile-alt', description: 'Прогресивні веб-додатки з офлайн підтримкою' },
  { name: 'TailwindCSS', icon: 'fab fa-css3', description: 'Гнучка система стилізації для адаптивного дизайну' },
  { name: 'TypeScript', icon: 'fas fa-code', description: 'Надійна та безпечна розробка' },
  { name: 'Leaflet', icon: 'fas fa-map-marked-alt', description: 'Інтерактивні карти та геолокація' },
];

const backendTechs = [
  { name: 'Node.js', icon: 'fab fa-node-js', description: 'Швидкий та масштабований серверний runtime' },
  {
    name: 'NestJS',
    icon: 'fas fa-server',
    description: 'Прогресивний Node.js фреймворк для побудови ефективних серверних додатків',
  },
  { name: 'PostgreSQL', icon: 'fas fa-database', description: 'Надійна база даних для складних проектів' },
  { name: 'MySQL', icon: 'fas fa-database', description: 'Популярна реляційна база даних для веб-додатків' },
  { name: 'Swagger', icon: 'fas fa-file-code', description: 'Автоматична документація API та тестування' },
  { name: 'Docker', icon: 'fab fa-docker', description: 'Контейнеризація для стабільного розгортання' },
];

const cloudTechs = [
  { name: 'AWS', icon: 'fab fa-aws', description: 'Масштабована хмарна інфраструктура' },
  { name: 'Azure', icon: 'fab fa-microsoft', description: 'Корпоративні хмарні рішення від Microsoft' },
  { name: 'Google Cloud', icon: 'fab fa-google', description: 'Інноваційні хмарні технології та workspace' },
  { name: 'Oracle Cloud', icon: 'fas fa-cloud', description: 'Надійні корпоративні рішення' },
  { name: 'Cloudflare', icon: 'fas fa-shield-alt', description: 'Захист та оптимізація продуктивності сайту' },
];

const toolsTechs = [
  { name: 'WordPress', icon: 'fab fa-wordpress', description: 'Гнучка система управління контентом' },
  { name: 'Git', icon: 'fab fa-git-alt', description: 'Контроль версій та командна робота' },
  { name: 'Figma', icon: 'fas fa-pencil-ruler', description: 'Сучасний дизайн та прототипування' },
  { name: 'LiqPay', icon: 'fas fa-credit-card', description: 'Безпечні платежі для українського бізнесу' },
  { name: 'OAuth 2.0', icon: 'fas fa-lock', description: 'Безпечна авторизація та автентифікація' },
  { name: 'ESLint/Prettier', icon: 'fas fa-code', description: 'Стандартизація та форматування коду' },
];

// Refs для отслеживания элементов
const titleRef = ref(null);
const frontendRef = ref(null);
const backendRef = ref(null);
const cloudRef = ref(null);
const toolsRef = ref(null);
const techRefs = ref([]);

// Настройка IntersectionObserver
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === titleRef.value) {
            entry.target.classList.add('animate-scale-in');
            setTimeout(() => {
              if (frontendRef.value) frontendRef.value.classList.add('animate-scale-in');
              if (backendRef.value) backendRef.value.classList.add('animate-scale-in');
              if (cloudRef.value) cloudRef.value.classList.add('animate-scale-in');
              if (toolsRef.value) toolsRef.value.classList.add('animate-scale-in');
            }, 300); // Задержка 0.3s для подзаголовков
          } else {
            entry.target.classList.add('animate-scale-in');
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

  // Наблюдаем за заголовком, подзаголовками и карточками
  if (titleRef.value) observer.observe(titleRef.value);
  if (frontendRef.value) observer.observe(frontendRef.value);
  if (backendRef.value) observer.observe(backendRef.value);
  if (cloudRef.value) observer.observe(cloudRef.value);
  if (toolsRef.value) observer.observe(toolsRef.value);
  techRefs.value.forEach((el) => {
    if (el) observer.observe(el);
  });

  onUnmounted(() => {
    if (titleRef.value) observer.unobserve(titleRef.value);
    if (frontendRef.value) observer.unobserve(frontendRef.value);
    if (backendRef.value) observer.unobserve(backendRef.value);
    if (cloudRef.value) observer.unobserve(cloudRef.value);
    if (toolsRef.value) observer.unobserve(toolsRef.value);
    techRefs.value.forEach((el) => {
      if (el) observer.unobserve(el);
    });
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
.category-block,
.tech-block {
  transform: scale(0);
  opacity: 0;
}
</style>
