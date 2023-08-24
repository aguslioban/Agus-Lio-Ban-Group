import React from 'react'
import { Link } from 'react-router-dom'

import PrimaryPinkButton from './primary-pink-button'
import './header-full.css'

const HeaderFull = (props) => {
  return (
    <div className="header-full-header">
      <nav className="header-full-nav">
        <div className="header-full-container">
          <Link to="/" className="header-full-navlink Large">
            Agus Lio Ban Group
          </Link>
          <div className="header-full-menu">
            <Link to="/" className="header-full-navlink01 Large">
              Home
            </Link>
            <div
              data-thq="thq-dropdown"
              className="header-full-thq-dropdown list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="header-full-dropdown-toggle"
              >
                <Link to="/profile" className="header-full-navlink02">
                  Profile
                </Link>
                <div
                  data-thq="thq-dropdown-arrow"
                  className="header-full-dropdown-arrow"
                >
                  <svg viewBox="0 0 1024 1024" className="header-full-icon">
                    <path d="M426 726v-428l214 214z"></path>
                  </svg>
                </div>
              </div>
              <ul
                data-thq="thq-dropdown-list"
                className="header-full-dropdown-list"
              >
                <li
                  data-thq="thq-dropdown"
                  className="header-full-dropdown list-item"
                >
                  <Link to="/profile">
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="header-full-dropdown-toggle01"
                    >
                      <span className="header-full-text">
                        <span>Sejarah Agus Lio Ban</span>
                        <br></br>
                      </span>
                    </div>
                  </Link>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="header-full-dropdown01 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="header-full-dropdown-toggle02"
                  >
                    <Link
                      to="/about-tomo-alb"
                      className="header-full-navlink04"
                    >
                      Tomo Bridgestone 
                    </Link>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="header-full-dropdown02 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="header-full-dropdown-toggle03"
                  >
                    <div className="header-full-container1">
                      <Link
                        to="/about-dunlop-shop"
                        className="header-full-navlink05"
                      >
                        Dunlop Shop
                      </Link>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <Link to="/kemitraan" className="header-full-link Large">
              Kemitraan
            </Link>
            <Link to="/blog" className="header-full-navlink06 Large">
              Blog
            </Link>
            <Link to="/contact" className="header-full-navlink07 Large">
              Contact
            </Link>
            <Link to="/csr" className="header-full-navlink08 Large">
              CSR
            </Link>
            <Link to="/lokasi" className="header-full-navlink09 Large">
              Lokasi
            </Link>
            <div
              data-thq="thq-dropdown"
              className="header-full-thq-dropdown1 list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="header-full-dropdown-toggle04"
              >
                <Link to="/service" className="header-full-navlink10">
                  Service
                </Link>
                <div
                  data-thq="thq-dropdown-arrow"
                  className="header-full-dropdown-arrow1"
                >
                  <svg viewBox="0 0 1024 1024" className="header-full-icon2">
                    <path d="M426 726v-428l214 214z"></path>
                  </svg>
                </div>
              </div>
              <ul
                data-thq="thq-dropdown-list"
                className="header-full-dropdown-list1"
              >
                <li
                  data-thq="thq-dropdown"
                  className="header-full-dropdown03 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="header-full-dropdown-toggle05"
                  >
                    <Link to="/spooring" className="header-full-navlink11">
                      SPOORING
                    </Link>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="header-full-dropdown04 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="header-full-dropdown-toggle06"
                  >
                    <Link to="/service" className="header-full-navlink12">
                      AC LAX
                    </Link>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="header-full-dropdown05 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="header-full-dropdown-toggle07"
                  >
                    <Link to="/service" className="header-full-navlink13">
                      GANTI OLI
                    </Link>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="header-full-dropdown06 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="header-full-dropdown-toggle08"
                  >
                    <Link to="/service" className="header-full-navlink14">
                      TUNE UP
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
            <div
              data-thq="thq-dropdown"
              className="header-full-thq-dropdown2 list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="header-full-dropdown-toggle09"
              >
                <span className="header-full-text3">Prestasi</span>
                <div
                  data-thq="thq-dropdown-arrow"
                  className="header-full-dropdown-arrow2"
                >
                  <svg viewBox="0 0 1024 1024" className="header-full-icon4">
                    <path d="M426 726v-428l214 214z"></path>
                  </svg>
                </div>
              </div>
              <ul
                data-thq="thq-dropdown-list"
                className="header-full-dropdown-list2"
              >
                <li
                  data-thq="thq-dropdown"
                  className="header-full-dropdown07 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="header-full-dropdown-toggle10"
                  >
                    <Link to="/mekanik" className="header-full-navlink15">
                      Mekanik
                    </Link>
                  </div>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="header-full-dropdown08 list-item"
                >
                  <Link to="/tomo">
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="header-full-dropdown-toggle11"
                    >
                      <span className="header-full-text4"> Agus Lio Ban</span>
                    </div>
                  </Link>
                </li>
                <li
                  data-thq="thq-dropdown"
                  className="header-full-dropdown09 list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="header-full-dropdown-toggle12"
                  ></div>
                </li>
              </ul>
            </div>
          </div>
          <div
            data-thq="thq-dropdown"
            className="header-full-thq-dropdown3 list-item"
          >
            <ul
              data-thq="thq-dropdown-list"
              className="header-full-dropdown-list3"
            >
              <li
                data-thq="thq-dropdown"
                className="header-full-dropdown10 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="header-full-dropdown-toggle13"
                >
                  <Link to="/menuhp" className="header-full-navlink17">
                    Mekanik
                  </Link>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="header-full-dropdown11 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="header-full-dropdown-toggle14"
                >
                  <Link to="/tomo" className="header-full-navlink18">
                    Tomo Agus Lio Ban
                  </Link>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="header-full-dropdown12 list-item"
              >
                <Link to="/dunlop-agus-lio-ban">
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="header-full-dropdown-toggle15"
                  >
                    <span className="header-full-text5">
                      Dunlop Agus Lio Ban
                    </span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          <div
            data-thq="thq-dropdown"
            className="header-full-thq-dropdown4 list-item"
          >
            <ul
              data-thq="thq-dropdown-list"
              className="header-full-dropdown-list4"
            >
              <li
                data-thq="thq-dropdown"
                className="header-full-dropdown13 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="header-full-dropdown-toggle16"
                >
                  <span className="header-full-text6">Sub-menu Item</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="header-full-dropdown14 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="header-full-dropdown-toggle17"
                >
                  <span className="header-full-text7">Sub-menu Item</span>
                </div>
              </li>
              <li
                data-thq="thq-dropdown"
                className="header-full-dropdown15 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="header-full-dropdown-toggle18"
                >
                  <span className="header-full-text8">Sub-menu Item</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="header-full-container2">
            <div className="header-full-container3">
              <a
                href="https://api.whatsapp.com/send?phone=+6285320039886&amp;text=Halo Dengan Agus Lio Ban Ada Yang Bisa Dibantu"
                target="_blank"
                rel="noreferrer noopener"
                className="header-full-link1"
              >
                <PrimaryPinkButton
                  Button="WHATSAPP"
                  className="header-full-component"
                ></PrimaryPinkButton>
              </a>
            </div>
            <Link to="/menuhp" className="header-full-navlink20">
              <svg viewBox="0 0 1024 1024" className="header-full-icon6">
                <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default HeaderFull
