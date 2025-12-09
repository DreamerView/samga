<script setup>
import { ref } from 'vue'
import { supabase } from '@@/plugins/supabase'

const email = ref('')
const password = ref('')
const loading = ref(false)

async function register() {
  loading.value = true
  const { error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value
  })
  loading.value = false

  if (error) {
    alert(error.message)
  } else {
    alert("Проверьте почту для подтверждения")
  }
}

async function registerWithGoogle() {
  await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: { redirectTo: window.location.origin }
  })
}
</script>

<template>
  <div class="w-100 d-flex flex-column gap-3 p-4" style="max-width:400px;margin:auto;">
    <h2 class="mb-2">Регистрация</h2>

    <input v-model="email" class="form-control" type="email" placeholder="Email" />
    <input v-model="password" class="form-control" type="password" placeholder="Пароль" />

    <button class="btn btn-success w-100" :disabled="loading" @click="register">
      Создать аккаунт
    </button>

    <div class="text-center text-muted">или</div>

    <button class="btn btn-outline-dark w-100 d-flex align-items-center justify-content-center gap-2"
            @click="registerWithGoogle">

      <img src="https://www.svgrepo.com/show/475656/google-color.svg" width="20" />
      Продолжить с Google
    </button>
  </div>
</template>
