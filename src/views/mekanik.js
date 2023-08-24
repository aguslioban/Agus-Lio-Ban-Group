import React from 'react'

import { Helmet } from 'react-helmet'

import HeaderFull from '../components/header-full'
import FeatureCard14 from '../components/feature-card14'
import FeatureCard15 from '../components/feature-card15'
import Footer from '../components/footer'
import './mekanik.css'

const Mekanik = (props) => {
  return (
    <div className="mekanik-container">
      <Helmet>
        <title>Mekanik - Agus Lio Ban Group</title>
        <meta
          name="description"
          content="Website Resmi  Agus Lio Ban Group, Bengkel Mobil Subang, Toko Ban Subang, Sparepart Subang, bengkel mobil subang. bengkel mobil dekat tol cipali, tomo bridgestone, "
        />
        <meta property="og:title" content="Mekanik - Agus Lio Ban Group " />
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
      <div className="mekanik-features">
        <div className="mekanik-banner">
          <span className="mekanik-text">AGUS LIO BAN GROUP</span>
          <h1 className="mekanik-text1">AWARDS</h1>
          <span className="mekanik-text2">
            Beberapa Penghargaan Yang Di Dapatkan Mekanik &amp; CSO Agus Lio Ban
            Group 
          </span>
          <div className="mekanik-container1">
            <input
              type="text"
              placeholder="Email here..."
              className="mekanik-textinput input"
            />
            <a
              href="mailto:agusliobanpromo@gmail.com?subject="
              className="mekanik-link button"
            >
              Subscribe
            </a>
          </div>
        </div>
        <h1 className="mekanik-text3">
          <span className="mekanik-text4">
            PRESTASI MEKANIK &amp; CSO AGUS LIO BAN
          </span>
          <br></br>
        </h1>
        <div className="mekanik-container2">
          <FeatureCard14
            title="TOMO SALESMAN COURSE "
            image_src="/whatsapp%20image%202022-12-20%20at%2010.56.58_11zon-400w.jpeg"
            rootClassName="rootClassName8"
          ></FeatureCard14>
          <FeatureCard14
            title="TOMO SALESMAN COURSE "
            image_src="/whatsapp%20image%202022-12-20%20at%2010.57.00%20%5B1%5D_11zon-400w.jpeg"
            rootClassName="rootClassName9"
          ></FeatureCard14>
          <FeatureCard14
            title="TOMO MEKANIK COURSE"
            image_src="/whatsapp%20image%202022-12-20%20at%2010.57.00_11zon-400w.jpeg"
            rootClassName="rootClassName10"
          ></FeatureCard14>
        </div>
      </div>
      <div className="mekanik-features1">
        <div className="mekanik-container3">
          <FeatureCard15
            title="ECOPIA SALEST REGIONAL CONTEST 2015"
            image_src="/13_6_11zon-400h.png"
            rootClassName="rootClassName6"
          ></FeatureCard15>
          <FeatureCard15
            title="ECOPIA SALEST NATIONAL CONTEST 2015"
            image_src="/15_8_11zon-400h.png"
            rootClassName="rootClassName7"
          ></FeatureCard15>
          <FeatureCard15
            title="SUPER ELITE CLUB CERTIFICATION"
            image_src="/16_9_11zon-400h.png"
            rootClassName="rootClassName8"
          ></FeatureCard15>
        </div>
      </div>
      <div className="mekanik-features2">
        <div className="mekanik-container4">
          <FeatureCard15
            title="PRODUCK CHAMPION AWARD"
            image_src="/17_10_11zon-400h.png"
            rootClassName="rootClassName9"
          ></FeatureCard15>
          <FeatureCard15
            title="PRODUCK CHAMPION AWARD"
            image_src="/18_11_11zon-400h.png"
            rootClassName="rootClassName10"
          ></FeatureCard15>
          <FeatureCard15
            title="TRAINING MANAGEMENT BENGKEL R-4"
            image_src="/19_12_11zon-400h.png"
            rootClassName="rootClassName11"
          ></FeatureCard15>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Mekanik
