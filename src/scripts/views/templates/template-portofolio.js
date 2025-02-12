const createPortofolioTemplate = (portofolio) => {
  const currentHash = window.location.hash; // Mendapatkan hash dari lokasi saat ini
  const isEnglish = currentHash === '#/en'; // Memeriksa apakah hash adalah '#/en'
  const isJapanese = currentHash === '#/jp'; // Memeriksa apakah hash adalah '#/jp'

  // Array berisi informasi tentang proyek
  const projects = [
    {
      image: './images/portofolio/reimburse/reimburse_ca.png',
      title: {
        en: 'ERP Reimbursement System',
        jp: 'ERP払い戻しシステム',
        id: 'Sistem Reimbursement ERP',
      },
      description: {
        en: `This system includes features for advance requests, business trips, tickets, hotels, and return trips. The system also has an admin feature limited by location and department. Admin tasks include viewing transactions, importing/exporting Excel, and creating PDF reports. The system is integrated for business activities with structured management.`,
        jp: `このシステムには、前払いリクエスト、出張、チケット、ホテル、帰りの旅行の機能が含まれています。このシステムには、場所と部門によって制限された管理者機能もあります。管理者のタスクには、トランザクションの表示、Excelのインポート/エクスポート、PDFレポートの作成が含まれます。システムは、構造化された管理でビジネス活動を統合しています。`,
        id: `Sistem ini mencakup fitur pengajuan uang muka, perjalanan bisnis, tiket, hotel, dan perjalanan pulang. Sistem juga punya fitur admin yang dibatasi berdasar lokasi dan departemen. Tugas admin ialah melihat transaksi, impor/ekspor Excel, dan buat laporan PDF. Sistem terintegrasi untuk aktivitas bisnis dengan manajemen terstruktur.`,
      },
      specifications: [
        {
          label: {
            en: 'Programming Language',
            jp: 'プログラミング言語',
            id: 'Bahasa Pemrograman',
          },
          value: 'PHP (Laravel)',
        },
        {
          label: {
            en: 'Database',
            jp: 'データベース',
            id: 'Database',
          },
          value: 'MySQL',
        },
        {
          label: {
            en: 'Front-end',
            jp: 'フロントエンド',
            id: 'Front-end',
          },
          value: 'HTML, CSS, JavaScript',
        },
        {
          label: {
            en: 'Framework/Library',
            jp: 'フレームワーク/ライブラリ',
            id: 'Framework/Library',
          },
          value: 'Laravel, Bootstrap',
        },
      ],
    },
    {
      image: './images/portofolio/mushroom/mushroom_index.png',
      title: {
        en: 'Mushroom Scanner',
        jp: '金型スキャナ',
        id: 'Pemindai Jamur',
      },
      description: {
        en: `This project developed a system that can detect the types of mushrooms that are safe to eat. The system uses machine learning technology to identify more than 12 types of mushrooms and determine whether they are edible or not.`,
        jp: `このプロジェクトでは、食べても安全なキノコの種類を判別するシステムを開発した。このシステムは機械学習技術を用いて12種類以上のキノコを識別し、食用かどうかを判断する。`,
        id: `Proyek ini mengembangkan sistem yang dapat mendeteksi jenis-jenis jamur yang aman untuk dikonsumsi. Sistem ini menggunakan teknologi machine learning untuk mengidentifikasi lebih dari 12 jenis jamur dan menentukan apakah jamur tersebut dapat dimakan atau tidak.`,
      },
      specifications: [
        {
          label: {
            en: 'Programming Language',
            jp: 'プログラミング言語',
            id: 'Bahasa Pemrograman',
          },
          value: 'JavaScript (ReactJS) dan Python (FlaskAPI)',
        },
        {
          label: {
            en: 'Database',
            jp: 'データベース',
            id: 'Database',
          },
          value: 'MySQL',
        },
        {
          label: {
            en: 'Front-end',
            jp: 'フロントエンド',
            id: 'Front-end',
          },
          value: 'HTML, CSS, JavaScript',
        },
        {
          label: {
            en: 'Back-end',
            jp: 'バックエンド',
            id: 'Back-end',
          },
          value: 'Python',
        },
        {
          label: {
            en: 'Framework/Library',
            jp: 'フレームワーク/ライブラリ',
            id: 'Framework/Library',
          },
          value: 'ReactJS, Tailwind, FlaskAPI',
        },
      ],
    },
    {
      image: './images/portofolio/weather/weather_maps.png',
      title: {
        en: 'Weathering With Us',
        jp: '共に風化する',
        id: 'Weathering With Us',
      },
      description: {
        en: 'This project developed a system that can detect and display weather forecasts in Indonesia up to 3 days ahead. This system works in real-time and presents weather information through a map display, making it easy for users to see weather conditions today, tomorrow, and the day after tomorrow throughout Indonesia. Where the data taken is data from BMKG.',
        jp: 'このプロジェクトでは、インドネシアの3日先までの天気予報を検知・表示するシステムを開発した。このシステムはリアルタイムで動作し、地図表示を通して気象情報を提示するため、ユーザーはインドネシア全土の今日、明日、明後日の気象状況を簡単に確認することができる。撮影データはBMKGのデータです。',
        id: 'Proyek ini mengembangkan sistem yang dapat mendeteksi dan menampilkan prakiraan cuaca di Indonesia hingga 3 hari ke depan. Sistem ini bekerja secara real-time dan menyajikan informasi cuaca melalui tampilan peta, memudahkan pengguna untuk melihat kondisi cuaca hari ini, besok, dan lusa di seluruh wilayah Indonesia. Yang di mana data yang di ambil merupakan data dari BMKG.',
      },
      specifications: [
        {
          label: {
            en: 'Programming Language',
            jp: 'プログラミング言語',
            id: 'Bahasa Pemrograman',
          },
          value: 'PHP (Native)',
        },
        {
          label: {
            en: 'API (Application Programming Interface)',
            jp: 'API（アプリケーション・プログラミング・インターフェース）',
            id: 'API (Antarmuka Pemrograman Aplikasi)',
          },
          value: 'BMKG API (https://ibnux.github.io/BMKG-importer/)',
        },
        {
          label: {
            en: 'Front-end',
            jp: 'フロントエンド',
            id: 'Front-end',
          },
          value: 'HTML, CSS, JavaScript',
        },
        {
          label: {
            en: 'Framework/Library',
            jp: 'フレームワーク/ライブラリ',
            id: 'Framework/Library',
          },
          value: 'Tailwind',
        },
      ],
    },
    {
      image: './images/portofolio/spk/karyawan.png',
      title: {
        en: 'SPK for selecting the best employee',
        jp: '優秀な社員を選ぶためのSPK',
        id: 'SPK Pemilihan Karyawan terbaik',
      },
      description: {
        en: 'SPK to select the best employees based on leaders assessment of attendance, work ethic, etc. The system identifies top-performing employees for award or promotion consideration, making the selection process more structured and objective.',
        jp: '出勤率や勤務態度など、リーダーの評価に基づいて優秀な社員を選抜するSPK。このシステムは、表彰や昇進の対象となる優秀な社員を特定し、選考プロセスをより体系的かつ客観的なものにしている。',
        id: 'SPK untuk memilih karyawan terbaik berdasar penilaian pimpinan atas kehadiran, etos kerja, dll. Sistem ini mengidentifikasi karyawan berkinerja terbaik untuk pertimbangan penghargaan atau promosi, sehingga proses pemilihan lebih terstruktur dan objektif.',
      },
      specifications: [
        {
          label: {
            en: 'Programming Language',
            jp: 'プログラミング言語',
            id: 'Bahasa Pemrograman',
          },
          value: 'PHP (Native)',
        },
        {
          label: {
            en: 'Database',
            jp: 'データベース',
            id: 'Database',
          },
          value: 'MySQL',
        },
        {
          label: {
            en: 'Front-end',
            jp: 'フロントエンド',
            id: 'Front-end',
          },
          value: 'HTML, CSS, JavaScript',
        },
        {
          label: {
            en: 'Framework/Library',
            jp: 'フレームワーク/ライブラリ',
            id: 'Framework/Library',
          },
          value: 'Bootstrap',
        },
      ],
    },
  ];

  const getProjectLanguage = (project) => {
    return {
      title: isEnglish
        ? project.title.en
        : isJapanese
        ? project.title.jp
        : project.title.id,
      description: isEnglish
        ? project.description.en
        : isJapanese
        ? project.description.jp
        : project.description.id,
      specifications: project.specifications.map((spec) => ({
        label: isEnglish
          ? spec.label.en
          : isJapanese
          ? spec.label.jp
          : spec.label.id,
        value: spec.value,
      })),
    };
  };

  const headerText = {
    portfolio: {
      en: 'Portfolio',
      jp: 'ポートフォリオ',
      id: 'Portofolio',
    },
    latestProjects: {
      en: 'Latest Projects',
      jp: '最新のプロジェクト',
      id: 'Project Terbaru',
    },
    description: {
      en: 'Here are some projects I have participated in developing. Several programs use frameworks such as Laravel, NodeJS, ReactJS, or FlaskAPI',
      jp: '私が開発に参加したプロジェクトの一部です。LaravelやNodeJS、ReactJS、FlaskAPIなどのフレームワークを使用したプログラムもあります',
      id: 'Beberapa Project yang saya ikut serta dalam pengerjaannya, Beberapa program menggunakan Framework Seperti Laravel, NodeJS, ReactJS, atau FlaskAPI',
    },
    viewMore: {
      en: 'View More Projects on',
      jp: 'その他のプロジェクトを見る',
      id: 'Lihat Proyek Lainnya di',
    },
  };

  const getCurrentLanguageText = (textObj) => {
    return isEnglish ? textObj.en : isJapanese ? textObj.jp : textObj.id;
  };

  // Menghasilkan HTML untuk setiap proyek menggunakan map
  const projectsHTML = projects
    .map((project) => {
      const projectData = getProjectLanguage(project);
      return `  
      <div class="mb-12 p-4 md:w-1/2">  
        <div class="rounded-md shadow-md overflow-hidden hover:scale-105 ease-in-out duration-300 transition">  
          <img src="${
            project.image
          }" alt="Portfolio Image" class="w-full h-48 object-cover"/>  
        </div>  
        <h3 class="font-semibold text-xl text-dark mt-5 mb-3 dark:text-white">  
          ${projectData.title}  
        </h3>  
        <p class="font-medium text-base text-secondary dark:text-slate-300 text-justify">  
          ${projectData.description}  
        </p>  
        <p class="font-bold text-base text-dark dark:text-slate-300">  
          ${getCurrentLanguageText({
            en: 'Specifications:',
            jp: '仕様：',
            id: 'Spesifikasi:',
          })}  
        </p>  
        <ul class="list-disc ml-4 text-dark dark:text-slate-300">  
          ${projectData.specifications
            .map(
              (spec) => `  
            <li><b>${spec.label}:</b> ${spec.value}</li>  
          `
            )
            .join('')}  
        </ul>  
      </div>  
    `;
    })
    .join('');

  return `  
      <div class="container">  
        <div class="w-full px-4">  
          <div class="max-w-full mx-auto text-center mb-16">  
            <h4 class="font-semibold text-lg text-primaryLight dark:text-blue mb-2">  
              ${getCurrentLanguageText(headerText.portfolio)}  
            </h4>  
            <h2 class="font-bold text-dark text-3xl mb-4 dark:text-white">  
              ${getCurrentLanguageText(headerText.latestProjects)}  
            </h2>  
            <p class="font-medium text-md text-secondary dark:text-slate-300">  
              ${getCurrentLanguageText(headerText.description)}  
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
              <h3 class="font-bold text-xl text-dark dark:text-white hover:text-primaryLight dark:hover:text-blue">  
                ${getCurrentLanguageText(headerText.viewMore)}  
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

export { createPortofolioTemplate };
