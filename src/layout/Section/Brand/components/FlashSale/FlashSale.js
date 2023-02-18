import React from 'react'
import css from "./FlashSale.module.scss"
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import background from "../../../../../assets/image/campaign-cover-countdown.jpg"

export default function FlashSale() {
    return (
        <div data-aos="fade-right" id={css.flashSale} className='overflow-hidden'>
            <img src={background} alt='background'/>

            <div id={css.content} className='d-flex flex-column gap-5 w-100 container-sm container-pluid'>
                <div className='row row-cols-4 g-2' id={css.date}>
                    <div>
                        <p className='bg-white rounded-circle d-flex align-items-center justify-content-center fs-3 fw-bold'>15</p>
                        <p className='fw-bolder pt-2'>Days</p>
                    </div>
                    <div>
                        <p className='bg-white rounded-circle d-flex align-items-center justify-content-center fs-3 fw-bold'>15</p>
                        <p className='fw-bolder pt-2'>Hours</p>
                    </div>
                    <div>
                        <p className='bg-white rounded-circle d-flex align-items-center justify-content-center fs-3 fw-bold'>15</p>
                        <p className='fw-bolder pt-2'>Minutes</p>
                    </div>
                    <div>
                        <p className='bg-white rounded-circle d-flex align-items-center justify-content-center fs-3 fw-bold'>15</p>
                        <p className='fw-bolder pt-2'>Seconds</p>
                    </div>
                </div>
                <div className='d-flex flex-column gap-4'>
                    <h2 className='h1 fw-bold'>WOO! Flash Sale</h2>
                    <p className='fw-bold border-bottom border-warning' id={css.shopNow}>Shop Now <MdOutlineKeyboardArrowRight /></p>
                </div>
            </div>
        </div>
    )
}
