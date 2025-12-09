<template>
    <RouterLink :to="props.to" :class="active?'active':''" class="btn hoverEffect rounded-5 p-0 m-0 d-flex gap-3 align-items-center border-0">
        <div class="rounded-circle iconBlock p-0 m-0 d-flex align-items-center justify-content-center" style="width:2.5rem;height:2.5rem">
            <IconHome v-show="props.icon === 'house'" width="20" height="20" />
            <IconSearch v-show="props.icon === 'search'" width="20" height="20" />
            <IconCalendar v-show="props.icon === 'calendar'" width="20" height="20" />
            <IconBook v-show="props.icon === 'book'" width="20" height="20" />
            <IconDashboard v-show="props.icon === 'grid'" width="20" height="20" />

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
    import IconHome from "@@/assets/icons/home.svg"
    import IconSearch from "@@/assets/icons/search.svg";
    import IconCalendar from "@@/assets/icons/calendar.svg";
    import IconBook from "@@/assets/icons/book.svg";
    import IconDashboard from "@@/assets/icons/dashboard.svg"

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