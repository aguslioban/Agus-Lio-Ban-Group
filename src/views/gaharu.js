import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import HeaderFull from '../components/header-full'
import Footer from '../components/footer'
import './gaharu.css'

const Gaharu = (props) => {
  return (
    <div className="gaharu-container">
      <Helmet>
        <title>Gaharu - Agus Lio Ban Group</title>
        <meta
          name="description"
          content="Website Resmi  Agus Lio Ban Group, Bengkel Mobil Subang, Toko Ban Subang, Sparepart Subang, bengkel mobil subang. bengkel mobil dekat tol cipali, tomo bridgestone, "
        />
        <meta property="og:title" content="Gaharu - Agus Lio Ban Group " />
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
      <div className="gaharu-hero">
        <div className="gaharu-container1">
          <h1 className="gaharu-text">GAHARU AUTO SERVICE INDRAMAYU</h1>
          <span className="gaharu-text01">
            <span>AGUS LIO BAN</span>
            <br></br>
            <span>
              Jl. Jenderal Sudirman No.100, Cipancuh, Kec. Haurgeulis, Kabupaten
              Indramayu, Jawa Barat 45264
            </span>
            <br></br>
            <br></br>
            <br></br>
            <span>agusliobanpromo@gmail.com</span>
            <br></br>
            <span>Jam Operasional Toko : Buka</span>
            <br></br>
            <span className="gaharu-text12">
               Senin              08:00-17:00
            </span>
            <br className="gaharu-text13"></br>
            <span className="gaharu-text14">
               Selasa            08:00-17:00
            </span>
            <br className="gaharu-text15"></br>
            <span className="gaharu-text16">
               Rabu              08:00-17:00
            </span>
            <br className="gaharu-text17"></br>
            <span className="gaharu-text18"> Kamis            08:00-17:00</span>
            <br className="gaharu-text19"></br>
            <span className="gaharu-text20"> Jumat            08:00-17:00</span>
            <br className="gaharu-text21"></br>
            <span className="gaharu-text22"> Sabtu            08:00-17:00</span>
            <br className="gaharu-text23"></br>
            <span className="gaharu-text24"> MInggu         LIBUR</span>
            <br></br>
            <br></br>
            <span>
              Temukan spesifikasi ban mobil yang sesuai dengan kendaraan Anda
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
          <div className="gaharu-btn-group">
            <a
              href="https://api.whatsapp.com/send?phone=+6285320039886&amp;text=Halo Dengan Agus Lio Ban Ada Yang Bisa Dibantu"
              target="_blank"
              rel="noreferrer noopener"
              className="gaharu-link button"
            >
              Get Started
            </a>
            <Link to="/" className="gaharu-navlink button">
              Learn More
            </Link>
          </div>
        </div>
        <div>
          <Script
            html={`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.668000169709!2d107.94246482307567!3d-6.4366697804481365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e693710b21065bf%3A0x5db9d1878f21f75a!2sGaharu%20Auto%20Service%20Haurgeulis!5e0!3m2!1sid!2sid!4v1671503622013!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`}
          ></Script>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Gaharu
