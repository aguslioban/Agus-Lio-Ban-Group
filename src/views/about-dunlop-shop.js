import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import HeaderFull from '../components/header-full'
import PrimaryPinkButton from '../components/primary-pink-button'
import OutlineGrayButton from '../components/outline-gray-button'
import BlogPostCard15 from '../components/blog-post-card15'
import BlogPostCard1 from '../components/blog-post-card1'
import './about-dunlop-shop.css'

const AboutDunlopShop = (props) => {
  return (
    <div className="about-dunlop-shop-container">
      <Helmet>
        <title>About-Dunlop-Shop - Agus Lio Ban Group</title>
        <meta
          name="description"
          content="Website Resmi  Agus Lio Ban Group, Bengkel Mobil Subang, Toko Ban Subang, Sparepart Subang, bengkel mobil subang. bengkel mobil dekat tol cipali, tomo bridgestone, "
        />
        <meta
          property="og:title"
          content="About-Dunlop-Shop - Agus Lio Ban Group "
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
      <Link to="/kemitraan" className="about-dunlop-shop-navlink">
        <HeaderFull className="about-dunlop-shop-component"></HeaderFull>
      </Link>
      <div className="about-dunlop-shop-hero">
        <div className="about-dunlop-shop-container01"></div>
        <div className="about-dunlop-shop-card">
          <h1 className="about-dunlop-shop-text">SELAMAT DATANG </h1>
          <h1 className="about-dunlop-shop-text1">
            DI DUNLOP SHOP AGUS LIO BAN GROUP
          </h1>
          <span className="about-dunlop-shop-text2">
            <span className="about-dunlop-shop-text3">
              Agus Lio Ban adalah bengkel mobil modern dengan spesialisasi
              Spooring Balancing, Finish Balance, Tune Up, Ganti Oli, Flushing
              Oli Matic, Service Ac, CarsWash 
            </span>
            <span className="about-dunlop-shop-text4">
              Menyediakan berbagai layanan perawatan mobil profesional, dengan
              peralatan berteknologi tinggi dan teknisi yang ahli,
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="about-dunlop-shop-text5">
              untuk atasi permasalahan mobil secara maksimal.
            </span>
          </span>
          <div className="about-dunlop-shop-container02">
            <div className="about-dunlop-shop-container03">
              <a
                href="https://api.whatsapp.com/send?phone=+6285320039886&amp;text=Halo Dengan Agus Lio Ban Ada Yang Bisa Dibantu"
                target="_blank"
                rel="noreferrer noopener"
                className="about-dunlop-shop-link"
              >
                <PrimaryPinkButton
                  Button="contact us"
                  className="about-dunlop-shop-component01"
                ></PrimaryPinkButton>
              </a>
            </div>
            <Link to="/profile" className="about-dunlop-shop-navlink01">
              <OutlineGrayButton
                button="read more"
                className="about-dunlop-shop-component02"
              ></OutlineGrayButton>
            </Link>
          </div>
          <div className="about-dunlop-shop-container04">
            <img
              alt="image"
              src="/bs-removebg-preview%20%5B1%5D-500h.png"
              className="about-dunlop-shop-image"
            />
            <img
              alt="image"
              src="/dunlop-removebg-preview-500h.png"
              className="about-dunlop-shop-image1"
            />
            <img
              alt="image"
              src="https://seeklogo.com/images/T/top-1-logo-5C595830FD-seeklogo.com.png"
              className="about-dunlop-shop-image2"
            />
            <img
              alt="image"
              src="/en-removebg-preview-500h.png"
              className="about-dunlop-shop-image3"
            />
          </div>
        </div>
      </div>
      <div className="about-dunlop-shop-blog">
        <div className="about-dunlop-shop-container05">
          <Link
            to="/agus-lio-ban-kalijati"
            className="about-dunlop-shop-navlink02"
          >
            <BlogPostCard15
              title="DUNLOP SHOP AGUS LIO BAN KALIJATI"
              image_src="/capture-400h.jpg"
              description="Dunlop Shop Agus Lio Ban Kalijati adalah bengkel service mobil  yang ditunjang dengan peralatan yang modern dan Mekanik yang bersertifikasi. Sehingga konsumen sudah tidak akan ragu lagi ketika services kendaraannya di Bengkel Agus Lio Ban"
              rootClassName="rootClassName1"
              className="about-dunlop-shop-component03"
            ></BlogPostCard15>
          </Link>
        </div>
        <div className="about-dunlop-shop-container06">
          <Link
            to="/agus-lio-ban-pagaden"
            className="about-dunlop-shop-navlink03"
          >
            <BlogPostCard15
              title="DUNLOP SHOP AGUS LIO BAN PAGADEN"
              image_src="/agus%20lio%20ban%20pagaden-400h.jpg"
              description="Dunlop Shop Agus Lio Ban Pagaden adalah salah satu cabang bengkel dari Agus Lio Ban Group  yang terletak di daerah Pagaden Subang, yang Melayani Service Mobil Seperti Spooring dan Balancing, Tune Up, Ganti Oli, Ganti Ban, Velg, peralatan yang modern dan Mekanik yang bersertifikasi. "
              rootClassName="rootClassName5"
              className="about-dunlop-shop-component04"
            ></BlogPostCard15>
          </Link>
        </div>
        <div className="about-dunlop-shop-container07"></div>
      </div>
      <div className="about-dunlop-shop-banner">
        <h1 className="about-dunlop-shop-text6">LAYANAN SERVICE</h1>
        <span className="about-dunlop-shop-text7">
          Cek kondisi mobil kesayangan Anda agar terhindar dari kerusakan parah
          dan membuat biaya perbaikannya makin mahal. Periksa kondisi komponen
          mobil Anda hingga di 32 titik dengan General Checkup di Agus Lio Ban !
        </span>
        <div className="about-dunlop-shop-btn-group">
          <a
            href="https://api.whatsapp.com/send?phone=+6285320039886&amp;text=Halo Dengan Agus Lio Ban Ada Yang Bisa Dibantu"
            autoFocus
            target="_blank"
            rel="noreferrer noopener"
            className="about-dunlop-shop-link1 button"
          >
            Get Started
          </a>
          <button className="about-dunlop-shop-button button">
            Learn More
          </button>
        </div>
        <div className="about-dunlop-shop-blog1">
          <div className="about-dunlop-shop-container08">
            <Link to="/spooring" className="about-dunlop-shop-navlink04">
              <BlogPostCard1
                label="SPOORING"
                title="SPOORING 3D "
                description="Fungsi Spooring Untuk menyelaraskan atau menyeimbangkan posisi roda kanan dan kiri. Jika Anda tidak pernah melakukan perawatan ini, biasanya mobil akan terasa sedikit oleng dan yang sudah parah mobil terasa berat sebelah. Gangguan pada setir pun akan muncul bila tidak teratur melakukan spooring balancing"
                rootClassName="rootClassName10"
                className="about-dunlop-shop-component05"
              ></BlogPostCard1>
            </Link>
          </div>
          <div className="about-dunlop-shop-container09">
            <Link to="/spooring" className="about-dunlop-shop-navlink05">
              <BlogPostCard1
                label="BALANCING"
                title="SERVICE BALANCING"
                image_src="https://images.unsplash.com/photo-1599082267768-4815b2ea6bd2?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dHlyZXN8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
                description="Fungsi balancing mobil selanjutnya untuk menjaga keempat ban bekerja sempurna saat menapak di jalan. Dengan balancing semua ban akan diatur pada posisi yang sama sehingga dapat menapak di jalan dengan baik secara bersamaan."
                profile_src="https://images.unsplash.com/photo-1599082267768-4815b2ea6bd2?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dHlyZXN8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
                rootClassName="rootClassName11"
                className="about-dunlop-shop-component06"
              ></BlogPostCard1>
            </Link>
          </div>
          <div className="about-dunlop-shop-container10">
            <Link to="/tune-up" className="about-dunlop-shop-navlink06">
              <BlogPostCard1
                label="TUNEUP"
                title="TUNEUP"
                image_src="https://otoklix-production.s3.amazonaws.com/uploads/2021/11/tune-up-mobil-injeksi.jpg"
                description="Untuk memastikan fungsi dari filter udara dan celah katup tetap optimal. Sebab, dengan melakukan perawatan seperti ini, maka fungsi dari saringan udara dalam mesin akan selalu terjaga dengan baik. Pastikan Selalu Service di Agus Lio Ban karena mekaniknya sudah tersertifikasi  Ingat Service, Ingat Agus Lio Ban"
                rootClassName="rootClassName12"
                className="about-dunlop-shop-component07"
              ></BlogPostCard1>
            </Link>
          </div>
        </div>
        <div className="about-dunlop-shop-blog2">
          <div className="about-dunlop-shop-container11">
            <Link to="/ganti-oli" className="about-dunlop-shop-navlink07">
              <BlogPostCard1
                label="SPOORING"
                title="GANTI OLI"
                image_src="https://d2fgf7u961ce77.cloudfront.net/uploads/news/20952739_s.jpg"
                description="Ganti oli mobil merupakan langkah perawatan mobil yang perlu dilakukan rutin, agar performa mobil tetap dalam keadaan prima. Sekalipun mobil jarang digunakan atau dengan kata lain lebih banyak di garasi, bukan berarti penggantian oli bisa ditunda atau malah nggak diganti sama sekali. "
                rootClassName="rootClassName13"
                className="about-dunlop-shop-component08"
              ></BlogPostCard1>
            </Link>
          </div>
          <div className="about-dunlop-shop-container12">
            <Link to="/ban" className="about-dunlop-shop-navlink08">
              <BlogPostCard1
                label="BALANCING"
                title="BAN"
                image_src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTNSDvrWYbiHVjUfGhVN7-4eCbOAM23BQSJg&amp;usqp=CAU"
                description="Setiap Mobil Mempunyai Tipe dan Ukuran Ban Yang berbeda beda, Di Agus Lio Ban Menyediakan Berbagai Jenis Ban dan Ukuran Serta Bisa Berkonsultasi Terlebih dahulu untuk menentukan Tipe Ban Yang Cocok Untuk Kendaraan Anda"
                profile_src="https://images.unsplash.com/photo-1599082267768-4815b2ea6bd2?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dHlyZXN8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
                rootClassName="rootClassName14"
                className="about-dunlop-shop-component09"
              ></BlogPostCard1>
            </Link>
          </div>
          <div className="about-dunlop-shop-container13">
            <Link to="/sparepart" className="about-dunlop-shop-navlink09">
              <BlogPostCard1
                label="TUNEUP"
                title="SPAREPART &amp; ACCESORIS"
                image_src="https://antaralogistic.com/wp-content/uploads/2021/12/15.-import-suku-cadang-spare-parts-dari-china-2022.jpg"
                description="Untuk memastikan fungsi dari filter udara dan celah katup tetap optimal. Sebab, dengan melakukan perawatan seperti ini, maka fungsi dari saringan udara dalam mesin akan selalu terjaga dengan baik. Pastikan Selalu Service di Agus Lio Ban karena mekaniknya sudah tersertifikasi  Ingat Service, Ingat Agus Lio Ban"
                rootClassName="rootClassName15"
                className="about-dunlop-shop-component10"
              ></BlogPostCard1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutDunlopShop
