import React from 'react'
import TitleSection from '../../../components/TitleSection/TitleSection'
import css from "./GameWorld.module.scss"
import imageBg from "../../../assets/image/section-category-1.jpg"
import { AiOutlineRight } from 'react-icons/ai'
import ProductItem from '../../../components/ProductItem/ProductItem'

export default function GameWorld({ title, type, bgItem, imgItem }) {
    return (
        <section data-aos="fade-up" className='container-lg container-pluid py-5 overflow-hidden'>
            <TitleSection title={title || "Game World"} view={true} />

            <div className='py-4 row row-cols-xl-4 row-cols-lg-3 row-cols-1 row-cols-sm-2'>
                <div id={css.category} className='position-relative d-none d-xl-block'>
                    <img src={bgItem || imageBg} alt='category' className='w-100' />

                    <div className='d-flex flex-column gap-3 position-absolute' id={css.listType}>
                        <h5>{type || "Mobile & Table"}</h5>

                        <ul className='text-secondary d-flex flex-column gap-2'>
                            <li>Xioami</li>
                            <li>Apple</li>
                            <li>Google</li>
                            <li>Samsung</li>
                        </ul>

                        <div className='fw-bold d-flex align-items-center gap-1'>
                            <p>Shop now</p>
                            <AiOutlineRight />
                        </div>
                    </div>
                </div>

                <ProductItem img={imgItem} />
                <ProductItem img={imgItem} />
                <ProductItem img={imgItem} />
            </div>
        </section>
    )
}
