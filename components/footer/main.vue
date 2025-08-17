<!-- components/footer/main.vue -->
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
          >
            <i class="fas fa-map-marker-alt mr-2 text-custom-orange"></i>
            {{ $t('footer.address') }}
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
              external
              target="_blank"
              rel="noopener noreferrer"
              class="text-custom-gray hover:text-custom-orange transition-colors"
            >
              <i class="fab fa-viber text-2xl"></i>
            </NuxtLink>
            <NuxtLink
              to="https://t.me/@itstarkon"
              external
              target="_blank"
              rel="noopener noreferrer"
              class="text-custom-gray hover:text-custom-orange transition-colors"
            >
              <i class="fab fa-telegram text-2xl"></i>
            </NuxtLink>
            <NuxtLink
              to="https://wa.me/380954664190"
              external
              target="_blank"
              rel="noopener noreferrer"
              class="text-custom-gray hover:text-custom-orange transition-colors"
            >
              <i class="fab fa-whatsapp text-2xl"></i>
            </NuxtLink>
            <NuxtLink
              to="https://m.me/alexandr.meleshko.9"
              external
              target="_blank"
              rel="noopener noreferrer"
              class="text-custom-gray hover:text-custom-orange transition-colors"
            >
              <i class="fab fa-facebook-messenger text-2xl"></i>
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
        <i class="fas fa-angle-double-up"></i>
      </button>
    </div>
  </footer>
</template>

<script setup>
// Состояние видимости кнопки "Наверх"
const showScrollTop = ref(false);

// Функция для скроллинга наверх
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

// Проверка положения прокрутки
const handleScroll = () => {
  showScrollTop.value = window.scrollY > 100; // Показываем кнопку после прокрутки на 100px
};

onMounted(() => {
  // Добавление слушателя прокрутки
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
