import { defineConfig } from 'vitepress';

export default defineConfig({
  lang: 'es-MX',
  title: 'Centro de Ayuda TREFA',
  description: 'Documentación y recursos de ayuda para clientes TREFA',
  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'Centro de Ayuda',
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Categorías', link: '/categorias/' },
      { text: 'Admin', link: '/admin/' }
    ],
    sidebar: [
      {
        text: 'Categorías',
        items: [
          { text: 'Compras de Contado', link: '/categorias/compras-contado/' },
          { text: 'Compras a Crédito', link: '/categorias/compras-credito/' },
          { text: 'Separación de Autos', link: '/categorias/separacion-autos/' },
          { text: 'Vender tu Auto', link: '/categorias/vender-auto/' },
          { text: 'Garantías', link: '/categorias/garantias-autos/' },
          { text: 'Sucursales', link: '/categorias/sucursales/' }
        ]
      }
    ],
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'facebook', link: 'https://facebook.com/trefa' },
      { icon: 'instagram', link: 'https://instagram.com/trefa' }
    ]
  },
  css: {
    vars: {
      'vp-c-brand': '#FF6801',
      'vp-c-brand-dark': '#1a237e',
      'gradient-brand': 'linear-gradient(45deg, #FF6801, #ff8534)',
      'card-border-radius': '12px',
      'card-shadow': '0 4px 12px rgba(0, 0, 0, 0.1)'
    }
  }
});