<template>
    <label class="dark-toggle">
        <input type="checkbox" v-model="enabled" @change="toggleTheme" />

        <div class="d-flex gap-3 opacity-75 align-items-center ms-2">
            <i class="bi bi-moon"></i>
            Dark mode
        </div>

        <span class="switch"></span>
    </label>
</template>

<script setup>
    import {
        ref,
        onMounted
    } from "vue";
    import { useUIStore } from "@/stores/ui";
    const store_ui = useUIStore();
    const enabled = ref(false);
    onMounted(() => {
        const saved = localStorage.getItem("theme");
        if (saved === "dark") {
            enabled.value = true;
            document.body.setAttribute("data-bs-theme", "dark");
            store_ui.setTheme("dark");
        } else {
            document.body.setAttribute("data-bs-theme", "light");
            store_ui.setTheme("light");
        }
    });

    function toggleTheme() {
        if (enabled.value) {
            document.body.setAttribute("data-bs-theme", "dark");
            localStorage.setItem("theme", "dark");
            store_ui.setTheme("dark");
        } else {
            document.body.setAttribute("data-bs-theme", "light");
            localStorage.setItem("theme", "light");
            store_ui.setTheme("light");
        }
    }
</script>

<style scoped>
    .dark-toggle {
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        font-size: 14px;
        user-select: none;
    }

    /* скрываем input */
    .dark-toggle input {
        display: none;
    }

    /* внешний переключатель */
    .switch {
        width: 36px;
        height: 20px;
        border-radius: 20px;
        background: #888;
        position: relative;
        transition: 0.25s;
    }

    /* круглая кнопка внутри */
    .switch::after {
        content: "";
        width: 16px;
        height: 16px;
        background: white;
        border-radius: 50%;
        position: absolute;
        top: 2px;
        left: 2px;
        transition: 0.25s;
    }

    /* переключение */
    input:checked~.switch {
        background: #4a4a4a;
    }

    input:checked~.switch::after {
        transform: translateX(16px);
    }
</style>