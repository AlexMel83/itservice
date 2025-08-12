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
const reqUrl = useRequestURL();
const baseUrl = reqUrl.origin || config.public.baseURL || 'https://it.starkon.pp.ua';

// Повна URL-адреса сторінки
const currentUrl = computed(() => (props.url ? props.url : baseUrl));

// Повна URL для зображення
const urlImage = computed(() => {
  if (!props.image) return 'https://it.starkon.pp.ua/img/pexels-buro-millennial.jpg';
  return props.image.startsWith('http')
    ? props.image
    : `${baseUrl}${props.image.startsWith('/') ? '' : '/'}${props.image}`;
});

useHead({
  htmlAttrs: {
    lang: 'uk-UA',
  },
  title: props.title || 'Віртуальні 3D тури та IT-рішення для бізнесу в Старокостянтинові',
  meta: [
    // Базові
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'robots', content: 'index, follow' },
    { name: 'description', content: props.description },
    { name: 'keywords', content: props.keywords },
    { name: 'author', content: 'Віртуальні 3D тури та IT-рішення для бізнесу в Старокостянтинові' },
    // OpenGraph для Facebook та LinkedIn
    { property: 'og:type', content: 'article' },
    { property: 'og:site_name', content: 'Віртуальні 3D тури та IT-рішення для бізнесу в Старокостянтинові' },
    { property: 'og:title', content: props.title },
    { property: 'og:description', content: props.description },
    { property: 'og:image', content: urlImage.value },
    { property: 'og:image:type', content: 'image/jpeg' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:url', content: currentUrl.value },
    { property: 'og:locale', content: 'uk_UA' },
    { property: 'og:locale:alternate', content: 'en_US' },
    // Twitter Cards
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: props.title },
    { name: 'twitter:description', content: props.description },
    { name: 'twitter:image', content: urlImage.value },
    { name: 'twitter:site', content: '@cfhope' },
    { name: 'twitter:creator', content: '@cfhope' },
    // Для Telegram/WhatsApp
    { name: 'theme-color', content: '#0057b7' },
  ],
  script: props.structuredData
    ? [
        {
          type: 'application/ld+json',
          children: JSON.stringify(props.structuredData),
        },
      ]
    : [],
});
</script>
