<template>
  <div class="menu-group hidden md:flex items-center space-x-6">
    <ul class="flex flex-wrap justify-around p-0 m-0 list-none">
      <li class="relative mx-1 lg:mx-2 text-sm sm:text-base lg:text-lg">
        <NuxtLink
          class="hover:text-primary-300 p-1 inline-block transition-colors border-b-2 border-transparent hover:border-primary-300"
          to="/"
        >
          {{ $t('menu.home') }}
        </NuxtLink>
      </li>
      <li class="relative mx-1 lg:mx-2 text-sm sm:text-base lg:text-lg">
        <NuxtLink
          class="hover:text-primary-300 p-1 inline-block transition-colors border-b-2 border-transparent hover:border-primary-300"
          to="/"
        >
          {{ $t('menu.services') }}
        </NuxtLink>
      </li>
      <li class="relative mx-1 lg:mx-2 text-sm sm:text-base lg:text-lg">
        <NuxtLink
          class="hover:text-primary-300 p-1 inline-block transition-colors border-b-2 border-transparent hover:border-primary-300"
          to="/"
        >
          {{ $t('menu.prices') }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import CollapsedIcon from '~/components/icons/CollapsedIcon.vue';
import ExpandedIcon from '~/components/icons/ExpandedIcon.vue';

const isMenuResourcesOpen = ref(false);
const isMenuAboutOpen = ref(false);
const isMenuJoinOpen = ref(false);
</script>
