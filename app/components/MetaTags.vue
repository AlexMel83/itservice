<template>
  <div />
</template>

<script setup>
const props = defineProps({
  title: { type: String, default: 'IT-рішення для вашого бізнесу' },
  description: { type: String, default: '' },
  image: { type: String, default: '' },
  url: { type: String, default: '' },
  keywords: {
    type: String,
    default:
      'віртуальні тури, 3D тури, 360° зйомка, розробка сайтів, Старокостянтинів, IT-послуги, бізнес-рішення, цифрові технології, веб-дизайн, інтерактивні тури, інновації, партнерство, ІТ для бізнесу',
  },
  structuredData: { type: Object, default: null },
});

// Базова URL (SSR-safe)
const config = useRuntimeConfig();
const route = useRoute();
const baseUrl = config.public.baseURL || 'https://it.starkon.pp.ua';

// Повна URL-адреса сторінки

const currentUrl = computed(() => {
  return props.url || `${baseUrl}${route.path}`;
});
// Повна URL для зображення
const urlImage = computed(() => {
  const img = props.image || '/img/360-virtual-tour-v2.jpg';
  return img.startsWith('http') ? img : `https://it.starkon.pp.ua${img.startsWith('/') ? '' : '/'}${img}`;
});

const localizedTitle = computed(() => {
  return locale.value === 'en' ? `Virtual 3D Tours & IT Solutions in Starokostiantyniv` : props.title;
});
const localizedDescription = computed(() => {
  const baseDesc =
    locale.value === 'en'
      ? 'Innovative 3D tours, 360° filming, and website development in Starokostiantyniv. Special offers for regular clients and veterans.'
      : props.description;
  return baseDesc.length > 150 ? baseDesc.slice(0, 150) + '...' : baseDesc; // Обмеження до 150 символів
});

const structuredData = computed(() => {
  if (!props.structuredData) return null;
  return {
    ...props.structuredData,
    description: `${props.description}. Ключові послуги: ${props.keywords}`,
  };
});

useHead({
  htmlAttrs: {
    lang: locale.value === 'en' ? 'en-US' : 'uk-UA',
  },
  title: localizedTitle.value,
  link: [
    { rel: 'canonical', href: currentUrl.value },
    {
      rel: 'preload',
      as: 'image',
      href: urlImage.value,
      imagesrcset: `${urlImage.value}?size=1200x630 1200w`,
      imagesizes: '(max-width: 1200px) 100vw',
    },
  ],
  meta: [
    // Базові
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'robots', content: 'index, follow' },
    { name: 'description', content: props.description + ' Ключові послуги: ' + props.keywords },
    { name: 'author', content: 'IT-Starkon' },
    { name: 'application-name', content: 'IT-Starkon' },
    { name: 'theme-color', content: '#0057b7' },
    { name: 'keywords', content: props.keywords },
    { name: 'author', content: 'Віртуальні 3D тури та IT-рішення для бізнесу в Старокостянтинові' },
    // OpenGraph для Facebook та LinkedIn
    { property: 'og:title', content: localizedTitle.value },
    { property: 'og:description', content: localizedDescription.value },
    { property: 'og:type', content: 'article' },
    { property: 'og:site_name', content: 'Віртуальні 3D тури та IT-рішення для бізнесу в Старокостянтинові' },
    { property: 'og:image', content: urlImage.value },
    { property: 'og:image:secure_url', content: urlImage.value },
    { property: 'og:image:type', content: 'image/jpeg' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'Віртуальний 3D тур для бізнесу в Старокостянтинові' },
    { property: 'og:url', content: currentUrl.value },
    { property: 'og:locale', content: locale.value === 'en' ? 'en_US' : 'uk_UA' },
    { property: 'fb:app_id', content: config.public.facebookAppId || '714008411407083' },
    // Twitter Cards
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: localizedTitle.value },
    { name: 'twitter:description', content: localizedDescription.value },
    { name: 'twitter:image', content: urlImage.value },
    { name: 'twitter:site', content: '@cfhope' },
    { name: 'twitter:creator', content: '@cfhope' },
    // Для Telegram/WhatsApp
    { name: 'theme-color', content: '#0057b7' },
  ],
  script: structuredData.value
    ? [
        {
          type: 'application/ld+json',
          children: JSON.stringify(structuredData.value),
        },
      ]
    : [],
});
</script>
