import React from 'react'
import css from "./ProductItem.module.scss"
import image from "../../assets/image/product-img-1-removebg-preview.png"
import { GoStar } from 'react-icons/go'
import { AiOutlineShopping } from 'react-icons/ai'
import { BsArrowRepeat, BsArrowsFullscreen, BsHeart } from 'react-icons/bs'

export default function ProductItem({ img }) {
    return (
        <div data-aos="fade-up">
            <div id={css.product} className='p-5 bg-white h-100'>
                <img src={img || image} alt='product' className='w-100' />

                <div className='d-flex flex-column justify-content-between pt-3' id={css.content}>
                    <div className='text-warning'>
                        <GoStar />
                        <GoStar />
                        <GoStar />
                        <GoStar />
                    </div>

                    <p className='fw-bold '>Xoggle aute et pariatur adipisicing nostrud et luluku</p>

                    <div className='d-flex gap-2 fs-5'>
                        <p className='text-decoration-line-through fw-bold text-secondary'>$27.27</p>
                        <p className='text-danger fw-bold'>$18.73</p>
                    </div>
                </div>

                <div id={css.iconGroup}>
                    <div className='rounded-3'>
                        <BsArrowsFullscreen />
                    </div>
                    <div className='rounded-3'>
                        <BsHeart />
                    </div>
                    <div className='rounded-3'>
                        <BsArrowRepeat />
                    </div>
                </div>

                <div id={css.addCart} className='bg-warning'>
                    <AiOutlineShopping />
                    <p>Add to cart</p>
                </div>
            </div>
        </div>
    )
}
