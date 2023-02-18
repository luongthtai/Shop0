import React from 'react'
import css from "./ProductSelling.module.scss"
import { GoStar } from 'react-icons/go'
import { BsArrowRepeat, BsArrowsFullscreen, BsHeart } from 'react-icons/bs'
import productImage from "../../assets/image/product-img-4.jpg"

export default function ProductSelling() {
    return (
        <div className='bg-white p-2' data-aos="fade-right">
            <div id={css.product} className='row row-cols-2 p-3 py-0'>
                <img src={productImage} alt='product' />

                <div className='d-flex flex-column justify-content-between py-5' id={css.content}>
                    <div className='text-warning'>
                        <GoStar />
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

                    <p id={css.addCart} className='bg-warning'>Add to cart</p>
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
            </div>
        </div>
    )
}
