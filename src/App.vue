<template>
<div class="app">
<div class="page-transition" v-if="isLoading">
  <div class="loader">
    <img src="@/assets/logo_sade.png" alt="FıratVision Fest Logo" class="logo-animation">
    <div class="loading-text">FIRAT VISION FEST 2025</div>
    <div class="loading-subtitle">BUGÜNÜN VİZYONU, YARININ TEKNOLOJİSİ</div>
  </div>
</div>
<div v-else>
  <nav class="navbar" :class="{ 'scrolled': isScrolled }">
    <div class="container">
      <div class="logo">
        <a href="#home" @click.prevent="scrollToSection('home')">
          <img :src="isScrolled ? require('@/assets/logo.png') : require('@/assets/logo_sade.png')" alt="Vision Fest Logo" />
        </a>
      </div>
      <div class="nav-links" :class="{ active: isMobileMenuOpen }">
        <a href="#home" class="nav-link" @click.prevent="scrollToSection('home')" :class="{ active: currentSection === 'home' }">Ana Sayfa</a>
        <a href="#about" class="nav-link" @click.prevent="scrollToSection('about')" :class="{ active: currentSection === 'about' }">Hakkımızda</a>
        <a href="#speakers" class="nav-link" @click.prevent="scrollToSection('speakers')" :class="{ active: currentSection === 'speakers' }">Konuşmacılar</a>
        <a href="#partners" class="nav-link" @click.prevent="scrollToSection('partners')" :class="{ active: currentSection === 'partners' }">Paydaşlar</a>
        <a href="#contact" class="nav-link" @click.prevent="scrollToSection('contact')" :class="{ active: currentSection === 'contact' }">İletişim</a>
      </div>
      <div class="mobile-menu-btn" :class="{ active: isMobileMenuOpen }" @click="toggleMobileMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </nav>

  <main class="main-content">
    <section id="home" class="page-section">
      <Home />
    </section>
    <section id="about" class="page-section">
      <About />
    </section>
    <section id="speakers" class="page-section">
      <Speakers />
    </section>
    <section id="partners" class="page-section">
      <Partners />
    </section>
    <section id="contact" class="page-section">
      <Contact />
    </section>
  </main>

  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-logo">
          <img src="@/assets/logo_sade.png" alt="Vision Fest Logo" />
        </div>
        <div class="footer-links">
          <h3>Hızlı Bağlantılar</h3>
          <div class="links-container">
            <a href="#home" class="nav-link" @click.prevent="scrollToSection('home')" :class="{ active: currentSection === 'home' }">Ana Sayfa</a>
            <a href="#about" class="nav-link" @click.prevent="scrollToSection('about')" :class="{ active: currentSection === 'about' }">Hakkımızda</a>
            <a href="#speakers" class="nav-link" @click.prevent="scrollToSection('speakers')" :class="{ active: currentSection === 'speakers' }">Konuşmacılar</a>
            <a href="#partners" class="nav-link" @click.prevent="scrollToSection('partners')" :class="{ active: currentSection === 'partners' }">Paydaşlar</a>
            <a href="#contact" class="nav-link" @click.prevent="scrollToSection('contact')" :class="{ active: currentSection === 'contact' }">İletişim</a>
          </div>
        </div>
        <div class="footer-cta">
          <div class="developer-info">
            <div class="developer-image-container">
              <img src="@/assets/Edip_Uzan.png" alt="Edip Uzan" class="developer-image" />
            </div>
            <div class="developer-details">
              <div class="developer-title">Developer</div>
              <a href="https://www.linkedin.com/in/edipuzan/" target="_blank" class="developer-name">
                <h3>Edip UZAN</h3>
              </a>
              <div class="developer-role">HSD Fırat Sosyal Medya Komitesi</div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2025 Vision Fest. Tüm hakları saklıdır.</p>
      </div>
    </div>
  </footer>
</div>
</div>
</template>

<script>
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Speakers from '@/views/Speakers.vue'
import Partners from '@/views/Partners.vue'
import Contact from '@/views/Contact.vue'

