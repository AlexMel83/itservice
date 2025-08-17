<template>
  <footer id="contacts" class="bg-custom-black text-custom-white py-8 border-t border-custom-border relative">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="space-y-4">
          <h3
            class="text-xl font-space-grotesk mb-4 bg-gradient-to-b from-custom-gray to-custom-white text-transparent bg-clip-text"
          >
            {{ $t('footer.contacts') }}
          </h3>
          <NuxtLink
            to="https://www.google.com/maps/dir/?api=1&destination=49.738124,27.253337"
            target="_blank"
            rel="noopener noreferrer"
            class="text-custom-gray flex items-center"
            aria-label="address"
          >
            <font-awesome-icon :icon="['fas', 'map-marker-alt']" class="mr-2 text-custom-orange" />
            {{ $t('footer.address') }}
          </NuxtLink>
          <NuxtLink
            to="tel:+380954664190"
            target="_blank"
            rel="noopener noreferrer"
            class="text-custom-gray flex items-center"
            aria-label="phone"
          >
            <font-awesome-icon :icon="['fas', 'phone']" class="mr-2 text-custom-orange" />
            +38 (095) 466-41-90
          </NuxtLink>
          <NuxtLink
            to="mailto:it@starkon.pp.ua"
            target="_blank"
            rel="noopener noreferrer"
            class="text-custom-gray flex items-center"
            aria-label="email"
          >
            <font-awesome-icon :icon="['fas', 'envelope']" class="mr-2 text-custom-orange" />
            it@starkon.pp.ua
          </NuxtLink>
          <div class="flex space-x-6 mt-4">
            <NuxtLink
              to="viber://chat?number=%2B380954664190"
              external
              target="_blank"
              rel="noopener noreferrer"
              class="text-custom-gray hover:text-custom-orange transition-colors"
              aria-label="viber"
            >
              <font-awesome-icon :icon="['fab', 'viber']" class="text-2xl" />
            </NuxtLink>
            <NuxtLink
              to="https://t.me/@itstarkon"
              external
              target="_blank"
              rel="noopener noreferrer"
              class="text-custom-gray hover:text-custom-orange transition-colors"
              aria-label="telegram"
            >
              <font-awesome-icon :icon="['fab', 'telegram']" class="text-2xl" />
            </NuxtLink>
            <NuxtLink
              to="https://wa.me/380954664190"
              external
              target="_blank"
              rel="noopener noreferrer"
              class="text-custom-gray hover:text-custom-orange transition-colors"
              aria-label="whatsapp"
            >
              <font-awesome-icon :icon="['fab', 'whatsapp']" class="text-2xl" />
            </NuxtLink>
            <NuxtLink
              to="https://m.me/alexandr.meleshko.9"
              external
              target="_blank"
              rel="noopener noreferrer"
              class="text-custom-gray hover:text-custom-orange transition-colors"
              aria-label="messenger"
            >
              <font-awesome-icon :icon="['fab', 'facebook-messenger']" class="text-2xl" />
            </NuxtLink>
          </div>
        </div>
        <ClientOnly>
          <GoogleMap />
        </ClientOnly>
      </div>

      <div class="text-center mt-8 pt-8 border-t border-custom-border">
        <p class="text-custom-gray">© 2025 IT-Starkon. {{ $t('footer.copyright') }}</p>
      </div>

      <!-- Кнопка "Наверх" -->
      <button
        v-if="showScrollTop"
        @click="scrollToTop"
        class="fixed bottom-6 right-6 bg-custom-orange text-custom-white p-3 w-12 h-12 rounded-full shadow-lg hover:bg-custom-border hover:scale-105 transition-all duration-300 z-50"
        title="Наверх"
      >
        <font-awesome-icon :icon="['fas', 'angle-double-up']" />
      </button>
    </div>
  </footer>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
import { faViber, faTelegram, faWhatsapp, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

// Додаємо лише потрібні іконки до бібліотеки
library.add(faMapMarkerAlt, faPhone, faEnvelope, faAngleDoubleUp, faViber, faTelegram, faWhatsapp, faFacebookMessenger);

const GoogleMap = defineAsyncComponent(() => import('@/components/GoogleMap.vue'));
// Состояние видимости кнопки "Наверх"
const showScrollTop = ref(false);

// Функція для скролінгу наверх
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

// Перевірка положення прокрутки
const handleScroll = () => {
  showScrollTop.value = window.scrollY > 100; // Показуємо кнопку після прокрутки на 100px
};

onMounted(() => {
  // Додавання слухача прокрутки
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
