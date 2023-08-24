import React from 'react'

import { Helmet } from 'react-helmet'

import HeaderFull from '../components/header-full'
import FeatureCard41 from '../components/feature-card41'
import Footer from '../components/footer'
import './flushing-oli-matic.css'

const FlushingOliMatic = (props) => {
  return (
    <div className="flushing-oli-matic-container">
      <Helmet>
        <title>Flushing-Oli-Matic - Agus Lio Ban Group</title>
        <meta
          name="description"
          content="Website Resmi  Agus Lio Ban Group, Bengkel Mobil Subang, Toko Ban Subang, Sparepart Subang, bengkel mobil subang. bengkel mobil dekat tol cipali, tomo bridgestone, "
        />
        <meta
          property="og:title"
          content="Flushing-Oli-Matic - Agus Lio Ban Group "
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
      <div className="flushing-oli-matic-features">
        <h1 className="flushing-oli-matic-text">FLUSHING OLI MATIC</h1>
        <div className="flushing-oli-matic-separator"></div>
        <div className="flushing-oli-matic-container1">
          <div className="flushing-oli-matic-container2">
            <FeatureCard41
              title="Meminimalkan masalah pada mesin"
              description="Manfaat kuras oli pada mobil matik yang pertama adalah dapat meminimalisir masalah pada mesin. Ketika Anda menguras oli, kotoran yang ada pada wadah oli akan bersih kembali. Sebab oli yang terkontaminasi kotoran tidak memberikan tenaga dan pelumasan pada transmisi kendaraan."
              rootClassName="rootClassName1"
            ></FeatureCard41>
            <FeatureCard41
              title="Bahan bakar lebih ekonomis"
              description="Menguras dan mengganti oli secara rutin dapat membuat mesin bekerja lebih mulus dan dapat menghemat bahan bakar. Terutama untuk kendaraan yang melakukan perjalanan jarak jauh."
              rootClassName="rootClassName4"
            ></FeatureCard41>
            <FeatureCard41
              title="Mesin bekerja lebih optimal"
              description="Menguras oli dapat membuat cairan transmisi lebih baru dan mesin terlumasi dengan baik. Dengan begitu mesin mobil Anda akan bekerja dengan baik dan efisien."
              rootClassName="rootClassName3"
            ></FeatureCard41>
            <FeatureCard41
              title="Menghemat pengeluaran"
              description="Ketika Anda rutin menguras dan mengganti oli secara berkala, otomatis masalah mobil akan lebih minim dan Anda tidak membutuhkan biaya besar untuk mengatasi masalah kerusakan. Cara ini akan membantu meningkatkan umur kendaraan Anda."
              rootClassName="rootClassName2"
            ></FeatureCard41>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1623000411403-f859051cce71?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fG9pbCUyMGNhcnxlbnwwfHx8fDE2Njk3Nzk5NzA&amp;ixlib=rb-4.0.3&amp;w=500"
            className="flushing-oli-matic-image"
          />
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default FlushingOliMatic
