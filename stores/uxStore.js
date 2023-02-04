export const useUxStore = defineStore('ux', {
  state: () => ({
    sidebar: {
      isOpen: false,
      isSubmenuOpen: false,
      menuItems: [
        {title: 'Dashboard', icon: 'ri:dashboard-fill'},
        {title: 'Pages', icon: 'gridicons:pages'},
        {title: 'Media', spacing: true, icon: 'ph:video-camera-duotone'},
        {
          title: 'Projects',
          submenu: true,
          icon: 'bi:calendar2-check',
          submenuItems: [
            {title: 'Submenu 1'},
            {title: 'Submenu 2'},
            {title: 'Submenu 3'},
          ],
        },
        {title: 'Analytics', icon: 'carbon:analytics'},
        {title: 'Inbox', icon: 'material-symbols:forward-to-inbox-rounded'},
        {title: 'Profile', spacing: true, icon: 'healthicons:ui-user-profile'},
        {title: 'Settings', icon: 'material-symbols:settings'},
        {title: 'Logout', icon: 'ri:logout-circle-fill'},
      ]
    },
    isDarkMode: false,
  }),

  getters: {},
  actions: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode
    },
    toggleSidebar() {
      this.sidebar.isOpen = !this.sidebar.isOpen
    },
    toggleSubmenu() {
      this.sidebar.isSubmenuOpen = !this.sidebar.isSubmenuOpen
    },
  }
})