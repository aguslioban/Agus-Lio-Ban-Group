import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import HeaderFull from '../components/header-full'
import Footer from '../components/footer'
import './news2.css'

const News2 = (props) => {
  return (
    <div className="news2-container">
      <Helmet>
        <title>News2 - Agus Lio Ban Group</title>
        <meta
          name="description"
          content="Website Resmi  Agus Lio Ban Group, Bengkel Mobil Subang, Toko Ban Subang, Sparepart Subang, bengkel mobil subang. bengkel mobil dekat tol cipali, tomo bridgestone, "
        />
        <meta property="og:title" content="News2 - Agus Lio Ban Group " />
        <meta
          property="og:description"
          content="Website Resmi  Agus Lio Ban Group, Bengkel Mobil Subang, Toko Ban Subang, Sparepart Subang, bengkel mobil subang. bengkel mobil dekat tol cipali, tomo bridgestone, "
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/56305140-4ddf-4d78-8e87-f48f37c31258/7de0275f-3ee5-4de0-8a25-a289beec9dc9?org_if_sml=1"
        />
      </Helmet>
      <Link to="/kemitraan" className="news2-navlink">
        <HeaderFull className="news2-component"></HeaderFull>
      </Link>
      <div className="news2-feature-card">
        <h2 className="news2-text">
          <span>NEWS</span>
          <br></br>
        </h2>
        <img
          alt="image"
          src="https://otoklix-production.s3.amazonaws.com/uploads/2021/11/wiper-mobil-terbaik.jpg"
          className="news2-image"
        />
      </div>
      <div className="news2-feature-card1">
        <svg viewBox="0 0 1024 1024" className="news2-icon">
          <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
        </svg>
        <div className="news2-container1">
          <h2 className="news2-text03">
            KENALI 5 PENYEBAB WIPER MOBIL HARUS DIGANTI
          </h2>
          <span className="news2-text04">
            <span>
              Bagi pengendara mobil, wiper merupakan salah satu komponen yang
              cukup penting. Apalagi ketika hujan deras, kaca bagian depan
              biasanya akan buram dan menghalangi pandangan mata. Atau ketika
              musim kemarau, debu-debu jalanan pun menempel dan membuat kaca
              mobil menjadi lebih cepat kotor. Wiper sangat dibutuhkan untuk
              membuat pengalaman berkendara yang lebih nyaman dan aman di segala
              kondisi. Bayangkan kalau tiba-tiba wiper mobil mati di tengah
              jalan dan Anda bingung apa penyebab wiper mobil mati, bisa-bisa
              langsung membuat panik.
            </span>
            <br></br>
            <span>
              Wiper memiliki fungsi untuk menyapu air, atau kotoran seperti debu
              yang menempel di kaca depan dan belakang mobil. Fungsi sederhana
              dari fitur wiper ini bisa membuat berkendara menjadi lebih aman
              karena pandangan pengemudi menjadi lebih jelas dan tidak
              terhalang. Maka, penting sekali untuk selalu mengecek kondisi
              wiper mobil kalian.
            </span>
            <br></br>
            <br></br>
            <span>1. Dinamo Wiper Rusak</span>
            <br></br>
            <span>
              Ini termasuk penyebab yang paling fatal. Seperti dinamo pada
              umumnya, kerusakan yang sering terjadi pada dinamo wiper adalah
              kumparan yang terbakar. Biasanya ini disebabkan oleh hubungan
              singkat arus listrik pada mobil. Kerusakan pada kumparan berarti
              wiper mobil rusak total dan harus diganti.
            </span>
            <br></br>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>2. Wiper Tidak Bergerak Sama Sekali</span>
            <br></br>
            <span>
              Wiper mobil yang macet dan tidak mau bergerak sama sekali memang
              bikin kesal, apalagi jika terjadi ketika sedang berkendara di
              tengah hujan deras. Ada beberapa kemungkinan penyebab wiper tidak
              bergerak sama sekali. Yang pertama karena motor listrik yang sudah
              aus. Bila ini terjadi, maka tidak ada pilihan lain kecuali
              mengganti dengan yang baru. Kedua, sekring bermasalah. Bila
              sekring putus berarti ada arus listrik yang berlebihan di mobil
              kalian. Oleh karena itu, rajin-rajin cermati rangkaian dan
              hubungan antar-kabel yang terkait dengan sekring, ya!
            </span>
            <br></br>
            <br></br>
            <span>3. Semburan Air dari Washer Kurang</span>
            <br></br>
            <span>
              Penyebab wiper mobil mati lainnya adalah semprotan air dari kepala
              washer yang ada di kap mobil kurang kuat, kecil, atau tidak tepat.
              Pasti jengkel banget kan, karena pembersihan kaca depan mobil jadi
              tidak maksimal. Kendala ini dikarenakan lubang kepala washer yang
              tersumbat. Kalian bisa membersihkannya dengan mudah, yakni tinggal
              melepas tabung lalu campurkan kerikil dan kocok-kocok hingga
              kotoran yang menempel pada dinding tabung hilang. Supaya hasil
              lebih maksimal, lakukan cara tersebut beberapa kali dan bilas
              hingga bersih.
            </span>
            <br></br>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>4. Karet Wiper Aus</span>
            <br></br>
            <span>
              Kalau wiper macet, jangan lupa untuk mengecek kondisi kares wiper.
              Bila sudah aus atau mengeras, sebaiknya diganti dengan karet yang
              lebih lentus. Karet yang keras akan menyebabkan sapuannya tidak
              merata dan berpotensi menyebabkan kaca mobil baret. Pasti tidak
              mau hal tersebut terjadi dong, karena biaya pemulihannya justru
              lebih mahal.
            </span>
            <br></br>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>5. Gerakan yang Lambat</span>
            <br></br>
            <span>
              Fenomena ini biasanya disebabkan oleh adanya bagian dalam sistem
              penggerak wiper yang kotor. Kondisi ini berdampak pada arus
              listrik dan biasanya membuat engkol wiper terhambat. Kalian bisa
              menanganinya dengan membersihan tahanan koil tersebut.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>
              Selain itu, gerakan lambat wiper juga bisa disebabkan oleh adanya
              karat pada elemen wiper yang membuat kinerja tidak optimal dan
              sapuannya terhadap air menjadi tidak merata. Kalian bisa atasi
              dengan cara membersihkan engkol dari karat dan semprot bagian
              tersebut dengan cairan anti karat. Bila sudah parah, maka harus
              dilas atau diganti.
            </span>
            <br></br>
            <span>
              Itulah lima penyebab wiper mobil mati dan cara mengatasinya.
              Miliki juga asuransi kendaraan untuk mencegah kerugian finansial
              akibat kerusakan. Rawat komponen-komponen mobil hingga yang paling
              terkecil untuk mendapatkan keamanan dan kenyamanan prima dalam
              berkendara.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default News2
