<template>
  <div class="contact-page">
    <div class="container">
      <h2>İletişim</h2>
      <div class="contact-content">
        <div class="contact-info">
          <div class="info-card">
            <i class="fas fa-map-marker-alt"></i>
            <h3>Adres</h3>
            <p>Fırat Üniversitesi, Rektörlük Kampüsü<br>23119 Elazığ, Türkiye</p>
          </div>
          <div class="info-card">
            <i class="fas fa-envelope"></i>
            <h3>E-posta</h3>
            <p>info@firatvisionfest.com</p>
          </div>
          <div class="info-card">
            <i class="fas fa-phone"></i>
            <h3>Telefon</h3>
            <p>+90 (424) 237 00 00</p>
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    }
  },
  methods: {
    handleSubmit() {
      // Form gönderme işlemi burada yapılacak
      console.log('Form submitted:', this.form)
      // Form alanlarını temizle
      this.form = {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    }
  }
}
</script>

<style scoped>
.contact-page {
  padding: 80px 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

h2 {
  text-align: center;
  margin-bottom: 60px;
  color: #2F3C4E;
  font-size: 2.5rem;
  font-weight: 700;
  text-transform: uppercase;
  font-family: 'Poppins', sans-serif;
  position: relative;
}

h2::after {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background: linear-gradient(90deg, #822439, #c41e3a);
  border-radius: 3px;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  margin-top: 40px;
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
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid rgba(130, 36, 57, 0.1);
}

.info-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
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
  font-family: 'Poppins', sans-serif;
}

.info-card p {
  color: #2F3C4E;
  font-size: 1.1rem;
  line-height: 1.6;
  font-family: 'Poppins', sans-serif;
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
  color: white;
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

@media (max-width: 768px) {
  .contact-page {
    padding: 60px 0;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 40px;
  }

  .contact-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .contact-info {
    grid-template-columns: 1fr;
  }

  .info-card {
    padding: 20px;
  }

  .info-card i {
    font-size: 2rem;
  }

  .info-card h3 {
    font-size: 1.2rem;
  }

  .info-card p {
    font-size: 1rem;
  }

  .contact-cta {
    padding: 30px;
  }

  .cta-content h2 {
    font-size: 1.5rem;
  }

  .cta-content p {
    font-size: 1rem;
  }

  .cta-button {
    padding: 12px 30px;
    font-size: 1.1rem;
  }
}
</style> 