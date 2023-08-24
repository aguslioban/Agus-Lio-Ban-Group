import React from 'react'

import { Helmet } from 'react-helmet'

import HeaderFull from '../components/header-full'
import FeatureCard2 from '../components/feature-card2'
import Footer from '../components/footer'
import './tune-up.css'

const TuneUp = (props) => {
  return (
    <div className="tune-up-container">
      <Helmet>
        <title>Tune-Up - Agus Lio Ban Group</title>
        <meta
          name="description"
          content="Website Resmi  Agus Lio Ban Group, Bengkel Mobil Subang, Toko Ban Subang, Sparepart Subang, bengkel mobil subang. bengkel mobil dekat tol cipali, tomo bridgestone, "
        />
        <meta property="og:title" content="Tune-Up - Agus Lio Ban Group " />
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
      <div className="tune-up-features">
        <h1 className="tune-up-text">Manfaat Tune Up Mesin Mobil</h1>
        <div className="tune-up-container1">
          <FeatureCard2
            title="1. Performa mesin lebih optimal"
            description="Seperti yang kita ketahui bahwa mobil yang digunakan terus menerus akan menurunkan performanya. Padahal, menjaga performa mesin adalah hal yang sangat penting. Melakukan tune up secara rutin tidak hanya menjaga performa mesin mobil, tetapi juga meningkatkan tenaga yang dihasilkan. Hal yang utama saat melakukan tune up mobil adalah pengecekan bagian mesin."
            rootClassName="rootClassName"
          ></FeatureCard2>
          <FeatureCard2
            title="3. Menjaga performa komponen"
            description="Apabila di atas kita membahas tentang performa mesin secara keseluruhan, manfaat tune up mobil selanjutnya adalah menjaga performa komponen. Karena ketika melakukan tune up  setiap komponen akan dilihat dan dicek secara mendetail. Oleh karena itu, perlu dipastikan bahwa kerja komponen tetap stabil dan berfungsi dengan baik. Sehingga berkendara pun menjadi lebih aman dan tentu saja nyaman."
            rootClassName="rootClassName3"
          ></FeatureCard2>
          <FeatureCard2
            title="2. Memastikan fungsi filter udara dan celah katup"
            description="Selain komponen mesin, komponen filter udara juga menjadi fokus ketika melakukan tune up. Ketika tune up, filter udara akan dibersihkan. Pasalnya filter udara yang bermasalah juga akan berpengaruh terhadap performa mesin."
            rootClassName="rootClassName2"
          ></FeatureCard2>
          <FeatureCard2
            title="4. Menghindari kerusakan yang lebih parah"
            description="Dengan menjaga dan memastikan komponen mesin mobil, maka kerusakan akan bisa dihindari sejak awal. Komponen yang rusak dan tidak segera diperbaiki karena tidak ketahuan akan membuat kerusakan lebih parah.  Jadi, apabila terasa ada masalah pada komponen maupun tidak, kamu tetap perlu melakukan tune up. Jika memang merasakan masalah pada mesin mobil, kamu bisa menjelaskannya kepada pihak bengkel agar bengkel segera mengecek kondisi sesuai dengan gejala yang kamu ceritakan."
            rootClassName="rootClassName1"
          ></FeatureCard2>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default TuneUp
