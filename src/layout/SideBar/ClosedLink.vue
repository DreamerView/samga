<template>
    <RouterLink :to="props.to" :class="active?'btn-dark':'btn-outline-dark border-0 text-body hoverEffect'" class="btn rounded-4 d-flex gap-3 align-items-center justify-content-center">
        <i class="fs-5" :class="'bi bi-'+props.icon"></i>
    </RouterLink>
</template>

<script setup>
    const props = defineProps({
        title:String,
        to:String,
        icon:String,
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