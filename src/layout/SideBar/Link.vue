<template>
    <RouterLink :to="props.to" :class="active?'active':''" class="btn hoverEffect rounded-5 p-0 m-0 d-flex gap-3 align-items-center border-0">
        <div class="rounded-circle iconBlock p-0 m-0 d-flex align-items-center justify-content-center" style="width:2.5rem;height:2.5rem">
            <i class="fs-5" :class="'bi bi-'+props.icon"></i>
        </div>
        <span class="d-lg-block d-none m-0" v-if="props.show">{{ props.title }}</span>
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
    .active {
       background-color:var(--bs-secondary-bg); 
    }
    .active > .iconBlock {
        background-color:var(--bs-emphasis-color);
        color:var(--bs-body-bg)!important;
    }
    .iconBlock {
        background-color:var(--bs-secondary-bg);
        color:var(--bs-body-color)!important;
    }
    .hoverEffect {
        padding: 0.4rem!important;
    }
    .hoverEffect:hover {
        /* color:#fff!important; */
        background-color:var(--bs-secondary-bg);
    }
    .hoverEffect:hover > .iconBlock {
        background-color:var(--bs-emphasis-color);
        color:var(--bs-body-bg)!important;
    }
</style>