import React from 'react'

import { Helmet } from 'react-helmet'

import HeaderFull from '../components/header-full'
import PrimaryBlueButton from '../components/primary-blue-button'
import OutlineBlueButton from '../components/outline-blue-button'
import NextButton from '../components/next-button'
import Footer from '../components/footer'
import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact - Agus Lio Ban Group</title>
        <meta
          name="description"
          content="Website Resmi  Agus Lio Ban Group, Bengkel Mobil Subang, Toko Ban Subang, Sparepart Subang, bengkel mobil subang. bengkel mobil dekat tol cipali, tomo bridgestone, "
        />
        <meta property="og:title" content="Contact - Agus Lio Ban Group " />
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
      <div className="contact-form">
        <h2 className="contact-text HeadingOne">
          <span>Say Hi!</span>
        </h2>
        <span className="contact-text02 Lead">Ada Yang Ingin Ditanyakan ?</span>
        <form className="contact-form1">
          <label className="contact-text03 Label">My name is</label>
          <input
            type="text"
            placeholder="Full Name"
            className="contact-textinput Small input"
          />
          <label className="contact-text04 Label">I&apos;m looking for</label>
          <input
            type="text"
            placeholder="What you love"
            className="contact-textinput1 Small input"
          />
          <label className="contact-text05 Label">Your message</label>
          <textarea
            rows="8"
            placeholder="I want to say that..."
            className="contact-textarea textarea Small"
          ></textarea>
        </form>
        <div className="contact-container01">
          <div className="contact-container02">
            <a
              href="mailto:agusliobanpromo@gmail.com?subject="
              className="contact-link"
            >
              <PrimaryBlueButton
                button="send message"
                rootClassName="primary-blue-button-root-class-name"
                className="contact-component1"
              ></PrimaryBlueButton>
            </a>
          </div>
        </div>
      </div>
      <div className="contact-banner">
        <h1 className="contact-text06">SOSIAL MEDIA AGUS LIO BAN</h1>
        <span className="contact-text07">
          Kunjungi Kami di Media Sosial Agus Lio Ban, Dapatkan Berbagai
          Informasi dan Juga Promo Menarik
        </span>
        <div className="contact-btn-group"></div>
      </div>
      <div className="contact-profile">
        <img
          alt="image"
          src="/alb%20bulad-200h.png"
          className="contact-image"
        />
        <div className="contact-container03">
          <div className="contact-container04">
            <h4 className="contact-text08">AGUS LIO BAN GROUP</h4>
            <a
              href="https://www.instagram.com/agusliobansubang.official/"
              target="_blank"
              rel="noreferrer noopener"
              className="contact-link1"
            >
              <OutlineBlueButton
                button="follow"
                rootClassName="outline-blue-button-root-class-name"
                className="contact-component2"
              ></OutlineBlueButton>
            </a>
          </div>
          <div className="contact-container05">
            <span className="contact-text09">147 Posts</span>
            <span className="contact-text10">
              <span className="contact-text11">1.4k</span>
              <span> Followers</span>
            </span>
            <span className="contact-text13">855 Following</span>
          </div>
          <span>
            <span>Official Instagram Resmi Agus Lio Ban Group</span>
            <br></br>
          </span>
          <a
            href="https://www.instagram.com/agusliobansubang.official/"
            target="_blank"
            rel="noreferrer noopener"
            className="contact-link2"
          >
            <NextButton
              button="More about me"
              className="contact-component3"
            ></NextButton>
          </a>
        </div>
      </div>
      <div className="contact-profile1">
        <img
          alt="image"
          src="/alb%20bulad-200h.png"
          className="contact-image1"
        />
        <div className="contact-container06">
          <div className="contact-container07">
            <h4 className="contact-text17">AGUS LIO BAN GROUP</h4>
            <a
              href="https://www.facebook.com/aguslioban.subang.39?mibextid=LQQJ4d"
              target="_blank"
              rel="noreferrer noopener"
              className="contact-link3"
            >
              <OutlineBlueButton
                button="follow"
                rootClassName="outline-blue-button-root-class-name1"
                className="contact-component4"
              ></OutlineBlueButton>
            </a>
          </div>
          <div className="contact-container08">
            <span className="contact-text18">147 Posts</span>
            <span className="contact-text19">
              <span className="contact-text20">1.3k</span>
              <span> Followers</span>
            </span>
            <span className="contact-text22">855 Following</span>
          </div>
          <span>
            <span>Official Facebook Resmi Agus Lio Ban Group</span>
            <br></br>
          </span>
          <a
            href="https://www.facebook.com/aguslioban.subang.39?mibextid=LQQJ4d"
            target="_blank"
            rel="noreferrer noopener"
            className="contact-link4"
          >
            <NextButton
              button="More about me"
              className="contact-component5"
            ></NextButton>
          </a>
        </div>
      </div>
      <div className="contact-profile2">
        <img
          alt="image"
          src="/alb%20bulad-200h.png"
          className="contact-image2"
        />
        <div className="contact-container09">
          <div className="contact-container10">
            <h4 className="contact-text26">AGUS LIO BAN GROUP</h4>
            <a
              href="https://www.youtube.com/@agusliobangroup3655/videos"
              target="_blank"
              rel="noreferrer noopener"
              className="contact-link5"
            >
              <OutlineBlueButton
                button="Subcribe"
                rootClassName="outline-blue-button-root-class-name2"
                className="contact-component6"
              ></OutlineBlueButton>
            </a>
          </div>
          <div className="contact-container11">
            <span className="contact-text27">17 Posts</span>
            <span className="contact-text28">
              <span className="contact-text29">318</span>
              <span> Subcriber</span>
            </span>
          </div>
          <span>
            <span>Official Youtube Resmi Agus Lio Ban Group</span>
            <br></br>
          </span>
          <a
            href="https://www.instagram.com/agusliobansubang.official/"
            target="_blank"
            rel="noreferrer noopener"
            className="contact-link6"
          >
            <NextButton
              button="More about me"
              className="contact-component7"
            ></NextButton>
          </a>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Contact
