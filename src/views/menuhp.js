import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './menuhp.css'

const Menuhp = (props) => {
  return (
    <div className="menuhp-container">
      <Helmet>
        <title>Menuhp - Agus Lio Ban Group</title>
        <meta
          name="description"
          content="Website Resmi  Agus Lio Ban Group, Bengkel Mobil Subang, Toko Ban Subang, Sparepart Subang, bengkel mobil subang. bengkel mobil dekat tol cipali, tomo bridgestone, "
        />
        <meta property="og:title" content="Menuhp - Agus Lio Ban Group " />
        <meta
          property="og:description"
          content="Website Resmi  Agus Lio Ban Group, Bengkel Mobil Subang, Toko Ban Subang, Sparepart Subang, bengkel mobil subang. bengkel mobil dekat tol cipali, tomo bridgestone, "
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/56305140-4ddf-4d78-8e87-f48f37c31258/7de0275f-3ee5-4de0-8a25-a289beec9dc9?org_if_sml=1"
        />
      </Helmet>
      <div className="menuhp-sidebar">
        <nav className="menuhp-nav">
          <svg viewBox="0 0 1024 1024" className="menuhp-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
          <Link to="/" className="menuhp-navlink">
            Home 
          </Link>
          <Link to="/csr" className="menuhp-navlink1">
            CSR
          </Link>
          <Link to="/profile" className="menuhp-navlink2">
            Profile
          </Link>
          <Link to="/kemitraan" className="menuhp-navlink3">
            Kemitraan
          </Link>
          <Link to="/blog" className="menuhp-navlink4">
            Blog
          </Link>
          <Link to="/prestasi" className="menuhp-navlink5">
            Prestasi
          </Link>
          <Link to="/contact" className="menuhp-navlink6">
            Contact
          </Link>
          <Link to="/lokasi" className="menuhp-navlink7">
            Lokasi
          </Link>
          <Link to="/service" className="menuhp-navlink8">
            Service
          </Link>
        </nav>
        <div className="menuhp-profile">
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1562159278-1253a58da141?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIyfHxtYW4lMjBwb3J0dHJhaXR8ZW58MHx8fHwxNjI3MjkzNTM1&amp;ixlib=rb-1.2.1&amp;h=1000"
            className="menuhp-image"
          />
          <div className="menuhp-container1">
            <span className="menuhp-text">John Doe</span>
            <span className="menuhp-text1">View Profile</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menuhp
