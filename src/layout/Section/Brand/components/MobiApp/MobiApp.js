import React from 'react'
import background from "../../../../../assets/image/download-app-cover.png"
import css from "./MobiApp.module.scss"
import google from "../../../../../assets/image/play-store.png"
import apple from "../../../../../assets/image/apple-store.png"
import phone from "../../../../../assets/image/app-screen.png"

export default function MobiApp() {
  return (
    <div data-aos="fade-left" id={css.download} className='overflow-hidden'>
      <img src={background} alt='bg' id={css.background} />

      <div id={css.content} className='p-xl-5 p-3 d-grid align-items-center gap-3'>
        <div className='d-flex flex-column gap-3'>
          <p>MOBILE APP VERSION</p>
          <h2>Get Our <span className='text-danger'>Mobile App</span><br />It's Make easy for you life !</h2>
        </div>

        <div className='d-flex gap-3 flex-wrap mw-100'>
          <img src={google} alt='google play' className='mw-50'/>
          <img src={apple} alt='app store' className='mw-50'/>
        </div>

        <img src={phone} alt='phone'/>
      </div>
    </div>
  )
}
