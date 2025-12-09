<template>
    <MainLayout>
        <template #main>
            <div class="container-xxl h-100 p-4">
                <div class="d-flex flex-column gap-2">
                    <h2>Рекомендации</h2>
                    <p class="text-muted">Мы собрали для вас курсы и центры, которые могут быть полезны именно сейчас.</p>
                    <ContentCard />
                </div>
            </div>
        </template>
    </MainLayout>
</template>

<script setup>
    import MainLayout from '@/layout/MainLayout.vue';
    import ContentCard from '@/components/ContentCard/Component.vue';
    import { supabase } from '@@/plugins/supabase.js'
    import { ref, onMounted,watchEffect } from 'vue'

    const centers = ref([])

    onMounted(async () => {
        const { data, error } = await supabase.from('centers').select()
        if (error) {
            console.error(error)
            return
        }
        if (!error) centers.value = data
    })

    onMounted(()=>{
        window.history.replaceState({}, document.title, window.location.pathname)
    })

    watchEffect(()=>{
        console.log(centers.value)
    })
</script>