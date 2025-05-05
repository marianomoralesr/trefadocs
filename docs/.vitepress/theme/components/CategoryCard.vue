<script setup>
defineProps({
  title: String,
  count: String,
  link: String,
  icon: String
})
</script>

<template>
  <a :href="link" class="category-card">
    <div class="card-content">
      <h3>{{ title }}</h3>
      <p>{{ count }} artículos</p>
    </div>
  </a>
</template>

<style scoped>
.category-card {
  background: linear-gradient(135deg, var(--vp-c-brand) 0%, var(--vp-c-brand-dark) 100%);
  border-radius: var(--card-border-radius);
  padding: 1.5rem;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
}

.category-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(255, 104, 1, 0.2);
}

.card-content h3 {
  margin: 0 0 0.5rem;
  font-size: 1.25rem;
  font-weight: 600;
}

.card-content p {
  margin: 0;
  opacity: 0.8;
  font-size: 0.875rem;
}
</style>