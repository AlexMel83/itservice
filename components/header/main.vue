<template>
  <section
    id="relume"
    class="relative z-[999] flex min-h-16 w-full items-center border-b border-border-primary bg-background-primary px-[5%] md:min-h-18"
  >
    <div class="mx-auto flex size-full max-w-full items-center justify-between">
      <a href="#">
        <img src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg" alt="Logo image" />
      </a>
      <div
        class="absolute hidden h-screen overflow-auto border-b border-border-primary bg-background-primary px-[5%] pb-24 pt-4 md:pb-0 lg:static lg:ml-6 lg:flex lg:h-auto lg:flex-1 lg:items-center lg:justify-between lg:border-none lg:bg-none lg:px-0 lg:pt-0"
        :class="{ 'lg:flex': !isMobileMenuOpen }"
      >
        <div class="flex flex-col items-center lg:flex-row">
          <a href="#" class="relative block w-auto py-3 text-md lg:inline-block lg:px-4 lg:py-6 lg:text-base"
            >Home Services</a
          >
          <a href="#" class="relative block w-auto py-3 text-md lg:inline-block lg:px-4 lg:py-6 lg:text-base"
            >About Us</a
          >
          <a href="#" class="relative block w-auto py-3 text-md lg:inline-block lg:px-4 lg:py-6 lg:text-base"
            >Contact Us</a
          >
          <div @mouseenter="openOnDesktopDropdownMenu" @mouseleave="closeOnDesktopDropdownMenu" class="relative">
            <button
              class="relative flex w-full items-center justify-between whitespace-nowrap py-3 text-md lg:w-auto lg:justify-start lg:gap-2 lg:px-4 lg:py-6 lg:text-base"
              @click="openOnMobileDropdownMenu"
            >
              <span>More Links</span>
              <span :class="{ 'rotate-180': isDropdownOpen }" class="transition duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </span>
            </button>
            <nav
              v-if="isDropdownOpen"
              class="absolute left-0 top-full w-full min-w-full max-w-full overflow-hidden bg-background-primary lg:absolute lg:w-screen lg:border-b lg:border-border-primary lg:px-[5%]"
            >
              <div class="mx-auto flex size-full max-w-full items-center justify-between">
                <div class="flex w-full flex-col lg:flex-row">
                  <div
                    class="auto-cols-1 grid flex-1 grid-cols-1 gap-x-8 gap-y-6 py-4 sm:py-8 md:grid-cols-3 lg:gap-y-0 lg:pr-8"
                  >
                    <div
                      class="grid auto-cols-fr grid-cols-1 grid-rows-[max-content_max-content_max-content_max-content] gap-y-2 md:gap-y-4"
                    >
                      <h4 class="text-sm font-semibold leading-[1.4] md:leading-[1.3]">Our Services</h4>
                      <a href="#" class="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2">
                        <div class="flex size-6 flex-col items-center justify-center">
                          <img
                            src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                            alt="Icon 1"
                            class="shrink-0"
                          />
                        </div>
                        <div class="flex flex-col items-start justify-center">
                          <h5 class="font-semibold">Web Development</h5>
                          <p class="hidden text-sm md:block">Create and maintain your online presence.</p>
                        </div>
                      </a>
                      <a href="#" class="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2">
                        <div class="flex size-6 flex-col items-center justify-center">
                          <img
                            src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                            alt="Icon 2"
                            class="shrink-0"
                          />
                        </div>
                        <div class="flex flex-col items-start justify-center">
                          <h5 class="font-semibold">3D Tours</h5>
                          <p class="hidden text-sm md:block">Experience your space like never before.</p>
                        </div>
                      </a>
                      <a href="#" class="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2">
                        <div class="flex size-6 flex-col items-center justify-center">
                          <img
                            src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                            alt="Icon 3"
                            class="shrink-0"
                          />
                        </div>
                        <div class="flex flex-col items-start justify-center">
                          <h5 class="font-semibold">IT Support</h5>
                          <p class="hidden text-sm md:block">Reliable support for your business technology.</p>
                        </div>
                      </a>
                      <a href="#" class="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2">
                        <div class="flex size-6 flex-col items-center justify-center">
                          <img
                            src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                            alt="Icon 4"
                            class="shrink-0"
                          />
                        </div>
                        <div class="flex flex-col items-start justify-center">
                          <h5 class="font-semibold">Security Systems</h5>
                          <p class="hidden text-sm md:block">Protect your assets with our solutions.</p>
                        </div>
                      </a>
                    </div>
                    <div
                      class="grid auto-cols-fr grid-cols-1 grid-rows-[max-content_max-content_max-content_max-content] gap-y-2 md:gap-y-4"
                    >
                      <h4 class="text-sm font-semibold leading-[1.4] md:leading-[1.3]">Additional Resources</h4>
                      <a href="#" class="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2">
                        <div class="flex size-6 flex-col items-center justify-center">
                          <img
                            src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                            alt="Icon 5"
                            class="shrink-0"
                          />
                        </div>
                        <div class="flex flex-col items-start justify-center">
                          <h5 class="font-semibold">Veteran Discounts</h5>
                          <p class="hidden text-sm md:block">Special offers for those who served.</p>
                        </div>
                      </a>
                      <a href="#" class="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2">
                        <div class="flex size-6 flex-col items-center justify-center">
                          <img
                            src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                            alt="Icon 6"
                            class="shrink-0"
                          />
                        </div>
                        <div class="flex flex-col items-start justify-center">
                          <h5 class="font-semibold">Community Support</h5>
                          <p class="hidden text-sm md:block">Helping those in need with IT services.</p>
                        </div>
                      </a>
                      <a href="#" class="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2">
                        <div class="flex size-6 flex-col items-center justify-center">
                          <img
                            src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                            alt="Icon 7"
                            class="shrink-0"
                          />
                        </div>
                        <div class="flex flex-col items-start justify-center">
                          <h5 class="font-semibold">Client Testimonials</h5>
                          <p class="hidden text-sm md:block">Hear from our satisfied customers.</p>
                        </div>
                      </a>
                      <a href="#" class="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2">
                        <div class="flex size-6 flex-col items-center justify-center">
                          <img
                            src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                            alt="Icon 8"
                            class="shrink-0"
                          />
                        </div>
                        <div class="flex flex-col items-start justify-center">
                          <h5 class="font-semibold">Blog Updates</h5>
                          <p class="hidden text-sm md:block">Stay informed with our latest articles.</p>
                        </div>
                      </a>
                    </div>
                    <div
                      class="grid auto-cols-fr grid-cols-1 grid-rows-[max-content_max-content_max-content_max-content] gap-y-2 md:gap-y-4"
                    >
                      <h4 class="text-sm font-semibold leading-[1.4] md:leading-[1.3]">Get Involved</h4>
                      <a href="#" class="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2">
                        <div class="flex size-6 flex-col items-center justify-center">
                          <img
                            src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                            alt="Icon 9"
                            class="shrink-0"
                          />
                        </div>
                        <div class="flex flex-col items-start justify-center">
                          <h5 class="font-semibold">Join Us</h5>
                          <p class="hidden text-sm md:block">Become part of our growing community.</p>
                        </div>
                      </a>
                      <a href="#" class="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2">
                        <div class="flex size-6 flex-col items-center justify-center">
                          <img
                            src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                            alt="Icon 10"
                            class="shrink-0"
                          />
                        </div>
                        <div class="flex flex-col items-start justify-center">
                          <h5 class="font-semibold">Donate</h5>
                          <p class="hidden text-sm md:block">Support our work with a donation.</p>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div class="flex w-full items-center justify-center self-start py-4 lg:size-auto lg:py-8 lg:px-8">
                    <button class="bg-primary-500 text-white font-bold py-2 px-4 rounded">Join Now</button>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <button class="bg-primary-500 text-white font-bold py-2 px-4 rounded hidden lg:block">Request a Quote</button>
      </div>
      <button class="size-10 lg:hidden" @click="toggleMobileMenu">
        <span class="relative grid h-5 w-5">
          <span
            class="absolute block size-full rounded-full bg-text-primary"
            :class="{
              'rotate-45 translate-y-2': isMobileMenuOpen,
              'transition duration-300': true,
            }"
          ></span>
          <span
            class="absolute block size-full rounded-full bg-text-primary"
            :class="{
              'opacity-0': isMobileMenuOpen,
              'transition duration-300': true,
            }"
          ></span>
          <span
            class="absolute block size-full rounded-full bg-text-primary"
            :class="{
              'rotate-[-45deg] translate-y-[-2px]': isMobileMenuOpen,
              'rotate-[-90deg]': isMobileMenuOpen,
              'transition duration-300': true,
            }"
          ></span>
        </span>
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';

const isMobileMenuOpen = ref(false);
const isDropdownOpen = ref(false);

const isMobile = computed(() => window.innerWidth <= 991);

const toggleMobileMenu = () => (isMobileMenuOpen.value = !isMobileMenuOpen.value);
const openOnMobileDropdownMenu = () => (isDropdownOpen.value = !isDropdownOpen.value);
const openOnDesktopDropdownMenu = () => {
  !isMobile.value && (isDropdownOpen.value = true);
};
const closeOnDesktopDropdownMenu = () => {
  !isMobile.value && (isDropdownOpen.value = false);
};
</script>
