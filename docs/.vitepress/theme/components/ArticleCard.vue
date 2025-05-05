<script setup>
defineProps({
  title: String,
  excerpt: String,
  link: String,
  date: String,
  tags: Array
})
</script>

<template>
  <a :href="link" class="article-card">
    <h3>{{ title }}</h3>
    <p>{{ excerpt }}</p>
    <div class="article-meta">
      <span class="date">{{ date }}</span>
      <div class="tags">
        <span v-for="tag in tags" :key="tag" class="tag">{{ tag }}</span>
      </div>
    </div>
  </a>
</template>

<style scoped>
.article-card {
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: var(--card-border-radius);
  padding: 1.5rem;
  text-decoration: none;
  color: var(--vp-c-text);
  transition: all 0.3s ease;
}

.article-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--card-shadow);
}

.article-card h3 {
  margin: 0 0 1rem;
  font-size: 1.25rem;
  color: var(--vp-c-brand);
}

.article-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  font-size: 0.875rem;
}

.date {
  color: var(--vp-c-text-2);
}

.tags {
  display: flex;
  gap: 0.5rem;
}

.tag {
  background: var(--vp-c-bg-soft);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
}
</style>