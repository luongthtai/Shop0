import React from 'react'
import css from "./PopularItems.module.scss"
import TitleSection from '../../../components/TitleSection/TitleSection'
import PopularItem from '../../../components/PopularItem/PopularItem'

export default function PopularItems() {
  return (
    <section id={css.popular} className='container-lg container-pluid py-5 overflow-hidden'>
        <TitleSection title="Popular Sales" view={true}/>

        <div className='row row-cols-lg-3 py-4 gy-1 gx-4'>
            <PopularItem />
            <PopularItem />
            <PopularItem />
            <PopularItem />
            <PopularItem />
            <PopularItem />
            <PopularItem />
            <PopularItem />
            <PopularItem />
            <PopularItem />
            <PopularItem />
            <PopularItem />
        </div>
    </section>
  )
}
