import React from 'react'
import ProductItem from '../../../components/ProductItem/ProductItem'

export default function RelatedProduct() {
    return (
        <div className='' style={{ backgroundColor: "var(--bgColor)" }}>
            <div className='container py-5 d-grid gap-4'>
                <h4>Related Product</h4>

                <div className='row row-cols-4'>
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                </div>
            </div>
        </div>
    )
}
