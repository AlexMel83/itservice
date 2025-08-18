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
            <IconMapMarkerAlt class="mr-2 text-custom-orange w-5 h-5" />
            {{ $t('footer.address') }}
          </NuxtLink>
          <NuxtLink
            to="tel:+380954664190"
            target="_blank"
            rel="noopener noreferrer"
            class="text-custom-gray flex items-center"
            aria-label="phone"
          >
            <IconPhone class="mr-2 text-custom-orange w-5 h-5" />
            +38 (095) 466-41-90
          </NuxtLink>
          <NuxtLink
            to="mailto:it@starkon.pp.ua"
            target="_blank"
            rel="noopener noreferrer"
            class="text-custom-gray flex items-center"
            aria-label="email"
          >
            <IconEnvelope class="mr-2 text-custom-orange w-5 h-5" />
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
              <IconViber class="text-2xl w-6 h-6" />
            </NuxtLink>
            <NuxtLink
              to="https://t.me/@itstarkon"
              external
              target="_blank"
              rel="noopener noreferrer"
              class="text-custom-gray hover:text-custom-orange transition-colors"
              aria-label="telegram"
            >
              <IconTelegram class="text-2xl w-6 h-6" />
            </NuxtLink>
            <NuxtLink
              to="https://wa.me/380954664190"
              external
              target="_blank"
              rel="noopener noreferrer"
              class="text-custom-gray hover:text-custom-orange transition-colors"
              aria-label="whatsapp"
            >
              <IconWhatsapp class="text-2xl w-6 h-6 ml-2" />
            </NuxtLink>
            <NuxtLink
              to="https://m.me/alexandr.meleshko.9"
              external
              target="_blank"
              rel="noopener noreferrer"
              class="text-custom-gray hover:text-custom-orange transition-colors"
              aria-label="messenger"
            >
              <IconFacebookMessenger class="text-2xl w-6 h-6" />
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
        class="fixed flex items-center justify-center bottom-6 right-6 bg-custom-orange text-custom-white w-12 h-12 rounded-full shadow-lg hover:bg-custom-border hover:scale-105 transition-all duration-300 z-50"
        title="Наверх"
      >
        <IconAngleDoubleUp class="w-6 h-6" />
      </button>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { defineAsyncComponent } from 'vue';
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
