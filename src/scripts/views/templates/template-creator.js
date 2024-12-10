const createMovieItemTemplate = (home) => `
    <div class="container object-center" id="home">
      <div class="flex flex-wrap">
        <div class="w-full self-center px-4 lg:w-1/2">
            <h1
            class="text-xl font-semibold text-slate-800 dark:text-white bg-gradient-to-r from-primary dark:from-blue rounded-lg md:text-xl w-3/4 px-5 p-2 mb-4"
            >
            Selamat datang di Portofolio ku
            </h1>
            <h1
            class="text-base font-semibold text-primary dark:text-blue md:text-xl"
            >
            <span
                class="block font-bold text-dark text-4xl mt-1 lg:text-[40px] dark:text-white"
                >Muhamad Erzie Aldrian Nugraha</span
            >
            </h1>
            <h2
            class="font-medium text-secondary text-xl mt-1 mb-5 lg:text-3xl dark:text-slate-400"
            >
            <span class="text-dark dark:text-white typing"></span>
            </h2>

            <p
            class="font-medium text-base text-justify text-secondary dark:text-slate-400 max-w-xl lg:text-lg mb-10"
            >
            Saya adalah Fresh Graduate dari
            <b class="text-dark dark:text-slate-200"
                >Universitas Indraprasta PGRI</b
            >
            dengan
            <b class="text-dark dark:text-slate-200">Jurusan Teknik Informatika</b>. Saya memiliki pemahaman dasar yang kuat konsep
            <b class="text-dark dark:text-slate-200">informatika</b>,
            kemahiran dalam bahasa <b class="text-dark dark:text-slate-200">
            pemrograman</b>, dan pengalaman dalam
            <b class="text-dark dark:text-slate-200">Pengembangan Web</b>
            sebagai <b class="text-dark dark:text-slate-200">Front-End Developer</b>,
            <b class="text-dark dark:text-slate-200">Back-end Developer</b>,
            <b class="text-dark dark:text-slate-200">Fullstack Developer</b>
            maupun <b class="text-dark dark:text-slate-200">UI/UX Designer</b>.
            Saya berpartisipasi secara aktif kegiatan ekstrakurikuler dan
            saya ingin terhubung dengan sesama mahasiswa dan profesional di
            industri.
            </p>
            <a
              href="./documents/resume/Muhamad Erzie Aldrian Nugraha-resume.pdf"
              class="text-base font-semibold text-white bg-primary dark:bg-blue py-3 px-8 rounded-full hover:shadow-lg hover:bg-slate-600 hover:opacity-80 transition duration-300 ease-in-out"
              download
            >
            <span class="mr-2">Download CV</span>
            <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-download inline-block animate-bounce"
                  viewBox="0 0 16 16"
                >
                <path
                    d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"
                />
                <path
                    d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"
                />
                </svg>
            </span>
            </a>
        </div>
          <div class="w-full self-end px-4 lg:w-1/2">
            <div class="relative mt-2 mb-10 lg:mt-9 lg:right-0 animate-verticalMove">
              <img
                  src="./images/profiles/me2.png"
                  alt="Thats Me"
                  class="max-w-full h-[300px] mx-auto relative z-10"
              />
              <span
                  class="absolute bottom-1 top-[1.5px] left-1/2 -translate-x-1/2 md:scale-125"
              >
                  <svg
                  widht="400"
                  height="320"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                  >
                  <path
                      class="fill-primary dark:fill-blue"
                      d="M49.8,-57.7C60.6,-50.2,62.7,-30.8,62.4,-13.8C62.1,3.3,59.3,18,53.4,33.3C47.5,48.7,38.4,64.7,25.6,68.6C12.7,72.6,-3.9,64.5,-18.6,56.7C-33.3,49,-46,41.4,-57.1,29.4C-68.3,17.5,-77.9,1,-74.4,-12.2C-71,-25.4,-54.6,-35.4,-40,-42.2C-25.4,-49,-12.7,-52.5,3.4,-56.6C19.5,-60.6,39,-65.1,49.8,-57.7Z"
                      transform="translate(100 100)"
                  />
                  </svg>
              </span>
            </div>

            <div class="flex justify-center items-center">
              <!-- Whats App -->
              <a
                id="whatsapp"
                href="https://wa.me/+6281281480122"
                target="_blank"
                class="w-10 h-10 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-secondary hover:border-primary hover:bg-primary dark:hover:bg-blue hover:text-white hover:scale-125 ease-in-out duration-300 transition"
              >
                <svg
                  class="fill-current dark:fill-slate-300"
                  width="20"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>WhatsApp</title>
                  <path
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
                  />
                </svg>
              </a>
              <!-- Instagram -->
              <a
                id="instagram"
                href="https://www.instagram.com/ez_ian02/"
                target="_blank"
                class="w-10 h-10 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-secondary hover:border-primary hover:bg-primary dark:hover:bg-blue hover:text-white hover:scale-125 hover:translate-y-1 ease-in-out duration-300 transition"
              >
                <svg
                  class="fill-current dark:fill-slate-300"
                  width="20"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Instagram</title>
                  <path
                    d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"
                  />
                </svg>
              </a>
              <!-- Facebook -->
              <a
                id="facebook"
                href="https://web.facebook.com/erzie.aldrian/"
                target="_blank"
                class="w-10 h-10 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-secondary hover:border-primary hover:bg-primary dark:hover:bg-blue hover:text-white hover:scale-125 ease-in-out duration-300 transition"
              >
                <svg
                  class="fill-current dark:fill-slate-300"
                  width="20"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Facebook</title>
                  <path
                    d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"
                  />
                </svg>
              </a>
              <!-- Linkedin -->
              <a
                id="linkedin"
                href="https://www.linkedin.com/in/muhamad-erzie-aldrian-nugraha/"
                target="_blank"
                class="w-10 h-10 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-secondary hover:border-primary hover:bg-primary dark:hover:bg-blue hover:text-white hover:scale-125 ease-in-out duration-300 transition"
              >
                <svg
                  class="fill-current dark:fill-slate-300"
                  width="20"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>LinkedIn</title>
                  <path
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                  />
                </svg>
              </a>
              <!-- Github -->
              <a
                id="github"
                href="https://github.com/erziealdrian02"
                target="_blank"
                class="w-10 h-10 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-secondary hover:border-primary hover:bg-primary dark:hover:bg-blue hover:text-white hover:scale-125 ease-in-out duration-300 transition"
              >
                <svg
                  class="fill-current dark:fill-slate-300"
                  width="20"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>GitHub</title>
                  <path
                    d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                  />
                </svg>
              </a>
              <!-- Steam -->
              <a
                id="steam"
                href="https://steamcommunity.com/id/N3nPl4yZz/"
                target="_blank"
                class="w-10 h-10 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-secondary hover:border-primary hover:bg-primary dark:hover:bg-blue hover:text-white hover:scale-125 ease-in-out duration-300 transition"
                onmouseover="document.getElementById('github').classList.add('-translate-x-1')"
                onmouseout="document.getElementById('github').classList.remove('-translate-x-1')"
              >
                <svg
                  class="fill-current dark:fill-slate-300"
                  width="20"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Steam</title>
                  <path
                    d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z"
                  />
                </svg>
              </a>
            </div>
          </div>
      </div>
    </div>
`;

