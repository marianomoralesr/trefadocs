<script setup>
defineProps({
  title: String,
  content: String,
  author: String,
  date: String,
  category: String,
  tags: Array
})
</script>

<template>
  <article class="article-template">
    <header class="article-header">
      <h1>{{ title }}</h1>
      <div class="article-meta">
        <span class="date">{{ date }}</span>
        <span class="author">Por {{ author }}</span>
        <span class="category">{{ category }}</span>
      </div>
      <div class="tags">
        <span v-for="tag in tags" :key="tag" class="tag">{{ tag }}</span>
      </div>
    </header>
    
    <div class="article-content" v-html="content"></div>
    
    <footer class="article-footer">
      <div class="helpful-section">
        <p>¿Te fue útil este artículo?</p>
        <div class="helpful-buttons">
          <button class="helpful-button">Sí</button>
          <button class="helpful-button">No</button>
        </div>
      </div>
    </footer>
  </article>
</template>

<style scoped>
.article-template {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.article-header {
  margin-bottom: 2rem;
}

.article-header h1 {
  margin: 0 0 1rem;
  font-size: 2.5rem;
  background: var(--gradient-brand);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.article-meta {
  display: flex;
  gap: 1rem;
  color: var(--vp-c-text-2);
  font-size: 0.875rem;
}

.tags {
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
}

.tag {
  background: var(--vp-c-bg-soft);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
}

.article-content {
  font-size: 1.1rem;
  line-height: 1.8;
}

.article-footer {
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid var(--vp-c-divider);
}

.helpful-section {
  text-align: center;
}

.helpful-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1rem;
}

.helpful-button {
  padding: 0.5rem 2rem;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.helpful-button:hover {
  background: var(--vp-c-brand);
  color: white;
  border-color: var(--vp-c-brand);
}
</style>