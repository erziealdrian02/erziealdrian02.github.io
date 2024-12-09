import RunningTextInitiator from '../../utils/runningText-initiator';
import TabInitiator from '../../utils/tab-initiator';

import { createMovieItemTemplate } from '../templates/template-creator';
import { createAboutTemplate } from '../templates/template-creator';
import { createPortofolioTemplate } from '../templates/template-creator';
import { createProgrammingTemplate } from '../templates/template-creator';
import { createSertifikatTemplate } from '../templates/template-creator';
import { createContactTemplate } from '../templates/template-creator';

const NowPlaying = {
  async render() {
    return `
      <!-- Hero Section Start -->
      <section id="home" class="pt-36 pb-48 dark:bg-dark">
      </section>
      <!-- Hero Section End -->

      <!-- About Section Start -->
      <section id="about" class="pt-44 dark:bg-dark">
      </section>
      <!-- About Section End -->

      <div
        class="pt-36 pb-16 bg-[url('./img/bg-about.svg')] dark:bg-[url('./img/bg-about-dark.svg')]"
      ></div>

      <!-- Portofolio Section Start -->
      <section id="portofolio" class="pt-36 bg-slate-200 dark:bg-slate-800 pb-12">
      </section>
      <!-- Portofolio Section End -->

      <!-- Programming Section Start -->
      <section id="programming" class="pt-36 pb-32 bg-slate-800 dark:bg-slate-300">
      </section>
      <!-- Programming Section End -->

      <!-- sertifikat Section Start -->
      <section id="sertifikat" class="pt-36 pb-32 bg-slate-100 dark:bg-dark">  
      </section>
      <!-- sertifikat Section Start -->

      <!-- Contact Section Start -->
      <section id="contact" class="pt-36 pb-32 dark:bg-slate-800">
      </section>
      <!-- Contact Section End -->
    `;
  },

  async afterRender() {
    const moviesContainer = document.querySelector('#home');
    const aboutContainer = document.querySelector('#about');
    const portofolioContainer = document.querySelector('#portofolio');
    const programmingContainer = document.querySelector('#programming');
    const sertifikatContainer = document.querySelector('#sertifikat');
    const contactContainer = document.querySelector('#contact');

    // Misalkan kita langsung menggunakan template
    const movieItemTemplate = createMovieItemTemplate();
    const aboutTemplate = createAboutTemplate();
    const portofolioTemplate = createPortofolioTemplate();
    const programmingTemplate = createProgrammingTemplate();
    const sertifikatTemplate = createSertifikatTemplate();
    const contactTemplate = createContactTemplate();

    moviesContainer.innerHTML += movieItemTemplate;
    aboutContainer.innerHTML += aboutTemplate;
    portofolioContainer.innerHTML += portofolioTemplate;
    programmingContainer.innerHTML += programmingTemplate;
    sertifikatContainer.innerHTML += sertifikatTemplate;
    contactContainer.innerHTML += contactTemplate;

    const typingElement = document.querySelector('.typing');
    RunningTextInitiator.init({
      typingElement: typingElement,
    });

    const programmingTab = document.querySelector('#programming-tab');
    const toolsTab = document.querySelector('#tools-tab');
    const programmingContent = document.querySelector('#programming-content');
    const toolsContent = document.querySelector('#tools-content');
    TabInitiator.init({
      programmingTab: programmingTab,
      toolsTab: toolsTab,
      programmingContent: programmingContent,
      toolsContent: toolsContent,
    });
  },
};

export default NowPlaying;
