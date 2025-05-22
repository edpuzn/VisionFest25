<template>
  <div class="partners-page">
    <div class="container">
      <h2>Paydaşlarımız</h2>
      <div class="partners-grid">
        <div class="partner-card">
          <img src="@/assets/huawei.png" alt="Huawei" />
          <h3>Huawei</h3>
          <p>Ana Paydaş</p>
        </div>
        <div class="partner-card">
          <img src="@/assets/firat.png" alt="Fırat Üniversitesi" />
          <h3>Fırat Üniversitesi</h3>
          <p>Ana Paydaş</p>
        </div>
        <div class="partner-card">
          <img src="@/assets/HSD.png" alt="HSD Fırat" />
          <h3>HSD Fırat</h3>
          <p>Organizatör</p>
        </div>
        <div class="partner-card">
          <img src="@/assets/dogus.png" alt="Doğuş" />
          <h3>Doğuş</h3>
          <p>Platin Paydaş</p>
        </div>
        <div class="partner-card">
          <img src="@/assets/dias.png" alt="Dias Curiosity" />
          <h3>Dias Curiosity</h3>
          <p>Platin Paydaş</p>
        </div>
        <div class="partner-card">
          <img src="@/assets/UNIDES.png" alt="Dias Curiosity" />
          <h3>Ünides</h3>
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'PartnersPage'
}
</script>

<style scoped>
.partners-page {
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
}
</style> 