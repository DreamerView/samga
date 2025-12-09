import { defineStore } from 'pinia'
import { supabase } from '@@/plugins/supabase'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
        loading: true,
    }),

    actions: {
        // Инициализация при старте приложения
        async init() {
            const { data } = await supabase.auth.getUser()
            this.user = data.user
            this.loading = false

            // Отслеживание логина/логаута
            supabase.auth.onAuthStateChange((event, session) => {
                this.user = session?.user ?? null
            })
        },

        // ---- EMAIL + PASSWORD ----
        async signInWithPassword(email, password) {
            const { error } = await supabase.auth.signInWithPassword({
                email,
                password,
            })
            if (error) throw error
        },

        async registerWithPassword(email, password) {
            const { error } = await supabase.auth.signUp({
                email,
                password,
            })
            if (error) throw error
        },

        // ---- GOOGLE OAUTH ----
        async signInWithGoogle() {
            const { error } = await supabase.auth.signInWithOAuth({
                provider: 'google',
                options: {
                    redirectTo: window.location.origin
                }
            })
            if (error) throw error
        },

        // ---- LOGOUT ----
        async signOut() {
            await supabase.auth.signOut()
            this.user = null
        },
    },
})
