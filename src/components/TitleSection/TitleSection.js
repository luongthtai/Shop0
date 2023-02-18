import React from 'react'
import { HiOutlineArrowRight } from 'react-icons/hi'
import css from "./TitleSection.module.scss"

export default function TitleSection({ title, view }) {
    return (
        <div data-aos="fade-up" id={css.title} className='d-flex justify-content-between align-items-center'>
            <h2>{title}</h2>

            {
                view ? <div className='d-flex align-items-center gap-1 fw-bold'>
                    <p>View more</p>
                    <HiOutlineArrowRight />
                </div> : null
            }
        </div>
    )
}
