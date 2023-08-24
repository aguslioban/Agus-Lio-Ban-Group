import React from 'react'

import { Helmet } from 'react-helmet'

import HeaderFull from '../components/header-full'
import FeatureCard2 from '../components/feature-card2'
import Footer from '../components/footer'
import './ganti-oli.css'

const GantiOli = (props) => {
  return (
    <div className="ganti-oli-container">
      <Helmet>
        <title>Ganti-Oli - Agus Lio Ban Group</title>
        <meta
          name="description"
          content="Website Resmi  Agus Lio Ban Group, Bengkel Mobil Subang, Toko Ban Subang, Sparepart Subang, bengkel mobil subang. bengkel mobil dekat tol cipali, tomo bridgestone, "
        />
        <meta property="og:title" content="Ganti-Oli - Agus Lio Ban Group " />
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
      <div className="ganti-oli-hero">
        <div className="ganti-oli-container1">
          <h1 className="ganti-oli-text">Ganti Oli</h1>
          <span className="ganti-oli-text01">
            <span>
              Oli merupakan salah satu komponen vital pada mesin kendaraan.
              Meski punya fungsi penting, oli kerap diabaikan oleh pemilik
              kendaraan, hingga ada yang lupa menggantinya tepat waktu. Padahal
              mengganti oli mesin secara berkala memiliki beberapa manfaat.
            </span>
            <br></br>
            <span>
              Perlu diketahui, saat kendaraan terus-menerus dijalankan,
              kemampuan oli yang bekerja di mesin bakal diuji ketahanannya.
              Seiring berjalannya kendaraan, kemungkinan oli untuk menjadi tidak
              efektif dalam menstabilkan suhu kendaraan dan melindungi
              bagian-bagian penting pada mesin kendaraan kerap terjadi. Oli yang
              sudah tidak berfungsi maksimal bisa menyebabkan bagian-bagian pada
              mesin kendaraan jadi tidak terlindungi, yang pada akhirnya
              mengakibatkan gesekan hingga kerusakan pada mesin, hingga
              menyebabkan turun mesin.
            </span>
            <br></br>
            <span>
              Maka itu, penting untuk memelihara mesin kendaraan secara berkala
              dengan memakai oli yang baik dan tepat, agar kendaraan tetap
              terawat dan nyaman dijalankan. Penggantian oli secara teratur akan
              membantu mencegah terjadinya endapan dan kerak pada mesin, yang
              akhirnya mesin terjaga dengan baik.
            </span>
            <br></br>
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
          <div className="ganti-oli-btn-group">
            <button className="ganti-oli-button button">Get Started</button>
            <button className="ganti-oli-button1 button">Learn More</button>
          </div>
        </div>
        <div className="ganti-oli-container2">
          <img
            alt="image"
            src="data:image/jpeg;base64,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"
            className="ganti-oli-image"
          />
        </div>
      </div>
      <div className="ganti-oli-features">
        <h1 className="ganti-oli-text10">Kapan Dilakukannya Ganti Oli ?</h1>
        <div className="ganti-oli-container3">
          <FeatureCard2
            title="1. Perubahan Warna pada Oli"
            description="Melihat perubahan warna oli bisa dijadikan langkah yang tepat untuk memeriksa apakah  perlu melakukan ganti oli mobil. Bagaimana tandanya? Jika oli sudah berubah warna menjadi hitam dan bertekstur encer, itu artinya oli sudah tidak bagus untuk dipakai dan harus segera diganti."
            rootClassName="rootClassName"
          ></FeatureCard2>
          <FeatureCard2
            title="3. Mesin Terasa Kasar"
            description="Cara mudah lainnya yaitu apabila Tu menyadari bahwa getaran mesin mobil terasa kasar tidak seperti biasanya. Ini adalah pertanda bahwa perlu ganti oli mobil. Setelah mengganti oli, getaran mesin mobil akan terasa berbeda dan cenderung lebih mulus dibandingkan saat sebelum diganti."
            rootClassName="rootClassName3"
          ></FeatureCard2>
          <FeatureCard2
            title="2. Memeriksa Tongkat Pengukur Oli"
            description="Kedua, memeriksa tongkat pengukur oli mesin. Sebelum memeriksanya, pastikan mesin mobil dalam keadaan mati dan dingin. Lalu, buka kap mobil, akan menemukan tongkat pengukur yang terhubung dengan tangki oli."
            rootClassName="rootClassName2"
          ></FeatureCard2>
          <FeatureCard2
            title="4. Tanda Peringatan Ganti Oli Menyala"
            description="Pada mobil generasi terbaru, terdapat tanda peringatan ganti oli yang biasanya muncul pada speedometer. Tanda peringatan ini akan menyala saat tekanan oli sudah dirasa cukup rendah. Jika sudah begini, harus segera ke bengkel untuk mengganti oli."
            rootClassName="rootClassName1"
          ></FeatureCard2>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default GantiOli
