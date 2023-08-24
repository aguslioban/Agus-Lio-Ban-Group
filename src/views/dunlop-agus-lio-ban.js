import React from 'react'

import { Helmet } from 'react-helmet'

import HeaderFull from '../components/header-full'
import GalleryCard3 from '../components/gallery-card3'
import Footer from '../components/footer'
import './dunlop-agus-lio-ban.css'

const DunlopAgusLioBan = (props) => {
  return (
    <div className="dunlop-agus-lio-ban-container">
      <Helmet>
        <title>Dunlop-Agus-Lio-Ban - Agus Lio Ban Group</title>
        <meta
          name="description"
          content="Website Resmi  Agus Lio Ban Group, Bengkel Mobil Subang, Toko Ban Subang, Sparepart Subang, bengkel mobil subang. bengkel mobil dekat tol cipali, tomo bridgestone, "
        />
        <meta
          property="og:title"
          content="Dunlop-Agus-Lio-Ban - Agus Lio Ban Group "
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
      <div className="dunlop-agus-lio-ban-banner">
        <span className="dunlop-agus-lio-ban-text">AGUS LIO BAN GROUP</span>
        <h1 className="dunlop-agus-lio-ban-text1">AWARDS</h1>
        <span className="dunlop-agus-lio-ban-text2">
          Beberapa Penghargaan Yang Di Dapatkan Agus Lio Ban Group 
        </span>
        <div className="dunlop-agus-lio-ban-container1">
          <input
            type="text"
            placeholder="Email here..."
            className="dunlop-agus-lio-ban-textinput input"
          />
          <a
            href="mailto:agusliobanpromo@gmail.com?subject="
            className="dunlop-agus-lio-ban-link button"
          >
            Subscribe
          </a>
        </div>
      </div>
      <div className="dunlop-agus-lio-ban-gallery">
        <h1 className="dunlop-agus-lio-ban-text3">
          PRESTASI MEKANIK &amp; CSO
        </h1>
        <span className="dunlop-agus-lio-ban-text4">
          Beberapa Penghargaan Yang Didapatkan Agus Lio Ban Group 
        </span>
        <div className="dunlop-agus-lio-ban-container2">
          <GalleryCard3
            title="BEST TOMO  WINNER"
            subtitle="JAKARTA, 2022"
            image_src="/8-1500h.png"
            rootClassName="rootClassName36"
          ></GalleryCard3>
          <GalleryCard3
            title="TOMO A CLASS"
            subtitle="TOMO AUDIT 2017"
            image_alt="/1-1500h.png"
            image_src="/1-1500h.png"
            rootClassName="rootClassName37"
          ></GalleryCard3>
          <GalleryCard3
            title="TOMO ANNIVERSARY 30"
            subtitle="AGUS LIO BAN"
            image_alt="/2-1500h.png"
            image_src="/2-1500h.png"
            rootClassName="rootClassName38"
          ></GalleryCard3>
          <GalleryCard3
            title="ECOPIA SALEST CONTEST"
            subtitle="LOMBA PENJUALAN ECOPIA"
            image_src="/3-1500h.png"
            rootClassName="rootClassName39"
          ></GalleryCard3>
          <GalleryCard3
            title="TOMO S CLASS"
            subtitle="TOMO AUDIT 2018"
            image_src="/5-1500h.png"
            rootClassName="rootClassName40"
          ></GalleryCard3>
          <GalleryCard3
            image_src="/4-1500h.png"
            rootClassName="rootClassName41"
          ></GalleryCard3>
          <GalleryCard3
            image_src="/4-1500h.png"
            rootClassName="rootClassName42"
          ></GalleryCard3>
          <GalleryCard3
            title="TOMO S CLASS"
            subtitle="TOMO AUDIT 2018"
            image_src="/5-1500h.png"
            rootClassName="rootClassName43"
          ></GalleryCard3>
          <GalleryCard3
            image_src="/8-1500h.png"
            rootClassName="rootClassName44"
          ></GalleryCard3>
          <GalleryCard3
            title="ECOPIA SALEST CONTEST"
            subtitle="LOMBA PENJUALAN ECOPIA"
            image_src="/3-1500h.png"
            rootClassName="rootClassName45"
          ></GalleryCard3>
          <GalleryCard3
            title="TOMO ANNIVERSARY 30"
            subtitle="AGUS LIO BAN"
            image_src="/2-1500h.png"
            rootClassName="rootClassName46"
          ></GalleryCard3>
          <GalleryCard3
            title="TOMO A CLASS"
            subtitle="AGUS LIO BAN"
            image_src="/1-1500h.png"
            rootClassName="rootClassName47"
          ></GalleryCard3>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default DunlopAgusLioBan
