// const createMovieItemTemplate = (home) => `
const createProfileTemplate = (home) => {
  const profileList = [
    {
      id: 'discord',
      title: 'Discord',
      path: `<path
              d="M18.59 5.88997C17.36 5.31997 16.05 4.89997 14.67 4.65997C14.5 4.95997 14.3 5.36997 14.17 5.69997C12.71 5.47997 11.26 5.47997 9.83001 5.69997C9.69001 5.36997 9.49001 4.95997 9.32001 4.65997C7.94001 4.89997 6.63001 5.31997 5.40001 5.88997C2.92001 9.62997 2.25001 13.28 2.58001 16.87C4.23001 18.1 5.82001 18.84 7.39001 19.33C7.78001 18.8 8.12001 18.23 8.42001 17.64C7.85001 17.43 7.31001 17.16 6.80001 16.85C6.94001 16.75 7.07001 16.64 7.20001 16.54C10.33 18 13.72 18 16.81 16.54C16.94 16.65 17.07 16.75 17.21 16.85C16.7 17.16 16.15 17.42 15.59 17.64C15.89 18.23 16.23 18.8 16.62 19.33C18.19 18.84 19.79 18.1 21.43 16.87C21.82 12.7 20.76 9.08997 18.61 5.88997H18.59ZM8.84001 14.67C7.90001 14.67 7.13001 13.8 7.13001 12.73C7.13001 11.66 7.88001 10.79 8.84001 10.79C9.80001 10.79 10.56 11.66 10.55 12.73C10.55 13.79 9.80001 14.67 8.84001 14.67ZM15.15 14.67C14.21 14.67 13.44 13.8 13.44 12.73C13.44 11.66 14.19 10.79 15.15 10.79C16.11 10.79 16.87 11.66 16.86 12.73C16.86 13.79 16.11 14.67 15.15 14.67Z"
            />`,
      link: 'https://discord.com/users/521972197825445888',
    },
    {
      id: 'instagram',
      title: 'Instagram',
      path: `<path
                d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"
              />`,
      link: 'https://www.instagram.com/ez_ian02/',
    },
    {
      id: 'facebook',
      title: 'Facebook',
      path: `<path
                d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"
              />`,
      link: 'https://web.facebook.com/erzie.aldrian/',
    },
    {
      id: 'linkedin',
      title: 'LinkedIn',
      path: `<path
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
              />`,
      link: 'https://www.linkedin.com/in/muhamad-erzie-aldrian-nugraha/',
    },
    {
      id: 'github',
      title: 'GitHub',
      path: `<path
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
              />`,
      link: 'https://github.com/erziealdrian02',
    },
    {
      id: 'steam',
      title: 'Steam',
      path: `<path
                d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z"
              />`,
      link: 'https://steamcommunity.com/id/N3nPl4yZz/',
    },
  ];

  const currentHash = window.location.hash;
  const isEnglish = currentHash === '#/en';
  const isJapanese = currentHash === '#/jp';

  const welcomeMessage = isEnglish
    ? 'Welcome to my Portfolio'
    : isJapanese
    ? '私のポートフォリオへようこそ'
    : 'Selamat datang di Portofolio ku';

  const nameMessage = 'Muhamad Erzie Aldrian Nugraha';

  const description = isEnglish
    ? `I am a Fresh Graduate from   
      <b class="text-dark dark:text-slate-200">Indraprasta PGRI University</b>   
      with a degree in   
      <b class="text-dark dark:text-slate-200">Computer Engineering</b>.   
      I have a strong foundational understanding of   
      <b class="text-dark dark:text-slate-200">informatics</b>,   
      proficiency in   
      <b class="text-dark dark:text-slate-200">programming languages</b>,   
      and experience in   
      <b class="text-dark dark:text-slate-200">Web Development</b>   
      as a <b class="text-dark dark:text-slate-200">Front-End Developer</b>,   
      <b class="text-dark dark:text-slate-200">Back-end Developer</b>,   
      <b class="text-dark dark:text-slate-200">Fullstack Developer</b>,   
      and <b class="text-dark dark:text-slate-200">UI/UX Designer</b>.   
      I actively participate in extracurricular activities and   
      I want to connect with fellow students and professionals in the industry.`
    : isJapanese
    ? `私はインドラプラスタPGRI大学の  
      <b class="text-dark dark:text-slate-200">情報工学</b>の学位を持つ  
      新卒です。  
      <b class="text-dark dark:text-slate-200">情報学</b>の基礎的な理解があり、  
      <b class="text-dark dark:text-slate-200">プログラミング言語</b>に精通し、  
      <b class="text-dark dark:text-slate-200">ウェブ開発</b>の経験があります。  
      <b class="text-dark dark:text-slate-200">フロントエンド開発者</b>、  
      <b class="text-dark dark:text-slate-200">バックエンド開発者</b>、  
      <b class="text-dark dark:text-slate-200">フルスタック開発者</b>、  
      および <b class="text-dark dark:text-slate-200">UI/UXデザイナー</b>として。  
      私は課外活動に積極的に参加しており、  
      業界の他の学生や専門家とつながりたいと思っています。`
    : `Saya adalah Fresh Graduate dari   
      <b class="text-dark dark:text-slate-200">Universitas Indraprasta PGRI</b>   
      dengan Jurusan   
      <b class="text-dark dark:text-slate-200">Teknik Informatika</b>.   
      Saya memiliki pemahaman dasar yang kuat konsep   
      <b class="text-dark dark:text-slate-200">informatika</b>,   
      kemahiran dalam bahasa   
      <b class="text-dark dark:text-slate-200">pemrograman</b>,   
      dan pengalaman dalam   
      <b class="text-dark dark:text-slate-200">Pengembangan Web</b>   
      sebagai <b class="text-dark dark:text-slate-200">Front-End Developer</b>,   
      <b class="text-dark dark:text-slate-200">Back-end Developer</b>,   
      <b class="text-dark dark:text-slate-200">Fullstack Developer</b>   
      maupun <b class="text-dark dark:text-slate-200">UI/UX Designer</b>.   
      Saya berpartisipasi secara aktif dalam kegiatan ekstrakurikuler dan   
      saya ingin terhubung dengan sesama mahasiswa dan profesional di industri.`;

  const profileHTML = profileList
    .map(
      ({ id, title, path, link }) => `  
        <a
          id="${id}"
          href="${link}"
          target="_blank"
          class="w-12 h-12 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-secondary hover:border-primaryLight hover:bg-primaryLight dark:hover:bg-blue hover:text-white hover:scale-125 ease-in-out duration-300 transition"
        >
          <svg
            class="fill-current dark:fill-slate-300"
            width="24"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>${title}</title>
            ${path}
          </svg>
        </a>
  `
    )
    .join('');

  return `  
    <div class="container object-center" id="home">
      <div class="flex flex-wrap">
        <div class="w-full self-center px-4 lg:w-1/2">
            <h1 class="text-xl font-semibold text-slate-800 dark:text-white bg-gradient-to-r from-primaryLight dark:from-blue rounded-lg md:text-xl w-3/4 px-5 p-2 mb-4">  
              ${welcomeMessage}  
            </h1>  
            <h1 class="text-base font-semibold text-primaryLight dark:text-blue md:text-xl">  
              <span class="block font-bold text-dark text-4xl mt-1 lg:text-[40px] dark:text-white">  
                ${nameMessage}  
              </span>  
            </h1>  
            <h2 class="font-medium text-secondary text-xl mt-1 mb-5 lg:text-3xl dark:text-slate-400">  
              <span class="text-dark dark:text-white typing"></span>  
            </h2>  

            <p class="font-medium text-base text-justify text-secondary dark:text-slate-400 max-w-xl lg:text-lg mb-10">  
              ${description}  
            </p>  
            <a
              href="./documents/resume/Muhamad Erzie Aldrian Nugraha-resume.pdf"
              class="text-base font-semibold text-white bg-primaryLight dark:bg-blue py-3 px-8 rounded-full hover:shadow-lg hover:bg-slate-600 hover:opacity-80 transition duration-300 ease-in-out"
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
            <div class="relative mt-10 mb-10 lg:mt-9 lg:right-0 animate-verticalMove">
              <img
                  src="./images/profiles/me_ilustration.png"
                  alt="Thats Me"
                  class="max-w-full h-[420px] mx-auto relative z-10"
              />
              <span
                  class="absolute bottom-1 top-[1.5px] left-1/2 -translate-x-1/2 md:scale-125"
              >
                  <svg
                  widht="420"
                  height="430"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                  >
                  <path
                      class="fill-primaryLight dark:fill-blue"
                      d="M49.8,-57.7C60.6,-50.2,62.7,-30.8,62.4,-13.8C62.1,3.3,59.3,18,53.4,33.3C47.5,48.7,38.4,64.7,25.6,68.6C12.7,72.6,-3.9,64.5,-18.6,56.7C-33.3,49,-46,41.4,-57.1,29.4C-68.3,17.5,-77.9,1,-74.4,-12.2C-71,-25.4,-54.6,-35.4,-40,-42.2C-25.4,-49,-12.7,-52.5,3.4,-56.6C19.5,-60.6,39,-65.1,49.8,-57.7Z"
                      transform="translate(100 100)"
                  />
                  </svg>
              </span>
            </div>

            <div class="flex justify-center items-center">
              ${profileHTML}
            </div>
          </div>
      </div>
    </div>
  `;
};

export { createProfileTemplate };
