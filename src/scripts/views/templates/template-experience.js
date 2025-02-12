const createExperienceTemplate = (programming) => {
  const currentHash = window.location.hash; // Mendapatkan hash dari lokasi saat ini
  const isEnglish = currentHash === '#/en'; // Memeriksa apakah hash adalah '#/en'
  const isJapanese = currentHash === '#/jp'; // Memeriksa apakah hash adalah '#/jp'

  // Array untuk pengalaman kerja
  const workExperience = [
    {
      logo: './images/company/kpn.jpg',
      companyName: 'KPN Corp',
      position: {
        en: 'Full Stack Developer Intern',
        jp: 'フルスタックデベロッパーインターン',
        id: 'Full Stack Developer Intern',
      },
      duration: {
        en: 'July 2024 - Present',
        jp: '2024年7月～現在',
        id: 'July 2024 - Sekarang',
      },
      description: {
        en: 'Responsible for helping the development team develop the companys internal website by building OOP standard programs. Work together using GitHub for team collaboration and complete projects on time, as well as present program results to users and make revisions as needed.',
        jp: 'OOP標準のプログラムを構築することで、開発チームの社内ウェブサイトの開発を支援する役割を担う。GitHubを使用したチームコラボレーションを行い、期限内にプロジェクトを完了させるとともに、プログラムの結果をユーザーに提示し、必要に応じて修正を行う。',
        id: 'Bertanggung jawab membantu tim developer mengembangkan website internal perusahaan dengan membangun program berstandar OOP. Bekerja sama menggunakan GitHub untuk kolaborasi tim dan menyelesaikan proyek tepat waktu, serta mempresentasikan hasil program kepada pengguna dan melakukan revisi sesuai kebutuhan.',
      },
    },
    {
      logo: './images/company/Designer.jpeg',
      companyName: 'Full Stack Developer Freelance',
      position: {
        en: '',
        jp: '',
        id: '',
      },
      duration: {
        en: 'Jan 2020 - Present',
        jp: '2020年1月～現在',
        id: 'Jan 2020 - Sekarang',
      },
      description: {
        en: 'Independently build programs according to client requirements and interact to explain technical solutions. Resolve user issues with an effective problem-solving approach, compile technical documentation, and provide post-development support. Manage projects from planning to implementation with a focus on quality and efficiency.',
        jp: 'クライアントの要件に応じたプログラムを自主的に構築し、技術的ソリューションを説明するために対話する。効果的な問題解決アプローチでユーザーの問題を解決し、技術文書をまとめ、開発後のサポートを提供する。品質と効率性を重視し、計画から実施までプロジェクトを管理する。',
        id: 'Membangun program secara mandiri sesuai kebutuhan klien dan berinteraksi untuk menjelaskan solusi teknis. Menyelesaikan masalah pengguna dengan pendekatan problem-solving yang efektif, menyusun dokumentasi teknis, serta memberikan dukungan pasca-pengembangan. Mengelola proyek dari perencanaan hingga implementasi dengan fokus pada kualitas dan efisiensi.',
      },
    },
    {
      logo: './images/company/daunbiru.jpeg',
      companyName: 'PT. Daun Biru Engineering',
      position: {
        en: 'Junior Developer Internship',
        jp: 'ジュニア・デベロッパー・インターンシップ',
        id: 'Junior Developer Internship',
      },
      duration: {
        en: 'December 2018 - March 2019',
        jp: '2018年12月～2019年3月',
        id: 'Desember 2018 - Maret 2019',
      },
      description: {
        en: 'Gain practical experience in web development and a certificate of competence, while being responsible for the companys internal website using the CodeIgniter Framework and improving programming skills.',
        jp: 'CodeIgniterフレームワークを使用した社内ウェブサイトの責任者となり、プログラミングスキルを向上させながら、ウェブ開発の実務経験を積み、能力証明書を取得する。',
        id: 'Mendapatkan pengalaman praktis dalam pengembangan web dan sertifikat kompetensi, sambil bertanggung jawab atas website internal perusahaan menggunakan Framework CodeIgniter dan meningkatkan kemampuan pemrograman.',
      },
    },
  ];

  // Array untuk akademi
  const academies = [
    {
      logo: './images/academy/unindra.jpg',
      institution: {
        en: 'Indraprasta PGRI University',
        jp: 'インドラプラスタPGRI大学',
        id: 'Universitas Indraprasta PGRI',
      },
      location: {
        en: 'East Jakarta, Indonesia',
        jp: 'インドネシア、東ジャカルタ',
        id: 'Jakarta Timur, Indonesia',
      },
      duration: {
        en: 'August 2020 - October 2024',
        jp: '2020年8月～2024年10月',
        id: 'Agustus 2020 - October 2024',
      },
      degree: {
        en: 'Bachelor of Information Technology, 3.39',
        jp: '情報学士, 3.39',
        id: 'Sarjana Teknik Informatika, 3.39',
      },
    },
    {
      logo: './images/academy/kampusmerdeka.jpg',
      institution: {
        en: 'Certified Independent Study Program Batch 4 (SIB 2023)',
        jp: '認定インディペンデント・スタディ・プログラム第4期生 (SIB 2023)',
        id: 'Program Studi Independen Bersertifikat Angkatan 4 (SIB 2023)',
      },
      location: {
        en: 'Online',
        jp: 'オンライン',
        id: 'Daring',
      },
      duration: {
        en: 'February - July 2023',
        jp: '2023年2月～7月',
        id: 'Februari - July 2023',
      },
      degree: {
        en: 'Front-End Web and Back-End Developer, 88.22',
        jp: 'フロントエンド・ウェブ・バックエンド開発者, 88.22',
        id: 'Pengembang Front-End Web dan Back-End, 88.22',
      },
    },
    {
      logo: './images/academy/fatahillah.png',
      institution: {
        en: 'Fatahillah Cielungsi Senior High School',
        jp: 'ファタヒラ・シエルンシ学校',
        id: 'SMK Fatahillah Cielungsi',
      },
      location: {
        en: 'Bogor Regency, Indonesia',
        jp: 'インドネシア、ボゴール県',
        id: 'Kab. Bogor, Indonesia',
      },
      duration: {
        en: 'June 2017 - October 2020',
        jp: '2017年6月～2020年10月',
        id: 'Juni 2017 - October 2020',
      },
      degree: {
        en: 'Software Engineering, 81.00',
        jp: 'ソフトウェア工学、81.00',
        id: 'Rekayasa Perangkat Lunak, 81.00',
      },
    },
  ];

  const headerText = {
    programming: {
      en: 'Programming',
      jp: 'プログラミング',
      id: 'Programming',
    },
    experience: {
      en: 'Work Experience and Academics',
      jp: '職務経験と学業',
      id: 'Pengalaman Kerja dan Akademis',
    },
    description: {
      en: 'Some programming languages and tools used',
      jp: '使用されているプログラミング言語とツール',
      id: 'Beberapa Bahasa Pemrograman dan Tools yang di gunakan',
    },
    buttonExp: {
      en: 'Experience',
      jp: '経験',
      id: 'Pengalaman',
    },
    buttonAka: {
      en: 'Academics',
      jp: '学業',
      id: 'Akademis',
    },
  };

  const getCurrentLanguageText = (textObj) => {
    return isEnglish ? textObj.en : isJapanese ? textObj.jp : textObj.id;
  };

  // Menghasilkan HTML untuk pengalaman kerja
  const generateExperienceHTML = (experienceData) => {
    return experienceData
      .map((item) => {
        return `
          <div class="bg-gray-200 dark:bg-gray-600 rounded-md p-6 shadow-lg mb-4">  
            <div class="flex flex-wrap lg:flex-nowrap items-center space-x-6">  
              <div class="w-full lg:w-1/5 flex justify-center">  
                <img src="${
                  item.logo
                }" alt="Logo Perusahaan" class="mb-4 lg:mb-0 w-28 h-28 rounded-full shadow-md scale-100" />  
              </div>  
              <div class="w-4/5">  
                <div class="flex flex-wrap justify-between">  
                  <h1 class="text-center text-lg font-bold text-primaryLight dark:text-blue">  
                    ${
                      item.companyName
                    } <span class="text-base font-normal text-secondary dark:text-slate-400">- ${getCurrentLanguageText(
          item.position
        )}</span> 
                  </h1>  
                  <h2 class="text-center text-sm text-gray-600 dark:text-gray-300 inline-block mt-1">${getCurrentLanguageText(
                    item.duration
                  )}</h2>  
                </div>  
                <p class="text-gray-700 dark:text-gray-200 text-sm text-justify">${getCurrentLanguageText(
                  item.description
                )}</p>  
              </div>  
            </div>  
          </div> `;
      })
      .join('');
  };

  // Menghasilkan HTML untuk akademi
  const generateAcademyHTML = (academyData) => {
    return academyData
      .map((item) => {
        return `
      <div class="bg-gray-200 dark:bg-gray-600 rounded-md p-6 shadow-lg mb-4">  
        <div class="flex flex-wrap lg:flex-nowrap items-center space-x-6">  
          <div class="w-full lg:w-1/5 flex justify-center">  
            <img src="${
              item.logo
            }" alt="Logo Kampus" class="w-28 h-28 rounded-full shadow-md scale-100 bg-white" />  
          </div>  
          <div class="w-4/5">  
            <div class="flex flex-wrap justify-center lg:justify-between">  
              <h1 class="text-center text-lg font-bold text-primaryLight dark:text-blue">${getCurrentLanguageText(
                item.institution
              )}  
                <span class="text-base font-normal text-secondary dark:text-slate-400">- ${getCurrentLanguageText(
                  item.location
                )}</span>
              </h1>  
              <h2 class="text-center text-xs text-gray-600 dark:text-gray-300 inline-block mt-1">${getCurrentLanguageText(
                item.duration
              )}</h2>  
              <h2 class="text-center text-normal text-gray-600 dark:text-gray-300 mt-1">${getCurrentLanguageText(
                item.degree
              )}</h2>  
            </div>  
          </div>  
        </div>  
      </div>  
    `;
      })
      .join('');
  };

  const workExperienceHTML = generateExperienceHTML(workExperience);
  const academiesHTML = generateAcademyHTML(academies);

  // Menghasilkan HTML penuh
  return `  
      <div class="container">  
        <div class="w-full px-4">  
          <div class="w-full mx-auto text-center mb-16">  
            <h4 class="font-semibold text-lg text-primaryLight dark:text-blue mb-2">${
              headerText.programming[
                isEnglish ? 'en' : isJapanese ? 'jp' : 'id'
              ]
            }</h4>  
            <h2 class="font-bold text-white text-3xl mb-4 lg:text-4xl dark:text-dark">${
              headerText.experience[isEnglish ? 'en' : isJapanese ? 'jp' : 'id']
            }</h2>  
            <p class="font-medium text-md text-secondary md:text-lg dark:text-slate-800">${
              headerText.description[
                isEnglish ? 'en' : isJapanese ? 'jp' : 'id'
              ]
            }</p>  
          </div>  
        </div>  
  
        <!-- Tab Navigation Buttons -->  
        <div class="w-full lg:px-4">  
          <div class="max-w-[100%] lg:max-w-[80%] mx-auto bg-slate-300 dark:bg-slate-800 rounded-lg p-4">  
            <div class="flex justify-center bg-slate-800 dark:bg-slate-300 rounded-lg mb-4" role="tablist">  
              <button class="px-4 py-2 font-medium border-b-4 border-primaryLight dark:border-blue text-primaryLight ease-in-out duration-300 transition hover:border-primaryLight hover:dark:text-blue hover:dark:border-blue hover:text-primaryLight"  
                      id="programming-tab" data-tab="programming-content" role="tab" aria-selected="true">${
                        headerText.buttonExp[
                          isEnglish ? 'en' : isJapanese ? 'jp' : 'id'
                        ]
                      }</button>  
              <button class="px-4 py-2 ml-3 font-medium border-b-4 border-transparent text-gray-500 ease-in-out duration-300 transition hover:border-primaryLight hover:dark:text-blue hover:dark:border-blue hover:text-primaryLight"  
                      id="tools-tab" data-tab="tools-content" role="tab" aria-selected="false">${
                        headerText.buttonAka[
                          isEnglish ? 'en' : isJapanese ? 'jp' : 'id'
                        ]
                      }</button>  
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

export { createExperienceTemplate };
