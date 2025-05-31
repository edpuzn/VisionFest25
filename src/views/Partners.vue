<template>
  <div class="partners-page">
    <div class="container">
      <h2 class="section-title">PAYDAŞLAR</h2>
      <p class="section-subtitle">Teknoloji ve İnovasyonun Güçlü İş Ortakları</p>
      <div class="partners-grid">
        <div class="partner-card">
          <img src="@/assets/GSB.png" alt="gsb" />
          <h3>Gençlik ve Spor Bakanlığı</h3>
          <p>Ana Paydaş</p>
        </div>
        <div class="partner-card">
          <img src="@/assets/UNIDES.png" alt="Dias Curiosity" />
          <h3>ÜNİDES</h3>
          <p>Ana Paydaş</p>
        </div>
        <div class="partner-card">
          <img src="@/assets/firat.png" alt="Fırat Üniversitesi" />
          <h3>Fırat Üniversitesi</h3>
          <p>Ana Paydaş</p>
        </div>
        <div class="partner-card">
          <img src="@/assets/huawei.png" alt="Huawei" />
          <h3>Huawei</h3>
          <p>Ana Paydaş</p>
        </div>
        <div class="partner-card">
          <img src="@/assets/HSD.png" alt="HSD Fırat" />
          <h3>Huawei Student Developers Fırat</h3>
          <p>Organizatör</p>
        </div>
        <div class="partner-card">
          <img src="@/assets/dogus.png" alt="Doğuş" />
          <h3>Doğuş Group</h3>
          <p>Platin Paydaş</p>
        </div>
        <div class="partner-card">
          <img src="@/assets/dias.png" alt="Dias Curiosity" />
          <h3>Dias Curiosity</h3>
          <p>Platin Paydaş</p>
        </div>
        <div class="partner-card">
          <img src="@/assets/curiosity-logo.jpeg" alt="Curiosity" />
          <h3>Curiosity Technology</h3>
          <p>Platin Paydaş</p>
        </div>
        <div class="partner-card">
          <img src="@/assets/turk-telekom.png" alt="Türk Telekom" />
          <h3>Türk Telekom</h3>
          <p>Platin Paydaş</p>
        </div>
        <div class="partner-card">
          <img src="@/assets/TURKCELL.png" alt="Turkcell" />
          <h3>Turkcell</h3>
          <p>Platin Paydaş</p>
        </div>
      </div>

      <h2 class="section-title supporters-title">DESTEKÇİLERİMİZ</h2>
      <p class="section-subtitle">Etkinliğimize Katkı Sağlayan Değerli Destekçilerimiz</p>
      <div class="partners-grid supporters-grid">
        <div class="cajun-card">
          <div class="special-badge">
            <img src="@/assets/kupa.png" alt="Altın Kupa" class="badge-icon" />
          </div>
          <img src="@/assets/cajun.png" alt="cajun" />
          <h3>Cajun Corner</h3>
          <p>Ana Sponsor</p>
        </div>
        <div class="partner-card">
          <img src="@/assets/Luuq.png" alt="LUUQ" />
          <h3>Luuq</h3>
          <p>Catering Sponsorluğu</p>
        </div>
        <div class="partner-card">
          <img src="@/assets/kafayıf.png" alt="Kadayıf" />
          <h3>Kadayıfçı Murat Usta</h3>
          <p>Tatlı Sponsorluğu</p>
        </div>
        <div class="partner-card">
          <img src="@/assets/Luna.jpg" alt="luna" />
          <h3>Luna Makarna</h3>
          <p>Catering Sponsorluğu</p>
        </div>
        <div class="partner-card">
          <img src="@/assets/Mualla.jpg" alt="Mualla" />
          <h3>Mualla Tatlı</h3>
          <p>Catering Sponsorluğu</p>
        </div>
        <div class="partner-card">
          <img src="@/assets/Pizza.jpg" alt="Pizza" />
          <h3>L'italiano Pizza</h3>
          <p>Catering Sponsorluğu</p>
        </div>
        <div class="partner-card">
          <img src="@/assets/Cınar.jpg" alt="Çınar" />
          <h3>Tarihi Ulu Çınar Restorant</h3>
          <p>Catering Sponsorluğu</p>
        </div>
        <div class="partner-card">
          <img src="@/assets/Akgun.png" alt="Akgün" />
          <h3>Akgün Otel</h3>
          <p>Konaklama Desteği</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line
