import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import HeaderFull from '../components/header-full'
import Footer from '../components/footer'
import './bubut-piringan-rem.css'

const BubutPiringanRem = (props) => {
  return (
    <div className="bubut-piringan-rem-container">
      <Helmet>
        <title>Bubut-Piringan-Rem - Agus Lio Ban Group</title>
        <meta
          name="description"
          content="Website Resmi  Agus Lio Ban Group, Bengkel Mobil Subang, Toko Ban Subang, Sparepart Subang, bengkel mobil subang. bengkel mobil dekat tol cipali, tomo bridgestone, "
        />
        <meta
          property="og:title"
          content="Bubut-Piringan-Rem - Agus Lio Ban Group "
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
      <div className="bubut-piringan-rem-hero">
        <div className="bubut-piringan-rem-container1">
          <h1 className="bubut-piringan-rem-text">
            <span>
              BUBUT
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>PIRINGAN REM</span>
          </h1>
          <span className="bubut-piringan-rem-text04">
            <span>
              Bubut cakram berfungsi untuk meratakan permukaan piringan rem.
              Permukaan piringan rem yang bergelombang akan mengurangi kemampuan
              kerja dari sistem pengereman.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>
              Oleh karena itu, membubut piringan rem adalah hal yang sah-sah
              saja, selama masih sesuai dengan ketebalan piringan rem yang
              dianjurkan.
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
          <div className="bubut-piringan-rem-btn-group">
            <a
              href="https://api.whatsapp.com/send?phone=+6285320039886&amp;text=Halo Dengan Agus Lio Ban Ada Yang Bisa Dibantu"
              target="_blank"
              rel="noreferrer noopener"
              className="bubut-piringan-rem-link button"
            >
              Get Started
            </a>
            <Link to="/service" className="bubut-piringan-rem-navlink button">
              Learn More
            </Link>
          </div>
        </div>
        <img
          alt="image"
          src="/bubt-1200w.png"
          className="bubut-piringan-rem-image"
        />
      </div>
      <Footer></Footer>
    </div>
  )
}

export default BubutPiringanRem
