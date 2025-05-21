<template>
  <div id="speakers" class="speakers-page">
    <div class="container">
      <h1>UZMAN KONUŞMACILARIMIZ</h1>
      <p class="subtitle">AI Summit'in değerli konuşmacıları alanında uzman kişilerden oluşmaktadır.</p>
      
      <div class="speakers-grid">
        <div v-for="(speaker, index) in speakers" :key="index" class="speaker-card">
          <div class="speaker-image">
            <img :src="speaker.image" :alt="speaker.name" />
          </div>
          <div class="speaker-info">
            <h3>{{ speaker.name }}</h3>
            <p class="title">{{ speaker.title }}</p>
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
          bio: [
            'Buğra Ayan, internet teknolojileri ve yapay zeka alanlarında çalışmalar yürüten bir bilişim uzmanıdır. Yüksek lisansını Gazi Üniversitesi\'nde yapay zeka üzerine tamamlamış olup, şu anda doktora çalışmalarına büyük dil modelleri ve blokzincir üzerine devam etmektedir.',
            'Ankara Üniversitesi ve Hacı Bayram Veli Üniversitesi\'nde dersler vermekte; ayrıca sivil toplum kuruluşlarının kuruluş ve yönetim süreçlerinde aktif olarak yer almaktadır.',
            'Çalışmaları genellikle yapay zeka, web ve mobil uygulama geliştirme üzerine yoğunlaşmakta; bunun yanı sıra çocuklar için İngilizce kitaplar yazmakta ve yapay zeka eğitimi verme gibi projeler üzerinde çalışmaktadır.'
          ]
        },
        {
          name: 'Burak AYTAN',
          title: 'Endüstri Mühendisi, TOFAŞ',
          image: require('@/assets/Burak_Aytan.jpeg'),
          bio: [
            'Özcan Çavuşoğlu, İstanbul Teknik Üniversitesi Endüstri Mühendisliği Bölümü\'nden mezun olmuş ve aynı üniversitede Yönetim Mühendisliği alanında yüksek lisans yapmıştır.',
            'Kariyerine AVEA İletişim Hizmetleri A.Ş.\'de Organizasyon ve Kalite Uzmanı olarak başlamış; ardından Şekerbank T.A.Ş., Turkcell TL Hattı ve Koçtaş Yapı Marketleri A.Ş. gibi firmalarda süreç yönetimi ve iş geliştirme pozisyonlarında görev almıştır.',
            '2013 yılında TOFAŞ Türk Otomobil Fabrikası A.Ş.\'ye katılan Çavuşoğlu, burada Kalite Metot ve Planlama Yöneticisi olarak çalışmış, sonrasında Ürün ve Süreç Kalite Mühendisliği Departmanı Başkanı pozisyonuna yükselmiştir.'
          ]
        },
        {
          name: 'Can GÖYMEN',
          title: 'Artiwise CEO',
          image: require('@/assets/Can_Göymen.jpeg'),
          bio: [
            'Taner Temel, Artiwise şirketinin kurucu ortağı ve CEO\'sudur. 2000 yılında Yıldız Teknik Üniversitesi Matematik Mühendisliği Bölümü\'nden mezun olmuş, 2013 yılında ise Doğuş Üniversitesi\'nde İngilizce İşletme (MBA) yüksek lisansını tamamlamıştır.',
            'Kariyerine yazılım firmalarında başlayan Temel, Toyota ve Turkcell Global Bilgi gibi büyük şirketlerde yazılım geliştirme mühendisliği ve yöneticilik pozisyonlarında deneyim kazanmıştır.',
            'Büyük ölçekli firmaların müşteri geri bildirimlerini yönetmekte yaşadığı zorlukları fark ederek, yapay zeka ve doğal dil işleme teknolojilerini kullanarak müşteri deneyimini iyileştirmeyi hedefleyen Artiwise\'ı kurmuştur.'
          ]
        },
        {
          name: 'Kaan YENİYOL',
          title: 'Teknoloji ve İnovasyon Lideri',
          image: require('@/assets/Kaan_Yeniyol.jpeg'),
          bio: [
            'Ahmet Oktay, Doğu Akdeniz Üniversitesi Bilgisayar Mühendisliği Bölümü\'nden mezun olmuş; teknoloji ve inovasyon dünyasında stratejik danışmanlık hizmetleriyle öne çıkan bir liderdir.',
            'Alzmir Hub ve BSP Group gibi öncü kuruluşlarla iş birliği yaparak yapay zeka stratejileri ve dijital dönüşüm projelerinde önemli roller üstlenmektedir.',
            'Ayrıca Mersin Kent Konseyi\'nde "Herkes İçin Bilişim Komitesi" başkanı olarak, Mersin\'i teknoloji alanında öncü bir şehir yapmak için çalışmaktadır.'
          ]
        },
        {
          name: 'Kübra BİLGİC',
          title: 'Teknoloji Danışmanı, eski Microsoft Yöneticisi',
          image: require('@/assets/Kübra_Bilgic.jpeg'),
          bio: [
            'Abdurrahman Bulut, 1990 yılında ODTÜ Elektronik Mühendisliği Bölümü\'nden mezun olmuştur. 30 yıllık bilgi teknolojileri kariyerinin 20 yılını yurt dışında geçirmiştir. 8 yıl Kanada\'da çeşitli şirketlerde, son 12 yıl ise Suudi Arabistan\'da Microsoft\'ta çalışmıştır.',
            'Microsoft\'taki son görevi, Suudi Arabistan Batı Bölgesi Projeler Koordinatörlüğü\'dür. 2020 Ekim itibarıyla kesin dönüş yapmış; teknoloji felsefesi ve yaşadığımız çağa tanıklık etme çerçevesinde okuma, düşünme ve paylaşma üzerine çalışmalara yoğunlaşmıştır.',
            '2019 yılından itibaren yapay zeka, teknoloji felsefesi, dataizm konularında açık ve kapalı konferanslar/sunumlar; lise ve dengi okullarda ise kariyer, motivasyon, başarı ve yurt dışında kariyer yapmak başlıklarında konuşmalar yapmaktadır.'
          ]
        },
        {
          name: 'Murat ÇELİK',
          title: 'Monster Notebook ve Semruk Games Kurucusu',
          image: require('@/assets/Murat_Celik.jpeg'),
          bio: [
            'İlhan Yılmaz, Marmara Üniversitesi\'nden 1996 yılında mezun oldu. 2000 yılında Meryem Yılmaz ile birlikte Fokus Bilgisayar\'ı kurdu. Firma, ilk yıllarında teknoloji firmalarına toptan bilgisayar malzemeleri satışı yapıyordu. 2005 yılında ise Monster Notebook markası doğdu ve firmanın ilk bilgisayarları üretilip satılmaya başlandı.',
            'Bugün gelinen noktada Monster Notebook, Türkiye\'de oyun bilgisayarı pazarında ilk 3 sırada yer alıyor. İstanbul, Ankara ve İzmir\'deki mağazalarıyla ve Monster Notebook Dijital Mağazası ile Türkiye\'nin her noktasındaki son kullanıcıya ulaşıyor.',
            'Semruk Games, sosyal farkındalık gerektiren konulara dijital oyunlar aracılığıyla dikkat çekmek amacıyla 2021 Ekim ayında kuruldu.'
          ]
        },
        {
          name: 'Sertay KABUK',
          title: 'Mecostech Kurucusu, VR/AR Teknolojileri Uzmanı',
          image: require('@/assets/Sertay_Kabuk.jpeg'),
          bio: [
            'Muhammed Coşgun, Uludağ Üniversitesi mezunu bir teknoloji girişimcisidir. Kurucusu olduğu Mecostech firması bünyesinde; VR, AR ve XR tabanlı havacılık, lojistik ve sağlık teknolojileri alanında projeler geliştirmekte, yapay zekâ ve yazılım çözümleriyle farklı sektörlerin ihtiyaçlarına yenilikçi yaklaşımlar sunmaktadır.',
            'Havacılıktan sağlığa uzanan geniş bir yelpazede, dijital uygulamalar üzerine yapay zekâ destekli VR/AR/XR yazılım geliştirme faaliyetlerini sürdürmektedir.',
            'Teknoloji ile sağlığı buluşturan projelere öncülük eden Coşgun, çeşitli üniversitelerde ve teknoloji topluluklarında bilgi ve deneyimlerini paylaşarak genç girişimcilere ilham vermeye devam etmektedir.'
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.speakers-page {
  padding: 120px 0 80px;
  background-color: #f8f9fa;
  overflow: hidden;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.speakers-page.active {
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
  color: #333;
  font-size: 2.5rem;
  font-weight: 700;
  text-transform: uppercase;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.subtitle {
  text-align: center;
  color: #666;
  font-size: 1.2rem;
  margin-bottom: 60px;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s forwards;
}

.speakers-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
}

.speaker-card {
  display: flex;
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  transform: translateX(-50px);
}

.speakers-page.active .speaker-card:nth-child(1) { animation: slideInRight 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s forwards; }
.speakers-page.active .speaker-card:nth-child(2) { animation: slideInRight 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.6s forwards; }
.speakers-page.active .speaker-card:nth-child(3) { animation: slideInRight 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.8s forwards; }
.speakers-page.active .speaker-card:nth-child(4) { animation: slideInRight 0.8s cubic-bezier(0.4, 0, 0.2, 1) 1s forwards; }
.speakers-page.active .speaker-card:nth-child(5) { animation: slideInRight 0.8s cubic-bezier(0.4, 0, 0.2, 1) 1.2s forwards; }
.speakers-page.active .speaker-card:nth-child(6) { animation: slideInRight 0.8s cubic-bezier(0.4, 0, 0.2, 1) 1.4s forwards; }
.speakers-page.active .speaker-card:nth-child(7) { animation: slideInRight 0.8s cubic-bezier(0.4, 0, 0.2, 1) 1.6s forwards; }
.speakers-page.active .speaker-card:nth-child(8) { animation: slideInRight 0.8s cubic-bezier(0.4, 0, 0.2, 1) 1.8s forwards; }

.speaker-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.speaker-image {
  flex: 0 0 300px;
  height: 420px;
  overflow: hidden;
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin: 10px;
}

.speaker-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: all 0.3s ease;
  border-radius: 10px;
}

.speaker-card:hover .speaker-image {
  z-index: 1;
}

.speaker-card:hover .speaker-image img {
  transform: scale(1.05);
}

.speaker-info {
  flex: 1;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  height: 450px;
  overflow-y: auto;
}

.speaker-info h3 {
  color: #2F3C4E;
  font-size: 1.5rem;
  margin-bottom: 10px;
  font-weight: 600;
}

.speaker-info .title {
  color: #007bff;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 15px;
  font-family: 'Poppins', sans-serif;
}

.speaker-info .bio {
  color: #666;
  line-height: 1.5;
  margin-bottom: 10px;
  font-size: 0.9rem;
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

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@media (max-width: 768px) {
  .speakers-page {
    padding: 100px 0 60px;
  }

  h1 {
    font-size: 2rem;
  }

  .subtitle {
    font-size: 1.1rem;
    margin-bottom: 40px;
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
    padding: 30px;
    height: auto;
  }

  .speaker-info h3 {
    font-size: 1.2rem;
  }

  .speaker-info .title {
    font-size: 0.95rem;
  }

  .speaker-info .bio {
    font-size: 0.85rem;
  }
}
</style> 