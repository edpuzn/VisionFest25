<template>
  <div class="speakers-page">
    <div class="container">
      <h2 class="section-title">KONUŞMACILAR</h2>
      <p class="section-subtitle">Teknoloji ve İnovasyonun Öncü İsimleri</p>
      
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
          name: 'Kübra BİLĞİÇ',
          title: 'Developer Relations Manager, Huawei',
          image: require('@/assets/Kubra_Bilgic.jpeg'),
          tags: ['Developer Relations', 'Topluluk Yönetimi', 'Sosyal Medya', 'Podcast'],
          bio: [
            'Eskişehir Osmangazi Üniversitesi İşletme Bölümü mezunu olup (2013-2017), Nuh Naci Yazgan Üniversitesi\'nde Ekonomi yüksek lisansını tamamlamıştır (2018-2021). Şu anda Huawei\'de Developer Relations Manager olarak görev yapmakta ve HSD Türkiye öğrenci kulübünü yönetmektedir. Daha önce Kodluyoruz ve Patika.dev gibi platformlarda topluluk yönetimi deneyimi kazanmıştır. DevRelism Podcast ve Ege\'ye Taşınıyor Muyuz? Podcast projelerinde de yer almaktadır. Topluluk yönetimi, sosyal medya stratejileri ve geliştirici ilişkileri konularında uzmanlaşmıştır.'
          ],
          linkedin: 'https://www.linkedin.com/in/kubrabilgic/'
        },
        {
          name: 'Ahmet ŞEKER',
          title: 'Cloud Project Manager & Technical Lead, Huawei',
          image: require('@/assets/Ahmet_Seker.jpeg'),
          tags: ['Cloud Computing', 'Network Engineering', 'IT', 'Bilişim'],
          bio: [
            'Bahçeşehir Üniversitesi Bilgisayar Mühendisliği mezunudur (2006-2012). 11 yılı aşkın süredir Huawei\'de çalışmakta olup, şu anda Cloud Project Manager ve Technical Lead pozisyonunda görev yapmaktadır. Daha önce Cloud Solution Engineer ve Senior Network Engineer olarak çalışmıştır. Multinet ve Kuysoft gibi şirketlerde de IT deneyimi bulunmaktadır. Cloud computing ve network engineering alanlarında uzmanlaşmış bir bilişim profesyonelidir.'
          ],
          linkedin: 'https://www.linkedin.com/in/ahmet-kayhan-şeker-2a9b2966/'
        },
        {
          name: 'Murat ÇELİK',
          title: 'Danışman, DİAS Teknoloji',
          image: require('@/assets/Murat_Celik.jpeg'),
          tags: ['Dijital Dönüşüm', 'Fintech', 'Oyun', 'İnovasyon'],
          bio: [
            'Boğaziçi Üniversitesi Bilgisayar Mühendisliği mezunudur (1985-1992). Şu anda DİAS Teknoloji\'de Danışman olarak görev yapmaktadır. Daha önce Rotta Finansal Teknolojiler\'de CEO, Vourlabs Games\'de Kurucu Ortak ve DenizBank\'ta CDO - Digital Generation Banking EVP olarak çalışmıştır. DenizBank\'ın "Dünyanın En İnovatif Bankası" seçilmesinde önemli rol oynamıştır. Dijital dönüşüm, fintech ve oyun teknolojileri alanlarında uzmanlaşmış bir teknoloji lideridir.'
          ],
          linkedin: 'https://www.linkedin.com/in/muratcelik68/'
        },
        {
          name: 'Kaan YENİYOL',
          title: 'Cyber Security & Incident Responder, Türk Telekom',
          image: require('@/assets/Kaan_Yeniyol.jpg'),
          tags: ['Siber Güvenlik', 'Adli Bilişim', 'Olay Müdahale', 'Güvenlik'],
          bio: [
            'Fırat Üniversitesi Adli Bilişim Mühendisliği mezunu olup (2014-2019), aynı üniversitede yüksek lisansını tamamlamıştır (2019-2021). 5 yılı aşkın süredir Türk Telekom\'da Siber Güvenlik ve Olay Müdahale uzmanı olarak görev yapmaktadır. Daha önce InitAck\'te Adli Bilişim Mühendisi olarak çalışmıştır. Siber güvenlik, adli bilişim ve olay müdahale konularında uzmanlaşmıştır.'
          ],
          linkedin: 'https://www.linkedin.com/in/kaanyeniyol/'
        },
        {
          name: 'Büşra AYTEKİN KAYA',
          title: 'Cyber Security Analyst, Türk Telekom',
          image: require('@/assets/Busra_Kaya.jpg'),
          tags: ['Siber Güvenlik', 'Adli Bilişim', 'DFIR', 'Güvenlik'],
          bio: [
            'Fırat Üniversitesi Adli Bilişim Mühendisliği mezunu olup (2015-2019), aynı üniversitede yüksek lisansını tamamlamıştır (2019-2022). 4 yılı aşkın süredir Türk Telekom\'da Cyber Security Analyst olarak görev yapmaktadır. Daha önce ADEO\'da DFIR Analyst ve Digisecure\'da Dijital Forensics Investigator olarak çalışmıştır. Siber güvenlik, dijital adli bilişim ve olay müdahale konularında uzmanlaşmıştır.'
          ],
          linkedin: 'https://www.linkedin.com/in/büşra-aytekin-kaya-50330311b/'
        },
        {
          name: 'Burak AYTAN',
          title: 'Principal AI & ML Engineer, Turkcell Technology',
          image: require('@/assets/Burak_Aytan.jpeg'),
          tags: ['Yapay Zeka', 'Doğal Dil İşleme', 'Makine Öğrenmesi', 'Otomasyon'],
          bio: [
            'Gazi Üniversitesi Elektrik-Elektronik Mühendisliği mezunu olup (2002-2007), University of Glamorgan\'da Bilgisayar Bilimleri yüksek lisansı (2008-2009) ve Bahçeşehir Üniversitesi\'nde Bilgisayar Mühendisliği doktorasını tamamlamıştır (2019-2024). 14 yılı aşkın süredir Turkcell\'de çalışmakta olup, şu anda Turkcell Technology\'de Principal AI & ML Engineer olarak görev yapmaktadır. Doğal dil işleme, yapay zeka ve makine öğrenmesi alanlarında uzmanlaşmıştır.'
          ],
          linkedin: 'https://www.linkedin.com/in/burak-aytan-ph-d-a036a122/'
        },
        {
          name: 'Can GÖYMEN',
          title: 'CEO, Curiosity Technology',
          image: require('@/assets/Can_Goymen.jpeg'),
          tags: ['Yapay Zeka', 'Ürün Yönetimi', 'Agile', 'DevOps'],
          bio: [
            'Bülent Ecevit Üniversitesi Matematik Bölümü mezunu olup (2001-2007), Üsküdar Üniversitesi\'nde Yapay Zeka Mühendisliği yüksek lisansını tamamlamıştır (2021-2022). Curiosity Technology\'nin kurucusu ve CEO\'sudur. Daha önce Turkcell\'de Product Owner ve ZekAI Proje Lideri olarak çalışmış, yapay zeka ve makine öğrenmesi projelerinde liderlik yapmıştır. Türk Telekom ve Vodafone\'da da ürün yönetimi, iş analizi ve takım liderliği deneyimleri bulunmaktadır. Yapay zeka, ürün yönetimi ve agile metodolojiler konularında uzmanlaşmıştır.'
          ],
          linkedin: 'https://www.linkedin.com/in/cangoymen/'
        },
        {
          name: 'Sertay KABUK',
          title: 'Principal Software Developer, Doğuş Teknoloji',
          image: require('@/assets/Sertay_Kabuk.jpeg'),
          tags: ['Yazılım Geliştirme', 'Chatbot', 'AI Agents', 'Mikroservis'],
          bio: [
            'Kadir Has Üniversitesi Bilgisayar Programcılığı ön lisans (2007-2009) ve Anadolu Üniversitesi lisans mezunudur (2010-2012). Şu anda Doğuş Teknoloji\'de Principal Software Developer olarak görev yapmaktadır. Daha önce D-Smart\'ta Software Development Manager ve Supervisor olarak 6 yıl, StreamDelta\'da Team Lead olarak çalışmıştır. TM Forum uyumlu dinamik teklif motoru, mikroservis mimarisi ve sürekli entegrasyon sistemleri konularında uzmanlaşmış bir yazılım geliştiricidir.'
          ],
          linkedin: 'https://www.linkedin.com/in/sertay/'
        }
      ]
    }
  }
}
</script>

