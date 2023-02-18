import React from 'react'
import css from "./SellerImage.module.scss"

export default function SellerImage({ image, name }) {
    return (
        <div id={css.image} className='col text-center'>
            <div>
                <img src={image} alt={name} className='p-4' />
            </div>

            <p className='mt-3 fw-bold'>{name}</p>
        </div>
    )
}
