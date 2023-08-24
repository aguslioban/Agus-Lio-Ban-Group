import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import DunlopAgusLioBan from './views/dunlop-agus-lio-ban'
import CSR from './views/csr'
import AboutTomoALB from './views/about-tomo-alb'
import Tomo from './views/tomo'
import Spooring from './views/spooring'
import Kemitraan from './views/kemitraan'
import News3 from './views/news3'
import News1 from './views/news1'
import BubutPiringanRem from './views/bubut-piringan-rem'
import FlushingOliMatic from './views/flushing-oli-matic'
import Ban from './views/ban'
import TuneUp from './views/tune-up'
import Lokasi from './views/lokasi'
import CarsWash from './views/cars-wash'
import AgusLioBanKalijati from './views/agus-lio-ban-kalijati'
import Sparepart from './views/sparepart'
import AgusLioBanOtista from './views/agus-lio-ban-otista'
import AgusLioBanTambakan from './views/agus-lio-ban-tambakan'
import News2 from './views/news2'
import AutoDetailing from './views/auto-detailing'
import ComingSoon from './views/coming-soon'
import Menuhp from './views/menuhp'
import Gaharu from './views/gaharu'
import Contact from './views/contact'
import Prestasi from './views/prestasi'
import GantiOli from './views/ganti-oli'
import Reddg from './views/reddg'
import News from './views/news'
import Service from './views/service'
import News5 from './views/news5'
import AcLax from './views/ac-lax'
import News4 from './views/news4'
import Profile from './views/profile'
import Reddg1 from './views/reddg1'
import Mekanik from './views/mekanik'
import AboutDunlopShop from './views/about-dunlop-shop'
import AgusLioBanPagaden from './views/agus-lio-ban-pagaden'
import Blog from './views/blog'
import Home from './views/home'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={DunlopAgusLioBan} exact path="/dunlop-agus-lio-ban" />
        <Route component={CSR} exact path="/csr" />
        <Route component={AboutTomoALB} exact path="/about-tomo-alb" />
        <Route component={Tomo} exact path="/tomo" />
        <Route component={Spooring} exact path="/spooring" />
        <Route component={Kemitraan} exact path="/kemitraan" />
        <Route component={News3} exact path="/news3" />
        <Route component={News1} exact path="/news1" />
        <Route component={BubutPiringanRem} exact path="/bubut-piringan-rem" />
        <Route component={FlushingOliMatic} exact path="/flushing-oli-matic" />
        <Route component={Ban} exact path="/ban" />
        <Route component={TuneUp} exact path="/tune-up" />
        <Route component={Lokasi} exact path="/lokasi" />
        <Route component={CarsWash} exact path="/cars-wash" />
        <Route
          component={AgusLioBanKalijati}
          exact
          path="/agus-lio-ban-kalijati"
        />
        <Route component={Sparepart} exact path="/sparepart" />
        <Route component={AgusLioBanOtista} exact path="/agus-lio-ban-otista" />
        <Route
          component={AgusLioBanTambakan}
          exact
          path="/agus-lio-ban-tambakan"
        />
        <Route component={News2} exact path="/news2" />
        <Route component={AutoDetailing} exact path="/auto-detailing" />
        <Route component={ComingSoon} exact path="/coming-soon" />
        <Route component={Menuhp} exact path="/menuhp" />
        <Route component={Gaharu} exact path="/gaharu" />
        <Route component={Contact} exact path="/contact" />
        <Route component={Prestasi} exact path="/prestasi" />
        <Route component={GantiOli} exact path="/ganti-oli" />
        <Route component={Reddg} exact path="/reddg" />
        <Route component={News} exact path="/news" />
        <Route component={Service} exact path="/service" />
        <Route component={News5} exact path="/news5" />
        <Route component={AcLax} exact path="/ac-lax" />
        <Route component={News4} exact path="/news4" />
        <Route component={Profile} exact path="/profile" />
        <Route component={Reddg1} exact path="/reddg1" />
        <Route component={Mekanik} exact path="/mekanik" />
        <Route component={AboutDunlopShop} exact path="/about-dunlop-shop" />
        <Route
          component={AgusLioBanPagaden}
          exact
          path="/agus-lio-ban-pagaden"
        />
        <Route component={Blog} exact path="/blog" />
        <Route component={Home} exact path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
