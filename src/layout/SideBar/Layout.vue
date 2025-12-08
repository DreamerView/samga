<template>
    <OpenLayout :list="list" :open="store_ui.sidebarOpen" />
</template>

<script setup>
    import { useRoute } from 'vue-router'
    import { useUIStore } from '@/stores/ui';
    
    const store_ui = useUIStore();

    const route = useRoute()
    import ClosedLayout from './ClosedLayout.vue';
    import OpenLayout from './OpenLayout.vue';
    const list = [
        {
            title:"Главная",
            icon:"house",
            to:"/",
            active:route.name === 'home'
        },
        {
            title:"Поиск",
            icon:"compass",
            to:"/about",
            active:route.name === 'about'
        },
        {
            title:"Расписание",
            icon:"calendar-week",
            to:"/about",
            active:route.name === 'about'
        },
        {
            title:"Материалы",
            icon:"file-earmark-richtext",
            to:"/about",
            active:route.name === 'about'
        },
        {
            title:"Дополнительно",
            icon:"grid",
            to:"/about",
            active:route.name === 'about'
        }
    ]
</script>