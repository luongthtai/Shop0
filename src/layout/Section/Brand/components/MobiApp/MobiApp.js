import React from 'react'
import background from "../../../../../assets/image/download-app-cover.png"
import css from "./MobiApp.module.scss"
import google from "../../../../../assets/image/play-store.png"
import apple from "../../../../../assets/image/apple-store.png"
import phone from "../../../../../assets/image/app-screen.png"

export default function MobiApp() {
  return (
    <div data-aos="fade-left" id={css.download}>
      <img src={background} alt='bg' id={css.background} />

      <div id={css.content} className='p-5 d-flex flex-column justify-content-between'>
        <div className='d-flex flex-column gap-3'>
          <p>MOBILE APP VERSION</p>
          <h2>Get Our <span className='text-danger'>Mobile App</span><br />It's Make easy for you life !</h2>
        </div>

        <div className='d-flex gap-3'>
          <img src={google} alt='google play'/>
          <img src={apple} alt='app store'/>
        </div>

        <img src={phone} alt='phone'/>
      </div>
    </div>
  )
}
