import DefaultTheme from 'vitepress/theme'
import CategoryCard from './components/CategoryCard.vue'
import ArticleCard from './components/ArticleCard.vue'
import ArticleTemplate from './components/ArticleTemplate.vue'
import CategoryArchive from './components/CategoryArchive.vue'
import './custom.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('CategoryCard', CategoryCard)
    app.component('ArticleCard', ArticleCard)
    app.component('ArticleTemplate', ArticleTemplate)
    app.component('CategoryArchive', CategoryArchive)
  }
}