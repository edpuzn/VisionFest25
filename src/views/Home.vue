<template>
  <div class="home-page">
    <section class="hero">
      <div class="animated-background">
        <div class="gradient-sphere"></div>
        <div class="gradient-sphere"></div>
        <div class="gradient-sphere"></div>
        <canvas id="particleCanvas"></canvas>
      </div>
      <div class="container">
        <h1>FIRAT VISION FEST 2025</h1>
        <p class="date">29 Mayıs 2025 | FIRAT ÜNİVERSİTESİ</p>
        <div class="countdown">
          <div class="countdown-item">
            <span class="number">{{ days }}</span>
            <span class="label">Gün</span>
          </div>
          <div class="countdown-item">
            <span class="number">{{ hours }}</span>
            <span class="label">Saat</span>
          </div>
          <div class="countdown-item">
            <span class="number">{{ minutes }}</span>
            <span class="label">Dakika</span>
          </div>
          <div class="countdown-item">
            <span class="number">{{ seconds }}</span>
            <span class="label">Saniye</span>
          </div>
        </div>
        <div class="cta-section">
          <p class="cta-text">Geleceğin Teknolojilerini Keşfetmeye Hazır mısınız?</p>
          <div class="cta-spacer"></div>
          <div class="cta-row">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfJ7aM9IvqlaWf12JWSjh5Hx-56Lgc81hGjkkAXjIEo0kzjfg/viewform" class="cta-button" target="_blank">ÜYE KAYIT FORMU</a>
            <a href="https://www.instagram.com/hsdfirat/" class="cta-button" target="_blank">INSTAGRAM HESABIMIZ</a> 
            <a href="https://linktr.ee/hsdfirat" class="cta-button" target="_blank">FAYDALI LINKLER</a>
          </div>
        </div>
      </div>
    </section>

    <section class="about-section">
      <div class="container">
        <h2>FIRAT VISION FEST NEDİR?</h2>
        <div class="about-content">
          <div class="about-text">
            <div class="about-card">
              <i class="fas fa-robot"></i>
              <p>Fırat Üniversitesi'nin 50. yılı kapsamında düzenlenen Vision Fest, yalnızca bir kutlama değil; Doğu Anadolu Bölgesi'nin teknoloji ve girişimcilik anlamında sahip olduğu büyük potansiyelin görünür kılınmasına yönelik stratejik bir adımdır. Bu etkinlik, yerel dinamiklerin ulusal ve küresel teknoloji trendleriyle buluştuğu, gençlerin ilham aldığı ve kendine yol çizdiği bir platform olmayı amaçlamaktadır.</p>
            </div>
            <div class="about-card">
              <i class="fas fa-users"></i>
              <p>Bölgemizdeki üniversite öğrencileri, özellikle yazılım ve mühendislik alanlarında büyük bir gelişim isteği içindedir ancak sektörle doğrudan temas edebilecekleri fırsatlar oldukça sınırlıdır. Bu noktada, alanında öncü ve vizyoner isimlerin katılımı, yalnızca bilgi paylaşımı anlamına gelmeyecek; aynı zamanda gençlerin kariyer motivasyonunu, girişimcilik hayallerini ve teknolojik üretkenliklerini tetikleyecektir.</p>
            </div>
            <div class="about-card">
              <i class="fas fa-lightbulb"></i>
              <p>Davet edeceğimiz konuşmacıların bilgi birikimi ve deneyimleri, Fırat Üniversitesi başta olmak üzere bölgedeki tüm gençler için yol gösterici nitelikte olacaktır. Katılımlarıyla, sadece bir etkinliğe değil, aynı zamanda bölgesel bir dönüşüm hareketine katkı sağlamış olacaklardır.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="why-attend">
      <div class="container">
        <h2>Neden Katılmalısınız?</h2>
        <div class="features-grid">
          <div class="feature-card">
            <i class="fas fa-users"></i>
            <h3>Uzman Konuşmacılar</h3>
            <p>Alanında uzman konuşmacılardan yapay zeka teknolojilerinin en son gelişmelerini dinleyin.</p>
          </div>
          <div class="feature-card">
            <i class="fas fa-network-wired"></i>
            <h3>Networking</h3>
            <p>Akademisyenler, sektör temsilcileri ve öğrencilerle tanışma ve işbirliği fırsatı yakalayın.</p>
          </div>
          <div class="feature-card">
            <i class="fas fa-lightbulb"></i>
            <h3>İlham Verici İçerik</h3>
            <p>Yapay zeka alanındaki yenilikçi projeler ve uygulamalar hakkında bilgi edinin.</p>
          </div>
          <div class="feature-card">
            <div class="cert-badge">
              <img src="@/assets/cert.png" alt="Altın Kupa" class="cert-badge-icon" />
            </div>
            <i class="fas fa-file-text"></i>
            <h3>Sertifika Kazanın</h3>
            <p>VisionFEST'25 katılımınızdan ötürü adınıza özel hazırlanmış sertifika kazanma şansını yakalayın.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// eslint-disable-next-line
