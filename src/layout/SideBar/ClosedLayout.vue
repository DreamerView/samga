<template>
    <aside :class="props.open?'d-xl-none':''" class="fixed-aside mx-3 py-3 h-100 d-sm-block d-none position-sticky" style="top:72px">
        <div class="d-flex flex-column gap-3 p-2 justify-content-between h-100 ">
            <div class="d-flex flex-column gap-2">
                <Link v-for="item in props.list" :show="false" :title="item.title" :icon="item.icon" :to="item.to" :active="item.active" />
            </div>
        </div>
    </aside>
</template>

<script setup>
    import Link from './Link.vue';
    const props = defineProps({
        list:{
            type:Array,
            default:[]
        },
        open:{
            type:Boolean,
            default:true
        }
    })
</script>

<style scoped>
    .fixed-aside {
        flex: 0 0 70px;   /* ← ИДЕАЛЬНАЯ ширина для сайдбара */
        width: 70px;       /* ← чтобы не было дерганий */
        flex-shrink: 0;     /* ← запрет сжатия сайдбара */
    }
</style>