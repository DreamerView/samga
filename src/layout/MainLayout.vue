<template>
    <Header />

    <div class="d-flex">
        
        <!-- Левый сайдбар -->
        <Sidebar />

        <!-- Основная область -->
        <main class="main-area" v-if="$slots.main">
            <slot name="main" />
        </main>

        <!-- Правый сайдбар (необязательный) -->
        <aside class="fixed-aside rounded-5 m-2 py-4 h-100" v-if="$slots.aside">
            <slot name="aside" />
        </aside>

    </div>
</template>

<script setup>
import Sidebar from './sidebar/Layout.vue';
import Header from "./Header/Layout.vue"
</script>

<style scoped>
/* Основная область — гибкая */
.main-area {
    flex: 1 1 0;
    min-width: 0; /* важно, иначе контент может выпадать */
}

/* Фиксированный сайдбар */
.fixed-aside {
    flex: 0 0 260px;   /* ← ИДЕАЛЬНАЯ ширина для сайдбара */
    width: 260px;       /* ← чтобы не было дерганий */
    flex-shrink: 0;     /* ← запрет сжатия сайдбара */
}
</style>
