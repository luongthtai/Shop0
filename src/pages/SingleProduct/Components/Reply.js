import React from 'react'
import image1 from "../../../assets/image/banner-1.png"

export default function Reply() {
  return (
    <div className='d-grid gap-3 p-4 border-top'>
        <div className='d-flex align-items-center gap-3'>
            <img src={image1} alt='avarta' className='rounded-circle' style={{width: "50px",height: "50px"}}/>

            <p>London, UK</p>
        </div>

        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    </div>
  )
}