<style scoped>
.speakers-page {
  padding: 120px 0;
  min-height: 100vh;
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
  height: auto;
}

.speaker-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.speaker-image {
  flex: 0 0 300px;
  width: 300px;
  height: auto;
  overflow: hidden;
  position: relative;
}

.speaker-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
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
  padding: 20px;
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
}

@media (max-width: 768px) {
  .speakers-page {
    padding: 80px 0;
  }

  h2 {
    font-size: 2.5rem;
  }

  .section-subtitle {
    font-size: 1.1rem;
    margin-bottom: 40px;
  }

  .speakers-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .speaker-card {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .speaker-image {
    width: 80%;
    max-width: 350px;
    height: auto;
    margin: 0 auto 20px auto;
  }

  .speaker-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .speaker-info {
    width: 100%;
    text-align: center;
  }

  .speaker-tags {
    justify-content: center;
  }

  .speaker-links {
    justify-content: center;
  }

  .speaker-info h3 {
    font-size: 1.5rem;
  }

  .speaker-info .title {
    font-size: 1rem;
  }

  .tags {
    justify-content: center;
  }

  .tags .tag {
    font-size: 0.8rem;
  }

  .bio {
    font-size: 0.9rem;
    -webkit-line-clamp: unset;
    max-height: unset;
  }
}
</style> 