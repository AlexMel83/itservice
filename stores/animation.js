import { defineStore } from 'pinia';

export const useAnimationStore = defineStore('animation', {
  state: () => ({
    // Объект для хранения состояния анимации разных секций
    animatedSections: {},
  }),

  actions: {
    // Отметить секцию как анимированную
    setSectionAnimated(sectionId) {
      this.animatedSections[sectionId] = true;
    },

    // Проверить, была ли секция анимирована
    isSectionAnimated(sectionId) {
      return !!this.animatedSections[sectionId];
    },

    // Сбросить состояние анимации конкретной секции
    resetSectionAnimation(sectionId) {
      this.animatedSections[sectionId] = false;
    },

    // Сбросить состояние анимации всех секций
    resetAllAnimations() {
      this.animatedSections = {};
    },
  },
  // Без persist - будет работать только в рамках текущей сессии
});
