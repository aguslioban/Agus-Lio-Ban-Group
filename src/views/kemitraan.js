import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import HeaderFull from '../components/header-full'
import Footer from '../components/footer'
import './kemitraan.css'

const Kemitraan = (props) => {
  return (
    <div className="kemitraan-container">
      <Helmet>
        <title>Kemitraan - Agus Lio Ban Group</title>
        <meta
          name="description"
          content="Website Resmi  Agus Lio Ban Group, Bengkel Mobil Subang, Toko Ban Subang, Sparepart Subang, bengkel mobil subang. bengkel mobil dekat tol cipali, tomo bridgestone, "
        />
        <meta property="og:title" content="Kemitraan - Agus Lio Ban Group " />
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
      <div className="kemitraan-banner">
        <span className="kemitraan-text">AGUS LIO BAN GROUP</span>
        <h1 className="kemitraan-text01">KEMITRAAN AGUS LIO BAN GROUP</h1>
        <span className="kemitraan-text02">
          Kami Membuka Kemitraan bengkel agus lio ban group
        </span>
        <div className="kemitraan-container1">
          <input
            type="text"
            placeholder="Email here..."
            className="kemitraan-textinput input"
          />
          <a
            href="mailto:agusliobanpromo@gmail.com?subject="
            className="kemitraan-link button"
          >
            Subscribe
          </a>
        </div>
      </div>
      <div className="kemitraan-banner1">
        <h2 className="kemitraan-text03">
          Hadir dengan konsep bengkel yang bengkel mobil modern dengan
          spesialisasi Spooring Balancing, Finish Balance, Tune Up, Ganti Oli,
          Flushing Oli Matic, Service Ac, CarsWash Menyediakan berbagai layanan
          perawatan mobil profesional, dengan peralatan berteknologi tinggi dan
          teknisi yang ahli untuk atasi permasalahan mobil secara maksimal. Dan
          sudah tersertifikasi dari Astra dan Hbba
        </h2>
        <Link to="/profile" className="kemitraan-navlink button">
          Learn More
        </Link>
      </div>
      <img
        alt="image"
        src="/tanpa%20judul%20%5B1920%20%C3%97%201080%20piksel%5D%20%5B6%5D-1000w.png"
        className="kemitraan-image"
      />
      <div className="kemitraan-banner2">
        <span className="kemitraan-text04">
          MITRA DAN CABANG AGUS LIO BAN GROUP
        </span>
        <h1 className="kemitraan-text05">Learn to keep it simple</h1>
        <span className="kemitraan-text06">
          <span>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              volutpat turpis.
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
          <span>
            <span>
              Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor.
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
        </span>
        <div className="kemitraan-container2">
          <input
            type="text"
            placeholder="Email here..."
            className="kemitraan-textinput1 input"
          />
          <button className="kemitraan-button button">Subscribe</button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Kemitraan
