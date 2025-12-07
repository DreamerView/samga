import { defineStore } from 'pinia'

export const useUIStore = defineStore('ui', {
    state: () => ({
        sidebarOpen: JSON.parse(localStorage.getItem('sidebarOpen') ?? 'true'),
        theme: localStorage.getItem('theme') ?? 'light'
    }),

    actions: {
        toggleSidebar() {
            this.sidebarOpen = !this.sidebarOpen
            localStorage.setItem('sidebarOpen', JSON.stringify(this.sidebarOpen))
        },

        setTheme(theme) {
            this.theme = theme
            localStorage.setItem('theme', theme)
        }
    }
})
