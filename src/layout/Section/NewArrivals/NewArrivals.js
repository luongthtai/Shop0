import React from 'react'
import TitleSection from '../../../components/TitleSection/TitleSection'
import ProductItem from '../../../components/ProductItem/ProductItem'
import css from "./NewArrivals.module.scss"

export default function NewArrivals() {
    return (
        <section className='container-lg container-fluid py-4 overflow-hidden' id={css.newArrivals}>
            <TitleSection title="New Arrivals" view={true}/>

            <div className='py-4 g-4 row row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1' id={css.listProduct}>
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
            </div>
        </section>  
    )
}
