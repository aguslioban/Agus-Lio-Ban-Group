import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import HeaderFull from '../components/header-full'
import Footer from '../components/footer'
import './reddg.css'

const Reddg = (props) => {
  return (
    <div className="reddg-container">
      <Helmet>
        <title>Reddg - Agus Lio Ban Group</title>
        <meta
          name="description"
          content="Website Resmi  Agus Lio Ban Group, Bengkel Mobil Subang, Toko Ban Subang, Sparepart Subang, bengkel mobil subang. bengkel mobil dekat tol cipali, tomo bridgestone, "
        />
        <meta property="og:title" content="Reddg - Agus Lio Ban Group " />
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
      <div className="reddg-hero">
        <div className="reddg-container1">
          <h1 className="reddg-text">REDGG BRAWIJAYA MAJALENGKA</h1>
          <span className="reddg-text01">
            <span>AGUS LIO BAN</span>
            <br></br>
            <span>
              l. Brawijaya No. 11 Dukuh Warung No, Desa, Karangsambung, Kec.
              Kadipaten, Kabupaten Majalengka,
            </span>
            <br></br>
            <br></br>
            <span>agusliobanpromo@gmail.com</span>
            <br></br>
            <span>Jam Operasional Toko : Buka</span>
            <br></br>
            <span className="reddg-text11">
               Senin              08:00-17:00
            </span>
            <br className="reddg-text12"></br>
            <span className="reddg-text13"> Selasa            08:00-17:00</span>
            <br className="reddg-text14"></br>
            <span className="reddg-text15"> Rabu              08:00-17:00</span>
            <br className="reddg-text16"></br>
            <span className="reddg-text17"> Kamis            08:00-17:00</span>
            <br className="reddg-text18"></br>
            <span className="reddg-text19"> Jumat            08:00-17:00</span>
            <br className="reddg-text20"></br>
            <span className="reddg-text21"> Sabtu            08:00-17:00</span>
            <br className="reddg-text22"></br>
            <span className="reddg-text23"> MInggu         LIBUR</span>
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
          <div className="reddg-btn-group">
            <a
              href="https://api.whatsapp.com/send?phone=+6285320039886&amp;text=Halo Dengan Agus Lio Ban Ada Yang Bisa Dibantu"
              target="_blank"
              rel="noreferrer noopener"
              className="reddg-link button"
            >
              Get Started
            </a>
            <Link to="/" className="reddg-navlink button">
              Learn More
            </Link>
          </div>
        </div>
        <div>
          <Script
            html={`<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15848.268382996222!2d108.1677436!3d-6.7616735!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xec3aaaf92eda165b!2sREDDG%20BRAWIJAYA%20AUTO%20SERVICE!5e0!3m2!1sid!2sid!4v1671503488113!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
`}
          ></Script>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Reddg
