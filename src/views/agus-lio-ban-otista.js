import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import HeaderFull from '../components/header-full'
import Footer from '../components/footer'
import './agus-lio-ban-otista.css'

const AgusLioBanOtista = (props) => {
  return (
    <div className="agus-lio-ban-otista-container">
      <Helmet>
        <title>agus-lio-ban-otista - Agus Lio Ban Group</title>
        <meta
          name="description"
          content="Website Resmi  Agus Lio Ban Group, Bengkel Mobil Subang, Toko Ban Subang, Sparepart Subang, bengkel mobil subang. bengkel mobil dekat tol cipali, tomo bridgestone, "
        />
        <meta
          property="og:title"
          content="agus-lio-ban-otista - Agus Lio Ban Group "
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
      <div className="agus-lio-ban-otista-banner">
        <div className="agus-lio-ban-otista-container1"></div>
      </div>
      <div className="agus-lio-ban-otista-hero">
        <div className="agus-lio-ban-otista-container2">
          <h1 className="agus-lio-ban-otista-text">AGUS LIO BAN OTISTA</h1>
          <span className="agus-lio-ban-otista-text01">
            <span>AGUS LIO BAN</span>
            <br></br>
            <span>Jl. Oto Iskandardinata No.245, Sukamelang-Subang</span>
            <br></br>
            <span>0260 412 353</span>
            <br></br>
            <span>agusliobanpromo@gmail.com</span>
            <br></br>
            <span>Jam Operasional Toko : Buka</span>
            <br></br>
            <span className="agus-lio-ban-otista-text12">
               Senin              08:00-17:00
            </span>
            <br className="agus-lio-ban-otista-text13"></br>
            <span className="agus-lio-ban-otista-text14">
               Selasa            08:00-17:00
            </span>
            <br className="agus-lio-ban-otista-text15"></br>
            <span className="agus-lio-ban-otista-text16">
               Rabu              08:00-17:00
            </span>
            <br className="agus-lio-ban-otista-text17"></br>
            <span className="agus-lio-ban-otista-text18">
               Kamis            08:00-17:00
            </span>
            <br className="agus-lio-ban-otista-text19"></br>
            <span className="agus-lio-ban-otista-text20">
               Jumat            08:00-17:00
            </span>
            <br className="agus-lio-ban-otista-text21"></br>
            <span className="agus-lio-ban-otista-text22">
               Sabtu            08:00-17:00
            </span>
            <br className="agus-lio-ban-otista-text23"></br>
            <span className="agus-lio-ban-otista-text24">
               MInggu         LIBUR
            </span>
            <br></br>
            <br></br>
            <span>
              Temukan spesifikasi ban mobil yang sesuai dengan kendaraan Anda
              hanya di TOMOnet.
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
          <div className="agus-lio-ban-otista-btn-group">
            <a
              href="https://api.whatsapp.com/send?phone=+6285320039886&amp;text=Halo Dengan Agus Lio Ban Ada Yang Bisa Dibantu"
              target="_blank"
              rel="noreferrer noopener"
              className="agus-lio-ban-otista-link button"
            >
              Get Started
            </a>
            <Link to="/" className="agus-lio-ban-otista-navlink button">
              Learn More
            </Link>
          </div>
        </div>
        <div>
          <Script
            html={`<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15855.034893767155!2d107.7751089!3d-6.5521161!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x426a16955298c878!2sAgus%20Lio%20Ban%20Subang%20Authorized%20Bridgestone!5e0!3m2!1sid!2sid!4v1671435635085!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`}
          ></Script>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default AgusLioBanOtista
