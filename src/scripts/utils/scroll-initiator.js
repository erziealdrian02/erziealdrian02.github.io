const ScrollInitiator = {
  init({ header, fixedNav, toTop }) {
    window.addEventListener('scroll', () => {
      this._handleScroll(header, fixedNav, toTop);
    });
  },

  _handleScroll(header, fixedNav, toTop) {
    if (window.pageYOffset > fixedNav) {
      header.classList.add('navbar-fixed');
      toTop.classList.remove('hidden');
      toTop.classList.add('flex');
    } else {
      header.classList.remove('navbar-fixed');
      toTop.classList.add('hidden');
      toTop.classList.remove('flex');
    }
  },
};

export default ScrollInitiator;
