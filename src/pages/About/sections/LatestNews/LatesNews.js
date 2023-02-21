import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsArrowClockwise, BsShieldLock } from 'react-icons/bs';
import { TfiCup } from 'react-icons/tfi';
import NewsItem from '../../components/NewsItem';

export default function LatesNews() {
    return (
        <section>
            <div className='container my-5'>
                <div className='row row-cols-lg-4 row-cols-1 px-lg-5 py-4 bg-warning gap-5 gap-lg-0' data-aos="fade-up">
                    <div className='d-flex gap-3 align-items-center'>
                        <AiOutlineShoppingCart className='fs-1 text-warning' />
                        <div>
                            <p className='m-0 fw-bold'>Free Shipping</p>
                            <p className='m-0'>When ordering over $100</p>
                        </div>
                    </div>

                    <div className='d-flex gap-3 align-items-center'>
                        <BsArrowClockwise className='fs-1 text-warning' />
                        <div>
                            <p className='m-0 fw-bold'>Free Shipping</p>
                            <p className='m-0'>When ordering over $100</p>
                        </div>
                    </div>

                    <div className='d-flex gap-3 align-items-center'>
                        <BsShieldLock className='fs-1 text-warning' />
                        <div>
                            <p className='m-0 fw-bold'>Free Shipping</p>
                            <p className='m-0'>When ordering over $100</p>
                        </div>
                    </div>

                    <div className='d-flex gap-3 align-items-center'>
                        <TfiCup className='fs-1 text-warning' />
                        <div>
                            <p className='m-0 fw-bold'>Free Shipping</p>
                            <p className='m-0'>When ordering over $100</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <h2 className='text-center' data-aos="fade-down">My Latest News</h2>

                <div className='row row-cols-lg-2 py-4'>
                    <NewsItem />
                    <NewsItem />
                </div>
            </div>
        </section>
    )
}
