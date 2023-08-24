import React from 'react'

import { Helmet } from 'react-helmet'

import HeaderFull from '../components/header-full'
import FeatureCard41 from '../components/feature-card41'
import Footer from '../components/footer'
import './auto-detailing.css'

const AutoDetailing = (props) => {
  return (
    <div className="auto-detailing-container">
      <Helmet>
        <title>Auto-Detailing - Agus Lio Ban Group</title>
        <meta
          name="description"
          content="Website Resmi  Agus Lio Ban Group, Bengkel Mobil Subang, Toko Ban Subang, Sparepart Subang, bengkel mobil subang. bengkel mobil dekat tol cipali, tomo bridgestone, "
        />
        <meta
          property="og:title"
          content="Auto-Detailing - Agus Lio Ban Group "
        />
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
      <div className="auto-detailing-features">
        <h1 className="auto-detailing-text">AUTO DETAILING &amp; COATING</h1>
        <div className="auto-detailing-separator"></div>
        <div className="auto-detailing-container1">
          <div className="auto-detailing-container2">
            <FeatureCard41
              title="terlihat kinclong dan tidak kusam"
              description="tu merupakan hal yang sangat penting, karena dengan kondisi kendaraan yang bersih akan membuat pengemudi dan penumpang terasa nyaman."
              rootClassName="rootClassName1"
            ></FeatureCard41>
            <FeatureCard41
              title="Melapisi cat"
              description="Pemolesan dan waxing yang dilakukan dapat membuat cat body mobil kamu terlapisi oleh cairan pelindung. Dengan begitu, kotoran, cipratan air, dan debu akan sulit menembus dan merusak cat."
              rootClassName="rootClassName4"
            ></FeatureCard41>
            <FeatureCard41
              title="Memudahkan perawatan"
              description="Dengan lapisan pelindung cat, kamu tidak perlu bersusah payah membersihkan mobil. Kamu hanya perlu menyiram mobil, kemudian semua noda dan kotoran akan luntur dengan mudah."
              rootClassName="rootClassName3"
            ></FeatureCard41>
            <FeatureCard41
              title="Memperlambat penuaan"
              description="Bukan hanya berdampak pada kulit manusia, ternyata sinar ultraviolet juga bisa memberikan dampak yang buruk pada body mobil. Selain itu, polusi udara dan debu jalanan juga sangat berpengaruh. Hal tersebut mengakibatkan mobil akan cepat menua, khususnya bagian eksterior. Dengan melakukan auto detailing mobil secara rutin, akan memperlambat penuaan dan membuat mobil menjadi lebih tahan lama."
              rootClassName="rootClassName2"
            ></FeatureCard41>
          </div>
          <img
            alt="image"
            src="https://shopee.co.id/inspirasi-shopee/wp-content/uploads/2021/04/best-ceramic-coating-for-cars.jpg"
            className="auto-detailing-image"
          />
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default AutoDetailing
