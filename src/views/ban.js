import React from 'react'

import { Helmet } from 'react-helmet'

import HeaderFull from '../components/header-full'
import FeatureCard41 from '../components/feature-card41'
import Footer from '../components/footer'
import './ban.css'

const Ban = (props) => {
  return (
    <div className="ban-container">
      <Helmet>
        <title>Ban - Agus Lio Ban Group</title>
        <meta
          name="description"
          content="Website Resmi  Agus Lio Ban Group, Bengkel Mobil Subang, Toko Ban Subang, Sparepart Subang, bengkel mobil subang. bengkel mobil dekat tol cipali, tomo bridgestone, "
        />
        <meta property="og:title" content="Ban - Agus Lio Ban Group " />
        <meta
          property="og:description"
          content="Website Resmi  Agus Lio Ban Group, Bengkel Mobil Subang, Toko Ban Subang, Sparepart Subang, bengkel mobil subang. bengkel mobil dekat tol cipali, tomo bridgestone, "
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/56305140-4ddf-4d78-8e87-f48f37c31258/7de0275f-3ee5-4de0-8a25-a289beec9dc9?org_if_sml=1"
        />
      </Helmet>
      <HeaderFull></HeaderFull>
      <div className="ban-features">
        <h1 className="ban-text">BAN MOBIL &amp; TRUCK</h1>
        <div className="ban-separator"></div>
        <div className="ban-container1">
          <div className="ban-container2">
            <FeatureCard41
              title="BRIDGESTONE"
              description="Ban Bridgestone merupakan salah satu merk ban mobil populer yang dikenal menawarkan kualitas terbaik untuk memaksimalkan kenyamanan dan keamanan saat berkendara."
              rootClassName="rootClassName1"
            ></FeatureCard41>
            <FeatureCard41
              title="DUNLOP"
              description="Ban Dunlop adalah ban pabrikan Amerika Serikat yang terkenal dengan kualitasnya. Menjadi salah satu merk ban terbesar di dunia, Dunlop sudah dipercaya di dunia otomotif internasional."
              rootClassName="rootClassName4"
            ></FeatureCard41>
            <FeatureCard41
              title="SAILUN"
              description="Sailun Tire memang namanya baru terdengar di Indonesia, tetapi merek ban ini sudah 3.5 tahun hadir di Indonesia."
              rootClassName="rootClassName3"
            ></FeatureCard41>
            <FeatureCard41
              title="GT-RADIAL"
              description="Apa itu ban GT? Hasil gambar untuk BAN GT RADIAL ADALAH GT Radial sendiri merupakan salah satu merk ban mobil lokal yang kualitasnya tidak kalah bagus dengan ban-ban buatan negara lain."
              rootClassName="rootClassName2"
            ></FeatureCard41>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1571335746824-742511d49bce?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzNXx8dHlyZXN8ZW58MHx8fHwxNjY5Nzc5Njg1&amp;ixlib=rb-4.0.3&amp;w=500"
            className="ban-image"
          />
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Ban