export default {
  name: 'HomePage',
  data() {
    return {
      eventDate: new Date('2025-05-29T09:30:30'),
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00',
      canvas: null,
      ctx: null,
      particles: [],
      mouse: {
        x: null,
        y: null,
        radius: 150
      }
    }
  },
  mounted() {
    this.updateCountdown()
    setInterval(this.updateCountdown, 1000)
    this.initParticles()
    window.addEventListener('mousemove', this.handleMouseMove)
    window.addEventListener('resize', this.handleResize)
  },
  beforeUnmount() {
    window.removeEventListener('mousemove', this.handleMouseMove)
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    updateCountdown() {
      const now = new Date()
      const diff = this.eventDate - now

      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24))
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((diff % (1000 * 60)) / 1000)

        this.days = days.toString().padStart(2, '0')
        this.hours = hours.toString().padStart(2, '0')
        this.minutes = minutes.toString().padStart(2, '0')
        this.seconds = seconds.toString().padStart(2, '0')
      }
    },
    initParticles() {
      this.canvas = document.getElementById('particleCanvas')
      this.ctx = this.canvas.getContext('2d')
      this.resizeCanvas()
      this.createParticles()
      this.animate()
    },
    resizeCanvas() {
      this.canvas.width = window.innerWidth
      this.canvas.height = window.innerHeight
    },
    createParticles() {
      const numberOfParticles = 100
      for (let i = 0; i < numberOfParticles; i++) {
        this.particles.push({
          x: Math.random() * this.canvas.width,
          y: Math.random() * this.canvas.height,
          size: Math.random() * 2 + 1,
          speedX: Math.random() * 2 - 1,
          speedY: Math.random() * 2 - 1,
          color: `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.1})`
        })
      }
    },
    handleMouseMove(e) {
      this.mouse.x = e.x
      this.mouse.y = e.y
    },
    handleResize() {
      this.resizeCanvas()
    },
    animate() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

      // Update and draw particles
      this.particles.forEach(particle => {
        // Move particles
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Bounce off edges
        if (particle.x < 0 || particle.x > this.canvas.width) particle.speedX *= -1
        if (particle.y < 0 || particle.y > this.canvas.height) particle.speedY *= -1

        // Mouse interaction
        if (this.mouse.x !== null && this.mouse.y !== null) {
          const dx = this.mouse.x - particle.x
          const dy = this.mouse.y - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < this.mouse.radius) {
            const angle = Math.atan2(dy, dx)
            const force = (this.mouse.radius - distance) / this.mouse.radius
            particle.x -= Math.cos(angle) * force * 2
            particle.y -= Math.sin(angle) * force * 2
          }
        }

        // Draw particle
        this.ctx.beginPath()
        this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        this.ctx.fillStyle = particle.color
        this.ctx.fill()
      })

      // Draw connections
      this.particles.forEach((particle, index) => {
        for (let j = index + 1; j < this.particles.length; j++) {
          const dx = particle.x - this.particles[j].x
          const dy = particle.y - this.particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            this.ctx.beginPath()
            this.ctx.strokeStyle = `rgba(255, 255, 255, ${0.2 * (1 - distance / 100)})`
            this.ctx.lineWidth = 0.5
            this.ctx.moveTo(particle.x, particle.y)
            this.ctx.lineTo(this.particles[j].x, this.particles[j].y)
            this.ctx.stroke()
          }
        }
      })

      requestAnimationFrame(this.animate)
    }
  }
}
</script>

