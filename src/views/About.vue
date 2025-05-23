<template>
  <div class="about-page">
    <div class="hero-section">
      <div class="container">
        <h1>FIRAT VISION FEST 2025</h1>
        <p class="subtitle">Doğu Anadolu'nun Teknoloji ve İnovasyon Festivali</p>
      </div>
    </div>

    <div class="content-section">
      <div class="container">
        <div class="mission-vision">
          <div class="mission-card">
            <div class="icon">
              <i class="fas fa-bullseye"></i>
            </div>
            <h2>Misyonumuz</h2>
            <p>Doğu Anadolu Bölgesi'nin teknoloji ve girişimcilik potansiyelini ortaya çıkarmak, genç yetenekleri desteklemek ve bölgesel kalkınmaya katkıda bulunmak için yenilikçi bir platform oluşturmak.</p>
          </div>
          <div class="vision-card">
            <div class="icon">
              <i class="fas fa-eye"></i>
            </div>
            <h2>Vizyonumuz</h2>
            <p>Doğu Anadolu'yu teknoloji ve inovasyonun merkezi haline getirmek, genç girişimcilere ilham vermek ve bölgenin dijital dönüşümüne öncülük etmek.</p>
          </div>
        </div>

        <div class="about-content">
          <div class="about-card">
            <div class="card-header">
              <i class="fas fa-university"></i>
              <h3>Üniversitemiz</h3>
            </div>
            <p>Fırat Üniversitesi'nin 50. yılı kapsamında düzenlenen Vision Fest, yalnızca bir kutlama değil; Doğu Anadolu Bölgesi'nin teknoloji ve girişimcilik anlamında sahip olduğu büyük potansiyelin görünür kılınmasına yönelik stratejik bir adımdır.</p>
          </div>

          <div class="about-card">
            <div class="card-header">
              <i class="fas fa-users"></i>
              <h3>Hedef Kitlemiz</h3>
            </div>
            <p>Bölgemizdeki üniversite öğrencileri, özellikle yazılım ve mühendislik alanlarında büyük bir gelişim isteği içindedir. Bu noktada, alanında öncü ve vizyoner isimlerin katılımı, yalnızca bilgi paylaşımı değil, aynı zamanda gençlerin kariyer motivasyonunu ve girişimcilik hayallerini tetikleyecektir.</p>
          </div>

          <div class="about-card">
            <div class="card-header">
              <i class="fas fa-lightbulb"></i>
              <h3>Etki Alanımız</h3>
            </div>
            <p>Davet edeceğimiz konuşmacıların bilgi birikimi ve deneyimleri, Fırat Üniversitesi başta olmak üzere bölgedeki tüm gençler için yol gösterici nitelikte olacaktır. Katılımlarıyla, sadece bir etkinliğe değil, aynı zamanda bölgesel bir dönüşüm hareketine katkı sağlamış olacaklardır.</p>
          </div>
        </div>

        <div class="stats-section">
          <div class="stat-card">
            <div class="stat-number">8+</div>
            <div class="stat-label">Konuşmacı</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">500+</div>
            <div class="stat-label">Katılımcı</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">7+</div>
            <div class="stat-label">Oturum</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">1</div>
            <div class="stat-label">Gün</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line
export default {
  name: 'AboutPage'
}
</script>

<style scoped>
.about-page {
  padding: 80px 0;

}

.hero-section {
  background: linear-gradient(135deg, #822439 0%, #c41e3a 100%);
  padding: 120px 0 80px;
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('@/assets/logo_sade.png');
  background-size: 300px;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.1;
  animation: float 6s ease-in-out infinite;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 1;
}

h1 {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 20px;
  font-family: 'Poppins', sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.subtitle {
  font-size: 1.5rem;
  opacity: 0.9;
  font-weight: 300;
  font-family: 'Poppins', sans-serif;
}

.content-section {
  padding: 80px 0;
}

.mission-vision {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
}

.mission-card, .vision-card {
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
}

.mission-card:hover, .vision-card:hover {
  transform: translateY(-10px);
}

.icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #822439 0%, #c41e3a 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 30px;
}

.icon i {
  font-size: 2.5rem;
  color: white;
}

.mission-card h2, .vision-card h2 {
  color: #2F3C4E;
  font-size: 2rem;
  margin-bottom: 20px;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
}

.mission-card p, .vision-card p {
  color: #2F3C4E;
  font-size: 1.1rem;
  line-height: 1.6;
  opacity: 0.8;
  font-family: 'Poppins', sans-serif;
}

.about-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
}

.about-card {
  background: white;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.about-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
}

.card-header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.card-header i {
  font-size: 2rem;
  color: #822439;
  margin-right: 15px;
}

.card-header h3 {
  color: #2F3C4E;
  font-size: 1.5rem;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
}

.about-card p {
  color: #2F3C4E;
  font-size: 1.1rem;
  line-height: 1.6;
  opacity: 0.8;
  font-family: 'Poppins', sans-serif;
}

.stats-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  margin-top: 60px;
}

.stat-card {
  background: white;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
}

.stat-number {
  font-size: 3rem;
  font-weight: 700;
  color: #822439;
  margin-bottom: 10px;
  font-family: 'Poppins', sans-serif;
}

.stat-label {
  font-size: 1.2rem;
  color: #2F3C4E;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding: 80px 0 60px;
  }

  h1 {
    font-size: 2.5rem;
  }

  .subtitle {
    font-size: 1.2rem;
  }

  .content-section {
    padding: 60px 0;
  }

  .mission-card, .vision-card {
    padding: 30px;
  }

  .icon {
    width: 60px;
    height: 60px;
  }

  .icon i {
    font-size: 2rem;
  }

  .mission-card h2, .vision-card h2 {
    font-size: 1.8rem;
  }

  .about-card {
    padding: 20px;
  }

  .card-header i {
    font-size: 1.8rem;
  }

  .card-header h3 {
    font-size: 1.3rem;
  }

  .stat-number {
    font-size: 2.5rem;
  }

  .stat-label {
    font-size: 1.1rem;
  }
}
</style> 