import React from 'react'

import { Helmet } from 'react-helmet'

import HeaderFull from '../components/header-full'
import FeatureCard41 from '../components/feature-card41'
import Footer from '../components/footer'
import './cars-wash.css'

const CarsWash = (props) => {
  return (
    <div className="cars-wash-container">
      <Helmet>
        <title>Cars-Wash - Agus Lio Ban Group</title>
        <meta
          name="description"
          content="Website Resmi  Agus Lio Ban Group, Bengkel Mobil Subang, Toko Ban Subang, Sparepart Subang, bengkel mobil subang. bengkel mobil dekat tol cipali, tomo bridgestone, "
        />
        <meta property="og:title" content="Cars-Wash - Agus Lio Ban Group " />
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
      <div className="cars-wash-features">
        <h1 className="cars-wash-text">CARS WASH MOBIL</h1>
        <div className="cars-wash-separator"></div>
        <div className="cars-wash-container1">
          <div className="cars-wash-container2">
            <FeatureCard41 rootClassName="rootClassName1"></FeatureCard41>
            <FeatureCard41
              title="membersihkan kaca mobil"
              description="Membuat Kaca Mobil Menjadi Lebih Bersih dan Bebas dari Jamur"
              rootClassName="rootClassName4"
            ></FeatureCard41>
            <FeatureCard41
              title="membersihakan mobil dari kuman"
              description="Membuat Mobil Lebih wangi dan bersih dari Kuman"
              rootClassName="rootClassName3"
            ></FeatureCard41>
            <FeatureCard41
              title="fogging"
              description="Membersihkan kabin Mobil dan membuat lebih wangi dan segar"
              rootClassName="rootClassName2"
            ></FeatureCard41>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fGNhcnMlMjB3YXNofGVufDB8fHx8MTY2OTc3NDAxOQ&amp;ixlib=rb-4.0.3&amp;w=500"
            className="cars-wash-image"
          />
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default CarsWash