const createAboutTemplate = (about) => {
  // Array berisi informasi tentang bahasa pemrograman dan tools
  const tools = [
    {
      src: './svg/html-5-svgrepo-com.svg',
      alt: 'HTML',
      name: 'HTML',
      level: 'Advanced',
    },
    {
      src: './svg/css-3-svgrepo-com.svg',
      alt: 'CSS',
      name: 'CSS',
      level: 'Advanced',
    },
    {
      src: './svg/javascript-svgrepo-com.svg',
      alt: 'JavaScript',
      name: 'JavaScript',
      level: 'Intermediate',
    },
    {
      src: './svg/php-svgrepo-com.svg',
      alt: 'PHP',
      name: 'PHP',
      level: 'Advanced',
    },
    {
      src: './svg/nodejs-svgrepo-com.svg',
      alt: 'NodeJS',
      name: 'Node.js',
      level: 'Intermediate',
    },
    {
      src: './svg/python-svgrepo-com.svg',
      alt: 'Python',
      name: 'Python',
      level: 'Intermediate',
    },
    {
      src: './svg/bootstrap-4-logo-svgrepo-com.svg',
      alt: 'Bootstrap',
      name: 'Bootstrap',
      level: 'Advanced',
    },
    {
      src: './svg/tailwind-svgrepo-com.svg',
      alt: 'Tailwind',
      name: 'Tailwind',
      level: 'Intermediate',
    },
    {
      src: './svg/laravel-svgrepo-com.svg',
      alt: 'Laravel',
      name: 'Laravel',
      level: 'Advanced',
    },
    {
      src: './svg/flask-svgrepo-com.svg',
      alt: 'FlaskAPI',
      name: 'Flask',
      level: 'Beginner',
    },
    {
      src: './svg/vscode-svgrepo-com.svg',
      alt: 'VSCode',
      name: 'VSCode',
      level: 'Advanced',
    },
    {
      src: './svg/laragon-svgrepo-com.svg',
      alt: 'Laragon',
      name: 'Laragon',
      level: 'Advanced',
    },
    {
      src: './svg/mysql-logo-svgrepo-com.svg',
      alt: 'MySQL',
      name: 'MySQL',
      level: 'Advanced',
    },
    {
      src: './svg/github-142-svgrepo-com.svg',
      alt: 'GitHub',
      name: 'GitHub',
      level: 'Advanced',
    },
    {
      src: './svg/git-svgrepo-com.svg',
      alt: 'Git',
      name: 'Git',
      level: 'Intermediate',
    },
    {
      src: './svg/cpanel-svgrepo-com.svg',
      alt: 'CPanel',
      name: 'CPanel',
      level: 'Beginner',
    },
    {
      src: './svg/linux-svgrepo-com.svg',
      alt: 'Linux',
      name: 'Linux',
      level: 'Intermediate',
    },
  ];

  // Menghasilkan HTML untuk setiap item menggunakan map
  const toolsHTML = tools
    .map(
      ({ src, alt, name, level }) => `  
    <div class="flex flex-col items-center w-48 h-48 p-4 bg-slate-200 rounded-lg hover:scale-110 ease-in-out duration-300 transition">  
      <img src="${src}" alt="${alt}" class="w-24 h-24" />  
      <p class="mt-4 text-center font-medium text-lg">${name}</p>  
      <p class="text-center text-sm text-gray-500">${level}</p>  
    </div>  
  `
    )
    .join('');

  // Template utama
  return `  
    <div class="container">  
      <div class="w-full px-4">  
        <div class="max-w-full mx-auto text-center mb-16">  
          <h2 class="font-bold text-dark text-3xl mb-4 dark:text-white">  
            Bahasa Pemrograman dan Tools  
          </h2>  
          <p class="font-medium text-md text-secondary dark:text-slate-300">  
            Beberapa Bahasa Pemrograman, Framework dan Tools yang saya pernah Gunakan  
          </p>  
        </div>  
      </div>  
    </div>  

    <div class="relative overflow-hidden bg-primary dark:bg-blue p-10 mt-10">  
      <!-- Gradient Overlay -->  
      <div  
        class="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-primary dark:from-blue to-transparent opacity-80 pointer-events-none"  
      ></div>  
      <div  
        class="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-primary dark:from-blue to-transparent opacity-80 pointer-events-none"  
      ></div>  

      <!-- Marquee -->  
      <div class="flex gap-6 p-4 min-w-max animate-loop">  
        ${toolsHTML}  
      </div>  
    </div>  
  `;
};

