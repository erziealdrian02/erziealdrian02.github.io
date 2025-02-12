const createSertifikatTemplate = (sertifikat) => {
  const currentHash = window.location.hash; // Mendapatkan hash dari lokasi saat ini
  const isEnglish = currentHash === '#/en'; // Memeriksa apakah hash adalah '#/en'
  const isJapanese = currentHash === '#/jp'; // Memeriksa apakah hash adalah '#/jp'

  // Array untuk sertifikat
  const sertifikatList = [
    {
      image: './images/certificates/MachineLearning.png',
      logo: './images/certificates/logo/dicoding.png',
      logoDesc: 'Dicoding Indonesia',
      title: {
        en: 'Learn Machine Learning for Beginners',
        jp: '初心者のための機械学習',
        id: 'Belajar Machine Learning untuk Pemula',
      },
      description: {
        en: 'This program covers data processing, supervised and unsupervised learning, Support Vector Machine (SVM), clustering with k-means, and machine learning fundamentals such as overfitting and model selection. In addition, participants will learn neural networks, including multi-layer perceptron and convolutional neural networks, as well as the use of TensorFlow for developing machine learning projects.',
        jp: 'このコースでは、データ処理、教師あり学習と教師なし学習、サポートベクターマシン（SVM）、k-meansによるクラスタリング、オーバーフィットやモデル選択などの機械学習の基礎を学びます。さらに、多層パーセプトロンや畳み込みニューラルネットワークなどのニューラルネットワークや、機械学習プロジェクト開発のためのTensorFlowの使い方についても学びます。',
        id: 'Program ini mencakup pengolahan data, supervised dan unsupervised learning, Support Vector Machine (SVM), clustering dengan k-means, serta dasar-dasar machine learning seperti overfitting dan model selection. Selain itu, peserta akan mempelajari neural network, termasuk multi-layer perceptron dan convolutional neural network, serta penggunaan TensorFlow untuk pengembangan proyek machine learning.',
      },
      link: 'https://www.dicoding.com/certificates/GRX5OJGOVP0M',
    },
    {
      image: './images/certificates/FeBeExpert.png',
      logo: './images/certificates/logo/dicoding.png',
      logoDesc: 'Dicoding Indonesia',
      title: {
        en: 'Become a Front-End Web Developer Expert',
        jp: 'フロントエンドWebデベロッパーのエキスパートになる',
        id: 'Menjadi Front-End Web Developer Expert',
      },
      description: {
        en: 'This program covers creating optimal websites with a mobile-first approach, web accessibility, writing clean JavaScript code, developing Progressive Web Apps, automation testing, web performance optimization, and implementing CI/CD for testing and deployment automation.',
        jp: 'このプログラムでは、モバイルファーストのアプローチによる最適化されたウェブサイトの作成、ウェブアクセシビリティ、クリーンなJavaScriptコードの記述、Progressive Web Appsの開発、自動化テスト、ウェブパフォーマンスの最適化、テストとデプロイの自動化のためのCI/CDの実装について学びます。',
        id: 'Program ini mencakup pembuatan website optimal dengan pendekatan mobile-first, aksesibilitas web, penulisan JavaScript clean code, pengembangan Progressive Web Apps, automation testing, optimasi performa web, dan penerapan CI/CD untuk otomatisasi testing dan deployment.',
      },
      link: 'https://www.dicoding.com/certificates/N9ZO69L68XG5',
    },
    {
      image: './images/certificates/GitHub.png',
      logo: './images/certificates/logo/dicoding.png',
      logoDesc: 'Dicoding Indonesia',
      title: {
        en: 'Learn Git Basics with GitHub',
        jp: 'GitHubでGitの基礎を学ぶ',
        id: 'Belajar Dasar Git dengan GitHub',
      },
      description: {
        en: 'This program explains Git and GitHub and their benefits in code management. Participants will learn the basics of Git, including creating a repository, commit, and checkout, followed by a case study. The material also covers branching, merging, conflict resolution, and team collaboration through forking, squashing changes, and code reviews. In addition, participants will learn to handle pull requests and create attractive READMEs on GitHub as a professional portfolio.',
        jp: 'このプログラムでは、GitとGitHub、そしてコード管理におけるその利点を説明します。参加者は、リポジトリの作成、コミット、チェックアウトなどのGitの基本を学び、その後ケーススタディを行います。また、ブランチ、マージ、コンフリクトの解決、フォーク、変更の破棄、コードレビューによるチームコラボレーションについても学びます。さらに、参加者はプルリクエストの扱い方を学び、プロフェッショナルなポートフォリオとしてGitHubに魅力的なREADMEを作成します。',
        id: 'Program ini menjelaskan Git dan GitHub serta manfaatnya dalam pengelolaan kode. Peserta akan mempelajari dasar-dasar Git, termasuk membuat repository, commit, dan checkout, diikuti dengan studi kasus. Materi juga mencakup branching, merging, penyelesaian konflik, dan kolaborasi tim melalui forking, squashing changes, dan code reviews. Selain itu, peserta akan belajar menangani pull request dan membuat README yang menarik di GitHub sebagai portofolio profesional.',
      },
      link: 'https://www.dicoding.com/certificates/MRZMQYOKLPYQ',
    },
    {
      image: './images/certificates/UIUX.png',
      logo: './images/certificates/logo/Prakerja.png',
      logoDesc: 'Kartu Prakerja',
      title: {
        en: 'Designing Website UI & UX for Beginner Designers',
        jp: '初心者デザイナーのためのウェブサイトのUIとUXのデザイン',
        id: 'Merancang UI & UX Website bagi Desainer Pemula',
      },
      description: {
        en: 'This program covers determining requirements elicitation techniques, drafting software specification documentation, and designing functional and non-functional requirements. Participants will also learn to design intuitive user interfaces (UI) and optimized user experiences (UX), focusing on interaction flow, ease of use, and user satisfaction.',
        jp: 'このプログラムでは、要件抽出手法の決定、ソフトウェア仕様書の作成、機能要件と非機能要件の設計について学びます。また、インタラクションフロー、使いやすさ、ユーザー満足度に焦点を当て、直感的なユーザーインターフェース（UI）と最適化されたユーザーエクスペリエンス（UX）の設計を学びます。',
        id: 'Program ini mencakup penentuan teknik elisitasi kebutuhan, penyusunan dokumentasi spesifikasi perangkat lunak, serta perancangan kebutuhan fungsional dan non-fungsional. Peserta juga akan belajar merancang antarmuka pengguna (UI) yang intuitif dan pengalaman pengguna (UX) yang optimal, dengan fokus pada alur interaksi, kemudahan penggunaan, dan kepuasan pengguna.',
      },
      link: 'https://app.karier.mu/sertifikat/cHJvZ3JhbV91c2VyLTEyNDIxNjY0?prakerja',
    },
    {
      image: './images/certificates/Hubungan.png',
      logo: './images/certificates/logo/Prakerja.png',
      logoDesc: 'Kartu Prakerja',
      title: {
        en: 'Learning Communication Tactics for Public Speaking for Public Relations Candidates',
        jp: '広報志望者を対象とした、人前で話すためのコミュニケーション戦術の学習',
        id: 'Mempelajari Taktik Komunikasi Untuk Bicara Publik bagi Calon Hubungan Masyarakat',
      },
      description: {
        en: 'Developing communication tactics involves planning strategies to effectively deliver messages to the right audience. This includes selecting communication channels, message formats, and timing and frequency of communication. Tactics should also be tailored to the characteristics of the audience and the purpose of the communication, whether for internal teams, clients or the public.',
        jp: 'コミュニケーション戦術の開発には、適切な聴衆に効果的にメッセージを届けるための戦略を計画することが含まれます。これには、コミュニケーション・チャネルの選択、メッセージの形式、コミュニケーションのタイミングや頻度などが含まれます。また、戦術は聴衆の特性や、社内チーム、クライアント、一般市民など、コミュニケーションの目的に合わせて調整する必要があります。',
        id: 'Menyusun taktik komunikasi melibatkan perencanaan strategi untuk menyampaikan pesan secara efektif kepada audiens yang tepat. Ini mencakup pemilihan saluran komunikasi, format pesan, serta pengaturan waktu dan frekuensi komunikasi. Taktik juga harus disesuaikan dengan karakteristik audiens dan tujuan komunikasi, baik untuk tim internal, klien, atau publik.',
      },
      link: 'https://app.karier.mu/sertifikat/cHJvZ3JhbV91c2VyLTEyMTI5NDIx?prakerja',
    },
    {
      image: './images/certificates/FlutterIntermediate.png',
      logo: './images/certificates/logo/dicoding.png',
      logoDesc: 'Dicoding Indonesia',
      title: {
        en: 'Learn Intermediate Flutter App Development',
        jp: 'Flutter中級アプリ開発を学ぶ',
        id: 'Belajar Pengembangan Aplikasi Flutter Intermediate',
      },
      description: {
        en: 'This class is intended for Flutter developers who want to master widget components and advanced features in app development. Topics include Advanced Navigation with Navigator 2.0, media management, localization and accessibility, desktop app development, advanced widget usage, automatic code generation, map and location integration, and app variant management. With this class, participants can build more complex and functional Flutter applications.',
        jp: 'このクラスは、アプリ開発におけるウィジェットコンポーネントや高度な機能をマスターしたいFlutter開発者を対象としています。トピックには、Navigator 2.0を使った高度なナビゲーション、メディア管理、ローカライズとアクセシビリティ、デスクトップアプリ開発、高度なウィジェットの使い方、自動コード生成、地図と位置情報の統合、アプリのバリアント管理などが含まれます。このクラスで、参加者はより複雑で機能的なFlutterアプリケーションを構築することができます。',
        id: 'Kelas ini ditujukan untuk Flutter developer yang ingin menguasai komponen widget dan fitur tingkat lanjut dalam pengembangan aplikasi. Materi meliputi Advanced Navigation dengan Navigator 2.0, pengelolaan media, lokalisasi dan aksesibilitas, pengembangan aplikasi desktop, penggunaan widget tingkat lanjut, pembuatan kode otomatis, integrasi peta dan lokasi, serta pengelolaan varian aplikasi. Dengan kelas ini, peserta dapat membangun aplikasi Flutter yang lebih kompleks dan fungsional.',
      },
      link: 'https://www.dicoding.com/certificates/4EXGKY72DZRL',
    },
  ];

  const headerText = {
    certification: {
      en: 'Certification',
      jp: '認定証',
      id: 'Sertifikasi',
    },
    label: {
      en: 'Certificates',
      jp: '証明書',
      id: 'Sertifikat',
    },
    description: {
      en: 'Some of the Certificates I have obtained Softskill and Hardskill Certificates',
      jp: '私が取得した資格の一部 ソフトスキルおよびハードスキル資格',
      id: 'Beberapa Sertifikat yang saya peroleh Sertifikat Softskill maupun Hardskill',
    },
    button: {
      en: 'View Certificate',
      jp: '証明書を見る',
      id: 'Lihat Sertifikat',
    },
  };

  const getCurrentLanguageText = (textObj) => {
    return isEnglish ? textObj.en : isJapanese ? textObj.jp : textObj.id;
  };

  // Menghasilkan HTML untuk setiap sertifikat
  const generateSertifikatHTML = () => {
    return sertifikatList
      .map(
        (sertifikat) => `
        <div class="certificate-item">
          <div class="certificate-image">
            <img src="${sertifikat.image}" alt="${getCurrentLanguageText(
          sertifikat.title
        )}" />
          </div>
          <div class="certificate-details">
            <div class="certificate-logo">
              <img src="${sertifikat.logo}" alt="${sertifikat.logoDesc}" />
            </div>
            <h3 class="certificate-title">${getCurrentLanguageText(
              sertifikat.title
            )}</h3>
            <p class="certificate-description">${getCurrentLanguageText(
              sertifikat.description
            )}</p>
            <a href="${
              sertifikat.link
            }" target="_blank" class="certificate-button">
              BUttotn
            </a>
          </div>
        </div>
      `
      )
      .join('');
  };

  const sertifikatHTML = generateSertifikatHTML(sertifikatList);

  // Template utama
  return `  
      <div class="container">  
        <div class="w-full px-4">  
          <div class="w-full mx-auto text-center mb-16">  
            <h4 class="font-semibold text-lg text-primaryLight dark:text-blue mb-2">${
              headerText.certification[
                isEnglish ? 'en' : isJapanese ? 'jp' : 'id'
              ]
            }</h4>  
            <h2 class="font-bold text-black text-3xl mb-4 sm:text-4xl lg:text-5xl dark:text-white">${
              headerText.label[isEnglish ? 'en' : isJapanese ? 'jp' : 'id']
            }</h2>  
            <p class="font-medium text-md text-secondary md:text-lg dark:text-slate-200">${
              headerText.description[
                isEnglish ? 'en' : isJapanese ? 'jp' : 'id'
              ]
            }</p>  
          </div>  
        </div>  
  
        <div class="flex flex-wrap -mx-4">  
          ${sertifikatHTML}  
        </div>  
      </div>  
    `;
};

export { createSertifikatTemplate };
