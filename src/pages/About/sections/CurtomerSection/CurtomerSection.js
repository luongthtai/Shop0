import React, { createRef } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import CustomerItem from '../../components/CustomerItem';


export default function CurtomerSection() {
    const slider = createRef()

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    };

    const previous = () => {
        slider.current.slickPrev()
    }

    const next = () => {
        slider.current.slickNext()
    }


    return (
        <section className='bg-white pt-5'>
            <h3 className='text-center'>Customers Feedback</h3>

            <div className='py-4 overflow-hidden'>
                <Slider ref={slider} {...settings}>
                    <div key={1}>
                        <CustomerItem />
                    </div>
                    <div key={2}>
                        <CustomerItem />
                    </div>
                    <div key={3}>
                        <CustomerItem />
                    </div>
                    <div key={4}>
                        <CustomerItem />
                    </div>
                    <div key={5}>
                        <CustomerItem />
                    </div>
                    <div key={6}>
                        <CustomerItem />
                    </div>
                </Slider>

                <div className='mt-5 d-flex gap-3 justify-content-center w-100'>
                    <button className="btn btn-outline-warning rounded-circle d-flex justify-content-center align-items-center" onClick={previous} style={{ width: "50px", height: "50px", }}>
                        <AiOutlineLeft />
                    </button>
                    <button className="btn btn-outline-warning rounded-circle d-flex justify-content-center align-items-center" onClick={next} style={{ width: "50px", height: "50px", }}>
                        <AiOutlineRight />
                    </button>
                </div>
            </div>
        </section>
    )
}
