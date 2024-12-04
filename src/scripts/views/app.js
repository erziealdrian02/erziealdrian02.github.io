import NavInitiator from '../utils/nav-initiator';
import ScrollInitiator from '../utils/scroll-initiator';
import TabInitiator from '../utils/tab-initiator';
import DarkModeInitiator from '../utils/darkmode-initiator';
import RunningTextInitiator from '../utils/runningText-initiator';

import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({
    hamburger,
    navMenu,
    header,
    content,
    toTop,
    programmingTab,
    toolsTab,
    programmingContent,
    toolsContent,
    darkButton,
    html,
    typingElement,
  }) {
    this._hamburger = hamburger;
    this._navMenu = navMenu;
    this._content = content;
    this._header = header;
    this._toTop = toTop;
    this._programmingTab = programmingTab;
    this._toolsTab = toolsTab;
    this._programmingContent = programmingContent;
    this._toolsContent = toolsContent;
    this._programmingContent = programmingContent;
    this._darkButton = darkButton;
    this._html = html;
    this._typingElement = typingElement;

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

    TabInitiator.init({
      programmingTab: this._programmingTab,
      toolsTab: this._toolsTab,
      programmingContent: this._programmingContent,
      toolsContent: this._toolsContent,
    });

    DarkModeInitiator.init({
      darkButton: this._darkButton,
      html: this._html,
    });

    RunningTextInitiator.init({
      typingElement: this._typingElement,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    console.log('Active URL:', url);
    const page = routes[url];
    if (!page) {
      console.error('Page not found for URL:', url);
      return;
    }
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
