<script setup>
import { ref } from 'vue'
import { supabase } from '@@/plugins/supabase'

const email = ref('')
const password = ref('')
const loading = ref(false)

async function login() {
  loading.value = true
  const { error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value
  })
  loading.value = false

  if (error) {
    alert(error.message)
  }
}

async function loginWithGoogle() {
  await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: { redirectTo: window.location.origin }
  })
}
</script>

<template>
  <div class="w-100 d-flex flex-column gap-3 p-4" style="max-width:400px;margin:auto;">
    <h2 class="mb-2">Вход</h2>

    <input v-model="email" class="form-control" type="email" placeholder="Email" />
    <input v-model="password" class="form-control" type="password" placeholder="Пароль" />

    <button class="btn btn-primary w-100" :disabled="loading" @click="login">
      Войти
    </button>

    <div class="text-center text-muted">или</div>

    <button class="btn btn-outline-dark w-100 d-flex align-items-center justify-content-center gap-2"
            @click="loginWithGoogle">

      <img src="https://www.svgrepo.com/show/475656/google-color.svg" width="20" />
      Войти через Google
    </button>
  </div>
</template>
