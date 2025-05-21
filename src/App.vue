<template>
  <div class="app">
    <nav class="navbar" :class="{ scrolled: isScrolled }">
      <div class="container">
        <div class="logo">
          <router-link :to="{ path: '/', hash: 'home' }">
            <img :src="isScrolled ? require('@/assets/logo_sade.png') : require('@/assets/logo.png')" alt="Vision Fest Logo" />
          </router-link>
        </div>
        <div class="nav-links" :class="{ active: isMobileMenuOpen }">
          <a href="#home" class="nav-link">Ana Sayfa</a>
          <a href="#about" class="nav-link">Hakkımızda</a>
          <a href="#speakers" class="nav-link">Konuşmacılar</a>
          <a href="#partners" class="nav-link">Paydaşlar</a>
          <a href="#contact" class="nav-link">İletişim</a>
        </div>
        <div class="mobile-menu-btn" :class="{ active: isMobileMenuOpen }" @click="toggleMobileMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>

    <Home />
    <About />
    <Speakers />
    <Partners />
    <Contact />

    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-logo">
            <img src="@/assets/logo_sade.png" alt="Vision Fest Logo" />
          </div>
          <div class="footer-links">
            <h3>Hızlı Bağlantılar</h3>
            <div class="links-container">
              <router-link :to="{ path: '/', hash: 'home' }">Ana Sayfa</router-link>
              <router-link :to="{ path: '/', hash: 'about' }">Hakkımızda</router-link>
              <router-link :to="{ path: '/', hash: 'speakers' }">Konuşmacılar</router-link>
              <router-link :to="{ path: '/', hash: 'partners' }">Paydaşlar</router-link>
              <router-link :to="{ path: '/', hash: 'contact' }">İletişim</router-link>
            </div>
          </div>
          <div class="footer-cta">
            <div class="developer-info">
              <div class="developer-image-container">
                <img src="@/assets/Edip_Uzan.png" alt="Edip Uzan" class="developer-image" />
              </div>
              <div class="developer-details">
                <div class="developer-title">Developer</div>
                <h3>Edip UZAN</h3>
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
      isMobileMenuOpen: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('scroll', this.handleSectionVisibility)

    // URL'deki hash'e göre ilgili bölüme kaydır
    const hash = window.location.hash.replace('#', '')
    if (hash) {
      const target = document.getElementById(hash)
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth' })
          this.currentSection = hash
          target.classList.add('active')
        }, 100)
      }
    } else {
      // Hash yoksa home bölümünü aktif et
      const homeSection = document.getElementById('home')
      if (homeSection) {
        homeSection.classList.add('active')
        this.currentSection = 'home'
      }
    }

    // Smooth scroll için link tıklamalarını dinle
    document.querySelectorAll('.nav-links a, .footer-links a').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault()
        const targetId = link.getAttribute('href').replace('#', '')
        const target = document.getElementById(targetId)
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' })
          // Mobil menüyü kapat
          this.isMobileMenuOpen = false
        }
      })
    })
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('scroll', this.handleSectionVisibility)
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50
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
            // Aktif linki güncelle
            document.querySelectorAll('.nav-link').forEach(link => {
              if (link.getAttribute('href') === `#${section}`) {
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
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

html {
  scroll-behavior: smooth;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
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
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  padding: 20px 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.navbar.scrolled {
  background: rgba(130, 36, 57, 0.95);
  padding: 15px 0;
}

.navbar.scrolled .nav-links a {
  color: white;
}

.navbar.scrolled .nav-links a:hover {
  color: rgba(255, 255, 255, 0.8);
}

.navbar.scrolled .nav-links a::after {
  background-color: white;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.navbar .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  z-index: 1001;
}

.logo img {
  height: 50px;
  transition: all 0.3s ease;
}

.navbar.scrolled .logo img {
  height: 55px;
}

.nav-links {
  display: flex;
  gap: 30px;
}

.nav-link {
  color: #2F3C4E;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  padding: 5px 0;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #822439;
  transition: width 0.3s ease;
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}

.nav-link:hover,
.nav-link.active {
  color: #822439;
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
  background-color: #2F3C4E;
  transition: all 0.3s ease;
}

.navbar.scrolled .mobile-menu-btn span {
  background-color: white;
}

@media (max-width: 768px) {
  .navbar {
    padding: 15px 0;
  }

  .logo img {
    height: 40px;
  }

  .nav-links {
    position: fixed;
    top: 0;
    right: -100%;
    width: 100%;
    height: 100vh;
    background: rgba(130, 36, 57, 0.95);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1000;
  }

  .nav-links.active {
    right: 0;
  }

  .nav-link {
    color: white;
    font-size: 1.3rem;
    margin: 15px 0;
  }

  .nav-link::after {
    background-color: white;
  }

  .mobile-menu-btn {
    display: flex;
  }

  .mobile-menu-btn.active span:nth-child(1) {
    transform: translateY(9px) rotate(45deg);
  }

  .mobile-menu-btn.active span:nth-child(2) {
    opacity: 0;
  }

  .mobile-menu-btn.active span:nth-child(3) {
    transform: translateY(-9px) rotate(-45deg);
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
}

.developer-title {
  color: #822439;
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  opacity: 0.8;
}

.developer-details h3 {
  color: white;
  font-size: 0.95rem;
  margin: 0;
  font-weight: 600;
  letter-spacing: 0.5px;
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
</style>
