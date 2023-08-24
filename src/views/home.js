import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import PrimaryPinkButton from '../components/primary-pink-button'
import OutlineGrayButton from '../components/outline-gray-button'
import FeatureCard from '../components/feature-card'
import OutlineBlackButton from '../components/outline-black-button'
import ListItem from '../components/list-item'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Agus Lio Ban Group</title>
        <meta
          name="description"
          content="Website Resmi  Agus Lio Ban Group, Bengkel Mobil Subang, Toko Ban Subang, Sparepart Subang, bengkel mobil subang. bengkel mobil dekat tol cipali, tomo bridgestone, "
        />
        <meta property="og:title" content="Agus Lio Ban Group " />
        <meta
          property="og:description"
          content="Website Resmi  Agus Lio Ban Group, Bengkel Mobil Subang, Toko Ban Subang, Sparepart Subang, bengkel mobil subang. bengkel mobil dekat tol cipali, tomo bridgestone, "
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/56305140-4ddf-4d78-8e87-f48f37c31258/7de0275f-3ee5-4de0-8a25-a289beec9dc9?org_if_sml=1"
        />
      </Helmet>
      <Header image_src="/alb-200h.png"></Header>
      <div className="home-hero">
        <div className="home-container01">
          <div className="home-card">
            <h1 className="home-text">SELAMAT DATANG </h1>
            <h1 className="home-text01">DI AGUS LIO BAN GROUP</h1>
            <span className="home-text02">
              <span className="home-text03">
                Agus Lio Ban adalah bengkel mobil modern dengan spesialisasi
                Spooring Balancing, Finish Balance, Tune Up, Ganti Oli, Flushing
                Oli Matic, Service Ac, CarsWash 
              </span>
              <span className="home-text04">
                Menyediakan berbagai layanan perawatan mobil profesional, dengan
                peralatan berteknologi tinggi dan teknisi yang ahli,
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text05">
                untuk atasi permasalahan mobil secara maksimal.
              </span>
            </span>
            <div className="home-container02">
              <div className="home-container03">
                <a
                  href="https://api.whatsapp.com/send?phone=+6285320039886&amp;text=Halo Dengan Agus Lio Ban Ada Yang Bisa Dibantu"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link"
                >
                  <PrimaryPinkButton
                    Button="contact us"
                    className="home-component01"
                  ></PrimaryPinkButton>
                </a>
              </div>
              <Link to="/lokasi" className="home-navlink">
                <OutlineGrayButton
                  button="read more"
                  className="home-component02"
                ></OutlineGrayButton>
              </Link>
            </div>
            <div className="home-container04">
              <img
                alt="image"
                src="/bs-removebg-preview%20%5B1%5D-1500h.png"
                className="home-image"
              />
              <img
                alt="image"
                src="/dunlop-removebg-preview-1500h.png"
                className="home-image01"
              />
              <img
                alt="image"
                src="https://seeklogo.com/images/T/top-1-logo-5C595830FD-seeklogo.com.png"
                className="home-image02"
              />
              <img
                alt="image"
                src="/en-removebg-preview-1500h.png"
                className="home-image03"
              />
            </div>
          </div>
        </div>
      </div>
      <img
        alt="image"
        src="https://lh3.googleusercontent.com/p/AF1QipMKNsCs1_66L-Y0sO9kVhiwj02HiakU9dkep_21=s680-w680-h510"
        className="home-image04"
      />
      <section className="home-features">
        <Link to="/service" className="home-navlink1">
          <FeatureCard
            text="Choose the best design system for your next product."
            title="Components"
            new_prop="SERVICE"
            image_src="https://img.freepik.com/free-icon/auto-repair-service_318-100227.jpg?size=338&amp;ext=jpg&amp;ga=GA1.2.781034629.1670979918&amp;semt=sph"
            className="home-component03"
          ></FeatureCard>
        </Link>
        <Link to="/tune-up" className="home-navlink2">
          <FeatureCard
            new_prop="TUNE UP"
            image_src="https://cdn-icons-png.flaticon.com/128/2422/2422740.png"
            className="home-component04"
          ></FeatureCard>
        </Link>
        <Link to="/ganti-oli" className="home-navlink3">
          <FeatureCard
            text="Make your code easier to maintain using variables."
            title="Less Code"
            new_prop="GANTI OLI"
            image_src="https://cdn-icons-png.flaticon.com/128/3295/3295261.png"
            className="home-component05"
          ></FeatureCard>
        </Link>
        <Link to="/spooring" className="home-navlink4">
          <FeatureCard
            text="This design system is fully supported on any device."
            title="Fully Responsive"
            new_prop="SPOORING"
            image_src="https://cdn-icons-png.flaticon.com/128/4833/4833735.png"
            className="home-component06"
          ></FeatureCard>
        </Link>
      </section>
      <section className="home-features1">
        <Link to="/ac-lax" className="home-navlink5">
          <FeatureCard
            text="Choose the best design system for your next product."
            title="Components"
            new_prop="AC LAX"
            image_src="https://cdn-icons-png.flaticon.com/128/4927/4927896.png"
            className="home-component07"
          ></FeatureCard>
        </Link>
        <Link to="/bubut-piringan-rem" className="home-navlink6">
          <FeatureCard
            new_prop="BUBUT PIRINGAN REM"
            image_src="https://cdn-icons-png.flaticon.com/128/7050/7050458.png"
            className="home-component08"
          ></FeatureCard>
        </Link>
        <Link to="/auto-detailing" className="home-navlink7">
          <FeatureCard
            text="Make your code easier to maintain using variables."
            title="Less Code"
            new_prop="AUTO DETAILING &amp; COATING"
            image_src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Ug1wBnv5y-nDX7ikVYo5vch06La4voUN4A&amp;usqp=CAU"
            className="home-component09"
          ></FeatureCard>
        </Link>
        <Link to="/cars-wash" className="home-navlink8">
          <FeatureCard
            text="This design system is fully supported on any device."
            title="Fully Responsive"
            new_prop="CARS WASH"
            image_src="https://cdn-icons-png.flaticon.com/128/4634/4634631.png"
            className="home-component10"
          ></FeatureCard>
        </Link>
      </section>
      <div className="home-hero1">
        <div className="home-container05">
          <h1 className="home-text06">
            <span>
              Mulai merasakan hal
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              ini
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>pada mobil anda?</span>
          </h1>
          <span className="home-text11">
            <span>
              Percayakan Agus Lio Ban untuk atasi berbagai permasalahan mobil
              Anda,
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>
              dari perawatan AC mobil hingga maksimalkan performa mobil
            </span>
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
          <a
            href="https://api.whatsapp.com/send?phone=+6285320039886&amp;text=Halo Dengan Agus Lio Ban Ada Yang Bisa Dibantu"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link1 button"
          >
            Get Started
          </a>
        </div>
        <img
          alt="image"
          src="/akibat%20dari%20air%20radiator%20kosong%20atau%20habis%20gaharu%20%5B12%5D%20%5B1%5D-1200w.png"
          className="home-image05"
        />
      </div>
      <div className="home-container06">
        <section className="home-container07">
          <div className="home-container08">
            <h1 className="home-text17">
              KENAPA HARUS SERVICE DI AGUS LIO BAN
            </h1>
            <span className="home-text18">
              Ingat Service, Ingat Agus Lio Ban
            </span>
          </div>
          <div className="home-container09">
            <div className="home-container10">
              <img
                alt="image"
                src="https://agusliobangroup.files.wordpress.com/2021/06/img_2795.png?w=1400&amp;h="
                className="home-image06"
              />
              <span className="home-text19 Small">
                <span>
                  Agus Lio Ban Group memiliki slogan yaitu,  &quot;Ingat Service
                  Ingat Agus Lio Ban &quot;
                </span>
                <br></br>
                <span>-AGUS  LIO BAN GROUP</span>
              </span>
              <div className="home-container11">
                <img
                  alt="image"
                  src="https://agusliobangroup.files.wordpress.com/2021/06/150047562_453707542489221_7799396170441519546_n.jpg?w=1400&amp;h="
                  className="home-image07"
                />
              </div>
            </div>
            <div className="home-container12">
              <img
                alt="image"
                src="https://agusliobangroup.files.wordpress.com/2021/06/dsc00532.jpg?w=1400&amp;h="
                className="home-image08"
              />
              <div className="home-container13">
                <h3>
                  Teknologi Canggih dan Maksimal Untuk Perawatan Mobil Secara
                  Profesional
                </h3>
                <p className="home-text24">
                  <br></br>
                  <span>
                    Agus Lio Ban Group, perusahaan jaringan perawatan dan
                    perbaikan mobil, yang mengutamakan keselamatan dan
                    kenyamanan berkendara untuk para pelanggan kami. Saat ini
                    Agus Lio Ban Group memiliki jaringan servis yang kuat dan
                    sebagai market leader di bidangnya, akan terus
                    mengembangkannya di tahun-tahun mendatang untuk siap
                    melayani pelanggan kami.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="home-testimonials">
        <div className="home-container14">
          <div className="home-container15">
            <div className="home-container16">
              <h2 className="home-text27">CUSTOMER AGUS LIO BAN</h2>
              <p className="home-text28">
                Perusahaan yang yang menjadi consument agus lio ban group
              </p>
              <p className="home-text29">Mark Jojansen</p>
              <p className="home-text30 Small">Project manager, Atlassian</p>
              <div className="home-container17">
                <img
                  alt="image"
                  src="/team-4-200h.jpg"
                  className="home-image09"
                />
                <div className="home-container18"></div>
                <img
                  alt="image"
                  src="/team-3-200h.jpg"
                  className="home-image10"
                />
                <div className="home-container19"></div>
                <img
                  alt="image"
                  src="/team-2-200h.jpg"
                  className="home-image11"
                />
              </div>
            </div>
            <p className="home-text31">
              Seluruh teknisi Agus Lio Ban telah berpengalaman dalam berbagai
              penanganan layanan permasalahan mobil. Permasalahan mesin mobil,
              jaga tampilan mobil, hingga perbaikan komponen mobil, teknisi Agus
              Lio Ban hadir untuk berikan solusi.
            </p>
          </div>
          <div className="home-logos">
            <div className="home-container20">
              <div className="home-container21">
                <div className="home-container22">
                  <img
                    alt="image"
                    src="/intirans-200h.png"
                    className="home-image12"
                  />
                </div>
                <div className="home-container23">
                  <img
                    alt="image"
                    src="/mpm%20rent-200h.png"
                    className="home-image13"
                  />
                </div>
                <div className="home-container24">
                  <img
                    alt="image"
                    src="/tekwang-200h.png"
                    className="home-image14"
                  />
                </div>
              </div>
              <div className="home-container25">
                <div className="home-container26">
                  <img
                    alt="image"
                    src="/assa-200h.png"
                    className="home-image15"
                  />
                </div>
                <div className="home-container27">
                  <img
                    alt="image"
                    src="data:image/png;base64,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"
                    className="home-image16"
                  />
                </div>
                <div className="home-container28">
                  <img
                    alt="image"
                    src="/tract-200h.png"
                    className="home-image17"
                  />
                </div>
              </div>
              <div className="home-container29">
                <div className="home-container30">
                  <img
                    alt="image"
                    src="/yakult-200h.jpg"
                    className="home-image18"
                  />
                </div>
                <div className="home-container31">
                  <img
                    alt="image"
                    src="/wings-200h.jpg"
                    className="home-image19"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <img alt="image" src="/bottom.svg" className="home-bottom-wave-image" />
        <img
          alt="image"
          src="https://static.vecteezy.com/system/resources/previews/007/736/642/non_2x/abstract-3d-luxury-red-color-wave-lines-with-shiny-golden-curved-line-decoration-and-glitter-lighting-on-gradient-red-background-vector.jpg"
          className="home-image20"
        />
        <img alt="image" src="/top.svg" className="home-top-wave-image" />
      </section>
      <a
        href="https://api.whatsapp.com/send?phone=+6285320039886&amp;text=Halo Dengan Agus Lio Ban Ada Yang Bisa Dibantu"
        target="_blank"
        rel="noreferrer noopener"
        className="home-link2"
      >
        <section className="home-contaier">
          <div className="home-container32">
            <div className="home-container33">
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M363.722 722.052l41.298-57.816-45.254-45.256-57.818 41.296c-10.722-5.994-22.204-10.774-34.266-14.192l-11.682-70.084h-64l-11.68 70.086c-12.062 3.418-23.544 8.198-34.266 14.192l-57.818-41.298-45.256 45.256 41.298 57.816c-5.994 10.72-10.774 22.206-14.192 34.266l-70.086 11.682v64l70.086 11.682c3.418 12.060 8.198 23.544 14.192 34.266l-41.298 57.816 45.254 45.256 57.818-41.296c10.722 5.994 22.204 10.774 34.266 14.192l11.682 70.084h64l11.68-70.086c12.062-3.418 23.544-8.198 34.266-14.192l57.818 41.296 45.254-45.256-41.298-57.816c5.994-10.72 10.774-22.206 14.192-34.266l70.088-11.68v-64l-70.086-11.682c-3.418-12.060-8.198-23.544-14.192-34.266zM224 864c-35.348 0-64-28.654-64-64s28.652-64 64-64 64 28.654 64 64-28.652 64-64 64zM1024 384v-64l-67.382-12.25c-1.242-8.046-2.832-15.978-4.724-23.79l57.558-37.1-24.492-59.128-66.944 14.468c-4.214-6.91-8.726-13.62-13.492-20.13l39.006-56.342-45.256-45.254-56.342 39.006c-6.512-4.766-13.22-9.276-20.13-13.494l14.468-66.944-59.128-24.494-37.1 57.558c-7.812-1.892-15.744-3.482-23.79-4.724l-12.252-67.382h-64l-12.252 67.382c-8.046 1.242-15.976 2.832-23.79 4.724l-37.098-57.558-59.128 24.492 14.468 66.944c-6.91 4.216-13.62 8.728-20.13 13.494l-56.342-39.006-45.254 45.254 39.006 56.342c-4.766 6.51-9.278 13.22-13.494 20.13l-66.944-14.468-24.492 59.128 57.558 37.1c-1.892 7.812-3.482 15.742-4.724 23.79l-67.384 12.252v64l67.382 12.25c1.242 8.046 2.832 15.978 4.724 23.79l-57.558 37.1 24.492 59.128 66.944-14.468c4.216 6.91 8.728 13.618 13.494 20.13l-39.006 56.342 45.254 45.256 56.342-39.006c6.51 4.766 13.22 9.276 20.13 13.492l-14.468 66.944 59.128 24.492 37.102-57.558c7.81 1.892 15.742 3.482 23.788 4.724l12.252 67.384h64l12.252-67.382c8.044-1.242 15.976-2.832 23.79-4.724l37.1 57.558 59.128-24.492-14.468-66.944c6.91-4.216 13.62-8.726 20.13-13.492l56.342 39.006 45.256-45.256-39.006-56.342c4.766-6.512 9.276-13.22 13.492-20.13l66.944 14.468 24.492-59.13-57.558-37.1c1.892-7.812 3.482-15.742 4.724-23.79l67.382-12.25zM672 491.2c-76.878 0-139.2-62.322-139.2-139.2s62.32-139.2 139.2-139.2 139.2 62.322 139.2 139.2c0 76.878-62.32 139.2-139.2 139.2z"></path>
              </svg>
            </div>
            <h2 className="home-text32">PROMO AGUS LIO BAN</h2>
            <h3 className="home-text33">PROMO DESEMBER </h3>
            <span className="home-text34">
              We’re constantly trying to express ourselves and actualize our
              dreams. Don&apos;t stop.
            </span>
          </div>
          <div className="home-container34">
            <div className="home-container35">
              <div className="home-container36">
                <svg
                  viewBox="0 0 987.4285714285713 1024"
                  className="home-icon02"
                >
                  <path d="M438.857 508.571l312 312c-79.429 80.571-190.286 130.286-312 130.286-242.286 0-438.857-196.571-438.857-438.857s196.571-438.857 438.857-438.857v435.429zM545.714 512h441.714c0 121.714-49.714 232.571-130.286 312zM950.857 438.857h-438.857v-438.857c242.286 0 438.857 196.571 438.857 438.857z"></path>
                </svg>
                <h1 className="home-text35 HeadingOne">Search and Discover!</h1>
                <span className="home-text36">
                  <span>Website visitors</span>
                  <span></span>
                </span>
                <OutlineBlackButton
                  button="get started"
                  rootClassName="outline-black-button-root-class-name"
                ></OutlineBlackButton>
              </div>
            </div>
            <div className="home-container37">
              <ListItem
                new_prop="PROMO OLI TOP1"
                description="Beli Oli Top 1 Zenzation Minimal Pembelian 3 Liter  Dapatkan Filter Oli Gratis "
              ></ListItem>
              <ListItem
                title="2. Performance Analyze"
                new_prop="PROMO OLI ENI"
                description="Dapatkan Hadiah Langsung Setiap Pembelian Minimal OLI ENI 4 liter 10W-40 Dapatkan hadiah menarik berupa kaos eni Eclusive, berlaku hanya di Agus Lio ban Otista"
              ></ListItem>
              <ListItem
                title="3. Social Conversions"
                new_prop="PROMO BRIDGESTONE"
                description="Dapatkan Hadiah Langsung Setiap Pembelian Minimal 2 Ban Bridgestone Potenza, Turanza, Dueler, Alenza, Dapatkan Hanya Di Tomo Agus Lio Ban Otista Subang dan Tambakan Subang"
              ></ListItem>
            </div>
          </div>
          <div className="home-divider"></div>
          <div className="home-container38">
            <div className="home-container39">
              <ListItem
                title="1. Always in Sync"
                new_prop="BELI OLI GRATIS FILTER OLI"
                description="Promo Perawatan Mobil Dengan oli Top1"
              ></ListItem>
              <ListItem
                title="2. Work With Any Team"
                new_prop="Kunjungi Agus Lio Ban Subang sekarang juga"
                description="buruan beli"
              ></ListItem>
              <ListItem
                title="3. A Productivity Platform"
                new_prop="info lebih lanjut klik banner ini"
                description="."
              ></ListItem>
            </div>
            <div className="home-container40">
              <div className="home-container41">
                <svg viewBox="0 0 1152 1024" className="home-icon04">
                  <path d="M1088 901.166c0 45.5 26.028 84.908 64 104.184v15.938c-10.626 1.454-21.472 2.224-32.5 2.224-68.008 0-129.348-28.528-172.722-74.264-26.222 6.982-54.002 10.752-82.778 10.752-159.058 0-288-114.616-288-256s128.942-256 288-256c159.058 0 288 114.616 288 256 0 55.348-19.764 106.592-53.356 148.466-6.824 14.824-10.644 31.312-10.644 48.7zM512 0c278.458 0 504.992 180.614 511.836 405.52-49.182-21.92-103.586-33.52-159.836-33.52-95.56 0-185.816 33.446-254.138 94.178-70.846 62.972-109.862 147.434-109.862 237.822 0 44.672 9.544 87.888 27.736 127.788-5.228 0.126-10.468 0.212-15.736 0.212-27.156 0-53.81-1.734-79.824-5.044-109.978 109.978-241.25 129.7-368.176 132.596v-26.916c68.536-33.578 128-94.74 128-164.636 0-9.754-0.758-19.33-2.164-28.696-115.796-76.264-189.836-192.754-189.836-323.304 0-229.75 229.23-416 512-416z"></path>
                </svg>
                <h1 className="home-text39 HeadingOne">Talk and Meet!</h1>
                <span className="home-text40">
                  <span>Website visitors</span>
                  <span></span>
                </span>
                <OutlineBlackButton
                  button="get started"
                  rootClassName="outline-black-button-root-class-name1"
                ></OutlineBlackButton>
              </div>
            </div>
          </div>
          <div className="home-container42">
            <div className="home-container43">
              <ListItem
                title="1. Always in Sync"
                new_prop="BELI OLI ENI GARTIS KAOS"
                description="beli oli eni gratis kaos"
              ></ListItem>
              <ListItem
                title="2. Work With Any Team"
                new_prop="GRATIS KAOS"
                description="BELI OLI ENI SEKRANG"
              ></ListItem>
              <ListItem
                title="3. A Productivity Platform"
                new_prop="BERLAKU HANYA DI AGUS LIO BAN OTISTA SUBANG"
                description="-"
              ></ListItem>
            </div>
            <div className="home-container44">
              <div className="home-container45">
                <svg viewBox="0 0 1152 1024" className="home-icon06">
                  <path d="M1088 901.166c0 45.5 26.028 84.908 64 104.184v15.938c-10.626 1.454-21.472 2.224-32.5 2.224-68.008 0-129.348-28.528-172.722-74.264-26.222 6.982-54.002 10.752-82.778 10.752-159.058 0-288-114.616-288-256s128.942-256 288-256c159.058 0 288 114.616 288 256 0 55.348-19.764 106.592-53.356 148.466-6.824 14.824-10.644 31.312-10.644 48.7zM512 0c278.458 0 504.992 180.614 511.836 405.52-49.182-21.92-103.586-33.52-159.836-33.52-95.56 0-185.816 33.446-254.138 94.178-70.846 62.972-109.862 147.434-109.862 237.822 0 44.672 9.544 87.888 27.736 127.788-5.228 0.126-10.468 0.212-15.736 0.212-27.156 0-53.81-1.734-79.824-5.044-109.978 109.978-241.25 129.7-368.176 132.596v-26.916c68.536-33.578 128-94.74 128-164.636 0-9.754-0.758-19.33-2.164-28.696-115.796-76.264-189.836-192.754-189.836-323.304 0-229.75 229.23-416 512-416z"></path>
                </svg>
                <h1 className="home-text43 HeadingOne">Talk and Meet!</h1>
                <span className="home-text44">
                  <span>Website visitors</span>
                  <span></span>
                </span>
                <OutlineBlackButton
                  button="get started"
                  rootClassName="outline-black-button-root-class-name1"
                ></OutlineBlackButton>
              </div>
            </div>
          </div>
          <div className="home-container46">
            <div className="home-container47">
              <ListItem
                title="1. Always in Sync"
                new_prop="DAPATKAN HADIAH MENARIK"
                description="PROMO SPESIAL BRIDGESTONE"
              ></ListItem>
              <ListItem
                title="2. Work With Any Team"
                new_prop="Hanya Berlaku dicabang Agus Lio Ban Otista Subang "
                description="Promo Mulai berlaku 1 s/d 31 Desember 2022"
              ></ListItem>
              <ListItem
                title="3. A Productivity Platform"
                description="Integrate the apps your team already uses directly into your workflow."
                rootClassName="list-item-root-class-name"
              ></ListItem>
            </div>
            <div className="home-container48">
              <div className="home-container49">
                <svg viewBox="0 0 1152 1024" className="home-icon08">
                  <path d="M1088 901.166c0 45.5 26.028 84.908 64 104.184v15.938c-10.626 1.454-21.472 2.224-32.5 2.224-68.008 0-129.348-28.528-172.722-74.264-26.222 6.982-54.002 10.752-82.778 10.752-159.058 0-288-114.616-288-256s128.942-256 288-256c159.058 0 288 114.616 288 256 0 55.348-19.764 106.592-53.356 148.466-6.824 14.824-10.644 31.312-10.644 48.7zM512 0c278.458 0 504.992 180.614 511.836 405.52-49.182-21.92-103.586-33.52-159.836-33.52-95.56 0-185.816 33.446-254.138 94.178-70.846 62.972-109.862 147.434-109.862 237.822 0 44.672 9.544 87.888 27.736 127.788-5.228 0.126-10.468 0.212-15.736 0.212-27.156 0-53.81-1.734-79.824-5.044-109.978 109.978-241.25 129.7-368.176 132.596v-26.916c68.536-33.578 128-94.74 128-164.636 0-9.754-0.758-19.33-2.164-28.696-115.796-76.264-189.836-192.754-189.836-323.304 0-229.75 229.23-416 512-416z"></path>
                </svg>
                <h1 className="home-text47 HeadingOne">Talk and Meet!</h1>
                <span className="home-text48">
                  <span>Website visitors</span>
                  <span></span>
                </span>
                <OutlineBlackButton
                  button="get started"
                  rootClassName="outline-black-button-root-class-name1"
                ></OutlineBlackButton>
              </div>
            </div>
          </div>
        </section>
      </a>
      <Footer></Footer>
    </div>
  )
}

export default Home
