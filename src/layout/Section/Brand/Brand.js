import React from 'react'
import css from "./Brand.module.scss"
import TitleSection from '../../../components/TitleSection/TitleSection'
import { ImageBrand } from '../../../data/ImageBrand'
import FlashSale from './components/FlashSale/FlashSale'
import MobiApp from './components/MobiApp/MobiApp'

export default function Brand() {
    return (
        <section id={css.brand} className='container-lg container-fluid overflow-hidden'>
            <TitleSection title="Shop by Brand" />

            <div className='row row-cols-lg-6 row-cols-2 row-cols-md-4 my-3' data-aos="fade-up">
                {
                    ImageBrand.map(item => <div className='p-1' key={item.name}>
                        <img src={item.image} alt={item.name} className='py-3 bg-white w-100 h-100' />
                    </div>)
                }
            </div>

            <div className='row row-cols-lg-2 py-5'>
                <FlashSale />
                <MobiApp />
            </div>
        </section>
    )
}
