import React from 'react'
import css from "./Breadcrumb.module.scss"

export default function Breadcrumb({location}) {

  return (
    <div id={css.bread} className='py-5'>
      <div className='container'>
        <div>
          Home / {location}
        </div>

        <h2 className='text-center py-3'>{location || "null"}</h2>
      </div>
    </div>
  )
}
