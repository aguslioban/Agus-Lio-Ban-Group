import React from 'react'

import { Helmet } from 'react-helmet'

import HeaderFull from '../components/header-full'
import FeatureCard2 from '../components/feature-card2'
import Footer from '../components/footer'
import './spooring.css'

const Spooring = (props) => {
  return (
    <div className="spooring-container">
      <Helmet>
        <title>Spooring - Agus Lio Ban Group</title>
        <meta
          name="description"
          content="Website Resmi  Agus Lio Ban Group, Bengkel Mobil Subang, Toko Ban Subang, Sparepart Subang, bengkel mobil subang. bengkel mobil dekat tol cipali, tomo bridgestone, "
        />
        <meta property="og:title" content="Spooring - Agus Lio Ban Group " />
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
      <div className="spooring-features">
        <h1 className="spooring-text">Kapan Dilakukannya Spooring ?</h1>
        <div className="spooring-container1">
          <FeatureCard2
            title="1. Setir Bergetar Saat Berkendara"
            description="Amati dan rasakan apakah setir bergetar ketika sedang berkendara. Setir yang bergetar menandakan bahwa ada yang tidak beres dengan ban depan mobil Ada. Hal ini tentunya akan sangat mengganggu kenyamanan Anda dalam berkendara. Untuk itu, ketika Anda merasakan hal ini, maka inilah saat yang tepat untuk melakukan spooring dan balancing pada mobil Anda."
            rootClassName="rootClassName"
          ></FeatureCard2>
          <FeatureCard2
            title="3. Pastikan Tak Ada Benjolan pada Ban Mobil"
            description="Untuk mengetahui ketidaknyamanan dalam berkendara, Anda dapat mengecek keausan pada ban mobil Anda. Amati secara seksama dan menyeluruh. Apakah ada benjolan pada ban? Jika ya, itu bisa jadi sistem suspensi mobil Anda sedang bermasalah."
            rootClassName="rootClassName3"
          ></FeatureCard2>
          <FeatureCard2
            title="2. Mobil Belok Sendiri Saat Melaju Lurus"
            description="Saat Anda sedang melaju lurus, coba rasakan apakah ada pergerakan atau perasaan bahwa mobil Anda berbelok dengan sendirinya. Jika ya, maka ini menandakan bahwa ada permasalahan dengan spooring."
            rootClassName="rootClassName2"
          ></FeatureCard2>
          <FeatureCard2
            title="4. Setir Terasa Berat"
            description="Gejala yang paling terasa jika mobil perlu dilakukan spooring berlokasi pada setir. Kalau setir terasa tak nyaman atau terasa lebih berat dari biasanya, atau ketika setir dibelokkan, namun setir tidak berputar kembali ke posisi semula, maka ini saatnya bagi Anda melakukan spooring dan balancing pada mobil Anda."
            rootClassName="rootClassName1"
          ></FeatureCard2>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Spooring
