import React from 'react'
import css from "./SubTotal.module.scss"

export default function SubTotal() {
    return (
        <div className='col-lg-4 col-md-6 col-12 d-grid gap-4'>
            <div id={css.update} className='d-flex justify-content-between gap-2'>
                <button className='btn rounder-0 col-7'>Continue Shopping</button>
                <button className='btn rounder-0 col'>Update Cart</button>
            </div>

            <div className='border px-4'>
                <div className='border-bottom py-4 d-flex justify-content-between align-items-center'>
                    <h5>Subtotal</h5>
                    <p className='text-danger fw-bold'>$365</p>
                </div>

                <div className='py-4'>
                    <h5 className='pb-4'>Shipping</h5>

                    <form action="" method="post" className='d-grid gap-4'>
                        <div className='d-grid gap-2'>
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <input type='radio' name='shipping' id='free' value="freeship" />
                                    <label className='ms-2' htmlFor='free'>Free Shipping</label>
                                </div>

                                <p>+$00.00</p>
                            </div>

                            <div className='d-flex justify-content-between'>
                                <div>
                                    <input type='radio' name='shipping' id='flatRate' value="freeship" />
                                    <label className='ms-2' htmlFor='flatRate'>Flat Rate</label>
                                </div>

                                <p>+$00.00</p>
                            </div>

                            <div className='d-flex justify-content-between'>
                                <div>
                                    <input type='radio' name='shipping' id='localDelivery' value="freeship" />
                                    <label className='ms-2' htmlFor='localDelivery'>Local Delivery</label>
                                </div>

                                <p>+$00.00</p>
                            </div>
                        </div>

                        <h5>Calculate Shipping</h5>

                        <div className='d-grid gap-2'>
                            <select class="form-select rounded-0 text-secondary" aria-label="Default select example">
                                <option defaultValue className='d-none'>Select Country</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>

                            <input type='text' className='form-control rounded-0' placeholder='Postcode / ZIP' />

                            <button className='btn fw-bold rounded-0' type='button' style={{backgroundColor: "var(--bgColor)"}}>Update Cart</button>
                        </div>

                        <div className='d-grid gap-4'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <h5>Total</h5>
                                <p className='text-danger fw-bold'>$365</p>
                            </div>

                            <a href='/checkout' className='btn btn-dark rounded-0'>Proceed to Checkout</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
