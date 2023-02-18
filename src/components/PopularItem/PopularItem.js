import React from 'react'
import css from "./PopularItem.module.scss"
import img from "../../assets/image/product-img-5.png"

export default function PopularItem() {
    return (
        <div id={css.item} data-aos="fade-up">
            <div className='d-flex align-items-center bg-white py-3 px-2'>
                <img src={img} alt='img' width={80} height={80} />

                <div className='d-flex flex-column justify-conent-between'>
                    <h6>Xoggle aute et pariatur...</h6>

                    <div className='d-flex gap-2 fs-5'>
                        <p className='text-decoration-line-through fw-bold text-secondary'>$27.27</p>
                        <p className='text-danger fw-bold'>$18.73</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