export default {
  name: 'App',
  components: {
    Home,
    About,
    Speakers,
    Partners,
    Contact
  },
  data() {
    return {
      isScrolled: false,
      currentSection: 'home',
      isMobileMenuOpen: false,
      isLoading: true
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('scroll', this.handleSectionVisibility)

    document.querySelectorAll('.nav-links a, .footer-links a').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault()
        const targetId = link.getAttribute('href').replace('#', '')
        this.scrollToSection(targetId)
      })
    })

    // Sayfa tam yüklendikten sonra #home'a scroll et
    setTimeout(() => {
      this.isLoading = false

      this.$nextTick(() => {
        this.scrollToSection('home')
      })
    }, 2000)
  },

  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('scroll', this.handleSectionVisibility)
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50
    },
    scrollToSection(sectionId) {
      const target = document.getElementById(sectionId)
      if (target) {
        // Tüm bölümlerin active class'ını kaldır
        document.querySelectorAll('.page-section').forEach(el => {
          el.classList.remove('active')
        })
        // Tüm linklerin active class'ını kaldır
        document.querySelectorAll('.nav-link').forEach(link => {
          link.classList.remove('active')
        })
        // Hedef bölümü ve linki aktif et
        target.classList.add('active')
        const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`)
        if (activeLink) {
          activeLink.classList.add('active')
        }
        this.currentSection = sectionId
        // Scroll işlemi
        const navbarHeight = document.querySelector('.navbar').offsetHeight
        const targetPosition = target.offsetTop - navbarHeight
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        })
        // Mobil menüyü kapat
        this.isMobileMenuOpen = false
      }
    },
    handleSectionVisibility() {
      const sections = ['home', 'about', 'speakers', 'partners', 'contact']
      const scrollPosition = window.scrollY + window.innerHeight / 2

      sections.forEach(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          const elementTop = rect.top + window.scrollY
          const elementBottom = elementTop + rect.height

          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            this.currentSection = section
            element.classList.add('active')
            document.querySelectorAll('.nav-link').forEach(link => {
              const linkHref = link.getAttribute('href').replace('#', '')
              if (linkHref === section) {
                link.classList.add('active')
              } else {
                link.classList.remove('active')
              }
            })
          }
        }
      })
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f8f9fa;
}

.page-transition {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: linear-gradient(135deg, #822439 0%, #c41e3a 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  animation: fadeOut 0.5s ease-in-out 2s forwards;
}

.loader {
  text-align: center;
}

.logo-animation {
  width: 200px;
  height: auto;
  animation: logoFloat 2s ease-in-out infinite;
}

.loading-text {
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 20px;
  letter-spacing: 2px;
  opacity: 0;
  animation: textFadeIn 0.5s ease-in-out 0.5s forwards;
}

.loading-subtitle {
  color: white;
  font-size: 1.3rem;
  font-weight: 600;
  margin-top: 15px;
  letter-spacing: 2px;
  opacity: 0;
  animation: textFadeIn 0.5s ease-in-out 0.5s forwards;
}

@keyframes logoFloat {
  0% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-20px) scale(1.1);
  }
  100% {
    transform: translateY(0) scale(1);
  }
}

@keyframes textFadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    visibility: hidden;
  }
}

html {
  scroll-behavior: smooth;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Sayfa Geçiş Animasyonları */
#home, #about, #speakers, #partners, #contact {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

#home.active, #about.active, #speakers.active, #partners.active, #contact.active {
  opacity: 1;
  transform: translateY(0);
}

/* Navbar Animasyonları */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background: transparent;
  transition: all 0.3s ease;
  padding: 10px 0; /* Navbar üst/alt boşluğu */
}

.navbar.scrolled {
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 5px 0; /* Scroll olunca daha az boşluk */
}

.navbar .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  /* height kaldırıldı, içerik belirleyecek */
}

.logo {
  display: flex;
  align-items: center;
}

.logo img {
  height: 100px; /* Logo boyutu 100px */
  transition: all 0.3s ease;
}

.nav-links {
  display: flex;
  gap: 20px; /* Menü öğeleri arası boşluk */
  align-items: center;
  /* height kaldırıldı */
}

.nav-link {
  color: #2F3C4E;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem; /* Yazı boyutu */
  transition: all 0.3s ease;
  position: relative;
  padding: 5px 0; /* Menü öğeleri üst/alt boşluğu */
}

.navbar .nav-link {
  color: white;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: #822439;
  transition: width 0.3s ease;
}

.navbar.scrolled .nav-link::after {
  background: #822439;
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}

.navbar.scrolled .router-link-active {
  color: white !important;
}

.mobile-menu-btn {
  display: none;
  flex-direction: column;
  gap: 6px;
  cursor: pointer;
  z-index: 1001;
}

.mobile-menu-btn span {
  display: block;
  width: 30px;
  height: 3px;
  background: #2F3C4E;
  transition: all 0.3s ease;
}

.navbar.scrolled .mobile-menu-btn span {
  background: #ffffff;
}

.main-content {
  padding-top: 120px; /* Navbar yüksekliğine göre ayarlandı (Logo 100 + Padding 10*2) */
}

.page-section {
  min-height: 100vh;
  padding: 5px 0;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.page-section.active {
  opacity: 1;
  transform: translateY(0);
}

#home {
  padding-top: 0;
  margin-top: -120px; /* Navbar yüksekliği kadar negatif margin */
}

#contact {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Mobil Görünüm Ayarlamaları */
@media (max-width: 768px) {
  .mobile-menu-btn {
    margin-right: 25px;
    display: flex;
  }

  .nav-links {
    position: fixed;
    top: 0;
    right: -100%;
    width: 100%;
    height: 100vh;
    background: rgba(130, 36, 57, 0.98);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    transition: right 0.3s ease;
    z-index: 1000;
  }

  .nav-links.active {
    right: 0;
  }

  .nav-links.active ~ .mobile-menu-btn span {
    background: #ffffff !important;
  }

  .nav-link {
    color: white !important;
    font-size: 1.3rem;
  }

  .navbar.scrolled .nav-link {
    color: white !important;
  }

  .nav-link::after {
    background: white !important;
  }

  .mobile-menu-btn span {
    background: #ffffff;
  }

  .navbar.scrolled .mobile-menu-btn span {
    background: rgba(130, 36, 57, 0.95);
  }

  .mobile-menu-btn.active span:nth-child(1) {
    transform: rotate(45deg) translate(8px, 8px);
  }

  .mobile-menu-btn.active span:nth-child(2) {
    opacity: 0;
  }

  .mobile-menu-btn.active span:nth-child(3) {
    transform: rotate(-45deg) translate(7px, -7px);
  }

  .navbar {
      /* Mobil navbar padding ve background */
      padding: 20px 0;
      background: transparent; /* Mobil görünümde başlangıçta şeffaf */
  }

  .main-content {
    padding-top: 0; /* Mobil görünümde main-content padding-top kaldırıldı */
  }

  #home {
    margin-top: 0; /* Mobil görünümde margin-top sıfırla */
    padding-top: 140px; /* Mobil navbar yüksekliğine göre üst boşluk eklendi */
  }
}

.footer {
  background: #1a1a1a;
  color: white;
  padding: 60px 0 20px;
  position: relative;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-bottom: 40px;
  align-items: center;
}

.footer-logo {
  grid-column: 1;
  justify-self: center;
}

.footer-logo img {
  height: 80px;
  transition: all 0.3s ease;
}

.footer-logo img:hover {
  transform: scale(1.05);
  opacity: 0.9;
}

.footer-links {
  grid-column: 2;
  justify-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.footer-links h3 {
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  letter-spacing: 0.5px;
}

.links-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
}

.footer-links a {
  color: #ccc;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  padding: 5px 0;
  position: relative;
}

.footer-links a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background-color: #822439;
  transition: width 0.3s ease;
}

.footer-links a:hover {
  color: white;
  transform: translateX(5px);
}

.footer-links a:hover::after {
  width: 100%;
}

.footer-cta {
  grid-column: 3;
  justify-self: center;
  text-align: center;
  width: fit-content;
  margin: 0;
  padding: 0;
}

.developer-info {
  display: flex;
  align-items: center;
  gap: 20px;
  text-align: left;
  padding: 0;
  transition: all 0.3s ease;
}

.developer-image-container {
  flex-shrink: 0;
  margin-right: 5px;
}

.developer-image {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  object-position: center 80%;
  object-fit: cover;
  transform: scale(1.5);
}

.developer-image:hover {
  transform: scale(1.6);
  border-color: rgba(255, 255, 255, 0.2);
}

.developer-details {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-left: 5px;
  position: relative;
}

.developer-title {
  color: #822439;
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  opacity: 0.8;
}

.developer-name {
  text-decoration: none;
  transition: all 0.3s ease;
}

.developer-name:hover h3 {
  color: #0077b5;
}

.developer-name h3 {
  color: white;
  font-size: 0.95rem;
  margin: 0;
  font-weight: 600;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
}

.developer-role {
  color: #822439;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  opacity: 0.9;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .footer-logo, .footer-links, .footer-cta {
    grid-column: 1;
  }

  .developer-info {
    flex-direction: column;
    text-align: center;
    gap: 12px;
  }

  .developer-details {
    align-items: center;
  }

  .developer-image {
    width: 55px;
    height: 55px;
  }

  .footer-links {
    gap: 12px;
  }

  .links-container {
    gap: 8px;
  }

  .footer-links a {
    font-size: 0.85rem;
  }
}

.footer-bottom {
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer-bottom p {
  color: #888;
  font-size: 0.8rem;
  text-align: center;
  width: 100%;
}

/* Router Link Styles */
.router-link-active {
  color: #822439 !important;
}

.router-link-active::after {
  width: 100% !important;
}

.nav-link {
  color: #2F3C4E;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  position: relative;
}

.navbar.scrolled .nav-link {
  color: #822439;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: #822439;
  transition: width 0.3s ease;
}

.navbar.scrolled .nav-link::after {
  background: #822439;
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}

.navbar.scrolled .router-link-active {
  color: white !important;
}

.main-content {
  padding-top: 120px; /* Navbar yüksekliğine göre ayarlandı (Logo 100 + Padding 10*2) */
}

.page-section {
  min-height: 100vh;
  padding: 5px 0;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.page-section.active {
  opacity: 1;
  transform: translateY(0);
}

#home {
  padding-top: 0;
  margin-top: -120px; /* Navbar yüksekliği kadar negatif margin */
}

#contact {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>