---
layout: doc
title: Crear Nuevo Documento
---

<script setup>
import { ref } from 'vue'

const title = ref('')
const category = ref('')
const content = ref('')
const tags = ref('')
const isPreview = ref(false)

const categories = [
  'Compras de Contado',
  'Compras a Crédito',
  'Separación de Autos',
  'Vender tu Auto',
  'Garantías',
  'Sucursales',
  'Guías internas',
  '¿Porqué TREFA?'
]

function handleSubmit() {
  // Add Supabase document creation logic here
  console.log('Creating document:', {
    title: title.value,
    category: category.value,
    content: content.value,
    tags: tags.value.split(',').map(tag => tag.trim())
  })
}

function togglePreview() {
  isPreview.value = !isPreview.value
}
</script>

# Crear Nuevo Documento

<div v-if="!isPreview" class="document-form">
  <div class="form-group">
    <label for="title">Título</label>
    <input 
      type="text" 
      id="title" 
      v-model="title" 
      placeholder="Ingresa el título del documento"
      required
    >
  </div>

  <div class="form-group">
    <label for="category">Categoría</label>
    <select id="category" v-model="category" required>
      <option value="">Selecciona una categoría</option>
      <option v-for="cat in categories" :key="cat" :value="cat">
        {{ cat }}
      </option>
    </select>
  </div>

  <div class="form-group">
    <label for="content">Contenido</label>
    <textarea 
      id="content" 
      v-model="content" 
      rows="10" 
      placeholder="Escribe el contenido usando Markdown"
      required
    ></textarea>
  </div>

  <div class="form-group">
    <label for="tags">Etiquetas (separadas por comas)</label>
    <input 
      type="text" 
      id="tags" 
      v-model="tags" 
      placeholder="ej: credito, documentos, requisitos"
    >
  </div>

  <div class="form-actions">
    <button @click="togglePreview" class="preview-button">
      Vista Previa
    </button>
    <button @click="handleSubmit" class="submit-button">
      Publicar Documento
    </button>
  </div>
</div>

<div v-else class="preview-mode">
  <button @click="togglePreview" class="back-button">
    Volver a editar
  </button>
  
  <ArticleTemplate 
    :title="title"
    :content="content"
    :category="category"
    :tags="tags.split(',').map(tag => tag.trim())"
    author="Admin"
    :date="new Date().toLocaleDateString('es-MX')"
  />
</div>

<style>
.document-form {
  max-width: 800px;
  margin: 2rem auto;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  font-size: 1rem;
  background: var(--vp-c-bg);
}

.form-group textarea {
  font-family: monospace;
}

.form-actions {
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 2rem;
}

.preview-button,
.submit-button,
.back-button {
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.preview-button {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
}

.submit-button {
  background: var(--gradient-brand);
  color: white;
  border: none;
}

.back-button {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  margin-bottom: 2rem;
}

.preview-button:hover,
.submit-button:hover,
.back-button:hover {
  transform: translateY(-2px);
  box-shadow: var(--card-shadow);
}

.preview-mode {
  max-width: 800px;
  margin: 2rem auto;
}
</style>