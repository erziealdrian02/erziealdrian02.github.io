const createSertifikatTemplate = (sertifikat) => {
  // Array untuk sertifikat
  const sertifikatList = [
    {
      image: './images/certificates/MachineLearning.png',
      logo: './images/certificates/logo/dicoding.png',
      logoDesc: 'Dicoding Indonesia',
      title: 'Belajar Machine Learning untuk Pemula',
      description:
        'Program ini mencakup pengolahan data, supervised dan unsupervised learning, Support Vector Machine (SVM), clustering dengan k-means, serta dasar-dasar machine learning seperti overfitting dan model selection. Selain itu, peserta akan mempelajari neural network, termasuk multi-layer perceptron dan convolutional neural network, serta penggunaan TensorFlow untuk pengembangan proyek machine learning.',
      link: 'https://www.dicoding.com/certificates/GRX5OJGOVP0M',
    },
    {
      image: './images/certificates/FeBeExpert.png',
      logo: './images/certificates/logo/dicoding.png',
      logoDesc: 'Dicoding Indonesia',
      title: 'Menjadi Front-End Web Developer Expert',
      description:
        'Program ini mencakup pembuatan website optimal dengan pendekatan mobile-first, aksesibilitas web, penulisan JavaScript clean code, pengembangan Progressive Web Apps, automation testing, optimasi performa web, dan penerapan CI/CD untuk otomatisasi testing dan deployment.',
      link: 'https://www.dicoding.com/certificates/N9ZO69L68XG5',
    },
    {
      image: './images/certificates/GitHub.png',
      logo: './images/certificates/logo/dicoding.png',
      logoDesc: 'Dicoding Indonesia',
      title: 'Belajar Dasar Git dengan GitHub',
      description:
        'Program ini menjelaskan Git dan GitHub serta manfaatnya dalam pengelolaan kode. Peserta akan mempelajari dasar-dasar Git, termasuk membuat repository, commit, dan checkout, diikuti dengan studi kasus. Materi juga mencakup branching, merging, penyelesaian konflik, dan kolaborasi tim melalui forking, squashing changes, dan code reviews. Selain itu, peserta akan belajar menangani pull request dan membuat README yang menarik di GitHub sebagai portofolio profesional.',
      link: 'https://www.dicoding.com/certificates/MRZMQYOKLPYQ',
    },
    {
      image: './images/certificates/UIUX.png',
      logo: './images/certificates/logo/Prakerja.png',
      logoDesc: 'Kartu Prakerja',
      title: 'Merancang UI & UX Website bagi Desainer Pemula',
      description:
        'Program ini mencakup penentuan teknik elisitasi kebutuhan, penyusunan dokumentasi spesifikasi perangkat lunak, serta perancangan kebutuhan fungsional dan non-fungsional. Peserta juga akan belajar merancang antarmuka pengguna (UI) yang intuitif dan pengalaman pengguna (UX) yang optimal, dengan fokus pada alur interaksi, kemudahan penggunaan, dan kepuasan pengguna.',
      link: 'https://app.karier.mu/sertifikat/cHJvZ3JhbV91c2VyLTEyNDIxNjY0?prakerja',
    },
    {
      image: './images/certificates/Hubungan.png',
      logo: './images/certificates/logo/Prakerja.png',
      logoDesc: 'Kartu Prakerja',
      title:
        'Mempelajari Taktik Komunikasi Untuk Bicara Publik bagi Calon Hubungan Masyarakat',
      description:
        'Menyusun taktik komunikasi melibatkan perencanaan strategi untuk menyampaikan pesan secara efektif kepada audiens yang tepat. Ini mencakup pemilihan saluran komunikasi, format pesan, serta pengaturan waktu dan frekuensi komunikasi. Taktik juga harus disesuaikan dengan karakteristik audiens dan tujuan komunikasi, baik untuk tim internal, klien, atau publik.',
      link: 'https://app.karier.mu/sertifikat/cHJvZ3JhbV91c2VyLTEyMTI5NDIx?prakerja',
    },
    {
      image: './images/certificates/FlutterIntermediate.png',
      logo: './images/certificates/logo/dicoding.png',
      logoDesc: 'Dicoding Indonesia',
      title: 'Belajar Pengembangan Aplikasi Flutter Intermediate',
      description:
        'Kelas ini ditujukan untuk Flutter developer yang ingin menguasai komponen widget dan fitur tingkat lanjut dalam pengembangan aplikasi. Materi meliputi Advanced Navigation dengan Navigator 2.0, pengelolaan media, lokalisasi dan aksesibilitas, pengembangan aplikasi desktop, penggunaan widget tingkat lanjut, pembuatan kode otomatis, integrasi peta dan lokasi, serta pengelolaan varian aplikasi. Dengan kelas ini, peserta dapat membangun aplikasi Flutter yang lebih kompleks dan fungsional.',
      link: 'https://www.dicoding.com/certificates/4EXGKY72DZRL',
    },
  ];

  // Menghasilkan HTML untuk setiap sertifikat
  const sertifikatHTML = sertifikatList
    .map(
      ({ image, title, description, link, logo, logoDesc }) => `  
          <div class="w-full px-4 lg:w-1/2 xl:w-1/3 mb-3">
            <div class="bg-white rounded-xl shadow-lg overflow-hidden mb-10 dark:bg-slate-800 flex flex-col group relative h-[380px]">
              <!-- Gambar utama - Set fixed height -->
              <img
                src="${image}"
                alt="programming"
                class="w-full h-48 xl:object-center object-cover"
              />
              <!-- Bagian logo dan teks -->
              <div class="p-4 flex items-center">
                <img
                  src="${logo}"
                  alt="${logoDesc}"
                  class="w-10 h-10 rounded-full bg-white"
                />
                <p class="ml-3 font-bold text-1xl dark:text-slate-300">${logoDesc}</p>
              </div>
              <!-- Judul - Set fixed height -->
              <div class="py-3 px-6 h-24">
                <h3>
                  <a
                    href="${link}"
                    class="block mb-3 font-semibold text-xl text-dark hover:text-primaryLight dark:text-blue dark:text-white line-clamp-2"
                  >
                    ${title}
                  </a>
                </h3>
              </div>
  
              <!-- Hover Effect Section -->
              <div class="absolute left-0 w-full bg-white dark:bg-slate-800 p-6 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100 h-[25 0px] -bottom-[300px] group-hover:bottom-0 z-10">
                <div class="flex flex-col">
                  <p class="font-medium text-sm text-secondary dark:text-slate-300 mb-4 text-justify line-clamp-8">
                    ${description}
                  </p>
                  <a
                    href="${link}"
                    class="w-1/2 font-medium text-white bg-primaryLight dark:bg-blue py-3 px-4 rounded-lg hover:opacity-80"
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
            <h4 class="font-semibold text-lg text-primaryLight dark:text-blue mb-2">Sertifikasi</h4>  
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

export { createSertifikatTemplate };