<style scoped>
.home-page {
  min-height: 100vh;
 overflow: hidden;
}

.hero {
  position: relative;
  background: #822439;
  color: white;
  text-align: center;
  padding: 200px 0;
  margin-top: -80px;
  overflow: hidden;
}

.animated-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}

.gradient-sphere {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.7;
  animation: float 15s infinite;
}

.gradient-sphere:nth-child(1) {
  width: 700px;
  height: 700px;
  background: radial-gradient(circle, rgba(130, 36, 57, 0.8) 0%, rgba(130, 36, 57, 0.2) 50%, transparent 70%);
  top: -200px;
  left: -100px;
  animation-delay: 0s;
}

.gradient-sphere:nth-child(2) {
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(100, 20, 40, 0.8) 0%, rgba(100, 20, 40, 0.2) 50%, transparent 70%);
  top: 50%;
  right: -100px;
  animation-delay: -5s;
}

.gradient-sphere:nth-child(3) {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(80, 15, 30, 0.8) 0%, rgba(80, 15, 30, 0.2) 50%, transparent 70%);
  bottom: -100px;
  left: 30%;
  animation-delay: -10s;
}

.particles {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image:
      radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.2) 1px, transparent 1px),
      radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.2) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: particleMove 20s linear infinite;
}

.container {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

h1 {
  font-size: 4.5rem;
  font-weight: 800;
  margin-bottom: 15px;
  text-transform: uppercase;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  font-family: 'Poppins', sans-serif;
  color: #FFF;
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
  letter-spacing: 4px;
  position: relative;
  display: inline-block;
}

h1::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 3px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent);
}

.subtitle {
  font-size: 1.6rem;
  margin-bottom: 30px;
  font-weight: 300;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s forwards;
  font-family: 'Poppins', sans-serif;
  color: rgba(255, 255, 255, 0.9);
  letter-spacing: 2px;
  text-transform: uppercase;
}

.date {
  font-size: 1.6rem;
  margin-bottom: 30px;
  font-weight: 300;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s forwards;
  font-family: 'Poppins', sans-serif;
  color: rgba(255, 255, 255, 0.9);
  letter-spacing: 2px;
  text-transform: uppercase;
}

.countdown {
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-bottom: 35px;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s forwards;
}

.countdown-item {
  text-align: center;
  opacity: 0;
  transform: scale(0.8);
  animation: scaleIn 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  position: relative;
  min-width: 100px;
}

.countdown-item .number {
  font-size: 4rem;
  font-weight: 600;
  display: block;
  font-family: 'Poppins', sans-serif;
  color: #fff;
  line-height: 1;
}

.countdown-item .label {
  font-size: 0.9rem;
  text-transform: uppercase;
  font-weight: 400;
  font-family: 'Poppins', sans-serif;
  color: rgb(255, 255, 255);
  letter-spacing: 2px;
  margin-top: 8px;
}

.cta-section {
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cta-text {
  font-size: 1.5rem;
  margin-bottom: 20px;
  font-weight: 300;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) 1s forwards;
  font-family: 'Poppins', sans-serif;
  color: rgba(255, 255, 255, 0.9);
  letter-spacing: 1px;
  position: relative;
  display: inline-block;
}

.cta-spacer {
  height: 60px;
  width: 1px;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), transparent);
  margin: 20px 0;
}

.cta-button {
  background-color: transparent;
  color: white;
  padding: 12px 40px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  display: inline-block;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) 1.2s forwards;
  border: 2px solid rgba(255, 255, 255, 0.8);
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 5px;
}

.cta-button:hover {
  transform: translateY(-3px);
  border-color: white;
  background-color: rgba(255, 255, 255, 0.1);
}

.about-section {
  padding: 100px 0;

  opacity: 1;
  transform: translateY(0);
  position: relative;
  overflow: hidden;
}

.about-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(130, 36, 57, 0.3), transparent);
}

