<template>
  <div class="speakers-page">
    <div class="container">
      <h1>UZMAN KONUŞMACILARIMIZ</h1>
      <p class="subtitle">FıratVision Fest 2025'te, teknoloji ve girişimcilik dünyasının önde gelen isimleri sizlerle buluşuyor.</p>
      
      <div class="speakers-grid">
        <div v-for="(speaker, index) in speakers" :key="index" class="speaker-card">
          <div class="speaker-image">
            <img :src="speaker.image" :alt="speaker.name" />
            <div class="speaker-overlay">
              <div class="social-links">
                <a v-if="speaker.linkedin" :href="speaker.linkedin" target="_blank" class="social-link">
                  <i class="fab fa-linkedin"></i>
                </a>
                <a v-if="speaker.twitter" :href="speaker.twitter" target="_blank" class="social-link">
                  <i class="fab fa-twitter"></i>
                </a>
                <a v-if="speaker.github" :href="speaker.github" target="_blank" class="social-link">
                  <i class="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="speaker-info">
            <h3>{{ speaker.name }}</h3>
            <p class="title">{{ speaker.title }}</p>
            <div class="tags">
              <span v-for="(tag, tagIndex) in speaker.tags" :key="tagIndex" class="tag">
                {{ tag }}
              </span>
            </div>
            <p v-for="(paragraph, pIndex) in speaker.bio" :key="pIndex" class="bio">{{ paragraph }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SpeakersPage',
  data() {
    return {
      speakers: [
        {
          name: 'Ahmet ŞEKER',
          title: 'Bilişim Uzmanı ve Akademisyen',
          image: require('@/assets/Ahmet_Şeker.jpeg'),
          tags: ['Yapay Zeka', 'Akademi', 'Bilişim'],
          bio: [
            'Gazi Üniversitesi\'nde yapay zeka üzerine yüksek lisans yapmış, şu anda doktora çalışmalarına büyük dil modelleri ve blokzincir üzerine devam etmektedir. Ankara Üniversitesi ve Hacı Bayram Veli Üniversitesi\'nde dersler vermektedir.'
          ],
          linkedin: 'https://linkedin.com/in/ahmetseker',
          twitter: 'https://twitter.com/ahmetseker'
        },
        {
          name: 'Burak AYTAN',
          title: 'Endüstri Mühendisi, TOFAŞ',
          image: require('@/assets/Burak_Aytan.jpeg'),
          tags: ['Endüstri', 'Mühendislik', 'Kalite'],
          bio: [
            'İstanbul Teknik Üniversitesi Endüstri Mühendisliği Bölümü mezunu olup, aynı üniversitede Yönetim Mühendisliği alanında yüksek lisans yapmıştır. TOFAŞ\'ta Kalite Metot ve Planlama Yöneticisi olarak görev yapmaktadır.'
          ],
          linkedin: 'https://linkedin.com/in/burakaytan',
          twitter: 'https://twitter.com/burakaytan'
        },
        {
          name: 'Can GÖYMEN',
          title: 'Artiwise CEO',
          image: require('@/assets/Can_Goymen.jpeg'),
          tags: ['Girişimcilik', 'Yazılım', 'İnovasyon'],
          bio: [
            'Yıldız Teknik Üniversitesi Matematik Mühendisliği mezunu olup, Doğuş Üniversitesi\'nde MBA yapmıştır. Toyota ve Turkcell Global Bilgi\'de deneyim kazanmış, yapay zeka ve doğal dil işleme teknolojileriyle müşteri deneyimini iyileştiren Artiwise\'ı kurmuştur.'
          ],
          linkedin: 'https://linkedin.com/in/cangoymen',
          twitter: 'https://twitter.com/cangoymen'
        },
        {
          name: 'Kaan YENİYOL',
          title: 'Teknoloji ve İnovasyon Lideri',
          image: require('@/assets/Kaan_Yeniyol.jpeg'),
          tags: ['Teknoloji', 'İnovasyon', 'Strateji'],
          bio: [
            'Doğu Akdeniz Üniversitesi Bilgisayar Mühendisliği mezunu olup, teknoloji ve inovasyon dünyasında stratejik danışmanlık hizmetleriyle öne çıkan bir liderdir. Alzmir Hub ve BSP Group ile yapay zeka stratejileri ve dijital dönüşüm projelerinde çalışmaktadır.'
          ],
          linkedin: 'https://linkedin.com/in/kaanyeniyol',
          twitter: 'https://twitter.com/kaanyeniyol'
        },
        {
          name: 'Kübra BİLGİC',
          title: 'Teknoloji Danışmanı, eski Microsoft Yöneticisi',
          image: require('@/assets/Kubra_Bilgic.jpeg'),
          tags: ['Teknoloji', 'Danışmanlık', 'Microsoft'],
          bio: [
            'ODTÜ Elektronik Mühendisliği mezunu olup, 30 yıllık bilgi teknolojileri kariyerinin 20 yılını yurt dışında geçirmiştir. Microsoft\'ta Suudi Arabistan Batı Bölgesi Projeler Koordinatörlüğü yapmış, şu anda teknoloji danışmanlığı hizmeti vermektedir.'
          ],
          linkedin: 'https://linkedin.com/in/kubrabilgic',
          twitter: 'https://twitter.com/kubrabilgic'
        },
        {
          name: 'Murat ÇELİK',
          title: 'Monster Notebook ve Semruk Games Kurucusu',
          image: require('@/assets/Murat_Celik.jpeg'),
          tags: ['Girişimcilik', 'Oyun', 'Teknoloji'],
          bio: [
            'Marmara Üniversitesi mezunu olup, 2000 yılında Fokus Bilgisayar\'ı kurmuştur. Monster Notebook markasıyla Türkiye\'de oyun bilgisayarı pazarında ilk 3 sırada yer alan şirketin kurucusudur. Semruk Games ile sosyal farkındalık projeleri geliştirmektedir.'
          ],
          linkedin: 'https://linkedin.com/in/muratcelik',
          twitter: 'https://twitter.com/muratcelik'
        },
        {
          name: 'Sertay KABUK',
          title: 'Mecostech Kurucusu, VR/AR Teknolojileri Uzmanı',
          image: require('@/assets/Sertay_Kabuk.jpeg'),
          tags: ['VR/AR', 'Teknoloji', 'Girişimcilik'],
          bio: [
            'Uludağ Üniversitesi mezunu bir teknoloji girişimcisidir. Mecostech firması bünyesinde VR, AR ve XR tabanlı havacılık, lojistik ve sağlık teknolojileri alanında projeler geliştirmekte, yapay zekâ destekli yazılım çözümleri sunmaktadır.'
          ],
          linkedin: 'https://linkedin.com/in/sertaykabuk',
          twitter: 'https://twitter.com/sertaykabuk'
        }
      ]
    }
  }
}
</script>