const createPortofolioTemplate = (portofolio) => {
  // Array berisi informasi tentang proyek
  const projects = [
    {
      image: './images/portofolio/reimburse/reimburse_ca.png',
      title: 'ERP Reimbursement Sistem',
      description:
        'Sistem ini mencakup fitur pengajuan uang muka, perjalanan bisnis, tiket, hotel, dan perjalanan pulang. Sistem juga punya fitur admin yang dibatasi berdasar lokasi dan departemen. Tugas admin ialah melihat transaksi, impor/ekspor Excel, dan buat laporan PDF. Sistem terintegrasi untuk aktivitas bisnis dengan manajemen terstruktur.',
      specifications: [
        { label: 'Bahasa Pemrograman', value: 'PHP (Laravel)' },
        { label: 'Database', value: 'MySQL' },
        { label: 'Front-end', value: 'HTML, CSS, JavaScript' },
        { label: 'Framework/Library', value: 'Laravel, Bootstrap' },
      ],
    },
    {
      image: './images/portofolio/mushroom/mushroom_index.png',
      title: 'Mushroom Scanner',
      description:
        'Proyek ini mengembangkan sistem yang dapat mendeteksi jenis-jenis jamur yang aman untuk dikonsumsi. Sistem ini menggunakan teknologi machine learning untuk mengidentifikasi lebih dari 12 jenis jamur dan menentukan apakah jamur tersebut dapat dimakan atau tidak.',
      specifications: [
        {
          label: 'Bahasa Pemrograman',
          value: 'JavaScript (ReactJS) dan Python (FlaskAPI)',
        },
        { label: 'Database', value: 'MySQL' },
        { label: 'Front-end', value: 'HTML, CSS, JavaScript' },
        { label: 'Back-end', value: 'Python' },
        { label: 'Framework/Library', value: 'ReactJS, Tailwind, FlaskAPI' },
      ],
    },
    {
      image: './images/portofolio/weather/weather_maps.png',
      title: 'Weathering With Us',
      description:
        'Proyek ini mengembangkan sistem yang dapat mendeteksi dan menampilkan prakiraan cuaca di Indonesia hingga 3 hari ke depan. Sistem ini bekerja secara real-time dan menyajikan informasi cuaca melalui tampilan peta, memudahkan pengguna untuk melihat kondisi cuaca hari ini, besok, dan lusa di seluruh wilayah Indonesia. Yang di mana data yang di ambil merupakan data dari BMKG.',
      specifications: [
        { label: 'Bahasa Pemrograman', value: 'PHP (Native)' },
        {
          label: 'API',
          value: 'BMKG API (https://ibnux.github.io/BMKG-importer/)',
        },
        { label: 'Front-end', value: 'HTML, CSS, JavaScript' },
        { label: 'Framework/Library', value: 'Tailwind' },
      ],
    },
    {
      image: './images/portofolio/spk/karyawan.png',
      title: 'SPK Pemilihan Karyawan terbaik',
      description:
        'SPK untuk memilih karyawan terbaik berdasar penilaian pimpinan atas kehadiran, etos kerja, dll. Sistem ini mengidentifikasi karyawan berkinerja terbaik untuk pertimbangan penghargaan atau promosi, sehingga proses pemilihan lebih terstruktur dan objektif.',
      specifications: [
        { label: 'Bahasa Pemrograman', value: 'PHP (Native)' },
        { label: 'Database', value: 'MySQL' },
        { label: 'Front-end', value: 'HTML, CSS, JavaScript' },
        { label: 'Framework/Library', value: 'Bootstrap' },
      ],
    },
  ];

  // Menghasilkan HTML untuk setiap proyek menggunakan map
  const projectsHTML = projects
    .map(
      ({ image, title, description, specifications }) => `  
    <div class="mb-12 p-4 md:w-1/2">  
      <div class="rounded-md shadow-md overflow-hidden hover:scale-105 ease-in-out duration-300 transition">  
        <img src="${image}" alt="Gambar Portofolio" class="w-full h-48 object-cover"/>  
      </div>  
      <h3 class="font-semibold text-xl text-dark mt-5 mb-3 dark:text-white">  
        ${title}  
      </h3>  
      <p class="font-medium text-base text-secondary dark:text-slate-300 text-justify">  
        ${description}  
      </p>  
      <p class="font-bold text-base text-dark dark:text-slate-300">  
        Spesifikasi:  
      </p>  
      <ul class="list-disc ml-4 text-dark dark:text-slate-300">  
        ${specifications
          .map(
            (spec) => `  
          <li><b>${spec.label}:</b> ${spec.value}</li>  
        `
          )
          .join('')}  
      </ul>  
    </div>  
  `
    )
    .join('');

  // Template utama
  return `  
    <div class="container">  
      <div class="w-full px-4">  
        <div class="max-w-full mx-auto text-center mb-16">  
          <h4 class="font-semibold text-lg text-primary dark:text-blue mb-2">  
            Portofolio  
          </h4>  
          <h2 class="font-bold text-dark text-3xl mb-4 dark:text-white">  
            Project Terbaru  
          </h2>  
          <p class="font-medium text-md text-secondary dark:text-slate-300">  
            Beberapa Project yang saya ikut serta dalam pengerjaannya, Beberapa program menggunakan Framework Seperti Laravel, NodeJS, ReactJS, atau FlaskAPI  
          </p>  
        </div>  
      </div>  

      <div class="w-fill px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">  
        ${projectsHTML}  
      </div>  

      <div class="w-full px-4">  
        <div class="max-w-full mx-auto text-center">  
          <a  
            href="https://github.com/erziealdrian02?tab=repositories"  
            class="block"  
          >  
            <h3 class="font-bold text-xl text-dark dark:text-white hover:text-primary dark:hover:text-blue">  
              Lihat Proyek Lainnya di  
              <svg class="fill-current inline-block w-5 mb-2" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">  
                <title>GitHub</title>  
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />  
              </svg>  
              GitHub  
            </h3>  
          </a>  
        </div>  
      </div>  
    </div>  
  `;
};

