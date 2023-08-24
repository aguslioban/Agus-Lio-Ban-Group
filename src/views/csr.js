import React from 'react'

import { Helmet } from 'react-helmet'

import HeaderFull from '../components/header-full'
import FeatureCard22 from '../components/feature-card22'
import BlogPostCard14 from '../components/blog-post-card14'
import Footer from '../components/footer'
import './csr.css'

const CSR = (props) => {
  return (
    <div className="csr-container">
      <Helmet>
        <title>CSR - Agus Lio Ban Group</title>
        <meta
          name="description"
          content="Website Resmi  Agus Lio Ban Group, Bengkel Mobil Subang, Toko Ban Subang, Sparepart Subang, bengkel mobil subang. bengkel mobil dekat tol cipali, tomo bridgestone, "
        />
        <meta property="og:title" content="CSR - Agus Lio Ban Group " />
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
      <div className="csr-banner">
        <h1 className="csr-text">Corporate Social Responsibilities</h1>
        <span className="csr-text01">
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
        <div className="csr-container01">
          <input
            type="text"
            placeholder="Email here..."
            className="csr-textinput input"
          />
          <button className="csr-button button">Subscribe</button>
        </div>
      </div>
      <div className="csr-container02">
        <div className="csr-features">
          <h1 className="csr-text08">Komitmen CSR Agus Lio Ban Group</h1>
          <span className="csr-text09">
            CSR (Corporate Social Responsibility) adalah suatu konsep atau
            tindakan yang dilakukan oleh perusahaan sebagai rasa tanggung jawab
            perusahaan terhadap social maupun lingkungan sekitar dimana
            perusahaan itu berada, seperti melakukan suatu kegiatan yang dapat
            meningkatkan kesejahteraan masyarakat sekitar dan menjaga
            lingkungan, memberikan beasiswa untuk anak tidak mampu di daerah
            tersebut, dana untuk pemeliharaan fasilitas umum, sumbangan untuk
            membangun desa/fasilitas masyarakat yang bersifat sosial dan berguna
            untuk masyarakat banyak, khususnya masyarakat yang berada di sekitar
            perusahaan tersebut berada
          </span>
        </div>
      </div>
      <div className="csr-features1">
        <h1 className="csr-text10">PILAR UTAMA CSR AGUS LIO BAN</h1>
        <div className="csr-container03">
          <FeatureCard22
            title="EKONOMI"
            description="Meningkatkan kemampuan perekonomian masyarakat dan memperkuat potensi pertumbuhan usaha kecil melalui program kemitraan untuk memberikan manfaat kepada semua pihak, sehingga menciptakan kemandirian masyarakat melalui UKM."
            rootClassName="rootClassName4"
          ></FeatureCard22>
          <FeatureCard22
            title="SOSIAL "
            description="Agus Lio Ban terus menjaga hubungan yang harmonis dengan masyarakat dan menjalankan kegiatan operasinya yang pro lingkungan, dengan menekan serendah mungkin dampak lingkungan."
            rootClassName="rootClassName5"
          ></FeatureCard22>
          <FeatureCard22
            title="LINGKUNGAN"
            description="Sebagai pelaku industri mempunyai tanggung jawab untuk senantiasa menjaga dan melakukan pengendalian dampak aktivitas operasional terhadap lingkungan hidup."
            rootClassName="rootClassName6"
          ></FeatureCard22>
          <FeatureCard22
            title="PENDIDIKAN"
            description="Agus Lio Ban Ikut Membantu Memberikan Beasiswa Kepada anak kurang mampu diplosok daerah dan juga ikut memberikan bantuan biaya pendidikan untuk karyawannya"
            rootClassName="rootClassName7"
          ></FeatureCard22>
        </div>
      </div>
      <div className="csr-steps">
        <h1 className="csr-text11">CSR Agus Lio Ban Group</h1>
        <div className="csr-container04">
          <div className="csr-step">
            <div className="csr-container05">
              <div className="csr-line"></div>
              <div className="csr-container06">
                <a
                  href="https://pmdarulfalah.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="csr-link"
                >
                  <img
                    alt="image"
                    src="/dfc%20new%20logo%20%5B1%5D-200h.png"
                    className="csr-image"
                  />
                </a>
              </div>
              <div className="csr-line1"></div>
            </div>
            <div className="csr-container07">
              <a
                href="https://pmdarulfalah.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="csr-link1"
              >
                <h1 className="csr-text12">Darul Falah Cimenteng</h1>
              </a>
              <span className="csr-text13">https://pmdarulfalah.com/</span>
            </div>
          </div>
          <div className="csr-step1">
            <a
              href="https://pmdarulfalah.com/latar-belakang-dafa-peduli/"
              target="_blank"
              rel="noreferrer noopener"
              className="csr-link2"
            >
              <div className="csr-container08">
                <div className="csr-line2"></div>
                <div className="csr-container09">
                  <img
                    alt="image"
                    src="/dafa%20peduli-200h.png"
                    className="csr-image1"
                  />
                </div>
                <div className="csr-line3"></div>
              </div>
            </a>
            <a
              href="https://pmdarulfalah.com/latar-belakang-dafa-peduli/"
              target="_blank"
              rel="noreferrer noopener"
              className="csr-link3"
            >
              <div className="csr-container10">
                <h1 className="csr-text14">Dafa Peduli</h1>
                <span className="csr-text15">
                  <span>
                    https://pmdarulfalah.com/latar-belakang-dafa-peduli/
                  </span>
                  <br></br>
                </span>
              </div>
            </a>
          </div>
          <div className="csr-step2">
            <div className="csr-container11">
              <div className="csr-line4"></div>
              <div className="csr-container12">
                <a
                  href="https://yakaafi.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="csr-link4"
                >
                  <img
                    alt="image"
                    src="/yakaafi-200h.png"
                    className="csr-image2"
                  />
                </a>
              </div>
              <div className="csr-line5"></div>
            </div>
            <a
              href="https://yakaafi.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="csr-link5"
            >
              <div className="csr-container13">
                <h1 className="csr-text18">Yakaafi</h1>
                <span className="csr-text19">
                  <span>https://yakaafi.com/</span>
                  <br></br>
                </span>
              </div>
            </a>
          </div>
          <div className="csr-step3">
            <div className="csr-container14">
              <div className="csr-line6"></div>
              <div className="csr-container15">
                <svg viewBox="0 0 1024 1024" className="csr-icon">
                  <path d="M480 64c-265.096 0-480 214.904-480 480 0 265.098 214.904 480 480 480 265.098 0 480-214.902 480-480 0-265.096-214.902-480-480-480zM751.59 704c8.58-40.454 13.996-83.392 15.758-128h127.446c-3.336 44.196-13.624 87.114-30.68 128h-112.524zM208.41 384c-8.58 40.454-13.996 83.392-15.758 128h-127.444c3.336-44.194 13.622-87.114 30.678-128h112.524zM686.036 384c9.614 40.962 15.398 83.854 17.28 128h-191.316v-128h174.036zM512 320v-187.338c14.59 4.246 29.044 11.37 43.228 21.37 26.582 18.74 52.012 47.608 73.54 83.486 14.882 24.802 27.752 52.416 38.496 82.484h-155.264zM331.232 237.516c21.528-35.878 46.956-64.748 73.54-83.486 14.182-10 28.638-17.124 43.228-21.37v187.34h-155.264c10.746-30.066 23.616-57.68 38.496-82.484zM448 384v128h-191.314c1.88-44.146 7.666-87.038 17.278-128h174.036zM95.888 704c-17.056-40.886-27.342-83.804-30.678-128h127.444c1.762 44.608 7.178 87.546 15.758 128h-112.524zM256.686 576h191.314v128h-174.036c-9.612-40.96-15.398-83.854-17.278-128zM448 768v187.34c-14.588-4.246-29.044-11.372-43.228-21.37-26.584-18.74-52.014-47.61-73.54-83.486-14.882-24.804-27.75-52.418-38.498-82.484h155.266zM628.768 850.484c-21.528 35.876-46.958 64.746-73.54 83.486-14.184 9.998-28.638 17.124-43.228 21.37v-187.34h155.266c-10.746 30.066-23.616 57.68-38.498 82.484zM512 704v-128h191.314c-1.88 44.146-7.666 87.040-17.28 128h-174.034zM767.348 512c-1.762-44.608-7.178-87.546-15.758-128h112.524c17.056 40.886 27.344 83.806 30.68 128h-127.446zM830.658 320h-95.9c-18.638-58.762-44.376-110.294-75.316-151.428 42.536 20.34 81.058 47.616 114.714 81.272 21.48 21.478 40.362 44.938 56.502 70.156zM185.844 249.844c33.658-33.658 72.18-60.932 114.714-81.272-30.942 41.134-56.676 92.666-75.316 151.428h-95.898c16.138-25.218 35.022-48.678 56.5-70.156zM129.344 768h95.898c18.64 58.762 44.376 110.294 75.318 151.43-42.536-20.34-81.058-47.616-114.714-81.274-21.48-21.478-40.364-44.938-56.502-70.156zM774.156 838.156c-33.656 33.658-72.18 60.934-114.714 81.274 30.942-41.134 56.678-92.668 75.316-151.43h95.9c-16.14 25.218-35.022 48.678-56.502 70.156z"></path>
                </svg>
              </div>
              <div className="csr-line7"></div>
            </div>
            <div className="csr-container16">
              <h1 className="csr-text22">
                <span>Deploy</span>
              </h1>
              <span className="csr-text24">
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing.</span>
                <br></br>
                <span></span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="csr-banner1">
        <h1 className="csr-text27">PROGRAM CSR AGUS LIO BAN</h1>
        <span className="csr-text28">
          <span>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in
              dignissim tortor.
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
        <div className="csr-btn-group">
          <button className="csr-button1 button">Get Started</button>
          <button className="csr-button2 button">Learn More</button>
        </div>
      </div>
      <div className="csr-blog">
        <div className="csr-container17">
          <BlogPostCard14
            title="Perluasan Tanah Wakaf Pondok"
            image_src="/whatsapp%20image%202022-12-14%20at%2008.10.04-1500w.jpeg"
            description="Pondok Modern Darul Falah Cimenteng Subang adalah Pondok Pesantren binaan Bengkel Agus Lio Ban Group.  Kami mengajak bapak/ibu untuk menitipkan sebagian rizqi kita melalui Program Wakaf Perluasan Lahan Pondok Modern Darul Falah Cimenteng Subang.   Apa Keistimewaannya ?  Status Pondok sebagai Pondok Wakaf, bukan pondok keluarga atau pribadi."
            rootClassName="rootClassName1"
          ></BlogPostCard14>
        </div>
        <div className="csr-container18">
          <BlogPostCard14
            title="Pembangunan Fasilitas Pondok"
            image_src="/dji_0464%20%5B1%5D_11zon%20%5B1%5D-1500w.jpg"
            description="Agus Lio Ban meresmikan pembangunan asrama santri Pondok Pesantren Darul Falah Cimenteng, di Kabupaten Subang, Provinsi Jawa Barat.  Asrama ini dilengkapi dengan fasilitas meubelair sehingga mampu mendukung santri tinggal dengan aman dan nyaman selama menuntut ilmu  di Ponpes tersebut. Semoga dengan dibangunnya Asrama Ini Para Santri dapat belajar dengan semangat."
            rootClassName="rootClassName5"
          ></BlogPostCard14>
        </div>
        <div className="csr-container19"></div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default CSR
