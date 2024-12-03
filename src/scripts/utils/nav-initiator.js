const NavInitiator = {
  init({ hamburger, navMenu }) {
    hamburger.addEventListener('click', () => {
      this._toggleDrawer(hamburger, navMenu);
    });

    // Klik di luar Hamburger dan Drawer untuk menutup
    window.addEventListener('click', (event) => {
      if (event.target !== hamburger && !navMenu.contains(event.target)) {
        this._closeDrawer(hamburger, navMenu);
      }
    });
  },

  _toggleDrawer(hamburger, navMenu) {
    hamburger.classList.add('hamburger-active');
    navMenu.classList.remove('hidden');
  },

  _closeDrawer(hamburger, navMenu) {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
  },
};

export default NavInitiator;
