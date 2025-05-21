<template>
  <div id="about" class="about-page">
    <div class="container">
      <h1>Hakkımızda</h1>
      
      <div class="about-content">
        <div class="about-text">
          <h2>AI Summit Nedir?</h2>
          <p>AI Summit, yapay zeka teknolojilerinin tüm yönleriyle ele alındığı, alanında uzman konuşmacıların katılımıyla gerçekleşen önemli bir teknoloji zirvesidir. 2025 yılında "Makineler Düşünebilir mi?" temasıyla Atatürk Üniversitesi'nde düzenlenecek olan etkinlik, yapay zeka alanındaki son gelişmeleri, uygulamaları ve etik konuları masaya yatıracak.</p>
          
          <h2>Misyonumuz</h2>
          <p>Yapay zeka teknolojilerinin gelişimine katkı sağlamak, akademi ve endüstri arasında köprü kurmak ve genç yetenekleri bu alanda teşvik etmek.</p>
          
          <h2>Vizyonumuz</h2>
          <p>Türkiye'nin yapay zeka alanındaki potansiyelini ortaya çıkarmak ve uluslararası arenada söz sahibi olmasını sağlamak.</p>

           
        
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage'
}
</script>

<style scoped>
.about-page {
  padding: 80px 0;
  background-color: #f8f9fa;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.about-page.active {
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
  margin-bottom: 40px;
  color: #333;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.about-content {
  max-width: 800px;
  margin: 0 auto;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s forwards;
}

.about-text h2 {
  color: #2F3C4E;
  font-size: 2rem;
  margin-bottom: 20px;
  font-weight: 700;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.about-text p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.value-card {
  text-align: center;
  padding: 30px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  transform: translateY(30px);
}

.about-page.active .value-card:nth-child(1) { animation: fadeInUp 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.4s forwards; }
.about-page.active .value-card:nth-child(2) { animation: fadeInUp 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.6s forwards; }
.about-page.active .value-card:nth-child(3) { animation: fadeInUp 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.8s forwards; }

.value-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 20px rgba(47, 60, 78, 0.1);
}

.value-card i {
  font-size: 2.5rem;
  color: #007bff;
  margin-bottom: 20px;
}

.value-card h3 {
  color: #333;
  margin-bottom: 15px;
}

.value-card p {
  color: #666;
  line-height: 1.6;
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
  .about-page {
    padding: 40px 0;
  }

  .values-grid {
    grid-template-columns: 1fr;
  }
}
</style> 