<style scoped>
.speakers-page {
  padding: 120px 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

h1 {
  text-align: center;
  color: #2F3C4E;
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 20px;
  font-family: 'Poppins', sans-serif;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
}

h1::after {
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

.subtitle {
  text-align: center;
  color: #2F3C4E;
  font-size: 1.2rem;
  margin-bottom: 60px;
  opacity: 0.8;
  font-family: 'Poppins', sans-serif;
}

.speakers-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  margin-top: 40px;
}

.speaker-card {
  display: flex;
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;
  height: 300px;
}

.speaker-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.speaker-image {
  flex: 0 0 300px;
  height: 100%;
  overflow: hidden;
  position: relative;
}

.speaker-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.speaker-card:hover .speaker-image img {
  transform: scale(1.1);
}

.speaker-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(130, 36, 57, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.speaker-card:hover .speaker-overlay {
  opacity: 1;
}

.social-links {
  display: flex;
  gap: 20px;
}

.social-link {
  color: white;
  font-size: 1.5rem;
  transition: transform 0.3s ease;
}

.social-link:hover {
  transform: scale(1.2);
}

.speaker-info {
  flex: 1;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.speaker-info h3 {
  color: #2F3C4E;
  font-size: 1.8rem;
  margin-bottom: 10px;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
}

.speaker-info .title {
  color: #822439;
  font-size: 1.1rem;
  margin-bottom: 15px;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
}

.tag {
  background: rgba(130, 36, 57, 0.1);
  color: #822439;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
}

.bio {
  color: #2F3C4E;
  line-height: 1.6;
  font-size: 1rem;
  margin-bottom: 10px;
  font-family: 'Poppins', sans-serif;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media (max-width: 768px) {
  .speakers-page {
    padding: 80px 0;
  }

  h1 {
    font-size: 2.5rem;
  }

  .subtitle {
    font-size: 1.1rem;
    margin-bottom: 40px;
  }

  .speakers-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .speaker-card {
    flex-direction: column;
    height: auto;
  }

  .speaker-image {
    flex: 0 0 250px;
    height: 250px;
  }

  .speaker-info {
    padding: 20px;
  }

  .speaker-info h3 {
    font-size: 1.5rem;
  }

  .speaker-info .title {
    font-size: 1rem;
  }

  .tag {
    font-size: 0.8rem;
  }

  .bio {
    font-size: 0.9rem;
  }
}
</style> 