import React from 'react'

import { Helmet } from 'react-helmet'

import HeaderFull from '../components/header-full'
import FeatureCard14 from '../components/feature-card14'
import Footer from '../components/footer'
import './tomo.css'

const Tomo = (props) => {
  return (
    <div className="tomo-container">
      <Helmet>
        <title>Tomo - Agus Lio Ban Group</title>
        <meta
          name="description"
          content="Website Resmi  Agus Lio Ban Group, Bengkel Mobil Subang, Toko Ban Subang, Sparepart Subang, bengkel mobil subang. bengkel mobil dekat tol cipali, tomo bridgestone, "
        />
        <meta property="og:title" content="Tomo - Agus Lio Ban Group " />
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
      <div className="tomo-banner">
        <span className="tomo-text">AGUS LIO BAN GROUP</span>
        <h1 className="tomo-text1">AWARDS</h1>
        <span className="tomo-text2">
          Beberapa Penghargaan Yang Di Dapatkan Agus Lio Ban Group 
        </span>
        <div className="tomo-container1">
          <input
            type="text"
            placeholder="Email here..."
            className="tomo-textinput input"
          />
          <a
            href="mailto:agusliobanpromo@gmail.com?subject="
            className="tomo-link button"
          >
            Subscribe
          </a>
        </div>
      </div>
      <div className="tomo-features">
        <h1 className="tomo-text3">PRESTASI AGUS LIO BAN</h1>
        <div className="tomo-container2">
          <FeatureCard14
            title="BEST TOMO WINNER 2022"
            image_src="https://lh3.googleusercontent.com/x-30FDpFHhMtQe7eupKd8Qm7Ql2NtirpXp378cRMVO0pO88Azh9SOpOHr_Yh8QX7R_UKQ-saS7QhGzncSAx4gEoKWPms-DKnNBntop_ZWyygJ7P3EIFAmc5NYt4K-JXj4hGxVxGWE2vCbQ4oSjx4S26v22ReWiXohza6QTxfjlxekHgcMCgqXQ8rGAF2TzpJViSuwqehFmDMl2KNxArLitvIIMukeAK1JtdmaX38B8tG0tdlonF1Ixzzl7g3Aj5I4CKrGl1TV4C1vE7qltH9VLhNC0NSBXg_JR59rHwHQUoL6rSGW5TqSq3-W1A_dBN7naJuiFQNKCfA1OdG37XzEOlqoZH-QoK16DTgtaJGNP3mhQDG2ESCd2KOTaNaqx_cH5uXYumM6Bs-OJNRPv6SUSBIysfLyHqrcYubWCXASNEqIJ73NFCQdV_oju3DT02KeEfzFL5jjuP6lYOHV740_62uxKeHc6CTqskJcVLPMSgpzMNsK7rapN5d2W9llFLcCrk6KZLHQ3h1FUrOCcvWinVsvEKQq_0DTCAzfh6D3ko5hyeNvv1XibmWBZx1ODdVAz6lSaepM4K6XpkBIqmdEFqHrsRraMb9ODHkuhswaa2o678N8XTaiwd8RcsMgb7JeQ4yEmDnDA3PzpI2ZtjIKZ_mJO1hjbdk_QY84ozO5uYTmK4rK2B7eIQr9U5qkbwdc12hTU4uYtn7aSLQpaz6j3XATzSoxUshUbQJ7I5VCymGVOaNKMxkTOsXqle871jPI8QeA_ps8FFzGp8YpregCYw5-BsXZm4nQoRR0uhFCdvj7T-aVn97uQhbIajIH_GthehjW08rmY9zcF9m8Y4xnha4U3L8V8HxmNJTb99iIPgeAW6Sc_1J6IEZZXBBgjSVAbEbIxtLcPnQExsyUkUYuyj2IeIjCnk2SRPlT2pwyFpXZQr9qBUF70E26JBrQC7tNPIb5evoXLBY_MekbnQ=s207-no?authuser=0"
            rootClassName="rootClassName"
          ></FeatureCard14>
          <FeatureCard14
            title="TOMO BEST UPSELLING PERFORMENCE 2022"
            image_src="/7_11zon-500h.png"
            rootClassName="rootClassName1"
          ></FeatureCard14>
          <FeatureCard14
            title="TOMO ANNIVERSARY 30"
            image_src="https://lh3.googleusercontent.com/r329U8dBpxve8ioiiXF6QJPyKvOkpAXmjl4hPmY19CGcXMsuoeC3E4q6_aSDzcAiWqj039GJszigdY5iAOjiElrW6XTjvb3lYNSzq3eA-i5MddsDCTNmqe_5aGtefVEBJQcZxmp_bh6WLcLxT_U7exxZRKjQMiJ_G2a_Kqm-vtp8dy3u5YRhtHG8SJDYrfc1bZx8Mfc-JOjv8S9UNo5YdrC7sRj2UPknW8-GJZOzIP4u9Awong7rwWCyuZ_MsdSRIBMJUvRsM4farJ4WpE17WbSfzIOmPDoA9pc_6j33ItdgRlyNT0BrrVuZBR-lR08RG5XYfwnMxaHwb21l5FMnFjojtHB1Cn8o20lPEHDW-O7fCE3bLX9c6sz6_NHGLXUcx8olUKvcR5UXcUxnFsrzxhDpYYXuC6CNPRNjChsflokIsrM8sxz_L1l6cSAHDlXwY4tjXckARmN73UmLnW2_a7pfq08X3UBzqsZ0Iys8Qbvsy-IOTsH085R2u7iI0IhP9o1qpJ3jG88plZk1HX0MO0MSOqkxHKjXvHJAQmg0oMOwopB-u-NVi3DfKIJYxbrPWHBF9FznQSZV4v0hmqd_3nQMOthQeI6ocQo5G13iYHlOooLur2DidrunmIXMPmg9b0v3CtQNotDdaMNCBqEb9fZy7deTW0wmUEFL7QZDJm9LtUu09SS8m_OO7OqT_cdZd7ezpi15k45tRzJCf0Ezkx-0Ke9pT5qOQ7bmm4DhgxI64GCcAvo-z616EcZ7E5TnO-NXMhaP0ElD34-9Kv75FNcAFjTvcRVwjm4L9a_SSpD9OXGSRCyc47Z0CEVXRO3E18zLQoFIBsLmmggxzAmpHySFMLk-asaAHWgNRgenjKyM6o2sUiqW8jE6Pdm963CT9d00-YqVcUuUUCbOLuSfb6ORHDiKIQPWGqY0UiCH-o_g-bLDzg1WPejoPDAJp5PDMYzCENNcvtR2-npSMzs=s695-no?authuser=0"
            rootClassName="rootClassName2"
          ></FeatureCard14>
        </div>
      </div>
      <div className="tomo-features1">
        <div className="tomo-container3">
          <FeatureCard14
            title="ECOPIA SALEST NATIONAL CONTEST 2015"
            image_src="https://lh3.googleusercontent.com/QimOHhgcLuUa_9-pCkKF-niNwYGUKACU7g803DqlYDD0EvdbD6yyFfYbh737CxxGWstSTE0ZnQu3tqocOQCXvOBfd81Tp6BFZUgYOjZLWTY2WALHISYSupyb6PfMPz48IwY81QHshYq4eed0VLcLq_j1E7spG1mk1RxZpqnRaXvch8Wp4i3hdglODUjCKV52NqZUCxIKosL6mOo-JI4BnFXVNvxp90FSUN1lbUd7x9f9MVCat9rxSoMgB73N74JGxky5KH36zWzQTh0_2smrlhQxQ6_IGCmXjw7sJawZ0gpbtKzadL75xB25iX67fwOlZ36MhOXcXXw9-kAXikoDteiFzMX40OwdzR7roIIC1Lis5B94kTAxsKQ9XSeJkeHMmPAALklyfGRHOweEnixD9_NczP3dmAewVTFgyzkwOAMB-mjw9dBHONGBqyVCIv2PmtxRE7ABsULOncGmUxKxzxrf675wp0g9UMhUyvxYOkEVustKxJ2Fxm1yhyJq-b8wfW_hsTd1XdZUm7IabrBaNgn_Er_c_471JNofX3IpPJpFMCnjOht2zePAinXPb7sXFHS8p_VRKooPLOrNj1QxCFwHOjY4UYrfVil0yD0pZ5ctjKP2YvJAMnSiShPVhx0j-uTtUdcfUMDpIqr1dB4OwJvKVbya98BouHEW_0pRVpTfnSLfvmmPkOYYK4qXzK4FnHePVS3KjRqk8pcO4q2fANbIgQi6bYTUWpYVSNP1J-0MJsNK6nCRHDXH0gF3VFb8vbaohgc7j0LT8oY-HmyRYnCgpkl_Vxw_xV8c-SlPTyKWv5mI6T8wmbaZeTcnOTsa2hxhyjNvZ7VkDw68CLl5PLMVquXM1yTqqVKhRBe0w8wRL1Fcrj9LEfO0Zn9D1lYY1TSDgXpRoSraEZ84jgQ-a2rQPqdN0UXrK_Y7Ybs7jr2VmdLxDVcrDbNfiXc70J9Hb0GpeSsT_8JhDETbgmE=s695-no?authuser=0"
            rootClassName="rootClassName3"
          ></FeatureCard14>
          <FeatureCard14
            title="TOMO S CLASS 2019"
            image_src="https://lh3.googleusercontent.com/DB6iwPq0VqLxibjewwMrOcsC_0KNl_A47eKP9TzYtO3uL46lGaqJUTMNliM3vh7jRI8wYfN_mV4QfQczasl-MKNzxUm3beqpn48i6Q9ZP2ck7XnfJ9vlEOU25DNgfk7S1pHSedSQyzOWTbwzSCSRkPXHAJHX97ETtP8yaul5wEt3Kd_qb7OfOcf8R_Uq43ITohFdnXNVX65fqwi4F-SwpVnWkM1sa24sPEos92o2lZEK0_29bYXCPZU3lquC12WCDulqJ5vm59OpkApTO5qxXQ-_hQA9Umsb8BkvsCbIzV64GtY7aOgCXwwoVYibrr5HVxxqh8-tdQy6kSPgjxlV0Qx_ECa6HiQaU_4YC2WcpChh2LC3Csbik5lzo0NOxqpuekZFqKJl-XHYi864dfQ6uxUwx2AdflH_A2PM7Mb3Y-NTVcHRZYmbD9MCoYAPrf9QY_FPmpLhvfSugeh6aR7sVvjxKPPtzktuGdklVyFefMMepdJiF3VpfmtA2cmcH1Fx1EKVcZaPGt-W6l7fS0IDLmQ7Z9Y_aEk-GEhpBwOFbafltyvZ6zx18ABB7SK1YJmVfeWLBl9qZfhPjeuiOSnVVQPahm1Ckn-kQFr99DWWZFKwSkwJbLMccH5CMkVX4uOF4klzvzC9lHNmWXLXZsBRXU5GVPMBDJ2qL8Q2Rmz1jVmiNmbuxFxnCo6JzSPVJicaCNcTs6-R2bX0CJOs9VR6gi9b7ZHZj1SOXCUdwTLmejbzkMkATyzObi2oMMSK8OIaU01Hvn9sFf4-07UGpHXTs5i5dKQE8HxrtUalnI31VxB7APCte4WJxkEhrndwf9WBBlouJmMzeqJWQkCOCbBlRFM4k5F3b-flzLd6elRSrGCFOyV1lwJmn7ujyL60fnj7mgoxGLhtMdq5qrKrDeR282ndhbF4zW9wY6rEqkgZ4bHRdZRVqziEralg0_REVBuFoYWSnZ9aA9CnLfcjAG8=s695-no?authuser=0"
            rootClassName="rootClassName4"
          ></FeatureCard14>
          <FeatureCard14
            title="TOMO A CLASS 2018 "
            image_src="https://lh3.googleusercontent.com/Fj_xxT2tkKO6xLk_Vzm0JNY2MZAdgr8uN7G0OYW3DMAhXSL18r8RWPPsMhAzOvK50_hyGiuDHnPZDy3DOcbprUkiOgtspVHNwkZvs1oFxX4YJt-sYx8VZ8PvmUjKgs9SGpdDIm3iyhOsGFqcWTkCM_H5BAoiAW5V41cWG596L_I5QJrHhJwcu7qm3FaGmKbZ0ca38nGsD-rKxYzzX5wcWHSpImS8YgVS9e-PaD-WZRoK2MYoHwtbvJh3zLkv2cNUxHtGWePCWjs42yutfi8Ayjf43hLrcf7QB5DUhvRGgLCXEGteJw6B6fR2In5iyeIeax19mfAegyEU8TwQVCsuyvns7iSKLQbi0ic5Ja4u0dvQfWaS8R4c9lfiO4E0-BvVzPPmxyYjUdT9YWkylHfkyEptQFo_QFCDZSnBKsCxvYH78H_HnOHO_K9tgdh2gUFsCTMRwg5E3KZ68PmKiM6VmCL6RujRWM4XH-ksx5tHoFVOcMLhP3CFgfVZYdPoSb2mpRvEtOu0fkuqyL4Mt58I-kjErSmwGoiEYEGMOAZG-q-9r3AO263oe7nwfI_wdqZVNiwDkeHIzXXfs7reWlGAFNUU5FP_fvycAOi0HMML-CQQ3CSRyeSZxe0rxF4rqeUU7vVqLqLyQ8fd1woneti8FlhIqzibYso8fbqG3JJfOXjG_lufBgoZodEYQ-oUs-DBHB9M4dSWk7uWjlpu3HJ-Kk5vSPivUSFWH98FvhtHqY-MyzBuYYG1nWmVH7rulZZlyyIZ4DCQkXFUNQTh2qoHHxfhD_aUro7ZfI64K58GA8pDS-ooZvXanGoR7Rud9Gz0z-xR3kOws88DLqEjcf7_GECfx0JnCLo9zopWH-2uE_9yJd_b-WCSkIR3SEFZlKMl03Dc6svmg7f7Y4X1Wu9YdWIiL-JNaXjm_C5Vp1kEx4sNh5NvA1_HgMFJ-T83pwnpV-Zac67HoJUobP5Fuk0=s695-no?authuser=0"
            rootClassName="rootClassName5"
          ></FeatureCard14>
        </div>
      </div>
      <div className="tomo-features2">
        <div className="tomo-container4">
          <FeatureCard14
            title="TOMO BEST PERFORMENCE 2012"
            image_src="https://lh3.googleusercontent.com/dpCCmqWSofudrXXAS7a90bXGgZXtZk94bRVagFJcdf4cLqCus5bj1B8EeY2wW-ov-he0BuyD-HY0gK5Gmft55QZCZT6Gwt9J49vSYRee-gFyMZEo6EpgJRRlWHPc6BAyYUFd9PDt3LCC4sBPmEPNc1yAnywqgN1mAmM2v5ntVSXwGdLjBp3YW8i-b97Khb9aY635ySDqyLm49XM7D-fIMUfhYivbhRg7DXEfVQRrBVCUm0J9Tt3kbOFe41wMdcJvPSBsSHlPvyetfgengnRE9XhYhP6eboZ3AcoTq3YixoYlmrWtdWZuGbsJRfuDtj4PsQjnQFV0LQqxRNsfubSqqBBEoowYZwXNTmP6HcVSW1653-QB7JRl41RVbXkaL2EtmK7Ye5h0kuour2r8ynfGcJt9T0TD8YghtxJwedQJ2amPI60GqOJGJ9Tyaj8jce9IQ3IANH4vyzwq6DEDOL8tmsK7fSpc3at8r1MJNdweXLy5w2nT9qPg485chXuSf2QsZoj2VyWdz3tujr0qs8_a5tPbkdU_S6_esre-Rtv6Un9hPzVe6219aaC4Kfjo2CshG-sHYCifSaPest7IhXclG6fR9BtjFLg1YNcT1m4NQTzxuQybRymsYLLZFlv1w_McO9HJiqSj_uuOAV34s9Ju41SDvhvO7lmQQZmevhFykSCnjsH6loFwzVWTBXXoj2t6uP2lKcDjfxE8dZxGbLwuLEJkxSlAzTy57YZuUE1h6utwKJGKCykNn7wvyZax77cifDs7p10ZdS9SRDy5H-HJO2e-yOfLaHVSJKX6bIymNHjy4TryjoOxEyer0CzHO97m1GAGBrqwhSvTJ-jcr0essaHRySRHA6cv8p8GLQ8bH7Nia0kFR4Pe8OU6mAtMQl7_vSdIKKC-VNxG27g0LiNxsTZALl8umXJQVOUscSdMKlnn98aCuof5JHNvr9gaPvGN7AkhEWX9MnftB74zh5w=s695-no?authuser=0"
            rootClassName="rootClassName6"
          ></FeatureCard14>
          <FeatureCard14
            title="ECOPIA SALEST REGIONAL CONTEST 2015"
            image_src="/6_11zon-400w.png"
            rootClassName="rootClassName7"
          ></FeatureCard14>
          <FeatureCard14
            title="TOMO A CLASS"
            image_src="https://lh3.googleusercontent.com/Fj_xxT2tkKO6xLk_Vzm0JNY2MZAdgr8uN7G0OYW3DMAhXSL18r8RWPPsMhAzOvK50_hyGiuDHnPZDy3DOcbprUkiOgtspVHNwkZvs1oFxX4YJt-sYx8VZ8PvmUjKgs9SGpdDIm3iyhOsGFqcWTkCM_H5BAoiAW5V41cWG596L_I5QJrHhJwcu7qm3FaGmKbZ0ca38nGsD-rKxYzzX5wcWHSpImS8YgVS9e-PaD-WZRoK2MYoHwtbvJh3zLkv2cNUxHtGWePCWjs42yutfi8Ayjf43hLrcf7QB5DUhvRGgLCXEGteJw6B6fR2In5iyeIeax19mfAegyEU8TwQVCsuyvns7iSKLQbi0ic5Ja4u0dvQfWaS8R4c9lfiO4E0-BvVzPPmxyYjUdT9YWkylHfkyEptQFo_QFCDZSnBKsCxvYH78H_HnOHO_K9tgdh2gUFsCTMRwg5E3KZ68PmKiM6VmCL6RujRWM4XH-ksx5tHoFVOcMLhP3CFgfVZYdPoSb2mpRvEtOu0fkuqyL4Mt58I-kjErSmwGoiEYEGMOAZG-q-9r3AO263oe7nwfI_wdqZVNiwDkeHIzXXfs7reWlGAFNUU5FP_fvycAOi0HMML-CQQ3CSRyeSZxe0rxF4rqeUU7vVqLqLyQ8fd1woneti8FlhIqzibYso8fbqG3JJfOXjG_lufBgoZodEYQ-oUs-DBHB9M4dSWk7uWjlpu3HJ-Kk5vSPivUSFWH98FvhtHqY-MyzBuYYG1nWmVH7rulZZlyyIZ4DCQkXFUNQTh2qoHHxfhD_aUro7ZfI64K58GA8pDS-ooZvXanGoR7Rud9Gz0z-xR3kOws88DLqEjcf7_GECfx0JnCLo9zopWH-2uE_9yJd_b-WCSkIR3SEFZlKMl03Dc6svmg7f7Y4X1Wu9YdWIiL-JNaXjm_C5Vp1kEx4sNh5NvA1_HgMFJ-T83pwnpV-Zac67HoJUobP5Fuk0=s695-no?authuser=0"
            rootClassName="rootClassName11"
          ></FeatureCard14>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Tomo
