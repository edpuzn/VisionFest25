<template>
  <div class="contact-container">
    <div class="contact-content">
      <div class="contact-info">
        <h2>İletişim</h2>
        <div class="info-item">
          <i class="fas fa-map-marker-alt"></i>
          <div class="info-content">
            <h3>Adres</h3>
            <p>Prof. Dr. Mustafa Temizer Konferans Salonu</p>
          </div>
        </div>
        <div class="info-item">
          <i class="fas fa-envelope"></i>
          <div class="info-content">
            <h3>E-posta</h3>
            <a href="mailto:huaweidevgroup23@gmail.com">huaweidevgroup23@gmail.com</a>
          </div>
        </div>
      </div>
      <div class="map-container">
        <iframe
          src="https://maps.google.com/maps?q=Prof.+Dr.+Mustafa+Temizer+Konferans+Salonu,+Fırat+%C3%9Cniversitesi,+Elaz%C4%B1%C4%9F&output=embed"
          width="100%"
          height="100%"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'Contact'
}
</script>

<style scoped>
.contact-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  width: 100%; /* Tam genişlik kullan */

}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0; /* Boşluk kaldırıldı */
  max-width: 1400px; /* Genişlik artırıldı */
  width: 100%;
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.contact-info {
  padding: 40px;
  background: #822439;
  color: white;
  height: 100%; /* Yüksekliği tam kapla */
  display: flex; /* İçeriği düzenlemek için flex kullanabiliriz */
  flex-direction: column;
  justify-content: center; /* İçeriği dikeyde ortala */
}

.contact-info h2 {
  font-size: 2rem;
  margin-bottom: 30px;
  font-weight: 600;
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 30px;
}

.info-item i {
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.9);
}

.info-content h3 {
  font-size: 1.2rem;
  margin-bottom: 10px;
  font-weight: 500;
}

.info-content p {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 10px;
}

.info-content a {
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
}

.info-content a:hover {
  opacity: 0.8;
}

.map-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  margin-top: 10px;
}

.map-link:hover {
  background: rgba(255, 255, 255, 0.2);
}

.map-container {
  width: 100%;
  height: 100%; /* Yüksekliği tam kapla */
  min-height: 400px; /* Minimum yükseklik */
}

.map-container iframe {
  border-radius: 0 20px 20px 0;
  display: block;
  width: 100%;
  height: 100%;
  min-height: 400px;
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
    gap: 0; /* Mobil görünümde de boşluğu kaldır */
  }

  .contact-info {
    padding: 30px;
    height: auto; /* Mobil görünümde yüksekliği otomatik yap */
  }

  .info-card {
    padding: 20px;
  }

  .map-container {
    min-height: 300px; /* Mobil için minimum yükseklik */
    height: auto; /* Mobil görünümde yüksekliği otomatik yap */
  }

  .map-container iframe {
    border-radius: 0 0 20px 20px; /* Mobil görünümde alt köşeleri yuvarlak yap */
    display: block;
  }
}
</style> 