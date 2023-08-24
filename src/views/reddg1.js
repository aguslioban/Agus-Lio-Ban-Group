import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import HeaderFull from '../components/header-full'
import Footer from '../components/footer'
import './reddg1.css'

const Reddg1 = (props) => {
  return (
    <div className="reddg1-container">
      <Helmet>
        <title>Reddg1 - Agus Lio Ban Group</title>
        <meta
          name="description"
          content="Website Resmi  Agus Lio Ban Group, Bengkel Mobil Subang, Toko Ban Subang, Sparepart Subang, bengkel mobil subang. bengkel mobil dekat tol cipali, tomo bridgestone, "
        />
        <meta property="og:title" content="Reddg1 - Agus Lio Ban Group " />
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
      <div className="reddg1-hero">
        <div className="reddg1-container1">
          <h1 className="reddg1-text">REDGG GANDASARI MAJALENGKA</h1>
          <span className="reddg1-text01">
            <span>AGUS LIO BAN</span>
            <br></br>
            <span>
              Jl. Raya Cirebon - Bandung, Gandasari, Kec. Kasokandel, Kabupaten
              Majalengka
            </span>
            <br></br>
            <br></br>
            <br></br>
            <span>agusliobanpromo@gmail.com</span>
            <br></br>
            <span>Jam Operasional Toko : Buka</span>
            <br></br>
            <span className="reddg1-text12">
               Senin              08:00-17:00
            </span>
            <br className="reddg1-text13"></br>
            <span className="reddg1-text14">
               Selasa            08:00-17:00
            </span>
            <br className="reddg1-text15"></br>
            <span className="reddg1-text16">
               Rabu              08:00-17:00
            </span>
            <br className="reddg1-text17"></br>
            <span className="reddg1-text18"> Kamis            08:00-17:00</span>
            <br className="reddg1-text19"></br>
            <span className="reddg1-text20"> Jumat            08:00-17:00</span>
            <br className="reddg1-text21"></br>
            <span className="reddg1-text22"> Sabtu            08:00-17:00</span>
            <br className="reddg1-text23"></br>
            <span className="reddg1-text24"> MInggu         LIBUR</span>
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
          <div className="reddg1-btn-group">
            <a
              href="https://api.whatsapp.com/send?phone=+6285320039886&amp;text=Halo Dengan Agus Lio Ban Ada Yang Bisa Dibantu"
              target="_blank"
              rel="noreferrer noopener"
              className="reddg1-link button"
            >
              Get Started
            </a>
            <Link to="/" className="reddg1-navlink button">
              Learn More
            </Link>
          </div>
        </div>
        <div>
          <Script
            html={`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.073720074478!2d108.19592971471964!3d-6.760865495112848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f2836390e5133%3A0xcb685f12825e370b!2sBENGKEL%20MOBIL%20REDDG%20GANDASARI!5e0!3m2!1sid!2sid!4v1671503528836!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
`}
          ></Script>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Reddg1