.about-section h2 {
  text-align: center;
  margin-bottom: 60px;
  color: #2F3C4E;
  font-size: 2.5rem;
  font-weight: 700;
  text-transform: uppercase;
  opacity: 1;
  transform: translateY(0);
  font-family: 'Poppins', sans-serif;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
}

.about-section h2::after {
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

.about-content {
  max-width: 1000px;
  margin: 0 auto;
  opacity: 1;
  transform: translateY(0);
}

.about-text {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.about-card {
  background: rgba(255, 255, 255, 0.9);
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(130, 36, 57, 0.1);
}

.about-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
}

.about-card i {
  font-size: 2.5rem;
  color: #822439;
  margin-bottom: 20px;
  display: block;
}

.about-card p {
  margin: 0;
  line-height: 1.8;
  color: #2F3C4E;
  font-size: 1.1rem;
  text-align: justify;
  font-family: 'Poppins', sans-serif;
}

.why-attend {
  padding: 100px 0;
  background-color: #f8f9fa;
  opacity: 1;
  transform: translateY(0);
}

.why-attend h2 {
  text-align: center;
  margin-bottom: 60px;
  color: #2F3C4E;
  font-size: 2.5rem;
  font-weight: 700;
  text-transform: uppercase;
  opacity: 1;
  transform: translateY(0);
  font-family: 'Poppins', sans-serif;
}

.why-attend .features-grid {
  display: flex;
  justify-content: space-between;
  gap: 30px;
  opacity: 1;
  transform: translateY(0);
  max-width: 1200px;
  margin: 0 auto;
}

.why-attend .feature-card {
  flex: 1;
  text-align: center;
  padding: 40px 30px;
  background: rgba(130, 36, 57, 0.05);
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  opacity: 1;
  transform: translateY(0);
  border: 1px solid rgba(130, 36, 57, 0.1);
  backdrop-filter: blur(10px);
}

.why-attend .feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  background: rgba(130, 36, 57, 0.1);
}

.why-attend .feature-card i {
  font-size: 3rem;
  color: #822439;
  margin-bottom: 25px;
}

.why-attend .feature-card h3 {
  color: #2F3C4E;
  font-size: 1.5rem;
  margin-bottom: 15px;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
}

.why-attend .feature-card p {
  color: #2F3C4E;
  opacity: 0.8;
  line-height: 1.8;
  font-size: 1.1rem;
  font-family: 'Poppins', sans-serif;
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

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes float {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  25% {
    transform: translate(50px, 50px) scale(1.1);
  }
  50% {
    transform: translate(0, 100px) scale(1);
  }
  75% {
    transform: translate(-50px, 50px) scale(0.9);
  }
}

@keyframes particleMove {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 50px 50px;
  }
}

#particleCanvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

@media (max-width: 768px) {
  .hero {
    padding: 150px 0;
  }

  .container h1 {
    font-size: 2.5rem;
  }

  .date {
    font-size: 1rem;
  }

  .countdown {
    margin-top: 40px;
  }

  .countdown-item {
    font-size: 1.8rem;
  }

  .countdown-item .label {
    font-size: 0.8rem;
  }

  .cta-text {
    font-size: 1rem;
  }

  .cta-button {
    padding: 10px 25px;
    font-size: 1rem;
  }

  .about-section {
    padding: 60px 0;
  }

  .about-section h2 {
    font-size: 2rem;
  }

  .about-card {
    padding: 30px;
  }

  .about-card i {
    font-size: 2rem;
  }

  .about-card p {
    font-size: 1rem;
  }

  .why-attend {
    padding: 60px 0;
  }

  .why-attend h2 {
    font-size: 2rem;
  }

  .why-attend .features-grid {
    flex-direction: column;
    gap: 20px;
  }

  .countdown {
    gap: 15px;
  }
}

.cert-badge {
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

.cert-badge-icon {
  width: auto;
  height: auto;
  max-width: 80%;
  max-height: 80%;
  object-fit: contain;
  /* transform: scale(0.4); */
}

 @media (max-width: 768px) {
  .cert-badge {
    width: 60px;
    height: 60px;
    top: -30px;
    right: -30px;
  }
}

</style> 