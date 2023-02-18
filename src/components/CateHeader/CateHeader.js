import React from 'react'
import { Category } from '../../data/Categories'
import css from "./CateHeader.module.scss"
import { TfiAngleRight } from 'react-icons/tfi'

export default function CateHeader() {
    return (
        <div className='d-grid gap-1 py-3'>
            {
                Category.map((item) => <div key={item.name} className='d-flex justify-content-between p-3' id={css.cateItem}>
                    <div className='d-flex gap-4'>
                        {item.icon}
                        <p>{item.name}</p>
                    </div>

                    <TfiAngleRight />
                </div>)
            }
        </div>
    )
}
