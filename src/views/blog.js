import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import HeaderFull from '../components/header-full'
import BlogPostCard2 from '../components/blog-post-card2'
import BlogCard from '../components/blog-card'
import Footer from '../components/footer'
import './blog.css'

const Blog = (props) => {
  return (
    <div className="blog-container">
      <Helmet>
        <title>Blog - Agus Lio Ban Group</title>
        <meta
          name="description"
          content="Website Resmi  Agus Lio Ban Group, Bengkel Mobil Subang, Toko Ban Subang, Sparepart Subang, bengkel mobil subang. bengkel mobil dekat tol cipali, tomo bridgestone, "
        />
        <meta property="og:title" content="Blog - Agus Lio Ban Group " />
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
      <div className="blog-banner">
        <span className="blog-text">AGUS LIO BAN GROUP</span>
        <h1 className="blog-text1">BLOG &amp; BERITA</h1>
        <span className="blog-text2">
          Berisi tentang berita dan tips seputar dunia otomotif dan juga
          kegiatan kegiatan seputar agus lio ban group
        </span>
        <div className="blog-container1">
          <input
            type="text"
            placeholder="Email here..."
            className="blog-textinput input"
          />
          <button className="blog-button button">Subscribe</button>
        </div>
      </div>
      <div className="blog-blog">
        <Link to="/news5" className="blog-navlink">
          <BlogPostCard2
            label="NEWS"
            title="FAMILY GATHERING AGUS LIO BAN GROUP KE TAMAN SAFARI INDONESIA"
            image_src="/lelang%20ban%20achiles%2018555%20r16%20(10)-1500w.png"
            description="Halo Sob, Pada hari Rabu, 16 Agustus 2023. Agus Lio Ban Group Mengadakan family gathering di Taman Safari. Acara ini diikuti oleh seluruh karyawan dan keluarga dari perusahaan."
            profile_src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
            rootClassName="rootClassName2"
            className="blog-component1"
          ></BlogPostCard2>
        </Link>
        <div className="blog-container2">
          <Link to="/news" className="blog-navlink1">
            <BlogPostCard2
              label="NEWS"
              title="GERAKAN WAKAF RUTIN BAGI KARYAWAN AGUS LIO BAN GROUP"
              image_src="/new-project-1500w.jpg"
              description="Agus Lio Ban Group merupakan perusahaan yang mempunyai perhatian tinggi terhadap SDM. Perhatian ini meliputi aspek skill dan kepribadian. Salah satu misi perusahaan Agus Lio Ban adalah menjadi perusahaan dengan SDM yang memiliki skill keahlian yang mumpuni, akhlak kepribadian yang terpuji serta spiritualitas yang tinggi."
              profile_src="https://agusliobangroup.files.wordpress.com/2022/11/new-project.jpg"
              rootClassName="rootClassName3"
              className="blog-component2"
            ></BlogPostCard2>
          </Link>
          <Link to="/news3" className="blog-navlink2">
            <BlogPostCard2
              label="NEWS"
              title="ANNUAL MEETING AGUS LIO BAN GROUP 2022"
              description="Agus Lio Ban Group Berhasil Melaksanakan Annual Meeting 2022, pada tanggal 26 - 27 November Yang berlokasi di Bandung Jawa Barat, Bersama seluruh Kepala cabang dan Jajaran Staf Manager Head Office Agus Lio Ban    Annual Meeting Kali Ini Agus Lio Ban berfokus pada meningkatkan iso pada perusahaan, Struktur organisasi yang jelas,  Mempunyai SOP dalam setiap Divisi perusahaan, Menjaga Kekompakan Team, dilain itu CEO Agus Lio Ban Group H.Agus Maulana Juga Menekankan Bagaimana Kepala Cabang dan Customer Lebih Menyatu."
              profile_src="https://images.unsplash.com/photo-1611232658409-0d98127f237f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
              rootClassName="rootClassName3"
              className="blog-component3"
            ></BlogPostCard2>
          </Link>
        </div>
        <div className="blog-container3">
          <Link to="/news1" className="blog-navlink3">
            <BlogPostCard2
              label="NEWS"
              title="Pembangunan Gontor Auto Service (GAS) Sudah Mencapai 90 Persen"
              image_src="https://agusliobangroup.files.wordpress.com/2022/11/new-project.png?w=1024"
              description="Pembangunan Gontor Auto Service (GAS) kini sudah mencapai 90 persen. (GAS) merupakan unit usaha bengkel mobil dan toko ban yang berlokasi di Jalan Sultan Agung Ponorogo. Sesuai rencana, pada pertengahan Januari 2023 nanti, sudah bisa beroperasi dan diresmikan."
              profile_src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
              rootClassName="rootClassName"
              className="blog-component4"
            ></BlogPostCard2>
          </Link>
        </div>
        <div className="blog-blog-posts">
          <h1 className="blog-text3 HeadingTwo">
            <span></span>
            <span>Check my latest blogposts</span>
            <br></br>
          </h1>
          <div className="blog-container4">
            <Link to="/blog" className="blog-navlink4">
              <BlogCard
                new_prop="GERAKAN WAKAF RUTIN BAGI KARYAWAN AGUS LIO BAN GROUP"
                image_src="https://agusliobangroup.files.wordpress.com/2022/11/raw-photo.png?w=1024"
                description="Agus Lio Ban Group merupakan perusahaan yang mempunyai perhatian tinggi terhadap SDM. Perhatian ini meliputi aspek skill dan kepribadian. Salah satu misi perusahaan Agus Lio Ban adalah menjadi perusahaan dengan SDM yang memiliki skill keahlian yang mumpuni, akhlak kepribadian yang terpuji serta spiritualitas yang tinggi."
                className="blog-component5"
              ></BlogCard>
            </Link>
            <Link to="/blog" className="blog-navlink5">
              <BlogCard
                new_prop="Pembangunan Gontor Auto Service (GAS) Sudah Mencapai 90 Persen"
                image_src="https://agusliobangroup.files.wordpress.com/2022/11/new-project.png?w=1024"
                description="Pembangunan Gontor Auto Service (GAS) kini sudah mencapai 90 persen. (GAS) merupakan unit usaha bengkel mobil dan toko ban yang berlokasi di Jalan Sultan Agung Ponorogo. Sesuai rencana, pada pertengahan Januari 2023 nanti, sudah bisa beroperasi dan diresmikan."
                className="blog-component6"
              ></BlogCard>
            </Link>
            <Link to="/blog" className="blog-navlink6">
              <BlogCard
                title="MateLabs machine learning"
                new_prop="KENALI 5 PENYEBAB  WIPER MOBIL HARUS DIGANTI"
                image_src="https://otoklix-production.s3.amazonaws.com/uploads/2021/11/wiper-mobil-terbaik.jpg"
                description="Indikator wiper mobil harus diganti baru bisa dilihat dari kinerjanya yang tanpa suara. Jika terdengar suara berdecit saat dipakai, kemungkinan adanya kerusakan bisa terjadi. Bunyi berdecit ini bisa muncul karena plastik di wiper terseret, sehingga menekan kaca"
                className="blog-component7"
              ></BlogCard>
            </Link>
            <div className="blog-container5">
              <Link to="/blog" className="blog-navlink7">
                <div className="blog-card">
                  <div className="blog-container6">
                    <h1 className="blog-text6">Blog &amp; News</h1>
                    <span className="blog-text7">
                      Dapatkan Berita Terbaru Seputar Agus Lio Ban Group dan
                      Juga tips seputar perawatan mobil
                    </span>
                    <div className="blog-container7">
                      <button className="blog-button1 button">
                        <span className="blog-text8">Read more</span>
                        <svg viewBox="0 0 1024 1024" className="blog-icon">
                          <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="blog-container8"></div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Blog
