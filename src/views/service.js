import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import HeaderFull from '../components/header-full'
import BlogPostCard1 from '../components/blog-post-card1'
import BlogPostCard11 from '../components/blog-post-card11'
import BlogPostCard12 from '../components/blog-post-card12'
import BlogPostCard13 from '../components/blog-post-card13'
import Footer from '../components/footer'
import './service.css'

const Service = (props) => {
  return (
    <div className="service-container">
      <Helmet>
        <title>Service - Agus Lio Ban Group</title>
        <meta
          name="description"
          content="Website Resmi  Agus Lio Ban Group, Bengkel Mobil Subang, Toko Ban Subang, Sparepart Subang, bengkel mobil subang. bengkel mobil dekat tol cipali, tomo bridgestone, "
        />
        <meta property="og:title" content="Service - Agus Lio Ban Group " />
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
      <div className="service-banner">
        <span className="service-text">AGUS LIO BAN GROUP</span>
        <h1 className="service-text1">LAYANAN SERVICE &amp; JASA</h1>
        <span className="service-text2">
          Jenis dan layanan Jasa Yang ada di Agus Lio Ban Group
        </span>
        <div className="service-container01">
          <input
            type="text"
            placeholder="Email here..."
            className="service-textinput input"
          />
          <a
            href="mailto:agusliobanpromo@gmail.com?subject="
            className="service-link button"
          >
            Subscribe
          </a>
        </div>
      </div>
      <div className="service-blog">
        <div className="service-container02">
          <Link to="/spooring" className="service-navlink">
            <BlogPostCard1
              label="SPOORING"
              title="SPOORING 3D "
              description="untuk menyelaraskan atau menyeimbangkan posisi roda kanan dan kiri. Jika Anda tidak pernah melakukan perawatan ini, biasanya mobil akan terasa sedikit oleng dan yang sudah parah mobil terasa berat sebelah. Gangguan pada setir pun akan muncul bila tidak teratur melakukan spooring balancing"
              rootClassName="rootClassName3"
              className="service-component01"
            ></BlogPostCard1>
          </Link>
        </div>
        <div className="service-container03">
          <Link to="/spooring" className="service-navlink01">
            <BlogPostCard1
              label="BALANCING"
              title="SERVICE BALANCING"
              image_src="https://images.unsplash.com/photo-1599082267768-4815b2ea6bd2?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dHlyZXN8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
              description="untuk menyelaraskan atau menyeimbangkan posisi roda kanan dan kiri. Jika Anda tidak pernah melakukan perawatan ini, biasanya mobil akan terasa sedikit oleng dan yang sudah parah mobil terasa berat sebelah. Gangguan pada setir pun akan muncul bila tidak teratur melakukan spooring balancing"
              profile_src="https://images.unsplash.com/photo-1599082267768-4815b2ea6bd2?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dHlyZXN8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
              rootClassName="rootClassName2"
              className="service-component02"
            ></BlogPostCard1>
          </Link>
        </div>
        <div className="service-container04">
          <Link to="/tune-up" className="service-navlink02">
            <BlogPostCard1
              label="TUNEUP"
              title="TUNEUP"
              image_src="https://otoklix-production.s3.amazonaws.com/uploads/2021/11/tune-up-mobil-injeksi.jpg"
              description="untuk memastikan fungsi dari filter udara dan celah katup tetap optimal. Sebab, dengan melakukan perawatan seperti ini, maka fungsi dari saringan udara dalam mesin akan selalu terjaga dengan baik. Pastikan Selalu Service di Agus Lio Ban karena mekaniknya sudah tersertifikasi  Ingat Service, Ingat Agus Lio Ban"
              rootClassName="rootClassName1"
              className="service-component03"
            ></BlogPostCard1>
          </Link>
        </div>
      </div>
      <div className="service-blog1">
        <div className="service-container05">
          <Link to="/ganti-oli" className="service-navlink03">
            <BlogPostCard11
              label="GANTI OLI"
              title="GANTI OLI"
              image_src="https://d2fgf7u961ce77.cloudfront.net/uploads/news/20952739_s.jpg"
              description="Ganti oli mobil merupakan langkah perawatan mobil yang perlu dilakukan rutin, agar performa mobil tetap dalam keadaan prima. Sekalipun mobil jarang digunakan atau dengan kata lain lebih banyak di garasi, bukan berarti penggantian oli bisa ditunda atau malah nggak diganti sama sekali. "
              rootClassName="rootClassName3"
              className="service-component04"
            ></BlogPostCard11>
          </Link>
        </div>
        <div className="service-container06">
          <Link to="/auto-detailing" className="service-navlink04">
            <BlogPostCard11
              label="DETAILING &amp; COATING"
              title="AUTO DETAILING &amp; COATING"
              image_src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXBH3xCXDlD27FwsCderR046wgobBj8QwUOsOct4W_5u-rph5JxZy5c_e3exCbh91FblE&amp;usqp=CAU"
              description="Manfaat pertama dari detailing kendaraan adalah melindungi bodi bagian luar dari kendaraan Anda. Setelah mendapatkan perawatan detailing, kendaraan akan terlindung oleh lapisan cat khusus. Sehingga, bodi luar tidak akan terkena debu, kotoran, dan lecet."
              rootClassName="rootClassName2"
              className="service-component05"
            ></BlogPostCard11>
          </Link>
        </div>
        <div className="service-container07">
          <Link to="/cars-wash" className="service-navlink05">
            <BlogPostCard11
              label="CARS WASH"
              title="CARS WASH"
              image_src="https://carfixo.in/wp-content/uploads/2022/05/car-wash-2.jpg"
              description="Apa manfaat mencuci mobil? Membersihkan mobil secara rutin membuat debu dan kotoran yang ada di dalam mobil selalu dalam level rendah dan mempengaruhi kualitas udara di dalam mobil. Sehingga mampu meningkatkan dan menjaga kesehatan pengemudi dan penumpangnya."
              rootClassName="rootClassName1"
              className="service-component06"
            ></BlogPostCard11>
          </Link>
        </div>
      </div>
      <div className="service-blog2">
        <div className="service-container08">
          <Link to="/ban" className="service-navlink06">
            <BlogPostCard12
              label="BAN"
              title="BAN MOBIL &amp; TRUCK"
              image_src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTNSDvrWYbiHVjUfGhVN7-4eCbOAM23BQSJg&amp;usqp=CAU"
              description="bengkel terlengkap di Kabupaten Subang yang ditunjang dengan peralatan yang modern dan Mekanik yang bersertifikasi. Sehingga konsumen sudah tidak akan ragu lagi ketika services kendaraannya di Bengkel Agus Lio Ban"
              rootClassName="rootClassName3"
              className="service-component07"
            ></BlogPostCard12>
          </Link>
        </div>
        <div className="service-container09">
          <Link to="/sparepart" className="service-navlink07">
            <BlogPostCard12
              label="SPAREPART &amp; ACCESORIS"
              title="SPAREPART &amp; ACCESORIS MOBIL"
              image_src="https://antaralogistic.com/wp-content/uploads/2021/12/15.-import-suku-cadang-spare-parts-dari-china-2022.jpg"
              description="bengkel terlengkap di Kabupaten Subang yang ditunjang dengan peralatan yang modern dan Mekanik yang bersertifikasi. Sehingga konsumen sudah tidak akan ragu lagi ketika services kendaraannya di Bengkel Agus Lio Ban"
              rootClassName="rootClassName2"
              className="service-component08"
            ></BlogPostCard12>
          </Link>
        </div>
        <div className="service-container10">
          <Link to="/bubut-piringan-rem" className="service-navlink08">
            <BlogPostCard12
              label="BUBUT PIRINGAN REM"
              title="BUBUT PIRINGAN REM"
              image_src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwpL3y857jQcjmS8FQt2_XP8LHj4tgugQaPQ&amp;usqp=CAU"
              description="Bubut cakram berfungsi untuk meratakan permukaan piringan rem. Permukaan piringan rem yang bergelombang akan mengurangi kemampuan kerja dari sistem pengereman.  membubut piringan rem adalah hal yang sah-sah saja, selama masih sesuai dengan ketebalan piringan rem yang dianjurkan."
              rootClassName="rootClassName1"
              className="service-component09"
            ></BlogPostCard12>
          </Link>
        </div>
      </div>
      <div className="service-blog3">
        <div className="service-container11">
          <Link to="/ac-lax" className="service-navlink09">
            <BlogPostCard13
              label="AC LAX"
              title="AC LAX"
              image_src="data:image/jpeg;base64,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"
              description="Mesin Flushing Lax adalah sebuah Mesin yang memiliki teknologi teranyar untuk merawat, membersihkan sistem AC Mobil, serta menguras Oli Compressor hingga 100 persen, tanpa harus melakukan bongkar pasang pada bagian sistem AC. Dalam urusan service AC Mobil, mesin dengan brand LAX ini adalah jagoannya."
              rootClassName="rootClassName3"
              className="service-component10"
            ></BlogPostCard13>
          </Link>
        </div>
        <div className="service-container12">
          <Link to="/flushing-oli-matic" className="service-navlink10">
            <BlogPostCard13
              label="FLUSHING OLI MATIC"
              title="FLUSHING OLI MATIC"
              image_src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//108/MTA-7928739/heshbon_heshbon_full01.jpg"
              description="Manfaat kuras oli pada mobil matik yang pertama adalah dapat meminimalisir masalah pada mesin. Ketika Anda menguras oli, kotoran yang ada pada wadah oli akan bersih kembali. Sebab oli yang terkontaminasi kotoran tidak memberikan tenaga dan pelumasan pada transmisi kendaraan."
              rootClassName="rootClassName2"
              className="service-component11"
            ></BlogPostCard13>
          </Link>
        </div>
        <div className="service-container13">
          <BlogPostCard13
            label="VELG  BAN"
            title="VELG BAN"
            image_src="https://img.freepik.com/premium-photo/generic-brandless-modern-sport-car_110488-1758.jpg?w=2000"
            description="bengkel terlengkap di Kabupaten Subang yang ditunjang dengan peralatan yang modern dan Mekanik yang bersertifikasi. Sehingga konsumen sudah tidak akan ragu lagi ketika services kendaraannya di Bengkel Agus Lio Ban"
            rootClassName="rootClassName1"
          ></BlogPostCard13>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Service
