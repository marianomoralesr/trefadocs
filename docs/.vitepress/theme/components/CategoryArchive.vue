<script setup>
defineProps({
  category: String,
  articles: Array
})
</script>

<template>
  <div class="category-archive">
    <header class="category-header">
      <h1>{{ category }}</h1>
      <p class="article-count">{{ articles.length }} artículos</p>
    </header>

    <div class="filters">
      <input type="text" placeholder="Filtrar artículos..." class="filter-input" />
      <select class="sort-select">
        <option value="recent">Más recientes</option>
        <option value="popular">Más populares</option>
        <option value="az">A-Z</option>
      </select>
    </div>

    <div class="article-grid">
      <ArticleCard 
        v-for="article in articles"
        :key="article.id"
        v-bind="article"
      />
    </div>
  </div>
</template>

<style scoped>
.category-archive {
  padding: 2rem;
}

.category-header {
  text-align: center;
  margin-bottom: 3rem;
}

.category-header h1 {
  font-size: 2.5rem;
  margin: 0 0 0.5rem;
  background: var(--gradient-brand);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.article-count {
  color: var(--vp-c-text-2);
  font-size: 1.1rem;
}

.filters {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}

.filter-input {
  flex: 1;
  padding: 0.75rem 1rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  font-size: 1rem;
}

.sort-select {
  padding: 0.75rem 1rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  font-size: 1rem;
  background: var(--vp-c-bg);
}

.article-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

@media (max-width: 640px) {
  .filters {
    flex-direction: column;
  }
  
  .article-grid {
    grid-template-columns: 1fr;
  }
}
</style>