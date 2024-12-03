import NavInitiator from '../utils/nav-initiator';
import ScrollInitiator from '../utils/scroll-initiator';

class App {
  constructor({ hamburger, navMenu, header, content, toTop }) {
    this._hamburger = hamburger;
    this._navMenu = navMenu;
    this._content = content;
    this._header = header;
    this._toTop = toTop;

    this._initialAppShell();
  }

  _initialAppShell() {
    NavInitiator.init({
      hamburger: this._hamburger,
      navMenu: this._navMenu,
      content: this._content,
    });

    ScrollInitiator.init({
      header: this._header,
      fixedNav: this._header.offsetTop,
      toTop: this._toTop,
    });
  }
}

export default App;
