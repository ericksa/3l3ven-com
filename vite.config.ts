import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '3l3ven.com',
  description: 'DJ Services, Video Production, and Events',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Booking', link: '/booking' },
      { text: 'Schedule', link: '/schedule' },
    ],
    sidebar: [
      {
        text: 'Content',
        items: [
          { text: 'Home', link: '/' },
          { text: 'Booking', link: '/booking' },
          { text: 'Schedule', link: '/schedule' },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/aerickson/3l3ven-com' }
    ]
  }
})