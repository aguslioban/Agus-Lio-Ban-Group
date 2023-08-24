import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import HeaderFull from '../components/header-full'
import Footer from '../components/footer'
import './agus-lio-ban-pagaden.css'

const AgusLioBanPagaden = (props) => {
  return (
    <div className="agus-lio-ban-pagaden-container">
      <Helmet>
        <title>agus-lio-ban-Pagaden - Agus Lio Ban Group</title>
        <meta
          name="description"
          content="Website Resmi  Agus Lio Ban Group, Bengkel Mobil Subang, Toko Ban Subang, Sparepart Subang, bengkel mobil subang. bengkel mobil dekat tol cipali, tomo bridgestone, "
        />
        <meta
          property="og:title"
          content="agus-lio-ban-Pagaden - Agus Lio Ban Group "
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
      <div className="agus-lio-ban-pagaden-banner">
        <div className="agus-lio-ban-pagaden-container1"></div>
      </div>
      <div className="agus-lio-ban-pagaden-hero">
        <div className="agus-lio-ban-pagaden-container2">
          <h1 className="agus-lio-ban-pagaden-text">AGUS LIO BAN PAGADEN</h1>
          <span className="agus-lio-ban-pagaden-text01">
            <span>AGUS LIO BAN</span>
            <br></br>
            <span>
              Jl. Raya Kamarung No.21, Kamarung, Kec. Pagaden, Kabupaten Subang,
              Jawa Barat 41252
            </span>
            <br></br>
            <span>0260 412 353</span>
            <br></br>
            <span>agusliobanpromo@gmail.com</span>
            <br></br>
            <span>Jam Operasional Toko : Buka</span>
            <br></br>
            <span className="agus-lio-ban-pagaden-text12">
               Senin              08:00-17:00
            </span>
            <br className="agus-lio-ban-pagaden-text13"></br>
            <span className="agus-lio-ban-pagaden-text14">
               Selasa            08:00-17:00
            </span>
            <br className="agus-lio-ban-pagaden-text15"></br>
            <span className="agus-lio-ban-pagaden-text16">
               Rabu              08:00-17:00
            </span>
            <br className="agus-lio-ban-pagaden-text17"></br>
            <span className="agus-lio-ban-pagaden-text18">
               Kamis            08:00-17:00
            </span>
            <br className="agus-lio-ban-pagaden-text19"></br>
            <span className="agus-lio-ban-pagaden-text20">
               Jumat            08:00-17:00
            </span>
            <br className="agus-lio-ban-pagaden-text21"></br>
            <span className="agus-lio-ban-pagaden-text22">
               Sabtu            08:00-17:00
            </span>
            <br className="agus-lio-ban-pagaden-text23"></br>
            <span className="agus-lio-ban-pagaden-text24">
               MInggu         LIBUR
            </span>
            <br></br>
            <br></br>
            <span>
              Temukan spesifikasi ban mobil yang sesuai dengan kendaraan Anda
            </span>
          </span>
          <div className="agus-lio-ban-pagaden-btn-group">
            <a
              href="https://api.whatsapp.com/send?phone=+6285320039886&amp;text=Halo Dengan Agus Lio Ban Ada Yang Bisa Dibantu"
              target="_blank"
              rel="noreferrer noopener"
              className="agus-lio-ban-pagaden-link button"
            >
              Get Started
            </a>
            <Link to="/" className="agus-lio-ban-pagaden-navlink button">
              Learn More
            </Link>
          </div>
        </div>
        <div>
          <Script
            html={`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126846.76417176171!2d107.61023410394463!3d-6.526561856080976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6939128b2e370b%3A0xacb45b3694b4b113!2sAgus%20Lio%20Ban%20Pagaden!5e0!3m2!1sid!2sid!4v1671436967683!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
`}
          ></Script>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default AgusLioBanPagaden
