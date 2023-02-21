import React from 'react'
import img1 from "../../../assets/image/blog-img-1.jpg"
import { BiUser } from 'react-icons/bi'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { TfiCommentAlt } from 'react-icons/tfi'

export default function NewsItem() {
    return (
        <div className='border p-0' data-aos="fade-up">
            <img src={img1} alt='blog-img-1' className='w-100'/>

            <div className='p-4 d-grid gap-3'>
                <div className='d-flex gap-4'>
                    <div className='d-flex gap-2'>
                        <BiUser className='text-warning'/>
                        <p>By Admin</p>
                    </div>
                    <div className='d-flex gap-2'>
                        <TfiCommentAlt className='text-warning'/>
                        <p>By Admin</p>
                    </div>
                </div>

                <h3>Reprehenderit Non Esse Anim Laboris Reprehenderit Officia</h3>

                <p className='lh-base text-secondary'>irure laborum qui deserunt excepteur id ad sit quis laboris duis ut cillum eiusmod non sint exercitation nulla tempor nostrud eiusmod commodo</p>

                <Link to='#' style={{width: "fit-content"}} className='bg-light border-0 fw-bold'>View More <AiOutlineArrowRight /></Link>
            </div>
        </div>
    )
}
