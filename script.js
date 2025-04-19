document.addEventListener("DOMContentLoaded", () => {
    // Set initial language from localStorage or default to 'uz'
    let currentLang = localStorage.getItem("language") || "uz"
    document.documentElement.lang = currentLang
  
    // Update selected language display on initial load
    document.querySelector(".selected-language").textContent = currentLang.toUpperCase()
  
    // Update language dropdown active state on initial load
    document.querySelectorAll(".language-dropdown a").forEach((link) => {
      link.classList.remove("active")
      if (link.getAttribute("data-lang") === currentLang) {
        link.classList.add("active")
      }
    })
  
    // Translations
    const translations = {
      uz: {
        // Navigation
        nav_home: "Bosh sahifa",
        nav_about: "Biz haqimizda",
        nav_services: "Xizmatlar",
        nav_gallery: "Galereya",
        nav_contact: "Aloqa",
  
        // Hero section
        hero_title: "Mukammal Tikuvchilik",
        hero_subtitle: "Hunarmandchilik va uslub uyg'unligi, o'zingiz kabi noyob kiyimlar yaratish",
        hero_btn_services: "Bizning xizmatlar",
        hero_btn_appointment: "Uchrashuv belgilash",
  
        // About section
        about_subtitle: "Bizning tarix",
        about_title: "1985 yildan beri mukammallik",
        about_heading: "Tikuvchilik mukammalligi",
        about_p1:
          "Elegance'da har bir chok bir hikoyani aytib beradi deb ishonamiz. Bizning usta tikuvchilarimiz o'zlarining ko'p yillik tajribalarini qo'llab, nafaqat mukammal o'lchamli, balki sizning noyob shaxsiyatingiz va uslubingizni aks ettiruvchi kiyimlar yaratadi.",
        about_p2:
          "1985 yilda asos solingan ustaxonamiz avlodlarni har bir detalga e'tibor va sifatga bo'lgan sodiqlik bilan kiyintirgan. Biz har bir buyum vaqt sinovidan o'tishini ta'minlash uchun dunyoning eng yaxshi matolarini tanlaymiz.",
        stat_years: "Yillik tajriba",
        stat_clients: "Mamnun mijozlar",
        stat_tailors: "Usta tikuvchilar",
  
        // Services section
        services_subtitle: "Biz taklif qilamiz",
        services_title: "Bizning premium xizmatlar",
        service1_title: "Buyurtma kostyumlar",
        service1_desc:
          "Aniq o'lchamlaringiz va uslub afzalliklaringizga moslashtirilgan, dunyoning eng yaxshi matolaridan tayyorlangan qo'lda tikilgan kostyumlar.",
        service2_title: "Maxsus ko'ylaklar",
        service2_desc:
          "Eng sifatli paxtadan tayyorlangan, yoqa, manjet, tugma va monogramma tanlovingiz bilan mukammal o'lchamdagi ko'ylaklar.",
        service3_title: "To'y kiyimlari",
        service3_desc:
          "Muhim kuningizni yanada unutilmas qilish uchun har bir detalga e'tibor bilan yaratilgan maxsus to'y kiyimlari.",
        service4_title: "Kiyim ta'mirlash",
        service4_desc:
          "Mavjud kiyimlaringiz mukammal o'lchamda bo'lishi va yillar davomida eng yaxshi ko'rinishda bo'lishini ta'minlaydigan professional ta'mirlash.",
        more_details: "Batafsil",
  
        // Process section
        process_subtitle: "Qanday ishlaymiz",
        process_title: "Bizning tikuvchilik jarayoni",
        process1_title: "Konsultatsiya",
        process1_desc:
          "Biz sizning uslub afzalliklaringiz, ehtiyojlaringiz va kiyinmoqchi bo'lgan tadbirlar haqida batafsil suhbat bilan boshlaymiz.",
        process2_title: "O'lchov olish",
        process2_desc:
          "Bizning usta tikuvchilarimiz sizning noyob tana shaklingizga mukammal mos keladigan aniq o'lchovlarni oladi.",
        process3_title: "Mato tanlash",
        process3_desc: "Dunyoning eng yaxshi fabrikalaridan keltirilgan premium matolar kolleksiyamizdan tanlang.",
        process4_title: "Tikish",
        process4_desc:
          "Sizning kiyimingiz bizning mohir ustalarimiz tomonidan har bir detalga e'tibor bilan qo'lda tikiladi.",
        process5_title: "Kiydirib ko'rish",
        process5_desc:
          "Bir necha bor kiydirib ko'rish kiyimingiz tanangizga mukammal moslashishini va bizning yuqori standartlarimizga javob berishini ta'minlaydi.",
  
        // Gallery section
        gallery_subtitle: "Bizning ishlarimiz",
        gallery_title: "Tanlangan kolleksiya",
        filter_all: "Hammasi",
        filter_suits: "Kostyumlar",
        filter_shirts: "Ko'ylaklar",
        filter_accessories: "Aksessuarlar",
        item1_title: "Klassik ko'k kostyum",
        item1_desc: "Jun-kashemir aralashmasi",
        item2_title: "Kulrang uch qismli",
        item2_desc: "Italiya juni",
        item3_title: "Oksford ko'ylagi",
        item3_desc: "Misr paxtasi",
        item4_title: "Qo'lda tikilgan galstuk",
        item4_desc: "Sof ipak",
        item5_title: "Fransuz manjetli ko'ylak",
        item5_desc: "Dengiz oroli paxtasi",
        item6_title: "Cho'ntak ro'molchasi",
        item6_desc: "Qo'lda o'ralgan chetlar",
        category_suit: "Kostyum",
        category_shirt: "Ko'ylak",
        category_accessory: "Aksessuar",
  
        // Testimonials section
        testimonials_subtitle: "Mijozlar fikri",
        testimonials_title: "Mijozlarimiz nima deydi",
        testimonial1_text:
          "\"Elegance'dagi detalga e'tibor va hunarmandchilik tengsiz. Mening to'y kostyumim har jihatdan mukammal edi, va men ko'plab maqtovlar oldim.\"",
        testimonial1_name: "Jamshid Valiyev",
        testimonial1_position: "Biznes rahbari",
        testimonial2_text:
          "\"Men 10 yildan ortiq vaqt davomida mijoz bo'lib kelganman, va sifat va xizmat doimo ajoyib bo'lgan. Mening garderobi deyarli to'liq Elegance Tikuvchilikdan.\"",
        testimonial2_name: "Rustam Karimov",
        testimonial2_position: "Arxitektor",
        testimonial3_text:
          "\"Men buyurtma bergan ko'ylaklar mukammal o'lchamda va mato sifati ajoyib. Jamoa men nima xohlayotganimni aniq tushunish uchun vaqt ajratdi.\"",
        testimonial3_name: "Saida Rahimova",
        testimonial3_position: "Advokat",
  
        // Contact section
        contact_subtitle: "Bog'lanish",
        contact_title: "Uchrashuvni belgilang",
        contact_heading: "Bizning atelyemizga tashrif buyuring",
        contact_desc:
          "Ustaxonamizga tashrif buyurib, hunarmandchilikni o'z ko'zingiz bilan ko'rishingizni taklif qilamiz.",
        contact_address_title: "Manzil",
        contact_address: "123 Navoiy ko'chasi, Toshkent, O'zbekiston",
        contact_hours_title: "Ish vaqti",
        contact_hours: "Dush-Jum: 9:00 - 18:00\nShanba: 10:00 - 16:00",
        contact_phone_title: "Telefon",
        contact_phone: "+998 90 123 45 67",
        contact_email_title: "Email",
        contact_email: "info@elegance.uz",
        form_name: "To'liq ism",
        form_email: "Email manzil",
        form_phone: "Telefon raqam",
        form_service: "Kerakli xizmat",
        form_message: "Xabaringiz",
        form_submit: "Uchrashuv so'rash",
        form_option_suit: "Buyurtma kostyum",
        form_option_shirt: "Maxsus ko'ylak",
        form_option_wedding: "To'y kiyimi",
        form_option_alterations: "Kiyim ta'mirlash",
        form_option_other: "Boshqa",
  
        // Footer
        footer_tagline: "1985 yildan beri elegantlik yaratish",
        footer_links_title: "Tezkor havolalar",
        footer_social_title: "Bizni kuzating",
        footer_newsletter_title: "Yangiliklar",
        footer_newsletter_desc: "Yangi kolleksiyalar va tadbirlar haqida yangiliklar olish uchun obuna bo'ling.",
        footer_newsletter_placeholder: "Email manzilingiz",
        footer_newsletter_button: "Obuna bo'lish",
        footer_copyright: "© 2023 Elegance Tikuvchilik. Barcha huquqlar himoyalangan.",
  
        // Alerts
        alert_form_success: "Uchrashuv so'rovingiz uchun rahmat! Tez orada siz bilan bog'lanamiz.",
        alert_newsletter: "Yangiliklarimizga obuna bo'lganingiz uchun rahmat!",
      },
      ru: {
        // Navigation
        nav_home: "Главная",
        nav_about: "О нас",
        nav_services: "Услуги",
        nav_gallery: "Галерея",
        nav_contact: "Контакты",
  
        // Hero section
        hero_title: "Идеальный Пошив",
        hero_subtitle: "Гармония мастерства и стиля, создание одежды такой же уникальной, как и вы",
        hero_btn_services: "Наши услуги",
        hero_btn_appointment: "Записаться на прием",
  
        // About section
        about_subtitle: "Наша история",
        about_title: "Совершенство с 1985 года",
        about_heading: "Мастерство пошива",
        about_p1:
          "В Elegance мы верим, что каждый стежок рассказывает историю. Наши мастера-портные используют свой многолетний опыт, чтобы создавать одежду, которая не только идеально сидит, но и отражает вашу уникальную индивидуальность и стиль.",
        about_p2:
          "Основанная в 1985 году, наша мастерская одевала поколения с вниманием к деталям и приверженностью качеству. Мы выбираем лучшие ткани со всего мира, чтобы каждое изделие выдержало испытание временем.",
        stat_years: "Лет опыта",
        stat_clients: "Довольных клиентов",
        stat_tailors: "Мастеров-портных",
  
        // Services section
        services_subtitle: "Что мы предлагаем",
        services_title: "Наши премиум услуги",
        service1_title: "Костюмы на заказ",
        service1_desc:
          "Сшитые вручную костюмы, адаптированные к вашим точным меркам и стилевым предпочтениям, с использованием лучших тканей со всего мира.",
        service2_title: "Рубашки на заказ",
        service2_desc:
          "Идеально сидящие рубашки из высококачественного хлопка с выбором воротника, манжет, пуговиц и монограммы.",
        service3_title: "Свадебная одежда",
        service3_desc:
          "Специальная одежда для особых случаев, созданная с вниманием к каждой детали, чтобы сделать ваш важный день еще более незабываемым.",
        service4_title: "Переделки",
        service4_desc:
          "Профессиональные переделки, чтобы ваша существующая одежда идеально сидела и выглядела наилучшим образом на протяжении многих лет.",
        more_details: "Подробнее",
  
        // Process section
        process_subtitle: "Как мы работаем",
        process_title: "Наш процесс пошива",
        process1_title: "Консультация",
        process1_desc:
          "Мы начинаем с подробной беседы о ваших стилевых предпочтениях, потребностях и мероприятиях, для которых вы одеваетесь.",
        process2_title: "Снятие мерок",
        process2_desc:
          "Наши мастера-портные снимают точные мерки, чтобы обеспечить идеальную посадку для вашей уникальной формы тела.",
        process3_title: "Выбор ткани",
        process3_desc: "Выберите из нашей коллекции премиальных тканей, привезенных из лучших фабрик мира.",
        process4_title: "Пошив",
        process4_desc: "Ваша одежда тщательно шьется вручную нашими опытными мастерами с вниманием к каждой детали.",
        process5_title: "Примерка",
        process5_desc:
          "Несколько примерок обеспечивают идеальную посадку вашей одежды и соответствие нашим высоким стандартам.",
  
        // Gallery section
        gallery_subtitle: "Наши работы",
        gallery_title: "Избранная коллекция",
        filter_all: "Все",
        filter_suits: "Костюмы",
        filter_shirts: "Рубашки",
        filter_accessories: "Аксессуары",
        item1_title: "Классический синий костюм",
        item1_desc: "Шерсть-кашемир",
        item2_title: "Серый тройка",
        item2_desc: "Итальянская шерсть",
        item3_title: "Рубашка Оксфорд",
        item3_desc: "Египетский хлопок",
        item4_title: "Галстук ручной работы",
        item4_desc: "Чистый шелк",
        item5_title: "Рубашка с французскими манжетами",
        item5_desc: "Хлопок морского острова",
        item6_title: "Карманный платок",
        item6_desc: "Края с ручной обработкой",
        category_suit: "Костюм",
        category_shirt: "Рубашка",
        category_accessory: "Аксессуар",
  
        // Testimonials section
        testimonials_subtitle: "Отзывы клиентов",
        testimonials_title: "Что говорят наши клиенты",
        testimonial1_text:
          '"Внимание к деталям и мастерство в Elegance не имеют себе равных. Мой свадебный костюм был идеален во всех отношениях, и я получил бесчисленные комплименты."',
        testimonial1_name: "Джамшид Валиев",
        testimonial1_position: "Бизнес-руководитель",
        testimonial2_text:
          '"Я был клиентом более 10 лет, и качество и обслуживание всегда были превосходными. Мой гардероб почти полностью от Elegance Tailoring."',
        testimonial2_name: "Рустам Каримов",
        testimonial2_position: "Архитектор",
        testimonial3_text:
          '"Рубашки, которые я заказал, идеально сидят, а качество ткани превосходное. Команда потратила время, чтобы точно понять, что я хочу."',
        testimonial3_name: "Саида Рахимова",
        testimonial3_position: "Адвокат",
  
        // Contact section
        contact_subtitle: "Связаться",
        contact_title: "Назначить встречу",
        contact_heading: "Посетите наше ателье",
        contact_desc: "Мы приглашаем вас посетить нашу мастерскую и увидеть мастерство своими глазами.",
        contact_address_title: "Адрес",
        contact_address: "123 улица Навои, Ташкент, Узбекистан",
        contact_hours_title: "Часы работы",
        contact_hours: "Пн-Пт: 9:00 - 18:00\nСб: 10:00 - 16:00",
        contact_phone_title: "Телефон",
        contact_phone: "+998 90 123 45 67",
        contact_email_title: "Email",
        contact_email: "info@elegance.uz",
        form_name: "Полное имя",
        form_email: "Email адрес",
        form_phone: "Номер телефона",
        form_service: "Требуемая услуга",
        form_message: "Ваше сообщение",
        form_submit: "Запросить встречу",
        form_option_suit: "Костюм на заказ",
        form_option_shirt: "Рубашка на заказ",
        form_option_wedding: "Свадебная одежда",
        form_option_alterations: "Переделки",
        form_option_other: "Другое",
  
        // Footer
        footer_tagline: "Создаем элегантность с 1985 года",
        footer_links_title: "Быстрые ссылки",
        footer_social_title: "Следите за нами",
        footer_newsletter_title: "Новости",
        footer_newsletter_desc: "Подпишитесь, чтобы получать обновления о новых коллекциях и мероприятиях.",
        footer_newsletter_placeholder: "Ваш email адрес",
        footer_newsletter_button: "Подписаться",
        footer_copyright: "© 2023 Elegance Tailoring. Все права защищены.",
  
        // Alerts
        alert_form_success: "Спасибо за ваш запрос на встречу! Мы свяжемся с вами в ближайшее время.",
        alert_newsletter: "Спасибо за подписку на наши новости!",
      },
    }
  
    // We'll initialize language at the end of the main DOMContentLoaded event
  
    // Function to update all text content based on selected language
    function updateLanguage(lang) {
      document.documentElement.lang = lang
      currentLang = lang
      localStorage.setItem("language", lang)
  
      // Update selected language display
      document.querySelector(".selected-language").textContent = lang.toUpperCase()
  
      // Update language dropdown active state
      document.querySelectorAll(".language-dropdown a").forEach((link) => {
        link.classList.remove("active")
        if (link.getAttribute("data-lang") === lang) {
          link.classList.add("active")
        }
      })
  
      // Update all text elements with translations
      document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.getAttribute("data-i18n")
        if (translations[lang][key]) {
          if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
            if (element.getAttribute("placeholder")) {
              element.placeholder = translations[lang][key]
            } else {
              element.value = translations[lang][key]
            }
          } else {
            element.textContent = translations[lang][key]
          }
        }
      })
  
      // Update form options
      document.querySelectorAll("option[data-i18n]").forEach((option) => {
        const key = option.getAttribute("data-i18n")
        if (translations[lang][key]) {
          option.textContent = translations[lang][key]
        }
      })
    }
  
    // Theme toggle
    const body = document.body
    const themeToggle = document.querySelector(".theme-toggle")
  
    // Check for saved theme preference
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark") {
      body.classList.add("dark-mode")
    }
  
    themeToggle.addEventListener("click", () => {
      body.classList.toggle("dark-mode")
      // Save theme preference
      if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark")
      } else {
        localStorage.setItem("theme", "light")
      }
    })
  
    // Language selector
    const languageLinks = document.querySelectorAll(".language-dropdown a")
  
    languageLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault()
        const lang = link.getAttribute("data-lang")
        updateLanguage(lang)
      })
    })
  
    // Custom cursor
    const cursor = document.querySelector(".cursor")
    const cursorFollower = document.querySelector(".cursor-follower")
  
    document.addEventListener("mousemove", (e) => {
      cursor.style.left = e.clientX + "px"
      cursor.style.top = e.clientY + "px"
  
      setTimeout(() => {
        cursorFollower.style.left = e.clientX + "px"
        cursorFollower.style.top = e.clientY + "px"
      }, 100)
    })
  
    document.addEventListener("mousedown", () => {
      cursor.style.transform = "translate(-50%, -50%) scale(0.8)"
      cursorFollower.style.transform = "translate(-50%, -50%) scale(0.8)"
    })
  
    document.addEventListener("mouseup", () => {
      cursor.style.transform = "translate(-50%, -50%) scale(1)"
      cursorFollower.style.transform = "translate(-50%, -50%) scale(1)"
    })
  
    // Links and buttons hover effect
    const links = document.querySelectorAll("a, button")
    links.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(1.5)"
        cursorFollower.style.transform = "translate(-50%, -50%) scale(1.5)"
        cursorFollower.style.border = "2px solid rgba(106, 17, 203, 0.2)"
      })
  
      link.addEventListener("mouseleave", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(1)"
        cursorFollower.style.transform = "translate(-50%, -50%) scale(1)"
        cursorFollower.style.border = "2px solid var(--primary-color)"
      })
    })
  
    // Header scroll effect
    const header = document.querySelector("header")
    const scrollThreshold = 50
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > scrollThreshold) {
        header.classList.add("scrolled")
      } else {
        header.classList.remove("scrolled")
      }
    })
  
    // Mobile menu toggle
    const menuToggle = document.querySelector(".menu-toggle")
    const navLinks = document.querySelector(".nav-links")
  
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active")
      document.body.classList.toggle("menu-open")
    })
  
    // Close menu when clicking outside
    document.addEventListener("click", (event) => {
      if (!event.target.closest("nav") && navLinks.classList.contains("active")) {
        navLinks.classList.remove("active")
        document.body.classList.remove("menu-open")
      }
    })
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
  
        // Close mobile menu if open
        if (navLinks.classList.contains("active")) {
          navLinks.classList.remove("active")
          document.body.classList.remove("menu-open")
        }
  
        const targetId = this.getAttribute("href")
        const targetElement = document.querySelector(targetId)
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: "smooth",
          })
  
          // Update active nav link
          document.querySelectorAll(".nav-links a").forEach((link) => {
            link.classList.remove("active")
          })
          this.classList.add("active")
        }
      })
    })
  
    // Scroll animations
    const revealElements = document.querySelectorAll(".reveal-element, .reveal-text")
  
    function checkReveal() {
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top
        const elementVisible = 150
  
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add("active")
        }
      })
    }
  
    // Initial check
    checkReveal()
  
    // Check on scroll
    window.addEventListener("scroll", checkReveal)
  
    // Gallery filter
    const filterButtons = document.querySelectorAll(".filter-btn")
    const galleryItems = document.querySelectorAll(".gallery-item")
  
    filterButtons.forEach((button) => {
      button.addEventListener("click", function () {
        // Update active button
        filterButtons.forEach((btn) => btn.classList.remove("active"))
        this.classList.add("active")
  
        const filter = this.getAttribute("data-filter")
  
        galleryItems.forEach((item) => {
          if (filter === "all" || item.classList.contains(filter)) {
            item.style.display = "block"
            setTimeout(() => {
              item.style.opacity = "1"
              item.style.transform = "scale(1)"
            }, 10)
          } else {
            item.style.opacity = "0"
            item.style.transform = "scale(0.8)"
            setTimeout(() => {
              item.style.display = "none"
            }, 300)
          }
        })
      })
    })
  
    // Testimonial slider
    const testimonialSlides = document.querySelectorAll(".testimonial-slide")
    const dots = document.querySelectorAll(".dot")
    const prevBtn = document.querySelector(".control-prev")
    const nextBtn = document.querySelector(".control-next")
    let currentSlide = 0
  
    function showSlide(index) {
      testimonialSlides.forEach((slide) => slide.classList.remove("active"))
      dots.forEach((dot) => dot.classList.remove("active"))
  
      testimonialSlides[index].classList.add("active")
      dots[index].classList.add("active")
      currentSlide = index
    }
  
    if (prevBtn && nextBtn) {
      prevBtn.addEventListener("click", () => {
        currentSlide = (currentSlide - 1 + testimonialSlides.length) % testimonialSlides.length
        showSlide(currentSlide)
      })
  
      nextBtn.addEventListener("click", () => {
        currentSlide = (currentSlide + 1) % testimonialSlides.length
        showSlide(currentSlide)
      })
    }
  
    if (dots.length > 0) {
      dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
          showSlide(index)
        })
      })
    }
  
    // Counter animation for stats
    const statNumbers = document.querySelectorAll(".stat-number")
  
    function animateCounter(element) {
      const target = Number.parseInt(element.getAttribute("data-count"))
      const duration = 2000
      const step = (target / duration) * 10
      let current = 0
  
      const timer = setInterval(() => {
        current += step
        if (current >= target) {
          element.textContent = target
          clearInterval(timer)
        } else {
          element.textContent = Math.floor(current)
        }
      }, 10)
    }
  
    function checkCounters() {
      statNumbers.forEach((stat) => {
        const statPosition = stat.getBoundingClientRect().top
        if (statPosition < window.innerHeight && !stat.classList.contains("animated")) {
          stat.classList.add("animated")
          animateCounter(stat)
        }
      })
    }
  
    window.addEventListener("scroll", checkCounters)
    checkCounters()
  
    // Form submission
    const contactForm = document.getElementById("appointment-form")
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault()
  
        // Simple form validation
        let isValid = true
        const formInputs = contactForm.querySelectorAll("input, select, textarea")
  
        formInputs.forEach((input) => {
          if (input.hasAttribute("required") && !input.value.trim()) {
            isValid = false
            input.classList.add("error")
          } else {
            input.classList.remove("error")
          }
        })
  
        if (isValid) {
          // In a real application, you would send the form data to a server
          // For this demo, we'll just show a success message
          const formData = new FormData(contactForm)
          const formValues = {}
  
          for (const [key, value] of formData.entries()) {
            formValues[key] = value
          }
  
          // Reset form
          contactForm.reset()
  
          // Show success message (in a real app)
          alert(translations[currentLang]["alert_form_success"])
        }
      })
    }
  
    // Newsletter form
    const newsletterForm = document.querySelector(".newsletter-form")
    if (newsletterForm) {
      newsletterForm.addEventListener("submit", function (e) {
        e.preventDefault()
  
        const emailInput = this.querySelector('input[type="email"]')
        if (emailInput.value.trim()) {
          // In a real application, you would send this to a server
          alert(translations[currentLang]["alert_newsletter"])
          emailInput.value = ""
        }
      })
    }
  
    // Update active nav link based on scroll position
    function updateActiveNavLink() {
      const sections = document.querySelectorAll("section")
      const navLinks = document.querySelectorAll(".nav-links a")
  
      let currentSection = ""
  
      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
  
        if (window.scrollY >= sectionTop - 200) {
          currentSection = section.getAttribute("id")
        }
      })
  
      navLinks.forEach((link) => {
        link.classList.remove("active")
        if (link.getAttribute("href") === `#${currentSection}`) {
          link.classList.add("active")
        }
      })
    }
  
    window.addEventListener("scroll", updateActiveNavLink)
  
    // Initial call to set active nav link
    updateActiveNavLink()
  
    // Initialize language
    updateLanguage(currentLang)
  })
  