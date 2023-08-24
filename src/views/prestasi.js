import React from 'react'

import { Helmet } from 'react-helmet'

import HeaderFull from '../components/header-full'
import GalleryCard3 from '../components/gallery-card3'
import Footer from '../components/footer'
import './prestasi.css'

const Prestasi = (props) => {
  return (
    <div className="prestasi-container">
      <Helmet>
        <title>Prestasi - Agus Lio Ban Group</title>
        <meta
          name="description"
          content="Website Resmi  Agus Lio Ban Group, Bengkel Mobil Subang, Toko Ban Subang, Sparepart Subang, bengkel mobil subang. bengkel mobil dekat tol cipali, tomo bridgestone, "
        />
        <meta property="og:title" content="Prestasi - Agus Lio Ban Group " />
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
      <div className="prestasi-banner">
        <span className="prestasi-text">AGUS LIO BAN GROUP</span>
        <h1 className="prestasi-text1">AWARDS</h1>
        <span className="prestasi-text2">
          Beberapa Penghargaan Yang Di Dapatkan Agus Lio Ban Group 
        </span>
        <div className="prestasi-container1">
          <input
            type="text"
            placeholder="Email here..."
            className="prestasi-textinput input"
          />
          <a
            href="mailto:agusliobanpromo@gmail.com?subject="
            className="prestasi-link button"
          >
            Subscribe
          </a>
        </div>
      </div>
      <div className="prestasi-gallery">
        <h1 className="prestasi-text3">BEST AWARDS AGUS LIO BAN GROUP</h1>
        <span className="prestasi-text4">
          Beberapa Penghargaan Yang Didapatkan Agus Lio Ban Group 
        </span>
        <div className="prestasi-container2">
          <GalleryCard3
            title="BEST TOMO  WINNER"
            subtitle="JAKARTA, 2022"
            image_src="/8-1500h.png"
            rootClassName="rootClassName"
          ></GalleryCard3>
          <GalleryCard3
            title="TOMO A CLASS"
            subtitle="TOMO AUDIT 2017"
            image_alt="/1-1500h.png"
            image_src="/1-1500h.png"
            rootClassName="rootClassName1"
          ></GalleryCard3>
          <GalleryCard3
            title="TOMO ANNIVERSARY 30"
            subtitle="AGUS LIO BAN"
            image_alt="/2-1500h.png"
            image_src="/2-1500h.png"
            rootClassName="rootClassName3"
          ></GalleryCard3>
          <GalleryCard3
            title="ECOPIA SALEST CONTEST"
            subtitle="LOMBA PENJUALAN ECOPIA"
            image_src="/3-1500h.png"
            rootClassName="rootClassName2"
          ></GalleryCard3>
          <GalleryCard3
            title="TOMO S CLASS"
            subtitle="TOMO AUDIT 2018"
            image_src="/5-1500h.png"
            rootClassName="rootClassName4"
          ></GalleryCard3>
          <GalleryCard3
            image_src="/4-1500h.png"
            rootClassName="rootClassName5"
          ></GalleryCard3>
          <GalleryCard3
            image_src="/4-1500h.png"
            rootClassName="rootClassName6"
          ></GalleryCard3>
          <GalleryCard3
            title="TOMO S CLASS"
            subtitle="TOMO AUDIT 2018"
            image_src="/5-1500h.png"
            rootClassName="rootClassName7"
          ></GalleryCard3>
          <GalleryCard3
            image_src="/8-1500h.png"
            rootClassName="rootClassName8"
          ></GalleryCard3>
          <GalleryCard3
            title="ECOPIA SALEST CONTEST"
            subtitle="LOMBA PENJUALAN ECOPIA"
            image_src="/3-1500h.png"
            rootClassName="rootClassName9"
          ></GalleryCard3>
          <GalleryCard3
            title="TOMO ANNIVERSARY 30"
            subtitle="AGUS LIO BAN"
            image_src="/2-1500h.png"
            rootClassName="rootClassName10"
          ></GalleryCard3>
          <GalleryCard3
            title="TOMO A CLASS"
            subtitle="AGUS LIO BAN"
            image_src="/1-1500h.png"
            rootClassName="rootClassName11"
          ></GalleryCard3>
        </div>
      </div>
      <Footer></Footer>
      <div data-thq="thq-dropdown" className="prestasi-thq-dropdown list-item">
        <ul data-thq="thq-dropdown-list" className="prestasi-dropdown-list">
          <li data-thq="thq-dropdown" className="prestasi-dropdown list-item">
            <div
              data-thq="thq-dropdown-toggle"
              className="prestasi-dropdown-toggle"
            >
              <span className="prestasi-text5">Sub-menu Item</span>
            </div>
          </li>
          <li data-thq="thq-dropdown" className="prestasi-dropdown1 list-item">
            <div
              data-thq="thq-dropdown-toggle"
              className="prestasi-dropdown-toggle1"
            >
              <span className="prestasi-text6">Sub-menu Item</span>
            </div>
          </li>
          <li data-thq="thq-dropdown" className="prestasi-dropdown2 list-item">
            <div
              data-thq="thq-dropdown-toggle"
              className="prestasi-dropdown-toggle2"
            >
              <span className="prestasi-text7">Sub-menu Item</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Prestasi
