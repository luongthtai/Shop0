import React from 'react'
import GameWorld from '../GameWorld/GameWorld'
import ImageBg from "../../../assets/image/section-category-2.jpg"
import imgItem from "../../../assets/image/product-img-5.png"

export default function PopularSales() {
    return (
        <section className='container-lg container-fluid py-5 overflow-hidden' data-aos="fade-up">
            <GameWorld title="Popular Sales" type="Electronics" bgItem={ImageBg} imgItem={imgItem}/>
        </section>
    )
}
