import React from 'react'

import { Helmet } from 'react-helmet'

import HeaderFull from '../components/header-full'
import FeatureCard2 from '../components/feature-card2'
import Footer from '../components/footer'
import './ac-lax.css'

const AcLax = (props) => {
  return (
    <div className="ac-lax-container">
      <Helmet>
        <title>Ac-Lax - Agus Lio Ban Group</title>
        <meta
          name="description"
          content="Website Resmi  Agus Lio Ban Group, Bengkel Mobil Subang, Toko Ban Subang, Sparepart Subang, bengkel mobil subang. bengkel mobil dekat tol cipali, tomo bridgestone, "
        />
        <meta property="og:title" content="Ac-Lax - Agus Lio Ban Group " />
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
      <div className="ac-lax-features">
        <h1 className="ac-lax-text">AC LAX</h1>
        <div className="ac-lax-container1">
          <FeatureCard2
            title="1.Flushing"
            description="Seperti sudah dijelaskan di atas, Mesin Flushing Lax mempunyai kemampuan membersihkan oli yang terdapat di bagian sistem AC hingga 100 persen, dengan teknologi kekinian yang terkomputerisasi. Tanpa perlu bongkar pasang. Fungsi AC mobil dapat kembali pada performa terbaiknya sebagai mesin pendingin."
            rootClassName="rootClassName"
          ></FeatureCard2>
          <FeatureCard2
            title="3.Vacuum"
            description="Mesin Flushing Lax juga mempunyai kemampuan menyedot yang mumpuni, dengan 2 pompa yang berkemampuan menyedot hingga 100mmTorr, sehingga dapat melahap segala macam sumbatan yang ada di sistem AC Mobil."
            rootClassName="rootClassName3"
          ></FeatureCard2>
          <FeatureCard2
            title="2.Recovery"
            description="Selain membersihkan oli bekas dari sistem AC mobil. Mesin Flushing Lax juga mampu menarik refrigerant dari sistem AC Mobil. Kemudian langsung ditampung di cylinder yang terdapat pada bagian mesin LAX, sehingga tidak akan mengkontaminasi lingkungan."
            rootClassName="rootClassName2"
          ></FeatureCard2>
          <FeatureCard2
            title="4.Charging"
            description="Ketepatan dalam pengisian refrigerant dan oil adalah hal penting yang penting diperhatikan. Terlalu kurang atau terlalu lebih dalam pengisian, tentu akan berakibat pada tidak maksimalnya kinerja pada sistem AC Mobil. Nah, Mesin Flushing Lax dengan sistem komputerisasinya mampu melakukan hal ini dengan tingkat akurasi tinggi, sesuai dengan standar pengisian refrigerant dan oil sesuai standard pabrikan."
            rootClassName="rootClassName1"
          ></FeatureCard2>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default AcLax
