---
layout: doc
title: Admin Portal
---

<script setup>
import { ref, onMounted } from 'vue'
import { createClient } from '@supabase/supabase-js'

const supabase = import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_ANON_KEY
  ? createClient(
      import.meta.env.VITE_SUPABASE_URL,
      import.meta.env.VITE_SUPABASE_ANON_KEY
    )
  : null

const email = ref('')
const password = ref('')
const isLoggedIn = ref(false)
const errorMessage = ref('')
const initError = ref('')
const documents = ref([
  {
    id: 1,
    title: 'Requisitos para comprar a crédito',
    category: 'Compras a Crédito',
    date: '10 Jun 2025',
    status: 'published'
  },
  {
    id: 2,
    title: 'Cómo vender tu auto en 5 pasos',
    category: 'Vender tu Auto',
    date: '05 Jun 2025',
    status: 'published'
  },
  {
    id: 3,
    title: 'Garantía extendida: Todo lo que debes saber',
    category: 'Garantías',
    date: '01 Jun 2025',
    status: 'draft'
  }
])

onMounted(() => {
  if (!supabase) {
    initError.value = 'Error: Supabase configuration is missing. Please ensure you have connected to Supabase and have valid environment variables.'
  }
})

async function handleLogin() {
  if (!supabase) {
    errorMessage.value = 'Supabase client is not initialized'
    return
  }

  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value
    })

    if (error) throw error
    
    isLoggedIn.value = true
    errorMessage.value = ''
  } catch (error) {
    errorMessage.value = error.message
  }
}

async function handleSignUp() {
  if (!supabase) {
    errorMessage.value = 'Supabase client is not initialized'
    return
  }

  try {
    const { data, error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value
    })

    if (error) throw error
    
    errorMessage.value = 'Check your email for confirmation link'
  } catch (error) {
    errorMessage.value = error.message
  }
}

function handleEdit(id) {
  console.log('Editing document:', id)
}

function handleDelete(id) {
  console.log('Deleting document:', id)
}
</script>

# Portal Administrativo

<div v-if="initError" class="error-banner">
  {{ initError }}
</div>

<div v-else-if="!isLoggedIn" class="login-form">
  <h2>Iniciar Sesión</h2>
  <form @submit.prevent="handleLogin">
    <div class="form-group">
      <label for="email">Correo Electrónico</label>
      <input 
        type="email" 
        id="email" 
        v-model="email" 
        required
      >
    </div>
    <div class="form-group">
      <label for="password">Contraseña</label>
      <input 
        type="password" 
        id="password" 
        v-model="password" 
        required
      >
    </div>
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    <button type="submit" class="login-button">
      Iniciar Sesión
    </button>
    <button type="button" @click="handleSignUp" class="signup-button">
      Registrarse
    </button>
  </form>
</div>

<div v-else class="admin-dashboard">
  <div class="dashboard-header">
    <h2>Panel de Control</h2>
    <a href="/admin/new-document" class="new-doc-button">
      Crear Nuevo Documento
    </a>
  </div>

  <div class="documents-list">
    <table>
      <thead>
        <tr>
          <th>Título</th>
          <th>Categoría</th>
          <th>Fecha</th>
          <th>Estado</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="doc in documents" :key="doc.id">
          <td>{{ doc.title }}</td>
          <td>{{ doc.category }}</td>
          <td>{{ doc.date }}</td>
          <td>
            <span :class="['status', doc.status]">
              {{ doc.status === 'published' ? 'Publicado' : 'Borrador' }}
            </span>
          </td>
          <td>
            <div class="actions">
              <button @click="handleEdit(doc.id)" class="edit-button">
                Editar
              </button>
              <button @click="handleDelete(doc.id)" class="delete-button">
                Eliminar
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<style>
.error-banner {
  background-color: #fee2e2;
  border: 1px solid #ef4444;
  color: #dc2626;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 8px;
  text-align: center;
}

.login-form {
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  background: var(--vp-c-bg-soft);
  border-radius: var(--card-border-radius);
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.form-group input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  font-size: 1rem;
}

.error-message {
  color: #ef4444;
  margin: 0.5rem 0;
  font-size: 0.875rem;
}

.login-button,
.signup-button {
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-bottom: 0.5rem;
}

.login-button {
  background: var(--gradient-brand);
  color: white;
}

.signup-button {
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
}

.login-button:hover,
.signup-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 104, 1, 0.2);
}

.admin-dashboard {
  padding: 2rem;
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.new-doc-button {
  padding: 0.75rem 1.5rem;
  background: var(--gradient-brand);
  color: white;
  border: none;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.2s ease;
}

.new-doc-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 104, 1, 0.2);
}

.documents-list {
  background: var(--vp-c-bg);
  border-radius: var(--card-border-radius);
  box-shadow: var(--card-shadow);
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid var(--vp-c-divider);
}

th {
  font-weight: 600;
  background: var(--vp-c-bg-soft);
}

.status {
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.875rem;
}

.status.published {
  background: #10B981;
  color: white;
}

.status.draft {
  background: #6B7280;
  color: white;
}

.actions {
  display: flex;
  gap: 0.5rem;
}

.edit-button,
.delete-button {
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.edit-button {
  background: var(--vp-c-brand);
  color: white;
  border: none;
}

.delete-button {
  background: #EF4444;
  color: white;
  border: none;
}

.edit-button:hover,
.delete-button:hover {
  transform: translateY(-2px);
  opacity: 0.9;
}
</style>