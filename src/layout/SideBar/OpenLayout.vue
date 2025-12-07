<template>
    <aside :class="props.open?'d-xl-block':''" class="fixed-aside mx-2 py-3 d-none position-sticky" style="top:60px;height:calc(100dvh - 60px)">
        <div class="d-flex flex-column gap-3 p-2 justify-content-between h-100 ">
            <div class="d-flex flex-column gap-2">
                <Link v-for="item in props.list" :title="item.title" :icon="item.icon" :to="item.to" :active="item.active" />
            </div>
            <DarkModeToggle />
        </div>
    </aside>
</template>

<script setup>
    import Link from './Link.vue';
    import DarkModeToggle from './DarkModeToggle.vue';
    const props = defineProps({
        list:{
            type:Array,
            default:[],
        },
        open: {
            type:Boolean,
            default:true
        }
    })
</script>

<style scoped>
    .fixed-aside {
        flex: 0 0 260px;   /* ← ИДЕАЛЬНАЯ ширина для сайдбара */
        width: 260px;       /* ← чтобы не было дерганий */
        flex-shrink: 0;     /* ← запрет сжатия сайдбара */
    }
</style>