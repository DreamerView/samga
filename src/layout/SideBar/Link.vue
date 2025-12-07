<template>
    <RouterLink :to="props.to" :class="active?'btn-dark':'btn-outline-dark border-0 text-body hoverEffect'" class="btn px-4 py-2 rounded-4 d-flex gap-3 align-items-center">
        <i class="fs-5" :class="'bi bi-'+props.icon"></i>
        <span v-if="show">{{ props.title }}</span>
    </RouterLink>
</template>

<script setup>
    const props = defineProps({
        title:String,
        to:String,
        icon:String,
        show:{
            type:Boolean,
            default: true
        },
        active: {
            type: Boolean,
            default: false
        }
    })
</script>

<style scoped>
    .hoverEffect {
        opacity:0.7
    }
    .hoverEffect:hover {
        opacity: 1;
        color:#fff!important;
    }
</style>