<template>
  <div id="contact" class="contact-page">
    <div class="container">
      <h1>BİZE ULAŞIN</h1>
      <p class="subtitle">Etkinlik ile ilgili sorularınız için bizimle iletişime geçebilir veya sosyal medya kanallarımızdan bizi takip edebilirsiniz.</p>
      
      <div class="contact-content">
        <div class="contact-grid">
          <div class="contact-info">
            <div class="info-card">
              <i class="fas fa-map-marker-alt"></i>
              <h3>Adres</h3>
              <p>Fırat Üniversitesi<br>
              Rektörlük Binası Yanı KÜLTÜR MERKEZİ<br>
              Elazığ</p>
            </div>

            <div class="info-card">
              <i class="fas fa-envelope"></i>
              <h3>E-posta</h3>
              <p>info@visionfest.com</p>
            </div>

            <div class="info-card">
              <i class="fas fa-phone"></i>
              <h3>Telefon</h3>
              <p>+90 (424) 123 45 67</p>
            </div>
          </div>

          <div class="contact-cta">
            <div class="cta-content">
              <h2>Etkinliğe Katılmak İster misiniz?</h2>
              <p>Hemen başvurun ve geleceğin teknolojilerini keşfetmeye başlayın!</p>
              <a href="https://linktr.ee/hsdfirat" class="cta-button" target="_blank">
                <i class="fas fa-paper-plane"></i>
                <span>BAŞVUR</span>
              </a>
            </div>
          </div>
        </div>

        <div class="social-media">
          <h3>Sosyal Medya Hesaplarımız</h3>
          <div class="social-links">
            <a href="#" class="social-link" target="_blank">
              <i class="fab fa-linkedin"></i>
              <span>LinkedIn</span>
            </a>
            <a href="#" class="social-link" target="_blank">
              <i class="fab fa-instagram"></i>
              <span>Instagram</span>
            </a>
            <a href="#" class="social-link" target="_blank">
              <i class="fab fa-twitter"></i>
              <span>Twitter</span>
            </a>
            <a href="#" class="social-link" target="_blank">
              <i class="fab fa-youtube"></i>
              <span>YouTube</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactPage'
}
</script>

<style scoped>
.contact-page {
  padding: 120px 0 80px;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  overflow: hidden;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.contact-page.active {
  opacity: 1;
  transform: translateY(0);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  color: #2F3C4E;
  font-size: 2.5rem;
  font-weight: 700;
  text-transform: uppercase;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  font-family: 'Poppins', sans-serif;
}

.subtitle {
  text-align: center;
  color: #666;
  font-size: 1.2rem;
  margin-bottom: 60px;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s forwards;
  font-family: 'Poppins', sans-serif;
}

.contact-content {
  max-width: 1200px;
  margin: 0 auto;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s forwards;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 60px;
}

.contact-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.info-card {
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  text-align: center;
  border: 1px solid rgba(130, 36, 57, 0.1);
}

.info-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.info-card i {
  font-size: 2.5rem;
  color: #822439;
  margin-bottom: 20px;
}

.info-card h3 {
  color: #2F3C4E;
  font-size: 1.3rem;
  margin-bottom: 15px;
  font-weight: 600;
}

.info-card p {
  color: #666;
  line-height: 1.6;
  font-size: 1.1rem;
}

.contact-cta {
  background: linear-gradient(135deg, #822439 0%, #c41e3a 100%);
  border-radius: 15px;
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  box-shadow: 0 10px 30px rgba(130, 36, 57, 0.2);
  position: relative;
  overflow: hidden;
}

.contact-cta::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%);
  z-index: 1;
}

.cta-content {
  position: relative;
  z-index: 2;
}

.cta-content h2 {
  font-size: 1.8rem;
  margin-bottom: 20px;
  font-weight: 600;
  text-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.cta-content p {
  font-size: 1.1rem;
  margin-bottom: 30px;
  opacity: 0.9;
  text-shadow: 0 1px 2px rgba(0,0,0,0.1);
}

.cta-button {
  background-color: white;
  color: #822439;
  padding: 15px 40px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  border: 2px solid white;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.cta-button i {
  font-size: 1.2rem;
  transition: transform 0.3s ease;
}

.cta-button:hover {
  background-color: transparent;
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(255, 255, 255, 0.2);
}

.cta-button:hover i {
  transform: translateX(5px);
}

.social-media {
  text-align: center;
  margin-top: 60px;
}

.social-media h3 {
  color: #2F3C4E;
  font-size: 1.8rem;
  margin-bottom: 30px;
  font-weight: 600;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #2F3C4E;
  text-decoration: none;
  padding: 15px 30px;
  border-radius: 30px;
  background: white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.social-link:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.social-link i {
  font-size: 1.5rem;
  color: #822439;
}

.social-link span {
  font-weight: 500;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .contact-page {
    padding: 80px 0 40px;
  }

  .contact-grid {
    grid-template-columns: 1fr;
  }

  .contact-info {
    grid-template-columns: 1fr;
  }

  .social-links {
    flex-direction: column;
    align-items: center;
  }

  .social-link {
    width: 100%;
    max-width: 300px;
    justify-content: center;
  }
}
</style> 