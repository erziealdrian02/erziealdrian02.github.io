import { createMovieItemTemplate } from '../templates/template-creator';
import { createAboutTemplate } from '../templates/template-creator';
import { createPortofolioTemplate } from '../templates/template-creator';

const NowPlaying = {
  async render() {
    return `
      <!-- Hero Section Start -->
      <section id="Home" class="pt-36 dark:bg-dark">
        <div class="container object-center" id="home">
        </div>
      </section>
      <!-- Hero Section End -->

      <!-- About Section Start -->
      <section id="about" class="pt-36 dark:bg-dark">
      </section>
      <!-- About Section End -->

      <div
        class="pt-36 pb-16 bg-[url('./img/bg-about.svg')] dark:bg-[url('./img/bg-about-dark.svg')]"
      ></div>

      <!-- Portofolio Section Start -->
      <section id="portofolio" class="bg-slate-200 dark:bg-slate-800 pb-12">
      </section>
      <!-- Portofolio Section End -->
    `;
  },

  async afterRender() {
    const moviesContainer = document.querySelector('#home');
    const aboutContainer = document.querySelector('#about');
    const portofolioContainer = document.querySelector('#portofolio');

    // Misalkan kita langsung menggunakan template
    const movieItemTemplate = createMovieItemTemplate();
    const aboutTemplate = createAboutTemplate();
    const portofolioTemplate = createPortofolioTemplate();

    moviesContainer.innerHTML += movieItemTemplate;
    aboutContainer.innerHTML += aboutTemplate;
    portofolioContainer.innerHTML += portofolioTemplate;
  },
};

export default NowPlaying;
