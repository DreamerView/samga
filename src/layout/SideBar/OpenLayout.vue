<template>
  <aside 
    class="sidebar d-none d-sm-block position-sticky mx-3 py-3"
    :class="{ open: finalOpen }"
  >
    <div class="d-flex flex-column gap-3 p-2 justify-content-between h-100">
      
      <div class="d-flex flex-column gap-2">
        <Link 
          v-for="item in props.list"
          :key="item.to"
          :show="finalOpen"
          :title="item.title"
          :icon="item.icon"
          :to="item.to"
          :active="item.active"
        />
      </div>

      <DarkModeToggle v-if="finalOpen" />
    </div>
  </aside>
</template>


<script setup>
    import Link from './Link.vue';
    import DarkModeToggle from './DarkModeToggle.vue';
    import { ref, computed, onMounted, onUnmounted } from 'vue';

    const openStatus = ref(true);

    const props = defineProps({
    list: Array,
    open: {
        type: Boolean,
        default: true,
    }
    });

    // Автоматическое обновление по ширине
    const update = () => {
    const width = document.documentElement.clientWidth;
    openStatus.value = width >= 992; // lg breakpoint
    };

    onMounted(() => {
    update();
    window.addEventListener('resize', update);
    });

    onUnmounted(() => {
    window.removeEventListener('resize', update);
    });

    // 👇 Финальное значение: авто + проп
    const finalOpen = computed(() => {
    return props.open && openStatus.value;
    });

</script>

<style scoped>
    .sidebar {
        top: 60px;
        height: calc(100dvh - 60px);
        flex-shrink: 0;
        transition: width 0.25s ease;
        width: 70px;
        flex: 0 0 70px;
    }

    .sidebar.open {
        width: 250px;
        flex: 0 0 250px;
    }
</style>