import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import HeaderFull from '../components/header-full'
import BlogCard from '../components/blog-card'
import Footer from '../components/footer'
import './news.css'

const News = (props) => {
  return (
    <div className="news-container">
      <Helmet>
        <title>News - Agus Lio Ban Group</title>
        <meta
          name="description"
          content="Website Resmi  Agus Lio Ban Group, Bengkel Mobil Subang, Toko Ban Subang, Sparepart Subang, bengkel mobil subang. bengkel mobil dekat tol cipali, tomo bridgestone, "
        />
        <meta property="og:title" content="News - Agus Lio Ban Group " />
        <meta
          property="og:description"
          content="Website Resmi  Agus Lio Ban Group, Bengkel Mobil Subang, Toko Ban Subang, Sparepart Subang, bengkel mobil subang. bengkel mobil dekat tol cipali, tomo bridgestone, "
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/56305140-4ddf-4d78-8e87-f48f37c31258/7de0275f-3ee5-4de0-8a25-a289beec9dc9?org_if_sml=1"
        />
      </Helmet>
      <Link to="/kemitraan" className="news-navlink">
        <HeaderFull className="news-component"></HeaderFull>
      </Link>
      <div className="news-container01">
        <div className="news-feature-card">
          <h2 className="news-text">
            <span>NEWS</span>
            <br></br>
          </h2>
          <img
            alt="image"
            src="https://agusliobangroup.files.wordpress.com/2022/11/new-project.jpg"
            className="news-image"
          />
        </div>
      </div>
      <div className="news-container02">
        <div className="news-container03">
          <div className="news-feature-card1">
            <svg viewBox="0 0 1024 1024" className="news-icon">
              <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
            </svg>
            <div className="news-container04">
              <h2 className="news-text03">
                GERAKAN WAKAF RUTIN BAGI KARYAWAN AGUS LIO BAN GROUP
              </h2>
              <span className="news-text04">
                <span>
                  Agus Lio Ban Group merupakan perusahaan yang mempunyai
                  perhatian tinggi terhadap SDM. Perhatian ini meliputi aspek
                  skill dan kepribadian. Salah satu misi perusahaan Agus Lio Ban
                  adalah menjadi perusahaan dengan SDM yang memiliki skill
                  keahlian yang mumpuni, akhlak kepribadian yang terpuji serta
                  spiritualitas yang tinggi.
                </span>
                <br></br>
                <br></br>
                <span>
                  Salah satu program yang rutin dijalankan untuk mewujudkan misi
                  tersebut antara lain Gerakan Wakaf Karyawan yang rutin
                  dilakukan setiap bulan. Setiap karyawan diberikan penjelasan
                  tentang pentingnya beramal sholeh, berbuat baik, termasuk
                  wakaf. Tidak harus menunggu kaya untuk bisa berwakaf. Kemudian
                  karyawan diajak untuk membuat komitmen wakaf rutin setiap
                  bulan, dengan nominal sesuai dengan kesanggupan dan
                  kemampuannya. Dilakukan autodebet dari gaji yang diterima
                  setiap bulannya.
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="news-blog-posts">
        <h1 className="news-text09 HeadingTwo">
          <span></span>
          <span>Check my latest blogposts</span>
          <br></br>
        </h1>
        <div className="news-container05">
          <Link to="/blog" className="news-navlink1">
            <BlogCard
              new_prop="GERAKAN WAKAF RUTIN BAGI KARYAWAN AGUS LIO BAN GROUP"
              image_src="https://agusliobangroup.files.wordpress.com/2022/11/raw-photo.png?w=1024"
              description="Agus Lio Ban Group merupakan perusahaan yang mempunyai perhatian tinggi terhadap SDM. Perhatian ini meliputi aspek skill dan kepribadian. Salah satu misi perusahaan Agus Lio Ban adalah menjadi perusahaan dengan SDM yang memiliki skill keahlian yang mumpuni, akhlak kepribadian yang terpuji serta spiritualitas yang tinggi."
              className="news-component1"
            ></BlogCard>
          </Link>
          <Link to="/blog" className="news-navlink2">
            <BlogCard
              new_prop="Pembangunan Gontor Auto Service (GAS) Sudah Mencapai 90 Persen"
              image_src="https://agusliobangroup.files.wordpress.com/2022/11/new-project.png?w=1024"
              description="Pembangunan Gontor Auto Service (GAS) kini sudah mencapai 90 persen. (GAS) merupakan unit usaha bengkel mobil dan toko ban yang berlokasi di Jalan Sultan Agung Ponorogo. Sesuai rencana, pada pertengahan Januari 2023 nanti, sudah bisa beroperasi dan diresmikan."
              className="news-component2"
            ></BlogCard>
          </Link>
          <Link to="/blog" className="news-navlink3">
            <BlogCard
              title="MateLabs machine learning"
              new_prop="KENALI 5 PENYEBAB  WIPER MOBIL HARUS DIGANTI"
              image_src="https://otoklix-production.s3.amazonaws.com/uploads/2021/11/wiper-mobil-terbaik.jpg"
              description="Indikator wiper mobil harus diganti baru bisa dilihat dari kinerjanya yang tanpa suara. Jika terdengar suara berdecit saat dipakai, kemungkinan adanya kerusakan bisa terjadi. Bunyi berdecit ini bisa muncul karena plastik di wiper terseret, sehingga menekan kaca"
              className="news-component3"
            ></BlogCard>
          </Link>
          <div className="news-container06">
            <Link to="/blog" className="news-navlink4">
              <div className="news-card">
                <div className="news-container07">
                  <h1 className="news-text12">Blog &amp; News</h1>
                  <span className="news-text13">
                    Dapatkan Berita Terbaru Seputar Agus Lio Ban Group dan Juga
                    tips seputar perawatan mobil
                  </span>
                  <div className="news-container08">
                    <button className="news-button button">
                      <span className="news-text14">Read more</span>
                      <svg viewBox="0 0 1024 1024" className="news-icon2">
                        <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="news-container09"></div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name1"></Footer>
    </div>
  )
}

export default News
