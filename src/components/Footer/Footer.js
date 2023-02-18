import React from 'react'
import { AiFillYoutube, AiOutlineInstagram } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className='container-lg container-pluid'>
            <div className='text-center pb-5 border-bottom'>
                <h1>Shop0</h1>
            </div>

            <div className='row justify-content-between py-5 gap-3 gap-lg-0'>
                <div className='col-lg-4 col-12 d-grid gap-4 pe-5'>
                    <h5>About Us</h5>
                    <p className='text-secondary pe-5 lh-base'>We know there are a lot of threa developers our but we pride into a firm in the industry.</p>
                </div>

                <div className='row row-cols-lg-3 col-lg-8 col-12'>
                    <div className='d-grid gap-4'>
                        <h5>Feature</h5>

                        <ul className='text-secondary d-grid gap-3'>
                            <li>About Us</li>
                            <li>Terms Condition</li>
                            <li>Best Products</li>
                        </ul>
                    </div>

                    <div className='d-grid gap-4'>
                        <h5>General Links</h5>

                        <ul className='text-secondary d-grid gap-3'>
                            <li>Blog</li>
                            <li>Tracking Order</li>
                            <li>Become Seller</li>
                        </ul>
                    </div>

                    <div className='d-grid gap-4'>
                        <h5>Helpful</h5>

                        <ul className='text-secondary d-grid gap-3'>
                            <li>Flash Sale</li>
                            <li>FAQ</li>
                            <li>Support</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='py-4 border-top'>
                <div className='d-flex gap-2 text-secondary'>
                    <AiOutlineInstagram />
                    <FaFacebookF />
                    <AiFillYoutube />
                    <p>© 2022 Quomodosoft All rights reserved</p>
                </div>

                <div>

                </div>
            </div>
        </footer>
    )
}
