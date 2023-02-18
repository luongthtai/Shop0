import React from 'react'
import css from "./Selling.module.scss"
import TitleSection from '../../../components/TitleSection/TitleSection'
import ProductSelling from '../../../components/ProductSelling/ProductSelling'

export default function Selling() {
  return (
    <section id={css.selling} className='container-lg container-fluid overflow-hidden'>
        <TitleSection title="Top Selling Products" view={true}/>

        <div className='py-4' id={css.sellingList}>
            <ProductSelling />
            <ProductSelling />
            <ProductSelling />
            <ProductSelling />
        </div>
    </section>
  )
}
