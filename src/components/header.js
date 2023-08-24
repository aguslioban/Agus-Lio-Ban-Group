import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import PrimaryPinkButton from './primary-pink-button'
import './header.css'

const Header = (props) => {
  return (
    <div data-role="Header" className="header-header">
      <div className="header-container">
        <nav className="header-nav">
          <Link to="/" className="header-navlink">
            <img
              alt={props.image_alt}
              src={props.image_src}
              className="header-image"
            />
          </Link>
          <div className="header-container1">
            <Link to="/" className="header-navlink01 Large">
              AGUS LIO BAN GROUP
            </Link>
            <div className="header-menu">
              <Link to="/" className="header-navlink02 Large">
                Home
              </Link>
              <div
                data-thq="thq-dropdown"
                className="header-thq-dropdown list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="header-dropdown-toggle"
                >
                  <Link to="/profile" className="header-navlink03">
                    Profile
                  </Link>
                  <div
                    data-thq="thq-dropdown-arrow"
                    className="header-dropdown-arrow"
                  >
                    <svg viewBox="0 0 1024 1024" className="header-icon">
                      <path d="M426 726v-428l214 214z"></path>
                    </svg>
                  </div>
                </div>
                <ul
                  data-thq="thq-dropdown-list"
                  className="header-dropdown-list"
                >
                  <li
                    data-thq="thq-dropdown"
                    className="header-dropdown list-item"
                  >
                    <Link to="/profile">
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="header-dropdown-toggle01"
                      >
                        <div className="header-container2">
                          <span className="header-text">
                            Sejarah Agus Lio Ban
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="header-dropdown01 list-item"
                  >
                    <Link to="/about-tomo-alb">
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="header-dropdown-toggle02"
                      >
                        <span className="header-text01">Tomo Agus Lio Ban</span>
                      </div>
                    </Link>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="header-dropdown02 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="header-dropdown-toggle03"
                    >
                      <Link
                        to="/about-dunlop-shop"
                        className="header-navlink06"
                      >
                        Dunlop Shop Agus Lio Ban
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
              <Link to="/kemitraan" className="header-navlink07 Large">
                Kemitraan
              </Link>
              <Link to="/blog" className="header-navlink08 Large">
                Blog
              </Link>
              <Link to="/prestasi" className="header-navlink09 Large">
                Prestasi
              </Link>
              <Link to="/contact" className="header-navlink10 Large">
                Contact
              </Link>
              <Link to="/csr" className="header-navlink11 Large">
                CSR
              </Link>
              <Link to="/lokasi" className="header-navlink12 Large">
                Lokasi
              </Link>
              <div
                data-thq="thq-dropdown"
                className="header-thq-dropdown1 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="header-dropdown-toggle04"
                >
                  <Link to="/service" className="header-navlink13">
                    Service
                  </Link>
                  <div
                    data-thq="thq-dropdown-arrow"
                    className="header-dropdown-arrow1"
                  >
                    <svg viewBox="0 0 1024 1024" className="header-icon02">
                      <path d="M426 726v-428l214 214z"></path>
                    </svg>
                  </div>
                </div>
                <div className="header-container3"></div>
                <ul
                  data-thq="thq-dropdown-list"
                  className="header-dropdown-list1"
                >
                  <li
                    data-thq="thq-dropdown"
                    className="header-dropdown03 list-item"
                  >
                    <Link to="/service">
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="header-dropdown-toggle05"
                      >
                        <span className="header-text02">SPOORING</span>
                      </div>
                    </Link>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="header-dropdown04 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="header-dropdown-toggle06"
                    >
                      <Link to="/service" className="header-navlink15">
                        AC LAX
                      </Link>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="header-dropdown05 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="header-dropdown-toggle07"
                    >
                      <Link to="/service" className="header-navlink16">
                        GANTI OLI
                      </Link>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="header-dropdown06 list-item"
                  >
                    <Link to="/service">
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="header-dropdown-toggle08"
                      >
                        <span className="header-text03">TUNE UP</span>
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
              <div
                data-thq="thq-dropdown"
                className="header-thq-dropdown2 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="header-dropdown-toggle09"
                >
                  <span className="header-text04">Prestasi</span>
                  <div
                    data-thq="thq-dropdown-arrow"
                    className="header-dropdown-arrow2"
                  >
                    <svg viewBox="0 0 1024 1024" className="header-icon04">
                      <path d="M426 726v-428l214 214z"></path>
                    </svg>
                  </div>
                </div>
                <ul
                  data-thq="thq-dropdown-list"
                  className="header-dropdown-list2"
                >
                  <li
                    data-thq="thq-dropdown"
                    className="header-dropdown07 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="header-dropdown-toggle10"
                    >
                      <Link to="/mekanik" className="header-navlink18">
                        Mekanik 
                      </Link>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="header-dropdown08 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="header-dropdown-toggle11"
                    >
                      <Link to="/tomo" className="header-navlink19">
                        Tomo Agus Lio Ban
                      </Link>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="header-dropdown09 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="header-dropdown-toggle12"
                    ></div>
                  </li>
                </ul>
              </div>
              <div
                data-thq="thq-dropdown"
                className="header-thq-dropdown3 list-item"
              >
                <ul
                  data-thq="thq-dropdown-list"
                  className="header-dropdown-list3"
                >
                  <li
                    data-thq="thq-dropdown"
                    className="header-dropdown10 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="header-dropdown-toggle13"
                    >
                      <span className="header-text05">Sub-menu Item</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="header-dropdown11 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="header-dropdown-toggle14"
                    >
                      <span className="header-text06">Sub-menu Item</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="header-dropdown12 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="header-dropdown-toggle15"
                    >
                      <span className="header-text07">Sub-menu Item</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div
                data-thq="thq-dropdown"
                className="header-thq-dropdown4 list-item"
              >
                <ul
                  data-thq="thq-dropdown-list"
                  className="header-dropdown-list4"
                >
                  <li
                    data-thq="thq-dropdown"
                    className="header-dropdown13 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="header-dropdown-toggle16"
                    >
                      <span className="header-text08">Sub-menu Item</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="header-dropdown14 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="header-dropdown-toggle17"
                    >
                      <span className="header-text09">Sub-menu Item</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="header-dropdown15 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="header-dropdown-toggle18"
                    >
                      <span className="header-text10">Sub-menu Item</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div
                data-thq="thq-dropdown"
                className="header-thq-dropdown5 list-item"
              >
                <ul
                  data-thq="thq-dropdown-list"
                  className="header-dropdown-list5"
                >
                  <li
                    data-thq="thq-dropdown"
                    className="header-dropdown16 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="header-dropdown-toggle19"
                    >
                      <Link to="/mekanik" className="header-navlink20">
                        Mekanik
                      </Link>
                      <div
                        data-thq="thq-dropdown-arrow"
                        className="header-dropdown-arrow3"
                      >
                        <svg viewBox="0 0 1024 1024" className="header-icon06">
                          <path d="M426 726v-428l214 214z"></path>
                        </svg>
                      </div>
                      <div
                        data-thq="thq-dropdown-arrow"
                        className="header-dropdown-arrow4"
                      >
                        <svg viewBox="0 0 1024 1024" className="header-icon08">
                          <path d="M426 726v-428l214 214z"></path>
                        </svg>
                      </div>
                    </div>
                    <ul
                      data-thq="thq-dropdown-list"
                      className="header-dropdown-list6"
                    >
                      <li
                        data-thq="thq-dropdown"
                        className="header-dropdown17 list-item"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="header-dropdown-toggle20"
                        >
                          <span className="header-text11">Sub-menu Item</span>
                        </div>
                      </li>
                      <li
                        data-thq="thq-dropdown"
                        className="header-dropdown18 list-item"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="header-dropdown-toggle21"
                        >
                          <span className="header-text12">Sub-menu Item</span>
                        </div>
                      </li>
                      <li
                        data-thq="thq-dropdown"
                        className="header-dropdown19 list-item"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="header-dropdown-toggle22"
                        >
                          <span className="header-text13">Sub-menu Item</span>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="header-dropdown20 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="header-dropdown-toggle23"
                    >
                      <Link to="/tomo" className="header-navlink21">
                        Tomo Agus Lio Ban
                      </Link>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="header-dropdown21 list-item"
                  >
                    <Link to="/dunlop-agus-lio-ban">
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="header-dropdown-toggle24"
                      >
                        <span className="header-text14">
                          Dunlop Agus Lio Ban
                        </span>
                      </div>
                    </Link>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="header-dropdown22 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="header-dropdown-toggle25"
                    >
                      <span className="header-text15">Sub-menu Item</span>
                    </div>
                  </li>
                </ul>
              </div>
              <Link to="/profile" className="header-navlink23">
                Profile
              </Link>
            </div>
            <div className="header-container4">
              <div className="header-container5">
                <a
                  href="https://api.whatsapp.com/send?phone=+6285320039886&amp;text=Halo Dengan Agus Lio Ban Ada Yang Bisa Dibantu"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="header-link"
                >
                  <PrimaryPinkButton
                    Button="WhatsApp"
                    className="header-component"
                  ></PrimaryPinkButton>
                </a>
              </div>
              <div data-role="BurgerMenu" className="header-burger-menu">
                <Link to="/menuhp">
                  <svg viewBox="0 0 1024 1024" className="header-icon10">
                    <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div data-role="MobileMenu" className="header-mobile-menu">
        <div className="header-top">
          <Link to="/" className="header-navlink25 Large">
            Soft UI Design System
          </Link>
          <div data-role="CloseMobileMenu" className="header-close-menu">
            <svg viewBox="0 0 1024 1024" className="header-icon12">
              <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
            </svg>
          </div>
        </div>
        <div className="header-mid">
          <div className="header-menu1">
            <Link to="/" className="header-navlink26 Large">
              Home
            </Link>
            <Link to="/contact" className="header-navlink27 Large">
              Profile
            </Link>
            <Link to="/coming-soon" className="header-navlink28 Large">
              Coming Soon
            </Link>
          </div>
        </div>
        <div className="header-bot">
          <PrimaryPinkButton Button="buy now"></PrimaryPinkButton>
        </div>
      </div>
    </div>
  )
}

Header.defaultProps = {
  image_src: '/alb-1500h.png',
  image_alt: 'image',
}

Header.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
}

export default Header