export default {
  name: 'PartnersPage'
}
</script>

<style scoped>
.partners-page {
  padding: 80px 0;
  /* background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); Arka plan kaldırıldı */
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

h2 {
  text-align: center;
  color: #2F3C4E;
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  font-family: 'Poppins', sans-serif;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
  letter-spacing: 1px;
  background: linear-gradient(135deg, #2F3C4E 0%, #822439 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

h2::after {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: #822439;
  border-radius: 3px;
}

.section-subtitle {
  text-align: center;
  color: #2F3C4E;
  font-size: 1.2rem;
  margin-bottom: 60px;
  opacity: 0.8;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  letter-spacing: 0.5px;
  margin-top: 30px;
}

.partners-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  margin-top: 40px;
}

.partner-card {
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid rgba(130, 36, 57, 0.1);
}

.partner-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.partner-card img {
  width: 150px;
  height: 150px;
  object-fit: contain;
  margin-bottom: 20px;
  transition: all 0.3s ease;
}

.partner-card:hover img {
  transform: scale(1.05);
}

.partner-card h3 {
  color: #2F3C4E;
  font-size: 1.5rem;
  margin-bottom: 10px;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
}

.partner-card p {
  color: #822439;
  font-size: 1.1rem;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
}

.supporters-title {
  margin-top: 80px;
}

.supporters-grid {
  margin-top: 40px;
}

.supporters-grid .partner-card {
  background: linear-gradient(135deg, #fff 0%, #f8f9fa 100%);
}

.supporters-grid .partner-card:hover {
  background: linear-gradient(135deg, #fff 0%, #f0f2f5 100%);
}

.cajun-card {
  background-color: #fdf2f4;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: all 0.3s ease;
  border: 3px solid #D4AF37;
  position: relative;
  transform: scale(1.05);
  z-index: 1;
}

.cajun-card:hover {
  transform: scale(1.08);
  box-shadow: 0 20px 50px rgba(212, 175, 55, 0.3);
  background-color: #fce8ec;
  border: 3px solid #FFD700;
}

.cajun-card img {
  width: 150px;
  height: 150px;
  object-fit: contain;
  margin-bottom: 20px;
  transition: all 0.3s ease;
  transform: scale(1.1);
}

.cajun-card:hover img {
  transform: scale(1.15);
}

.cajun-card h3 {
  color: #822439;
  font-size: 1.7rem;
  margin-bottom: 10px;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
}

.cajun-card p {
  color: #822439;
  font-size: 1.2rem;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
}

.special-badge {
  position: absolute;
  top: -45px;
  right: -45px;
  /* background: linear-gradient(135deg, #D4AF37 0%, #FFD700 100%); */
  padding: 0;
  border-radius: 50%;
  box-shadow: none;
  z-index: 2;
  border: none;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.badge-icon {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  /* transform: scale(0.4); */
}

@media (max-width: 768px) {
  .partners-page {
    padding: 60px 0;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 40px;
  }

  .partners-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .partner-card {
    padding: 20px;
  }

  .partner-card img {
    width: 120px;
    height: 120px;
  }

  .partner-card h3 {
    font-size: 1.3rem;
  }

  .partner-card p {
    font-size: 1rem;
  }

  .supporters-title {
    margin-top: 60px;
  }

  .special-badge {
    width: 60px;
    height: 60px;
    top: -30px;
    right: -30px;
  }
}
</style> 