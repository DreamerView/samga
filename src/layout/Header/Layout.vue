<template>
    <header class="w-100 px-4 py-md-3 py-md-3 d-flex align-items-center justify-content-between position-sticky top-0 bg-layout-body" style="height:60px;z-index:999;">
        <div class="d-flex align-items-center gap-2 h-100">
            <button @click="storeUI.toggleSidebar" style="width:40px;height:40px;" class="btn btn-outline-secondary btn-lg p-0 m-0 border-0 rounded-circle d-md-block d-none">
                <i class="bi bi-list"></i>
            </button>
            <img
                :src="`/img/logo/logo-min-${storeUI.theme}-40.webp`"
                :srcset="`
                    /img/logo/logo-min-${storeUI.theme}-40.webp 1x,
                    /img/logo/logo-min-${storeUI.theme}-80.webp 2x,
                    /img/logo/logo-min-${storeUI.theme}-120.webp 3x,
                    /img/logo/logo-min-${storeUI.theme}-160.webp 4x
                `"
                style="height:auto; width:78;aspect-ratio: 78/40;"
                alt="Logo"
            />

        </div>
        <div class="d-flex align-items-center gap-4 h-100">
            <!-- <input 
                type="search" 
                class="form-control bg-body-secondary rounded-4 px-4" 
                placeholder="Search"
                style="max-width: 350px;"
            > -->
            <button class="btn btn-secondary border rounded-4 d-flex gap-2 d-md-block d-none">
                <i class="bi bi-plus-lg"></i>
                Создать
            </button>
            <button type="button" class="btn btn-dark position-relative rounded-circle d-md-block d-none" style="height: auto;width:40px;aspect-ratio: 1;">
                <i class="bi bi-bell"></i>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    !
                    <span class="visually-hidden">!</span>
                </span>
            </button>
            <button type="button" class="btn btn-dark position-relative rounded-circle d-md-block d-none" style="height: auto;width:40px;aspect-ratio: 1;">
                <i class="bi bi-chat-dots"></i>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    !
                    <span class="visually-hidden">!</span>
                </span>
            </button>
            <img
                :src="`/img/avatar/avatar-40.webp`"
                :srcset="`
                    /img/avatar/avatar-40.webp 1x,
                    /img/avatar/avatar-80.webp 2x,
                    /img/avatar/avatar-120.webp 3x,
                    /img/avatar/avatar-160.webp 4x
                `"
                width="40" height="40" style="height: 40px;width:40px;" class="rounded-circle" />
        </div>
    </header>
</template>

<style scoped>
    .fixed-aside {
        flex: 0 0 15rem;
    }
</style>

<script setup>
    import { useUIStore } from '@/stores/ui';
    const storeUI = useUIStore()
</script>