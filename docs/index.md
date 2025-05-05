---
layout: home
title: Centro de Ayuda
titleTemplate: Documentación y recursos de ayuda

hero:
  name: Centro de Ayuda
  text: Encuentra toda la información que necesitas
  tagline: Recursos, guías y documentación para resolver tus dudas
  actions:
    - theme: brand
      text: Explorar Categorías
      link: /categorias/
    - theme: alt
      text: Buscar Ayuda
      link: '#search'
---

<div class="search-container">
  <div class="search-box">
    <input type="text" placeholder="Buscar artículos..." class="search-input" />
    <button class="search-button">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
      Buscar
    </button>
  </div>
  
  <div class="popular-categories">
    <h3>Categorías Populares</h3>
    <div class="categories-list">
      <a href="/categorias/compras-contado" class="category-tag">Compras de Contado</a>
      <a href="/categorias/compras-credito" class="category-tag">Compras a Crédito</a>
      <a href="/categorias/separacion-autos" class="category-tag">Separación de Autos</a>
      <a href="/categorias/vender-auto" class="category-tag">Vender tu Auto</a>
      <a href="/categorias/garantias-autos" class="category-tag">Garantías</a>
    </div>
  </div>
</div>

<div class="category-grid">
  <CategoryCard 
    title="Compras de Contado" 
    count="1" 
    link="/categorias/compras-contado" 
    icon="download" 
  />
  <CategoryCard 
    title="Compras a Crédito" 
    count="3" 
    link="/categorias/compras-credito" 
    icon="refresh-cw" 
  />
  <CategoryCard 
    title="Separación de Autos" 
    count="3" 
    link="/categorias/separacion-autos" 
    icon="check-circle" 
  />
  <CategoryCard 
    title="Vender tu auto" 
    count="4" 
    link="/categorias/vender-auto" 
    icon="move-vertical" 
  />
  <CategoryCard 
    title="Garantías en Autos" 
    count="3" 
    link="/categorias/garantias-autos" 
    icon="building" 
  />
  <CategoryCard 
    title="Sucursales" 
    count="2" 
    link="/categorias/sucursales" 
    icon="help-circle" 
  />
  <CategoryCard 
    title="Guías internas" 
    count="1" 
    link="/categorias/guias-internas" 
    icon="folder" 
  />
  <CategoryCard 
    title="¿Porqué TREFA?" 
    count="1" 
    link="/categorias/porque-trefa" 
    icon="file-text" 
  />
</div>

<div class="home-section">
  <h2>Artículos Recientes</h2>
  <div class="article-list">
    <ArticleCard 
      title="Requisitos para comprar a crédito"
      excerpt="Conoce todos los documentos y requisitos necesarios para realizar una compra a crédito en nuestras sucursales."
      link="/categorias/compras-credito/requisitos"
      date="10 Jun 2025"
      :tags="['credito', 'documentos', 'requisitos']"
    />
    <ArticleCard 
      title="Cómo vender tu auto en 5 pasos"
      excerpt="Aprende el proceso completo para vender tu vehículo de forma rápida y segura con nuestra guía paso a paso."
      link="/categorias/vender-auto/pasos"
      date="05 Jun 2025"
      :tags="['venta', 'autos', 'guia']"
    />
    <ArticleCard 
      title="Garantía extendida: Todo lo que debes saber"
      excerpt="Descubre los beneficios de adquirir una garantía extendida y cómo puedes aprovecharla al máximo."
      link="/categorias/garantias-autos/extendida"
      date="01 Jun 2025"
      :tags="['garantia', 'servicio', 'postventa']"
    />
  </div>
</div>

<style>
.search-container {
  margin: 2rem 0;
  padding: 2rem;
  background: var(--vp-c-bg);
  border-radius: var(--card-border-radius);
  box-shadow: var(--card-shadow);
  border: 1px solid var(--vp-c-divider);
}

.search-box {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.search-input {
  flex: 1;
  padding: 0.75rem 1rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  font-size: 1rem;
  background: var(--vp-c-bg);
}

.search-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: var(--gradient-brand);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.search-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 104, 1, 0.2);
}

.search-button .icon {
  width: 16px;
  height: 16px;
}

.popular-categories h3 {
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 1rem;
  color: var(--vp-c-text-soft);
}

.categories-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.category-tag {
  padding: 0.5rem 1rem;
  background: var(--vp-c-bg-soft);
  border-radius: 20px;
  color: var(--vp-c-text);
  text-decoration: none;
  font-size: 0.875rem;
  transition: all 0.2s ease;
}

.category-tag:hover {
  background: var(--vp-c-brand);
  color: white;
  transform: translateY(-2px);
}

@media (max-width: 640px) {
  .search-box {
    flex-direction: column;
  }
  
  .search-button {
    width: 100%;
    justify-content: center;
  }
}
</style>