const createProgrammingTemplate = (programming) => {
  // Array untuk pengalaman kerja
  const workExperience = [
    {
      logo: './images/company/kpn.jpg',
      companyName: 'KPN Corp',
      position: 'Fullstack Developer Intern',
      duration: 'July 2024 - Sekarang',
      description:
        'Bertanggung jawab membantu tim developer mengembangkan website internal perusahaan dengan membangun program berstandar OOP. Bekerja sama menggunakan GitHub untuk kolaborasi tim dan menyelesaikan proyek tepat waktu, serta mempresentasikan hasil program kepada pengguna dan melakukan revisi sesuai kebutuhan.',
    },
    {
      logo: './images/company/Designer.jpeg',
      companyName: 'Full Stack Developer Freelance',
      position: '',
      duration: 'Jan 2020 - Sekarang',
      description:
        'Membangun program secara mandiri sesuai kebutuhan klien dan berinteraksi untuk menjelaskan solusi teknis. Menyelesaikan masalah pengguna dengan pendekatan problem-solving yang efektif, menyusun dokumentasi teknis, serta memberikan dukungan pasca-pengembangan. Mengelola proyek dari perencanaan hingga implementasi dengan fokus pada kualitas dan efisiensi.',
    },
    {
      logo: './images/company/daunbiru.jpeg',
      companyName: 'PT. Daun Biru Engineering',
      position: 'Junior Developer Intern',
      duration: 'Desember 2018 - Maret 2019',
      description:
        'Mendapatkan pengalaman praktis dalam pengembangan web dan sertifikat kompetensi, sambil bertanggung jawab atas website internal perusahaan menggunakan Framework CodeIgniter dan meningkatkan kemampuan pemrograman.',
    },
  ];

  // Array untuk akademi
  const academies = [
    {
      logo: './images/academy/unindra.jpg',
      institution: 'Universitas Indraprasta PGRI',
      location: 'Jakarta Timur, Indonesia',
      duration: 'Agustus 2020 - October 2024',
      degree: 'Sarjana Teknik Informatika, 3.39',
    },
    {
      logo: './images/academy/kampusmerdeka.jpg',
      institution:
        'Program Studi Independen Bersertifikat Angkatan 4 (SIB 2023)',
      location: '',
      duration: 'Februari - July 2023',
      degree: 'Pengembang Front-End Web dan Back-End, 88.22',
    },
    {
      logo: './images/academy/fatahillah.png',
      institution: 'SMK Fatahillah Cielungsi',
      location: 'Kab. Bogor, Indonesia',
      duration: 'Juni 2017 - October 2020',
      degree: 'Rekayasa Perangkat Lunak, 81.00',
    },
  ];

  // Menghasilkan HTML untuk pengalaman kerja
  const workExperienceHTML = workExperience
    .map(
      ({ logo, companyName, position, duration, description }) => `  
    <div class="bg-gray-200 dark:bg-gray-600 rounded-md p-6 shadow-lg mb-4">  
      <div class="flex flex-wrap lg:flex-nowrap items-center space-x-6">  
        <div class="w-full lg:w-1/5 flex justify-center">  
          <img src="${logo}" alt="Logo Perusahaan" class="mb-4 lg:mb-0 w-28 h-28 rounded-full shadow-md scale-100" />  
        </div>  
        <div class="w-4/5">  
          <div class="flex flex-wrap justify-between">  
            <h1 class="text-center text-lg font-bold text-primary dark:text-blue">  
              ${companyName} ${
        position
          ? `<span class="text-sm text-base font-normal text-secondary dark:text-slate-400">- ${position}</span>`
          : ''
      }  
            </h1>  
            <h2 class="text-center text-sm text-gray-600 dark:text-gray-300 inline-block mt-1">${duration}</h2>  
          </div>  
          <p class="text-gray-700 dark:text-gray-200 text-sm text-justify">${description}</p>  
        </div>  
      </div>  
    </div>  
  `
    )
    .join('');

  // Menghasilkan HTML untuk akademi
  const academiesHTML = academies
    .map(
      ({ logo, institution, location, duration, degree }) => `  
    <div class="bg-gray-200 dark:bg-gray-600 rounded-md p-6 shadow-lg mb-4">  
      <div class="flex flex-wrap lg:flex-nowrap items-center space-x-6">  
        <div class="w-full lg:w-1/5 flex justify-center">  
          <img src="${logo}" alt="Logo Kampus" class="w-28 h-28 rounded-full shadow-md scale-100 bg-white" />  
        </div>  
        <div class="w-4/5">  
          <div class="flex flex-wrap justify-center lg:justify-between">  
            <h1 class="text-center text-lg font-bold text-primary dark:text-blue">${institution}  
              ${
                location
                  ? `<span class="text-sm text-base font-normal text-secondary dark:text-slate-400">- ${location}</span>`
                  : ''
              }  
            </h1>  
            <h2 class="text-center text-xs text-gray-600 dark:text-gray-300 inline-block mt-1">${duration}</h2>  
            <h2 class="text-center text-normal text-gray-600 dark:text-gray-300 mt-1">${degree}</h2>  
          </div>  
        </div>  
      </div>  
    </div>  
  `
    )
    .join('');

  // Menghasilkan HTML penuh
  return `  
    <div class="container">  
      <div class="w-full px-4">  
        <div class="w-full mx-auto text-center mb-16">  
          <h4 class="font-semibold text-lg text-primary dark:text-blue mb-2">Programming</h4>  
          <h2 class="font-bold text-white text-3xl mb-4 lg:text-4xl dark:text-dark">Pengalaman Kerja dan</h2>  
          <p class="font-medium text-md text-secondary md:text-lg dark:text-slate-800">Beberapa Bahasa Pemrograman dan Tools yang di gunakan</p>  
        </div>  
      </div>  

      <!-- Tab Navigation Buttons -->  
      <div class="w-full px-4">  
        <div class="max-w-[70%] mx-auto bg-slate-300 dark:bg-slate-800 rounded-lg p-4">  
          <div class="flex justify-center bg-slate-800 dark:bg-slate-300 rounded-lg mb-4" role="tablist">  
            <button class="px-4 py-2 font-medium border-b-4 border-primary dark:border-blue text-primary ease-in-out duration-300 transition hover:border-primary hover:dark:text-blue hover:dark:border-blue hover:text-primary"  
                    id="programming-tab" data-tab="programming-content" role="tab" aria-selected="true">Pengalaman</button>  
            <button class="px-4 py-2 ml-3 font-medium border-b-4 border-transparent text-gray-500 ease-in-out duration-300 transition hover:border-primary hover:dark:text-blue hover:dark:border-blue hover:text-primary"  
                    id="tools-tab" data-tab="tools-content" role="tab" aria-selected="false">Akademi</button>  
          </div>  

          <!-- Tab Content -->  
          <div class="tab-content p-4">  
            <div id="programming-content" class="hidden transition-opacity duration-150 ease-linear" role="tabpanel">  
              ${workExperienceHTML}  
            </div>  

            <div id="tools-content" class="hidden transition-opacity duration-150 ease-linear" role="tabpanel">  
              ${academiesHTML}  
            </div>  
          </div>  
        </div>  
      </div>  
    </div>  
  `;
};

