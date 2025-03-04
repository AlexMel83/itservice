<!-- components/MainComponent.vue -->
<template>
  <div class="min-h-screen bg-custom-black font-inter">
    <nav class="bg-custom-black text-custom-white p-4 fixed w-full z-50 border-b border-custom-border">
      <div class="container mx-auto flex justify-between items-center">
        <NuxtLink
          to="/#home"
          class="text-xl font-space-grotesk hover:text-custom-orange transition-colors"
          @click.prevent="scrollToSection('#home')"
        >
          IT-Starkon
        </NuxtLink>

        <div class="hidden md:flex items-center space-x-6">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.id"
            :to="`#${link.id}`"
            :class="['hover:text-custom-orange transition-colors', { 'text-custom-orange': activeSection === link.id }]"
            @click.prevent="scrollToSection(link.id)"
          >
            {{ link.text }}
          </NuxtLink>

          <div class="relative">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Поиск..."
              class="bg-[#1C1C1C] text-custom-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-custom-orange"
            />
            <i class="fas fa-search absolute right-3 top-1/2 transform -translate-y-1/2 text-custom-gray"></i>
          </div>
        </div>

        <button @click="isMenuOpen = !isMenuOpen" class="md:hidden text-custom-orange">
          <i class="fas fa-bars text-2xl"></i>
        </button>
      </div>

      <div
        v-if="isMenuOpen"
        class="md:hidden absolute top-full left-0 right-0 bg-custom-black border-b border-custom-border p-4"
      >
        <div class="mb-4">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Пошук..."
            class="w-full bg-[#1C1C1C] text-custom-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-custom-orange"
          />
        </div>
        <NuxtLink
          v-for="link in navLinks"
          :key="link.id"
          :to="`#${link.id}`"
          :class="[
            'block py-2 hover:text-custom-orange transition-colors',
            { 'text-custom-orange': activeSection === link.id },
          ]"
          @click="isMenuOpen = false"
        >
          {{ link.text }}
        </NuxtLink>
      </div>
    </nav>

    <section id="home" class="h-[900px] relative flex items-center">
      <div class="absolute inset-0" :style="backgroundStyle"></div>
      <div class="container mx-auto text-center relative z-10 px-4">
        <h1
          class="text-4xl md:text-6xl font-space-grotesk mb-6 bg-gradient-to-b from-custom-gray to-custom-white text-transparent bg-clip-text"
        >
          IT-рішення для вашого бізнесу
        </h1>
        <p class="text-xl mb-8 text-custom-gray">
          Професійна розробка сайтів, 360° зйомка та створення віртуальних турів.
          <br />
          Особливі умови для ветеранів та ВПО.
        </p>
        <button
          class="bg-custom-orange text-custom-white px-8 py-3 rounded-full hover:bg-custom-border transition-colors"
        >
          Замовити послугу
        </button>
        <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-[#1C1C1C] p-6 rounded-lg">
            <i class="fas fa-code text-custom-orange text-3xl mb-4"></i>
            <h3 class="text-custom-white text-xl mb-2">Розробка сайтів</h3>
            <p class="text-custom-gray">Створення сучасних веб-рішень для вашого бізнесу</p>
          </div>
          <div class="bg-[#1C1C1C] p-6 rounded-lg">
            <i class="fas fa-camera text-custom-orange text-3xl mb-4"></i>
            <h3 class="text-custom-white text-xl mb-2">360° зйомка</h3>
            <p class="text-custom-gray">Професійна панорамна фотозйомка приміщень та територій</p>
          </div>
          <div class="bg-[#1C1C1C] p-6 rounded-lg">
            <i class="fas fa-vr-cardboard text-custom-orange text-3xl mb-4"></i>
            <h3 class="text-custom-white text-xl mb-2">Віртуальні тури</h3>
            <p class="text-custom-gray">Створення інтерактивних 3D-турів по вашим об'єктам</p>
          </div>
        </div>
      </div>
    </section>

    <section id="solutions" class="py-12 px-4 bg-custom-dark">
      <div class="container mx-auto">
        <h2
          class="text-3xl font-space-grotesk text-center mb-12 bg-gradient-to-b from-custom-gray to-custom-white text-transparent bg-clip-text"
        >
          Compare Our Solutions
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Traditional Learning -->
          <div class="bg-custom-black p-8 rounded-lg border border-custom-border animate-slide-up">
            <div class="flex flex-col items-center mb-6">
              <div class="relative">
                <i class="fas fa-chalkboard text-4xl text-custom-gray mb-4"></i>
                <div class="absolute -top-1 -right-1 w-2 h-2 bg-custom-orange rounded-full animate-pulse"></div>
              </div>
              <h3 class="text-xl font-space-grotesk text-custom-white">Traditional Learning</h3>
            </div>
            <ul class="space-y-4 text-custom-gray">
              <li class="flex items-start">
                <i class="fas fa-times text-custom-orange mt-1 mr-3"></i>
                <span>Fixed schedules and rigid learning paths</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-times text-custom-orange mt-1 mr-3"></i>
                <span>Limited access to learning resources</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-times text-custom-orange mt-1 mr-3"></i>
                <span>One-size-fits-all teaching approach</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-times text-custom-orange mt-1 mr-3"></i>
                <span>Minimal hands-on project experience</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-times text-custom-orange mt-1 mr-3"></i>
                <span>Limited industry networking opportunities</span>
              </li>
            </ul>
          </div>

          <!-- Our Online Platform -->
          <div
            class="bg-gradient-to-b from-custom-dark to-[#2E2927] text-custom-white p-8 rounded-lg border border-[#2C2722] animate-slide-up-delayed"
          >
            <div class="flex flex-col items-center mb-6">
              <div class="relative">
                <i class="fas fa-laptop-code text-4xl text-custom-orange mb-4"></i>
                <div class="absolute -top-1 -right-1 w-2 h-2 bg-custom-orange rounded-full animate-pulse"></div>
              </div>
              <h3 class="text-xl font-space-grotesk">Our Online Platform</h3>
            </div>
            <ul class="space-y-4">
              <li class="flex items-start">
                <i class="fas fa-check text-custom-orange mt-1 mr-3"></i>
                <span>Learn at your own pace, anytime</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-check text-custom-orange mt-1 mr-3"></i>
                <span>Unlimited access to course materials</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-check text-custom-orange mt-1 mr-3"></i>
                <span>Personalized learning experience</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-check text-custom-orange mt-1 mr-3"></i>
                <span>Real-world project portfolio</span>
              </li>
              <li class="flex items-start">
                <i class="fas fa-check text-custom-orange mt-1 mr-3"></i>
                <span>Active tech community network</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section id="pricing" class="py-12 px-4">
      <div class="container mx-auto">
        <h2
          class="text-3xl font-space-grotesk text-center mb-12 bg-gradient-to-b from-custom-gray to-custom-white text-transparent bg-clip-text"
        >
          Choose Your Learning Path
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Starter -->
          <div class="bg-custom-black p-8 rounded-lg border border-custom-border animate-slide-up">
            <h3 class="text-xl font-space-grotesk text-center mb-4 text-custom-white">Starter</h3>
            <div class="text-center mb-6">
              <span class="text-4xl font-bold text-custom-white">$29</span>
              <span class="text-custom-gray">/month</span>
            </div>
            <ul class="space-y-3 mb-8 text-custom-gray">
              <li class="flex items-center">
                <i class="fas fa-check text-custom-orange mr-2"></i>
                <span>Access to Basic Courses</span>
              </li>
              <li class="flex items-center">
                <i class="fas fa-check text-custom-orange mr-2"></i>
                <span>Community Support</span>
              </li>
              <li class="flex items-center">
                <i class="fas fa-check text-custom-orange mr-2"></i>
                <span>Basic Projects</span>
              </li>
            </ul>
            <button
              class="w-full bg-custom-orange text-custom-white py-3 rounded-full hover:bg-custom-border transition-colors"
            >
              Start Learning
            </button>
          </div>

          <!-- Professional -->
          <div
            class="bg-gradient-to-b from-custom-dark to-[#2E2927] p-8 rounded-lg border border-[#2C2722] relative animate-slide-up-delayed-02"
          >
            <div
              class="absolute -top-3 right-4 bg-gradient-to-b from-custom-dark to-[#2E2927] text-custom-orange text-xs font-bold px-3 py-1 rounded-full border border-custom-orange animate-pulse"
            >
              MOST POPULAR
            </div>
            <h3 class="text-xl font-space-grotesk text-center mb-4 text-custom-white">Professional</h3>
            <div class="text-center mb-6">
              <span class="text-4xl font-bold text-custom-white">$59</span>
              <span class="text-custom-gray">/month</span>
            </div>
            <ul class="space-y-3 mb-8 text-custom-gray">
              <li class="flex items-center">
                <i class="fas fa-check text-custom-orange mr-2"></i>
                <span>All Starter Features</span>
              </li>
              <li class="flex items-center">
                <i class="fas fa-check text-custom-orange mr-2"></i>
                <span>Advanced Courses</span>
              </li>
              <li class="flex items-center">
                <i class="fas fa-check text-custom-orange mr-2"></i>
                <span>1-on-1 Mentoring</span>
              </li>
              <li class="flex items-center">
                <i class="fas fa-check text-custom-orange mr-2"></i>
                <span>Real-world Projects</span>
              </li>
            </ul>
            <button
              class="w-full bg-custom-orange text-custom-white py-3 rounded-full hover:bg-custom-border transition-colors"
            >
              Start Learning
            </button>
          </div>

          <!-- Enterprise -->
          <div class="bg-custom-black p-8 rounded-lg border border-custom-border animate-slide-up-delayed-04">
            <h3 class="text-xl font-space-grotesk text-center mb-4 text-custom-white">Enterprise</h3>
            <div class="text-center mb-6">
              <span class="text-4xl font-bold text-custom-white">Custom</span>
            </div>
            <ul class="space-y-3 mb-8 text-custom-gray">
              <li class="flex items-center">
                <i class="fas fa-check text-custom-orange mr-2"></i>
                <span>All Professional Features</span>
              </li>
              <li class="flex items-center">
                <i class="fas fa-check text-custom-orange mr-2"></i>
                <span>Custom Learning Paths</span>
              </li>
              <li class="flex items-center">
                <i class="fas fa-check text-custom-orange mr-2"></i>
                <span>Team Management</span>
              </li>
              <li class="flex items-center">
                <i class="fas fa-check text-custom-orange mr-2"></i>
                <span>Dedicated Support</span>
              </li>
            </ul>
            <button
              class="w-full bg-custom-orange text-custom-white py-3 rounded-full hover:bg-custom-border transition-colors"
            >
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>

    <section id="about" class="py-12 px-4">
      <div class="container mx-auto">
        <h2
          class="text-3xl font-space-grotesk text-center mb-12 bg-gradient-to-b from-custom-gray to-custom-white text-transparent bg-clip-text"
        >
          About Us
        </h2>
        <div class="flex flex-col md:flex-row items-stretch gap-8">
          <div class="md:w-1/2 flex h-[400px]">
            <img
              src="https://ucarecdn.com/d7edf35c-4872-4871-a068-5047b93b13ea/-/format/auto/"
              alt="Team of experienced developers and instructors collaborating on course content"
              class="rounded-lg border border-custom-border w-full object-cover object-[center_100%]"
            />
          </div>
          <div
            class="md:w-1/2 flex flex-col justify-center bg-gradient-to-b from-custom-dark to-[#2E2927] p-8 rounded-lg border border-[#2C2722]"
          >
            <p class="text-custom-gray text-sm mb-4">
              At TechEd Pro, we're passionate about making technology education accessible to everyone. Our platform
              combines cutting-edge learning technology with expert-led instruction to create an engaging and effective
              learning experience.
            </p>
            <p class="text-custom-gray text-sm mb-4">
              Our team of industry professionals and educators work together to develop comprehensive, up-to-date
              curricula that reflect the latest trends and best practices in tech. We believe in learning by doing,
              which is why our courses emphasize hands-on projects and real-world applications.
            </p>
            <p class="text-custom-gray text-sm">
              With thousands of successful students worldwide, we've proven that our approach to online tech education
              works. Whether you're starting from scratch or advancing your skills, our flexible learning platform and
              supportive community are here to help you achieve your goals in tech.
            </p>
          </div>
        </div>
      </div>
    </section>

    <footer id="contacts" class="bg-custom-black text-custom-white py-8 border-t border-custom-border">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="space-y-4">
            <h3
              class="text-xl font-space-grotesk mb-4 bg-gradient-to-b from-custom-gray to-custom-white text-transparent bg-clip-text"
            >
              Контактна інформація
            </h3>
            <NuxtLink
              to="https://www.google.com/maps/dir/?api=1&destination=49.738124,27.253337"
              target="_blank"
              rel="noopener noreferrer"
              class="text-custom-gray flex items-center"
            >
              <i class="fas fa-map-marker-alt mr-2 text-custom-orange"></i>
              вул. Меджибижська, 11, Старокостянтинів,
            </NuxtLink>
            <NuxtLink
              to="tel:+380954664190"
              target="_blank"
              rel="noopener noreferrer"
              class="text-custom-gray flex items-center"
            >
              <i class="fas fa-phone mr-2 text-custom-orange"></i>
              +38 (095) 466-41-90
            </NuxtLink>
            <NuxtLink
              to="mailto:it@starkon.pp.ua"
              target="_blank"
              rel="noopener noreferrer"
              class="text-custom-gray flex items-center"
            >
              <i class="fas fa-envelope mr-2 text-custom-orange"></i>
              it@starkon.pp.ua
            </NuxtLink>
            <div class="flex space-x-6 mt-4">
              <NuxtLink
                to="viber://chat?number=%2B380954664190"
                target="_blank"
                rel="noopener noreferrer"
                class="text-custom-gray hover:text-custom-orange transition-colors"
              >
                <i class="fab fa-viber text-2xl"></i>
              </NuxtLink>
              <NuxtLink
                to="https://t.me/+380954664190"
                target="_blank"
                rel="noopener noreferrer"
                class="text-custom-gray hover:text-custom-orange transition-colors"
              >
                <i class="fab fa-telegram text-2xl"></i>
              </NuxtLink>
              <NuxtLink
                to="https://wa.me/380954664190"
                target="_blank"
                rel="noopener noreferrer"
                class="text-custom-gray hover:text-custom-orange transition-colors"
              >
                <i class="fab fa-whatsapp text-2xl"></i>
              </NuxtLink>
              <NuxtLink
                to="https://m.me/380954664190"
                target="_blank"
                rel="noopener noreferrer"
                class="text-custom-gray hover:text-custom-orange transition-colors"
              >
                <i class="fab fa-facebook-messenger text-2xl"></i>
              </NuxtLink>
            </div>
          </div>

          <div class="h-[300px] w-full">
            <div ref="mapRef" class="w-full h-full rounded-lg border border-custom-border"></div>
          </div>
        </div>

        <div class="text-center mt-8 pt-8 border-t border-custom-border">
          <p class="text-custom-gray">© 2025 IT-Starkon. Всі права захищені.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isMenuOpen = ref(false);
49.75447, 27.203795;
const center = ref({ lat: 49.75447, lng: 27.203795 });
const activeSection = ref('');
const searchQuery = ref('');
const mapRef = ref(null);

const navLinks = [
  { id: 'home', text: 'Головна' },
  { id: 'solutions', text: 'Послуги' },
  { id: 'pricing', text: 'Ціни' },
  { id: 'about', text: 'Про нас' },
  { id: 'contacts', text: 'Контакти' },
];

const backgroundStyle = {
  backgroundImage: `linear-gradient(to bottom, rgba(9, 4, 2, 0.4), rgba(0, 0, 0, 1)), url(https://ucarecdn.com/0bd7b53d-60eb-4db2-815e-e3d4f1d84b7f/-/format/auto/)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    isMenuOpen.value = false;
  }
};

const loadGoogleMapsScript = () => {
  return new Promise((resolve, reject) => {
    if (window.google && window.google.maps && window.google.maps.marker) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${useRuntimeConfig().public.googleMapsApiKey}&loading=async&libraries=places,marker&callback=initMap`;
    script.async = true;
    script.defer = true;
    script.onerror = () => reject(new Error('Google Maps script failed to load'));
    window.initMap = resolve;
    document.head.appendChild(script);
  });
};

onMounted(() => {
  let observer;

  const cleanup = () => {
    if (timer) clearInterval(timer);
    if (observer) observer.disconnect();
    if (window.initMap) delete window.initMap;
  };
  onUnmounted(cleanup);

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id;
        }
      });
    },
    { threshold: 0.2 },
  );

  document.querySelectorAll('[id]').forEach((element) => {
    observer.observe(element);
  });

  loadGoogleMapsScript()
    .then(() => {
      const map = new google.maps.Map(mapRef.value, {
        center: center.value,
        zoom: 14,
        mapId: 'e97b831045a3df9f',
        mapTypeId: 'roadmap',
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        mapTypeControlOptions: {
          mapTypeIds: ['roadmap'],
        },
      });

      new google.maps.marker.AdvancedMarkerElement({
        position: center.value,
        map: map,
      });
    })
    .catch((error) => {
      console.error('Failed to load Google Maps:', error);
    });
});
</script>

<style scoped>
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
