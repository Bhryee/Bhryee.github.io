// Portfolio data - TR/EN
window.PORTFOLIO_DATA = {
  name: "Bahriye İşgör",
  role: { tr: "Bilgisayar Mühendisi", en: "Computer Engineer" },
  email: "bahriyeisgor@gmail.com", // placeholder — kullanıcı güncelleyebilir
  location: { tr: "Türkiye", en: "Turkey" },

  social: {
    linkedin: "https://www.linkedin.com/in/bahriye-isgor/",
    github: "https://github.com/Bhryee",
    medium: "https://medium.com/@bhrye",
  },

  intro: {
    tr: "Yazılım geliştiriyor, öğrendiklerimi paylaşıyor ve projelerle sorunlara çözüm üretiyorum",
    en: "I develop software, share my knowledge, and create solutions through hands-on projects.",
  },

  about: {
    tr: [
      "Veri bilimi ve yapay zekâya olan ilgim, üniversiteye başladığım 2022 yılında başladı. O günden bu yana çeşitli platformlardan eğitimler alarak kendimi geliştirmeye devam ediyorum. Edindiğim bilgileri pekiştirmek amacıyla projeler geliştiriyorum."

    ],
    en: [
      "My interest in data science and artificial intelligence began in 2022 when I started university. Since then, I have continued to develop myself by taking courses from various platforms. I develop projects to reinforce the knowledge I have acquired."

    ],
  },

  education: [
    {
      school: { tr: "Bilgisayar Mühendisliği — Lisans", en: "Computer Engineering — B.Sc." },
      org: { tr: "Selçuk Üniversitesi", en: "Selçuk University" },
      period: "2022 — 2026",
      detail: {
        tr: "Veri yapıları, algoritmalar, yazılım mühendisliği ve web sistemleri üzerine odaklı eğitim.",
        en: "Focused on data structures, algorithms, software engineering and web systems.",
      },
    },
  ],

  experience: [
    {
      role: { tr: "Yapay Zeka Stajyeri", en: "AI Intern" },
      company: "Turk AI",
      period: { tr: "Şub 2026 — May 2026", en: "Feb 2025 — May 2025" },
      stack: ["Python", "RabbitMQ", "Docker", "MinIO", "Prisma", "FastAPI" ,"RAG"],
      bullets: {
        tr: [
          "Interpol Projesi ile Docker tabanlı mikroservis mimarisinde Interpol Red Notices verilerini çeken uçtan uca bir sistem geliştirdim.",
          "Claude Code platformunu kullanarak agent tabanlı yazılım geliştirme sürecini deneyimledim. MCP (Model Context Protocol), subagent vs agent team mimarileri, hooks mekanizması, skills modülleri ve context yönetimi konularında çalışmalar yaptım.",
          "Claude ve Grok Api'lerini kullanarak çocuklara yönelik eğitici animasyon içeriklerini otomatik üreten bir sistem tasarladım. ",
          "Kendi bağlam bilgilerini kullanmadan sadece doküman tabanlı bilgi sorgulama yapabilen bir RAG mimarisi geliştirdim. Embedding modelleri, vector database, chunking stratejileri, retrieval optimizasyonu ve LLM entegrasyonu üzerine uçtan uca çalıştım.",
        ],
        en: [
          "Developed an end-to-end system in a Docker-based microservices architecture that scrapes Interpol Red Notices data through the Interpol Project.",
          "Gained hands-on experience in agent-based software development using the Claude Code platform. Worked on MCP (Model Context Protocol), subagent vs. agent team architectures, hooks mechanism, skills modules, and context management.",
          "Designed an automated system that generates educational animated content for children using Claude and Grok APIs.",
          "Built a RAG architecture that performs document-based information retrieval without relying on the model's own context. Worked end-to-end on embedding models, vector databases, chunking strategies, retrieval optimization, and LLM integration.",
         
        ],
      },
    },
    {
      role: { tr: "ARGE Mühendisi Stajyeri", en: "R&D Engineer Intern" },
      company: "Meliora Eğitim Teknolojileri",
      period: { tr: "Tem 2025 — Ağu 2025", en: "Tem 2025 — Ağu 2025" },
      stack: ["Python", "Unreal Engine"],
      bullets: {
        tr: [
          "Meliora şirketinin top ile etkileşimli çalışan VOLBOL ürünü için 'Kelebek Oyunu' ve 'Türkiye Kültür ve Coğrafya Oyunu' adlı iki oyunu Unreal Engine teknolojisi ile geliştirdim.",
        ],
        en: [
          "Developed two interactive games 'Butterfly' and 'Turkish Culture and Geography' in Unreal Engine for VOLBOL, Meliora's ball-interactive gaming platform.",
        ],
      },
    },
    {
      role: { tr: "Yapay Zeka Stajyeri", en: "AI Intern" },
      company: "ArVis Technology",
      period: { tr: "Tem 2024 — Ağu 2024", en: "July 2024 — Aug 2024" },
      stack: ["Python"],
      bullets: {
        tr: [
          "Program kapsamında teknik ve kişisel gelişim alanlarında çeşitli online eğitimler alarak kendimi geliştirme fırsatı buldum.",
        ],
        en: [
          "As part of the program, I had the opportunity to develop myself by taking various online courses in the areas of technical and personal development.",

        ],
      },
    },

  ],

  volunteer: [
      {
    role: { tr: "Başkan", en: "President" },
    org: "AYZEK — Algoritma ve Yapay Zeka Topluluğu",
    period: "Ekim 2024 — Ekim 2025",
    detail: {
      tr: "Yapay zeka alanındaki çalışmaları teşvik etmek ve proje geliştirmek amacıyla kurulan topluluğun yönetiminde yer aldım. Bu görev kapsamında topluluk yönetimi, ekip koordinasyonu, proje süreçleri ve liderlik becerilerimi geliştirdim.",
      en: "I served on the board of a community established to promote studies and project development in the field of artificial intelligence. In this role, I developed my skills in community management, team coordination, project processes, and leadership.",
    },
  },

  {
    role: { tr: "Fellow", en: "Fellow" },
    org: "Turkcell Geleceği Yazan Kadınlar Yapay Zeka Programı",
    period: "Ocak 2025 — Mayıs 2025",
    detail: {
      tr: "Turkcell Geleceği Yazanlar, T.C. Cumhurbaşkanlığı Dijital Dönüşüm Ofisi, TOBB ve TRAI ortaklığında düzenlenen yapay zeka programında yer aldım. Program kapsamında yapay zeka alanındaki teknik yetkinliklerimi geliştirdim, yenilikçi çözümler üretmeye yönelik eğitim ve proje süreçlerine katıldım.",
      en: "I participated in the Artificial Intelligence Program organized in partnership with Turkcell Geleceği Yazanlar, the Digital Transformation Office of the Presidency of Türkiye, TOBB, and TRAI. Throughout the program, I developed my technical competencies in artificial intelligence and took part in training and project processes aimed at producing innovative solutions.",
    },
  },

    {
    role: { tr: "Bursiyer", en: "Scholar" },
    org: "Yapay Zeka ve Uygulama Akademisi",
    period: "Kasım 2024 — Ağustos 2025",
    detail: {
      tr: "Google Türkiye, Türkiye Girişimcilik Vakfı ve T3 Girişim Merkezi iş birliğiyle yürütülen Yapay Zeka ve Teknoloji Akademisi'nde bursiyer olarak yer aldım. Program kapsamında veri bilimi, yapay zeka ve girişimcilik alanlarında bütüncül yetkinlik kazandım.",
      en: "I participated as a scholar in the Artificial Intelligence and Technology Academy, conducted in collaboration with Google Türkiye, the Entrepreneurship Foundation of Türkiye, and the T3 Entrepreneurship Center. Through the program, I gained holistic competence in data science, artificial intelligence, and entrepreneurship.",
    },
  },
  
  {
    role: { tr: "Gönüllü", en: "Volunteer" },
    org: "T3 AI’LE",
    period: "Mayıs 2024 — Devam ediyor",
    detail: {
      tr: "Türkçeye açık kaynak büyük dil modeli kazandırmak amacıyla T3 Vakfı ve Baykar tarafından başlatılan Ar-Ge projesinde gönüllü olarak görev alıyorum. Proje kapsamında verilen görevleri yerine getirerek büyük dil modelleri, doğal dil işleme ve yapay zeka alanlarında kendimi geliştiriyorum.",
      en: "I volunteer in the R&D project initiated by the T3 Foundation and Baykar to contribute an open-source large language model for Turkish. By completing assigned tasks, I improve myself in large language models, natural language processing, and artificial intelligence.",
    },

  },
  {
    role: { tr: "Yönetim Kurulu Üyesi", en: "Board Member" },
    org: "GDG on Campus Selçuk University",
    period: "Eylül 2023 — Eylül 2024",
    detail: {
      tr: "Topluluğun sosyal medya hesaplarında paylaşılacak gönderilerin ve etkinliklerde kullanılacak görsel materyallerin tasarımından sorumluydum. Bu süreçte ekip çalışması, görsel içerik üretimi ve organizasyon konularında kendimi geliştirdim.",
      en: "I was responsible for designing social media posts shared on the community's accounts and visual materials used at events. During this period, I developed myself in teamwork, visual content production, and organization.",
    },
  },





  ],

  projects: [
    {
      title: "INTERPOL Project",
      tags: ["python"],
      image: "images/interpol.png",
      tagline: {
        tr: "Interpol verileri için konteyner tabanlı mikro servis uygulaması.",
        en: "A container-based microservice app for Interpol data.",
      },
      description: {
        tr: "Interpol Red Notice verilerini düzenli aralıklarla alan, bunları RabbitMQ'ya yayınlayan, işlenen mesajları PostgreSQL veritabanında depolayan ve gerçek zamanlı güncellemeler ile alarm bildirimlerini web arayüzünde gösteren, Docker ve docker-compose ile tamamen konteyner ortamına uyarlanmış Python tabanlı mikro servis uygulamasıdır.",
        en: "A Python-based microservice application that periodically fetches Interpol Red Notice data, publishes it to RabbitMQ, stores processed messages in PostgreSQL, and displays real-time updates and alarm notifications through a web interface, fully containerized with Docker and docker-compose.",
      },
      stack: ["Python", "FastAPI", "RabbitMQ", "PostgreSQL", "MinIO", "Prisma", "Docker", "JavaScript", "HTML", "CSS"],
      github: "https://github.com/Bhryee/Python_Developer_Task",
      live: null,
      year: "2026",
    },
     {
    title: "Köstebek Oyunu",
    tags: ["unreal-engine"],
    tagline: {
      tr: "Unreal Engine ile geliştirilmiş refleks odaklı mini oyun.",
      en: "A reflex-based mini game developed with Unreal Engine.",
    },
    description: {
      tr: "Unreal Engine kullanılarak geliştirilen, oyuncunun belirli süre içinde ortaya çıkan köstebekleri yakalamaya çalıştığı refleks ve hız odaklı mini oyun projesidir. Proje kapsamında oyun mekaniği, seviye akışı, kullanıcı etkileşimi, skor sistemi ve temel oyun arayüzü tasarımı üzerine çalışılmıştır.",
      en: "A reflex and speed-based mini game developed with Unreal Engine, where the player tries to catch moles appearing within a limited time. The project involved working on game mechanics, level flow, user interaction, scoring system, and basic game UI design.",
    },
    stack: ["Unreal Engine", "Blueprint", "Game Development", "UI Design", "Level Design"],
    github: null,
    live: null,
    year: "2025",
  },
  {
    title: "Türkiye Kültür ve Coğrafya Oyunu",
    tags: ["unreal-engine"],
    tagline: {
      tr: "Türkiye’nin bölgelerini, illerini ve kültürel değerlerini öğretmeye yönelik eğitsel oyun.",
      en: "An educational game designed to teach Türkiye’s regions, cities, and cultural values.",
    },
    description: {
      tr: "Unreal Engine ile geliştirilen bu eğitsel oyun projesi, oyuncuların Türkiye’nin bölgelerini, illerini ve şehirlerle ilişkili kültürel değerleri interaktif şekilde öğrenmesini amaçlar. Projede harita tabanlı keşif, şehir ve bölge eşleştirme, kültürel içeriklerin sunulması, kullanıcı etkileşimi ve oyunlaştırılmış öğrenme yapısı üzerine çalışılmıştır.",
      en: "An educational game project developed with Unreal Engine, aiming to help players interactively learn Türkiye’s regions, cities, and cultural values associated with different locations. The project focused on map-based exploration, city and region matching, cultural content presentation, user interaction, and gamified learning.",
    },
    stack: ["Unreal Engine", "Blueprint", "Educational Game", "Game Development", "Map-Based Interaction", "UI Design"],
    github: null,
    live: null,
    year: "2025",
  },
    {
      title: "Point-and-Learn",
      tags: ["flutter"],
      image: "images/point.png",
      tagline: {
        tr: "Kamera ile nesne tanıyıp yabancı dil kelimesi öğreten mobil uygulama.",
        en: "A mobile app that teaches foreign vocabulary through camera-based object recognition.",
      },
      description: {
        tr: "Kullanıcının kamerayı günlük nesnelere yönelterek nesnelerin yabancı dil karşılıklarını öğrenmesini sağlayan, nesne tanıma, anlık çeviri, telaffuz desteği, favorilere ekleme, temel sözlük açıklamaları, AR etiketleri, örnek cümleler, mini quizler ve çoklu dil desteği hedefleyen Flutter tabanlı interaktif eğitim uygulamasıdır.",
        en: "A Flutter-based interactive education app that helps users learn foreign vocabulary by pointing the camera at everyday objects, aiming to support object recognition, instant translation, pronunciation, favorites, dictionary definitions, AR labels, example sentences, mini quizzes, and multi-language learning.",
      },
      stack: ["Flutter", "Dart", "Camera", "Provider", "TensorFlow Lite", "MediaPipe", "Google ML Kit"],
      github: "https://github.com/Bhryee/Point-and-Learn",
      live: null,
      year: "2025",
    },
    {
      title: "LAF Messaging App",
      tags: ["flutter"],
      image: "images/laf.png",
      tagline: {
        tr: "Flutter ve Firebase tabanlı anlık mesajlaşma uygulaması.",
        en: "A Flutter and Firebase based instant messaging app.",
      },
      description: {
        tr: "Yazılım.xyz yaz stajı kapsamında geliştirilen, kullanıcıların internet üzerinden mesaj gönderip almasını ve favori kişiler üzerinden sohbetlere hızlı erişmesini sağlayan Flutter tabanlı mobil mesajlaşma uygulamasıdır. Firebase Authentication, Firestore, Storage ve medya seçme özellikleriyle temel sohbet uygulaması işlevlerini içerir.",
        en: "A Flutter-based mobile messaging application developed as part of the Yazılım.xyz summer internship, allowing users to send and receive messages over the internet and quickly access chats through favorite contacts. It includes core chat app features using Firebase Authentication, Firestore, Storage, and media picking.",
      },
      stack: ["Flutter", "Dart", "Firebase", "Firebase Auth", "Cloud Firestore", "Firebase Storage", "Image Picker"],
      github: "https://github.com/Bhryee/LAF-messaging-app",
      live: null,
      year: "2025",
    },

      {
    title: "ART-i",
    tags: ["flutter", "yapay-zeka"],
    tagline: {
      tr: "Artikülasyon Bozukluğuna sahip bireyler için yapay zeka destekli mobil uygulama.",
      en: "A voice-based AI-powered mobile application for accessible living technologies.",
    },
    description: {
      tr: "Teknofest Engelsiz Yaşam Teknolojileri kategorisi kapsamında geliştirilen yapay zeka destekli mobil uygulama projesidir. Takım kaptanı olarak süreç yönetimi yürütülmekte; proje kapsamında ses tabanlı yapay zeka hizmetinin geliştirilmesi, uygulama arayüz tasarımının hazırlanması ve takım koordinasyonu görevleri üstlenilmektedir.",
      en: "An AI-powered mobile application project developed for the Accessible Living Technologies category of Teknofest. As team captain, the work includes managing the project process, developing the voice-based AI service, designing the application interface, and coordinating the team.",
    },
    stack: ["Flutter", "UI/UX Design", "Mobile App", "Team Leadership"],
    github: null,
    live: null,
    year: "2025",
  },

    {
      title: "Cryptology Project With Python",
      tags: ["python"],
      image: "images/cryptology.png",
      tagline: {
        tr: "Metin şifreleme, çözme ve e-posta ile gönderme arayüzü.",
        en: "A text encryption, decryption, and email sending interface.",
      },
      description: {
        tr: "Kullanıcının bir şifreleme algoritması ve anahtar belirleyerek metni şifrelemesini, şifrelenmiş metni e-posta ile karşı tarafa göndermesini ve alıcının gerekli anahtar ile metni tekrar çözmesini sağlayan Python tabanlı kriptoloji uygulamasıdır.",
        en: "A Python-based cryptology application that lets users choose an encryption algorithm and key, encrypt text, send the encrypted message by email, and allow the recipient to decrypt it with the required key.",
      },
      stack: ["Python", "Cryptography", "Email", "GUI"],
      github: "https://github.com/Bhryee/cryptology-project-with-python",
      live: null,
      year: "2025",
    },
    {
      title: "Image Processing Project",
      tags: ["python"],
      image: "images/processing.png",
      tagline: {
        tr: "Temel görüntü işleme tekniklerini açıklayan Python projesi.",
        en: "A Python project explaining fundamental image processing techniques.",
      },
      description: {
        tr: "Görüntü döndürme, kırpma, yakınlaştırma/uzaklaştırma, renk uzayı dönüşümleri, histogram işlemleri, aritmetik işlemler, kontrast düzenleme, konvolüsyon, eşikleme, kenar tespiti, gürültü ekleme/giderme, hareket filtreleri ve morfolojik işlemler gibi temel görüntü işleme yöntemlerini teorik ve uygulamalı olarak ele alan Python projesidir.",
        en: "A Python project that covers fundamental image processing techniques such as rotation, cropping, zooming, color space transformations, histogram operations, arithmetic operations, contrast manipulation, convolution, thresholding, edge detection, noise addition/removal, motion filters, and morphological operations from both theoretical and practical perspectives.",
      },
      stack: ["Python", "OpenCV", "NumPy", "Image Processing"],
      github: "https://github.com/Bhryee/Image_Processing_Project",
      live: null,
      year: "2025",
    },
    {
      title: "BTK Hackathon Mini Kaşifler",
      tags: ["flutter"],
      image: "images/minikasif.png",
      tagline: {
        tr: "Gemini destekli okul öncesi eğitim mobil uygulaması.",
        en: "A Gemini-powered preschool education mobile app.",
      },
      description: {
        tr: "BTK Hackathon 2024 kapsamında geliştirilen, okul öncesi çocukların öğrenme süreçlerini mobil oyunlar ve gerçek dünya etkinlikleriyle desteklemeyi hedefleyen Flutter tabanlı eğitim uygulamasıdır. Projede Gemini entegrasyonu, Firebase Authentication, Firestore, güvenli depolama, konuşmadan metne dönüştürme ve oyunlaştırma bileşenleri yer alır.",
        en: "A Flutter-based educational mobile application developed for BTK Hackathon 2024, aiming to support preschool children's learning processes through mobile games and real-world activities. The project includes Gemini integration, Firebase Authentication, Firestore, secure storage, speech-to-text, and gamification components.",
      },
      stack: ["Flutter", "Dart", "Gemini", "Firebase", "Firestore", "Firebase Auth", "Speech-to-Text", "Figma"],
      github: "https://github.com/Bhryee/BTK-Hackathon-Mini-Kasifler",
      live: null,
      year: "2024",
    },

    {
      title: "Social Media Artpix With Flutter",
      tags: ["flutter"],
      image: "images/artpix.png",
      tagline: {
        tr: "Fotoğraf, video, beğeni ve yorum özellikleri içeren Flutter sosyal medya uygulaması.",
        en: "A Flutter social media app with photo, video, like, and comment features.",
      },
      description: {
        tr: "Flutter ile geliştirilen ilk sosyal medya uygulaması olan Artpix; fotoğraf ve video paylaşma, gönderi beğenme, yorum yapma ve Firebase tabanlı veri yönetimi gibi temel sosyal medya özelliklerini içeren mobil uygulama projesidir.",
        en: "Artpix is a first Flutter social media app project that includes core social media features such as sharing photos and videos, liking posts, commenting, and Firebase-based data management.",
      },
      stack: ["Flutter", "Dart", "Firebase", "Cloud Firestore", "Firebase Storage", "Mobile App"],
      github: "https://github.com/Bhryee/Social-Media-Artpix-With-Flutter",
      live: null,
      year: "2024",
    },
    {
      title: "FAIDAI",
      tags: ["flutter"],
      image: "images/faidai.png",
      tagline: {
        tr: "Doğru ilk yardım bilincini artırmaya yönelik mobil uygulama.",
        en: "A mobile app designed to improve accurate first aid awareness.",
      },
      description: {
        tr: "Solution Challenge 2024 kapsamında geliştirilen FAIDAI, acil durumlarda doğru ilk yardım bilgisine hızlı erişim sağlamayı ve toplumda yanlış ilk yardım uygulamalarından kaynaklanan riskleri azaltmayı hedefleyen mobil uygulama projesidir.",
        en: "FAIDAI is a mobile application project developed for Solution Challenge 2024, aiming to provide quick access to accurate first aid information during emergencies and reduce risks caused by common first aid misconceptions.",
      },
      stack: ["Flutter", "Dart", "C++", "Mobile App", "UI/UX"],
      github: "https://github.com/Bhryee/faidai",
      live: null,
      year: "2024",
    },


  {
    title: "Serenity AI",
    tags: ["yapay-zeka"],
    tagline: {
      tr: "Psikoloji alanında yapay zeka destekli mobil uygulama projesi.",
      en: "An AI-powered mobile application project for technological applications in psychology.",
    },
    description: {
      tr: "Teknofest Psikolojide Teknolojik Uygulamalar kategorisi kapsamında geliştirilen yapay zeka destekli mobil uygulama projesidir. Projede görüntü işleme ve yapay zeka geliştirme süreçlerinde görev alınmış, duygu analizi modülü Vision Transformer modeli kullanılarak geliştirilmiştir.",
      en: "An AI-powered mobile application project developed for the Technological Applications in Psychology category of Teknofest. The role included image processing and artificial intelligence development, with the emotion analysis module implemented using a Vision Transformer model.",
    },
    stack: ["Python", "FastAPI", "Docker", "Vision Transformer", "Computer Vision", "Artificial Intelligence"],
    github: null,
    live: null,
    year: "2024",
  },


    {
    title: "SUTİS 2023",
    tags: ["yapay-zeka"],
    tagline: {
      tr: "Sentetik verilerle eğitilen yapay zeka modellerinin başarısını inceleyen akademik çalışma.",
      en: "An academic study examining the performance of AI models trained with synthetic data.",
    },
    description: {
      tr: "Selçuk University International Technology and Innovation Student Symposium kapsamında geliştirilen bu projede, sentetik verilerle eğitilen yapay zeka modellerinin başarı performansını inceleyen ampirik bir çalışma yürütülmüştür. Projede veri seti oluşturma, veri hazırlama ve veri çoğaltma süreçlerinde takım üyesi olarak görev alınmıştır.",
      en: "Developed for the Selçuk University International Technology and Innovation Student Symposium, this project focused on an empirical study examining the performance of artificial intelligence models trained with synthetic data. The role included dataset creation, data preparation, and data augmentation as a team member.",
    },
    stack: ["Python", "Artificial Intelligence", "Synthetic Data", "Data Augmentation", "Machine Learning"],
    github: null,
    live: null,
    year: "2023",
  },


    {
      title: "Global AI Hub Project",
      tags: ["yapay-zeka"],
      tagline: {
        tr: "Sigorta veri seti üzerinde makine öğrenmesi modelleme projesi.",
        en: "A machine learning modeling project on an insurance dataset.",
      },
      description: {
        tr: "Aygaz Makine Öğrenmesi Bootcamp bitirme projesi olarak geliştirilen, Kaggle sigorta veri seti üzerinde Linear Regression ve XGBoost modellerini karşılaştıran, Grid Search ile hiperparametre optimizasyonu uygulayan Python tabanlı makine öğrenmesi projesidir.",
        en: "A Python-based machine learning capstone project developed for the Aygaz Machine Learning Bootcamp, comparing Linear Regression and XGBoost models on a Kaggle insurance dataset and applying Grid Search for hyperparameter optimization.",
      },
      stack: ["Python", "Jupyter Notebook", "Machine Learning", "XGBoost", "Linear Regression", "Grid Search", "Kaggle"],
      github: "https://github.com/Bhryee/Global-AI-Hub-Proje",
      live: null,
      year: "2023",
    },

  ],

  technologies: [
    { name: "Python",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "Flutter",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" },
    { name: "Dart",         icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg" },
    { name: "Docker",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
    { name: "FastAPI",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
    { name: "PostgreSQL",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
    { name: "Firebase",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" },
    { name: "TensorFlow",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" },
    { name: "OpenCV",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg" },
    { name: "NumPy",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" },
    { name: "Jupyter",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg" },
    { name: "Figma",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
    { name: "Git",          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
    { name: "RabbitMQ",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rabbitmq/rabbitmq-original.svg" },
    { name: "Prisma",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" },
    { name: "Unreal Engine",icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unrealengine/unrealengine-original.svg" },
    { name: "GitHub",       icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
  ],

  articles: [

  {
    title: {
      tr: "Hybrid Feature-Based Two-Stage Framework for Audio Deepfake Detection and Generative Model Attribution",
      en: "Hybrid Feature-Based Two-Stage Framework for Audio Deepfake Detection and Generative Model Attribution",
    },
    excerpt: {
      tr: "Ses deepfake tespiti ve kullanılan üretici modelin belirlenmesi için hibrit özellik çıkarımı kullanan iki aşamalı bir yapay zeka çerçevesi. Çalışma, yalnızca sesin gerçek veya sahte olduğunu tespit etmeyi değil, aynı zamanda sahte sesin hangi üretici model ya da yöntem tarafından oluşturulduğunu da analiz etmeyi hedefler.",
      en: "A two-stage artificial intelligence framework using hybrid feature extraction for audio deepfake detection and generative model attribution. The study focuses not only on identifying whether an audio sample is real or fake, but also on analyzing which generative model or method produced the synthetic audio.",
    },
    url: "https://aeis.bilijipub.com/article_242122.html",
    date: "2026",
    readTime: "6 min",
  },
  {
    title: {
      tr: "Lightweight Hybrid Model for Bone Fracture Detection Using MobileNetV2 Feature Extraction and Ensemble Learning",
      en: "Lightweight Hybrid Model for Bone Fracture Detection Using MobileNetV2 Feature Extraction and Ensemble Learning",
    },
    excerpt: {
      tr: "X-ray görüntülerinden kemik kırığı tespiti için MobileNetV2 ile derin özellik çıkarımı yapan ve bu özellikleri Random Forest, Extra Trees, Gradient Boosting, AdaBoost ve Bagging Classifier gibi ensemble öğrenme algoritmalarıyla sınıflandıran hafif hibrit bir model önerilir. Çalışmada 4.840 kırıklı ve 4.623 kırık olmayan görüntü kullanılmış, en yüksek başarı %99.14 doğruluk ile Extra Trees algoritmasından elde edilmiştir.",
      en: "A lightweight hybrid model for bone fracture detection from X-ray images, using MobileNetV2 for deep feature extraction and ensemble learning algorithms such as Random Forest, Extra Trees, Gradient Boosting, AdaBoost, and Bagging Classifier for classification. The study uses 4,840 fractured and 4,623 non-fractured images, achieving the best result with Extra Trees at 99.14% accuracy.",
    },
    url: "https://faith.futuretechsci.org/index.php/FAITH/article/view/284",
    date: "2025",
    readTime: "8 min",
  },
  {
    title: {
      tr: "Violence Detection in Video Using Hybrid Models Based on MobileNetV2",
      en: "Violence Detection in Video Using Hybrid Models Based on MobileNetV2",
    },
    excerpt: {
      tr: "Video akışlarında otomatik şiddet tespiti için MobileNetV2 tabanlı hibrit derin öğrenme modellerinin karşılaştırıldığı bir çalışmadır. MobileNetV2 mimarisi BiLSTM, GRU, Attention Mechanism ve ConvLSTM katmanlarıyla birleştirilmiş; Real-Life Violence Situations Dataset üzerinde yapılan deneylerde MobileNetV2 + Attention Mechanism modeli %94.5 doğruluk, precision, recall ve F1-score ile en iyi sonucu vermiştir.",
      en: "A study comparing MobileNetV2-based hybrid deep learning models for automatic violence detection in video streams. The MobileNetV2 architecture is combined with BiLSTM, GRU, Attention Mechanism, and ConvLSTM layers; experiments on the Real-Life Violence Situations Dataset show that MobileNetV2 + Attention Mechanism achieves the best performance with 94.5% accuracy, precision, recall, and F1-score.",
    },
    url: "https://www.researchgate.net/publication/396771527_Violence_Detection_in_Video_Using_Hybrid_Models_Based_on_MobileNetV2",
    date: "2025",
    readTime: "5 min",
  },

  ],
};
