import React from 'react'
import css from "./Discount.module.scss"

export default function Discount() {
    return (
        <section id={css.discount}>
            <div className='container text-center py-4 overflow-hidden'>
                <div className='d-grid gap-5 p-5'>
                    <div data-aos="fade-up">
                        <h2 className='fw-bold'>Get <span className='text-warning'>20%</span> Off Discount Coupon</h2>
                        <p className='fs-5'>by Subscribe our Newsletter</p>
                    </div>

                    <form data-aos="fade-left" action='' method='post' className='d-flex justify-content-center'>
                        <div className='input-group w-50'>
                            <input className='form-control rounded-0 p-3' type='emai' placeholder='EMAIL ADDRESS' />
                            <button className='btn btn-warning rounded-0 fw-bold'>Get the Coupon</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