const createSertifikatTemplate = (sertifikat) => {
  // Array untuk sertifikat
  const sertifikatList = [
    {
      image: './images/certificates/MachineLearning.png',
      title: 'Belajar Machine Learning untuk Pemula',
      description:
        'Program ini mencakup pengolahan data, supervised dan unsupervised learning, Support Vector Machine (SVM), clustering dengan k-means, serta dasar-dasar machine learning seperti overfitting dan model selection. Selain itu, peserta akan mempelajari neural network, termasuk multi-layer perceptron dan convolutional neural network, serta penggunaan TensorFlow untuk pengembangan proyek machine learning.',
      link: 'https://www.dicoding.com/certificates/GRX5OJGOVP0M',
    },
    {
      image: './images/certificates/FeBeExpert.png',
      title: 'Menjadi Front-End Web Developer Expert',
      description:
        'Program ini mencakup pembuatan website optimal dengan pendekatan mobile-first, aksesibilitas web, penulisan JavaScript clean code, pengembangan Progressive Web Apps, automation testing, optimasi performa web, dan penerapan CI/CD untuk otomatisasi testing dan deployment.',
      link: 'https://www.dicoding.com/certificates/N9ZO69L68XG5',
    },
    {
      image: './images/certificates/GitHub.png',
      title: 'Belajar Dasar Git dengan GitHub',
      description:
        'Program ini menjelaskan Git dan GitHub serta manfaatnya dalam pengelolaan kode. Peserta akan mempelajari dasar-dasar Git, termasuk membuat repository, commit, dan checkout, diikuti dengan studi kasus. Materi juga mencakup branching, merging, penyelesaian konflik, dan kolaborasi tim melalui forking, squashing changes, dan code reviews. Selain itu, peserta akan belajar menangani pull request dan membuat README yang menarik di GitHub sebagai portofolio profesional.',
      link: 'https://www.dicoding.com/certificates/MRZMQYOKLPYQ',
    },
    {
      image: './images/certificates/UIUX.png',
      title: 'Merancang UI & UX Website bagi Desainer Pemula',
      description:
        'Program ini mencakup penentuan teknik elisitasi kebutuhan, penyusunan dokumentasi spesifikasi perangkat lunak, serta perancangan kebutuhan fungsional dan non-fungsional. Peserta juga akan belajar merancang antarmuka pengguna (UI) yang intuitif dan pengalaman pengguna (UX) yang optimal, dengan fokus pada alur interaksi, kemudahan penggunaan, dan kepuasan pengguna.',
      link: 'https://app.karier.mu/sertifikat/cHJvZ3JhbV91c2VyLTEyNDIxNjY0?prakerja',
    },
    {
      image: './images/certificates/Hubungan.png',
      title:
        'Mempelajari Taktik Komunikasi Untuk Bicara Publik bagi Calon Hubungan Masyarakat',
      description:
        'Menyusun taktik komunikasi melibatkan perencanaan strategi untuk menyampaikan pesan secara efektif kepada audiens yang tepat. Ini mencakup pemilihan saluran komunikasi, format pesan, serta pengaturan waktu dan frekuensi komunikasi. Taktik juga harus disesuaikan dengan karakteristik audiens dan tujuan komunikasi, baik untuk tim internal, klien, atau publik.',
      link: 'https://app.karier.mu/sertifikat/cHJvZ3JhbV91c2VyLTEyMTI5NDIx?prakerja',
    },
  ];

  // Menghasilkan HTML untuk setiap sertifikat
  const sertifikatHTML = sertifikatList
    .map(
      ({ image, title, description, link }) => `  
        <div class="w-full px-4 lg:w-1/2 xl:w-1/3 mb-3">
          <div class="bg-white rounded-xl shadow-lg overflow-hidden mb-10 dark:bg-slate-800 flex flex-col group relative h-[380px]">
            <!-- Gambar utama - Set fixed height -->
            <img
              src="${image}"
              alt="programming"
              class="w-full h-48 object-center"
            />
            <!-- Bagian logo dan teks -->
            <div class="p-4 flex items-center">
              <img
                src="./images/certificates/logo/dicoding.png"
                alt="Icon Dicoding"
                class="w-10 h-10 rounded-full"
              />
              <p class="ml-3 font-bold text-1xl">Dicoding Indonesia</p>
            </div>
            <!-- Judul - Set fixed height -->
            <div class="py-3 px-6 h-24">
              <h3>
                <a
                  href="${link}"
                  class="block mb-3 font-semibold text-xl text-dark hover:text-primary dark:text-blue dark:text-white line-clamp-2"
                >
                  ${title}
                </a>
              </h3>
            </div>

            <!-- Hover Effect Section -->
            <div class="absolute left-0 w-full bg-white dark:bg-slate-800 p-6 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 h-[25 0px] -bottom-[300px] group-hover:bottom-0 z-10">
              <div class="flex flex-col">
                <p class="font-medium text-sm text-secondary mb-4 text-justify line-clamp-8">
                  ${description}
                </p>
                <a
                  href="${link}"
                  class="w-1/2 font-medium text-white bg-primary dark:bg-blue py-3 px-4 rounded-lg hover:opacity-80"
                >
                  Lihat Sertifikat
                </a>
              </div>
            </div>
          </div>
        </div>
  `
    )
    .join('');

  // Template utama
  return `  
    <div class="container">  
      <div class="w-full px-4">  
        <div class="w-full mx-auto text-center mb-16">  
          <h4 class="font-semibold text-lg text-primary dark:text-blue mb-2">Sertifikasi</h4>  
          <h2 class="font-bold text-black text-3xl mb-4 sm:text-4xl lg:text-5xl dark:text-white">Sertifikat</h2>  
          <p class="font-medium text-md text-secondary md:text-lg dark:text-slate-200">Beberapa Sertifikat yang saya peroleh Sertifikat Softskill maupun Hardskill</p>  
        </div>  
      </div>  

      <div class="flex flex-wrap -mx-4">  
        ${sertifikatHTML}  
      </div>  
    </div>  
  `;
};

