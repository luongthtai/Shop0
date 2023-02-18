import React from 'react'
import css from "./BestSeller.module.scss"
import TitleSection from '../../../components/TitleSection/TitleSection'
import SellerImage from './SellerImage/SellerImage'
import ImageSeller from '../../../data/ImageSeller'

export default function BestSeller() {
    return (
        <section id={css.beatSeller} className='container-lg container-fluid overflow-hidden'>
            <TitleSection title="Best Saller" view={true} />

            <div className='row row-col-lg-6 py-4' data-aos="fade-right">
                {
                    ImageSeller.map(
                        (item) => <SellerImage key={item.name} image={item.image} name={item.name} />
                    )
                }
            </div>
        </section>
    )
}
