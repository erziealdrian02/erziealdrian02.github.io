import RunningTextInitiator from '../../utils/runningText-initiator';
import TabInitiator from '../../utils/tab-initiator';

import { createProfileTemplate } from '../templates/template-profile';
import { createToolsTemplate } from '../templates/template-tools';
import { createPortofolioTemplate } from '../templates/template-portofolio';
import { createExperienceTemplate } from '../templates/template-experience';
import { createSertifikatTemplate } from '../templates/template-certificate';
import { createContactTemplate } from '../templates/template-contact';

const PortofolioPageEn = {
  async render() {
    return `
      <!-- Hero Section Start -->
      <section id="home" class="pt-36 pb-48 dark:bg-dark">
      </section>
      <!-- Hero Section End -->

      <!-- Tools Section Start -->
      <section id="tools" class="pt-44 dark:bg-dark">
      </section>
      <!-- Tools Section End -->

      <div
        class="pt-36 pb-16 bg-[url('./img/bg-about.svg')] dark:bg-[url('./img/bg-about-dark.svg')]"
      ></div>

      <!-- Portofolio Section Start -->
      <section id="portofolio" class="pt-36 bg-slate-200 dark:bg-slate-800 pb-12">
      </section>
      <!-- Portofolio Section End -->

      <!-- Experience Section Start -->
      <section id="experience" class="pt-36 pb-32 bg-slate-800 dark:bg-slate-300">
      </section>
      <!-- Experience Section End -->

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
    const profileContainer = document.querySelector('#home');
    const toolsContainer = document.querySelector('#tools');
    const portofolioContainer = document.querySelector('#portofolio');
    const experienceContainer = document.querySelector('#experience');
    const sertifikatContainer = document.querySelector('#sertifikat');
    const contactContainer = document.querySelector('#contact');

    // Misalkan kita langsung menggunakan template
    const profileTemplate = createProfileTemplate();
    const toolsTemplate = createToolsTemplate();
    const portofolioTemplate = createPortofolioTemplate();
    const experienceTemplate = createExperienceTemplate();
    const sertifikatTemplate = createSertifikatTemplate();
    const contactTemplate = createContactTemplate();

    profileContainer.innerHTML += profileTemplate;
    toolsContainer.innerHTML += toolsTemplate;
    portofolioContainer.innerHTML += portofolioTemplate;
    experienceContainer.innerHTML += experienceTemplate;
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

export default PortofolioPageEn;
