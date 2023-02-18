import React from 'react'
import css from "./HeroSection.module.scss"
import bran1 from "../../../assets/image/banner-1.png"
import bran2 from "../../../assets/image/banner-2.png"
import bran3 from "../../../assets/image/banner-3.png"
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BsArrowClockwise, BsShieldLock } from 'react-icons/bs'
import { TfiCup } from 'react-icons/tfi'

export default function HeroSection() {
  return (
    <section id={css.heroSection} className='container-lg container-pluid overflow-hidden'>
      <div className='d-flex flex-column gap-4'>
        <div id={css.brands} className='gap-lg-4 gap-0'>
          <img src={bran1} alt='brand-1' />
          <img src={bran2} alt='brand-2' />
          <img src={bran3} alt='brand-3' />
        </div>

        <div className='row row-cols-lg-4 row-cols-1 px-lg-5 py-4 bg-white gap-5 gap-lg-0' data-aos="fade-up">
          <div className='d-flex gap-3 align-items-center'>
            <AiOutlineShoppingCart className='fs-1 text-warning' />
            <div>
              <p className='m-0 fw-bold'>Free Shipping</p>
              <p className='m-0'>When ordering over $100</p>
            </div>
          </div>

          <div className='d-flex gap-3 align-items-center'>
            <BsArrowClockwise className='fs-1 text-warning' />
            <div>
              <p className='m-0 fw-bold'>Free Shipping</p>
              <p className='m-0'>When ordering over $100</p>
            </div>
          </div>

          <div className='d-flex gap-3 align-items-center'>
            <BsShieldLock className='fs-1 text-warning' />
            <div>
              <p className='m-0 fw-bold'>Free Shipping</p>
              <p className='m-0'>When ordering over $100</p>
            </div>
          </div>

          <div className='d-flex gap-3 align-items-center'>
            <TfiCup className='fs-1 text-warning' />
            <div>
              <p className='m-0 fw-bold'>Free Shipping</p>
              <p className='m-0'>When ordering over $100</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
