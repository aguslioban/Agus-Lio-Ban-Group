import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import HeaderFull from '../components/header-full'
import Footer from '../components/footer'
import './agus-lio-ban-tambakan.css'

const AgusLioBanTambakan = (props) => {
  return (
    <div className="agus-lio-ban-tambakan-container">
      <Helmet>
        <title>agus-lio-ban-Tambakan - Agus Lio Ban Group</title>
        <meta
          name="description"
          content="Website Resmi  Agus Lio Ban Group, Bengkel Mobil Subang, Toko Ban Subang, Sparepart Subang, bengkel mobil subang. bengkel mobil dekat tol cipali, tomo bridgestone, "
        />
        <meta
          property="og:title"
          content="agus-lio-ban-Tambakan - Agus Lio Ban Group "
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
      <div className="agus-lio-ban-tambakan-banner">
        <div className="agus-lio-ban-tambakan-container1"></div>
      </div>
      <div className="agus-lio-ban-tambakan-hero">
        <div className="agus-lio-ban-tambakan-container2">
          <h1 className="agus-lio-ban-tambakan-text">AGUS LIO BAN TAMBAKAN</h1>
          <span className="agus-lio-ban-tambakan-text01">
            <span>AGUS LIO BAN</span>
            <br></br>
            <span>
              Jl. Raya Cagak-Subang, Tambakmekar, Kec. Jalancagak, Kabupaten
              Subang, Jawa Barat 41281
            </span>
            <br></br>
            <span>agusliobanpromo@gmail.com</span>
            <br></br>
            <span>Jam Operasional Toko : Buka</span>
            <br></br>
            <span className="agus-lio-ban-tambakan-text10">
               Senin              08:00-17:00
            </span>
            <br className="agus-lio-ban-tambakan-text11"></br>
            <span className="agus-lio-ban-tambakan-text12">
               Selasa            08:00-17:00
            </span>
            <br className="agus-lio-ban-tambakan-text13"></br>
            <span className="agus-lio-ban-tambakan-text14">
               Rabu              08:00-17:00
            </span>
            <br className="agus-lio-ban-tambakan-text15"></br>
            <span className="agus-lio-ban-tambakan-text16">
               Kamis            08:00-17:00
            </span>
            <br className="agus-lio-ban-tambakan-text17"></br>
            <span className="agus-lio-ban-tambakan-text18">
               Jumat            08:00-17:00
            </span>
            <br className="agus-lio-ban-tambakan-text19"></br>
            <span className="agus-lio-ban-tambakan-text20">
               Sabtu            08:00-17:00
            </span>
            <br className="agus-lio-ban-tambakan-text21"></br>
            <span className="agus-lio-ban-tambakan-text22">
               MInggu         LIBUR
            </span>
            <br></br>
            <br></br>
            <span>
              Temukan spesifikasi ban mobil yang sesuai dengan kendaraan Anda
            </span>
          </span>
          <div className="agus-lio-ban-tambakan-btn-group">
            <a
              href="https://api.whatsapp.com/send?phone=+6285320039886&amp;text=Halo Dengan Agus Lio Ban Ada Yang Bisa Dibantu"
              target="_blank"
              rel="noreferrer noopener"
              className="agus-lio-ban-tambakan-link button"
            >
              Get Started
            </a>
            <Link to="/" className="agus-lio-ban-tambakan-navlink button">
              Learn More
            </Link>
          </div>
        </div>
        <div>
          <Script
            html={`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.963319290536!2d107.71483012101342!3d-6.65146877980721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69224acf281aa3%3A0xcb3a4861d68e334d!2sAgus%20Lio%20Ban%20Tambak%20Mekar!5e0!3m2!1sid!2sid!4v1671437390817!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
`}
          ></Script>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default AgusLioBanTambakan