const createContactTemplate = (contact) => `
    <div class="container">
        <div class="w-full px-4">
          <div class="w-full px-4">
            <div class="w-full mx-auto text-center mb-16">
              <h4
                class="font-semibold text-lg text-primary dark:text-blue mb-2"
              >
                Contact
              </h4>
              <h2
                class="font-bold text-black text-3xl mb-4 sm:text-4xl lg:text-5xl dark:text-white"
              >
                Hubungi Kami
              </h2>
              <p
                class="font-medium text-md text-secondary md:text-lg dark:text-slate-200"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
                tempora!
              </p>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap">
          <div class="w-full self-center px-4 lg:w-1/2">
            <div class="max-w-full mx-auto text-center mb-10">
              <h2
                class="font-bold text-dark text-2xl mb-4 dark:text-white text-left"
              >
                Kirimkan saya Pesan
              </h2>
            </div>

            <form
              action=""
              class="bg-slate-100 dark:bg-slate-700 p-3 rounded-lg"
            >
              <div class="w-full px-4 mb-8">
                <label
                  for="name"
                  class="text-base text-primary dark:text-blue font-bold"
                  >Name</label
                >
                <input
                  type="text"
                  id="name"
                  class="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
                />
              </div>

              <div class="w-full px-4 mb-8">
                <label
                  for="email"
                  class="text-base text-primary dark:text-blue font-bold"
                  >E-mail</label
                >
                <input
                  type="text"
                  id="email"
                  class="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"
                />
              </div>

              <div class="w-full px-4 mb-8">
                <label
                  for="message"
                  class="text-base text-primary dark:text-blue font-bold"
                  >Pesan</label
                >
                <textarea
                  type="text"
                  id="name"
                  class="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary h-32"
                ></textarea>
              </div>
              <div class="w-full">
                <button
                  class="text-base font-semibold text-white bg-primary dark:bg-blue py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-500"
                >
                  Kirim
                </button>
              </div>
            </form>
          </div>
          <div class="w-full self-center px-4 lg:w-1/2">
            <div class="mb-10 flex flex-col md:flex-row items-center">
              <!-- Menambahkan flex untuk mengatur layout secara responsif -->
              <div class="w-full md:w-1/2 mb-10 text-center md:text-left">
                <!-- Mengubah untuk responsif dan menambahkan teks rata kiri di layar yang lebih besar -->
                <h2 class="font-bold text-dark text-2xl mb-4 dark:text-white">
                  Kolaborasi
                </h2>
                <p
                  class="font-medium text-md text-secondary dark:text-slate-300 text-justify"
                >
                  Saya sangat terbuka untuk melakukan kolaborasi dan berkomitmen
                  untuk memberikan yang terbaik demi mendukung visi dan misi tim
                  yang akan datang. Dengan semangat untuk terus belajar dan
                  mencari pengalaman baru, saya berusaha untuk berkembang dan
                  memberikan kontribusi yang berarti.
                </p>
              </div>
              <div class="w-full scale-x-[-1] md:w-1/2">
                <!-- Gambar bersebelahan dengan teks -->
                <img
                  src="./images/profiles/ilustration.png"
                  alt="profiles"
                  class="mx-auto md:mx-0 w-3/4"
                />
                <!-- Penambahan mx-auto untuk menjaga agar gambar center di layar kecil -->
              </div>
            </div>
            <div class="mb-10">
              <div class="max-w-full mx-auto text-center mb-3">
                <h2
                  class="font-bold text-left text-dark text-2xl mb-4 dark:text-white"
                >
                  Media Sosial saya
                </h2>
                <p
                  class="font-medium text-left text-md text-secondary dark:text-slate-300"
                >
                  Atau bisa mengunjungi beberapa Platform yang saya gunakan
                </p>
              </div>

              <div class="flex justify-start items-center">
                <!-- Whats App -->
                <a
                  id="whatsapp"
                  href="https://wa.me/+6281281480122"
                  target="_blank"
                  class="w-12 h-12 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-secondary hover:border-primary hover:bg-primary dark:hover:bg-blue hover:text-white hover:scale-125 ease-in-out duration-300 transition"
                >
                  <svg
                    class="fill-current dark:fill-slate-300"
                    width="24"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>WhatsApp</title>
                    <path
                      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
                    />
                  </svg>
                </a>
                <!-- Instagram -->
                <a
                  id="instagram"
                  href="https://www.instagram.com/ez_ian02/"
                  target="_blank"
                  class="w-12 h-12 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-secondary hover:border-primary hover:bg-primary dark:hover:bg-blue hover:text-white hover:scale-125 hover:translate-y-1 ease-in-out duration-300 transition"
                >
                  <svg
                    class="fill-current dark:fill-slate-300"
                    width="24"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Instagram</title>
                    <path
                      d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"
                    />
                  </svg>
                </a>
                <!-- Facebook -->
                <a
                  id="facebook"
                  href="https://web.facebook.com/erzie.aldrian/"
                  target="_blank"
                  class="w-12 h-12 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-secondary hover:border-primary hover:bg-primary dark:hover:bg-blue hover:text-white hover:scale-125 ease-in-out duration-300 transition"
                >
                  <svg
                    class="fill-current dark:fill-slate-300"
                    width="24"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Facebook</title>
                    <path
                      d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"
                    />
                  </svg>
                </a>
                <!-- Linkedin -->
                <a
                  id="linkedin"
                  href="https://www.linkedin.com/in/muhamad-erzie-aldrian-nugraha/"
                  target="_blank"
                  class="w-12 h-12 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-secondary hover:border-primary hover:bg-primary dark:hover:bg-blue hover:text-white hover:scale-125 ease-in-out duration-300 transition"
                >
                  <svg
                    class="fill-current dark:fill-slate-300"
                    width="24"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>LinkedIn</title>
                    <path
                      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                    />
                  </svg>
                </a>
                <!-- Github -->
                <a
                  id="github"
                  href="https://github.com/erziealdrian02"
                  target="_blank"
                  class="w-12 h-12 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-secondary hover:border-primary hover:bg-primary dark:hover:bg-blue hover:text-white hover:scale-125 ease-in-out duration-300 transition"
                >
                  <svg
                    class="fill-current dark:fill-slate-300"
                    width="24"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>GitHub</title>
                    <path
                      d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                    />
                  </svg>
                </a>
                <!-- Steam -->
                <a
                  id="steam"
                  href="https://steamcommunity.com/id/N3nPl4yZz/"
                  target="_blank"
                  class="w-12 h-12 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-secondary hover:border-primary hover:bg-primary dark:hover:bg-blue hover:text-white hover:scale-125 ease-in-out duration-300 transition"
                  onmouseover="document.getElementById('github').classList.add('-translate-x-1')"
                  onmouseout="document.getElementById('github').classList.remove('-translate-x-1')"
                >
                  <svg
                    class="fill-current dark:fill-slate-300"
                    width="24"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Steam</title>
                    <path
                      d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
    </div>
`;

export {
  createMovieItemTemplate,
  createAboutTemplate,
  createPortofolioTemplate,
  createProgrammingTemplate,
  createSertifikatTemplate,
  createContactTemplate,
};
