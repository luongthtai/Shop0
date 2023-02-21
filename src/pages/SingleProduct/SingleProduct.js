import React, { useState } from 'react'
import ImgProduct1 from "../../assets/image/product-details-1.png"
import ImgProduct2 from "../../assets/image/product-details-2.png"
import ImgProduct3 from "../../assets/image/product-details-3.png"
import ImgProduct4 from "../../assets/image/product-details-4.png"
import ImgProduct5 from "../../assets/image/product-details-5.png"
import { AiFillStar, AiOutlineHeart } from 'react-icons/ai'
import css from "./SingleProduct.module.scss"
import Description from './Items/Description'
import Reviews from './Items/Reviews'
import SellerInfo from './Items/SellerInfo'
import { HiFlag } from 'react-icons/hi'
import { FaFacebookF, FaTwitter } from 'react-icons/fa'

export default function SingleProduct() {
    const [toggle, setToggle] = useState(1)
    const [image, setImage] = useState(ImgProduct1)

    return (
        <main>
            <section id={css.product}>
                <p className='container-lg container-fluid py-4'>Home / Single Page</p>

                <div className='container-lg container-fluid'>
                    <div className='row row-cols-lg-2 row-cols-1 align-items-center'>
                        <div id={css.ImgProduct} className='d-grid gap-3 p-0'>
                            <div id={css.showProduct} style={{ height: "600px" }} className='d-flex bg-white'>
                                <img src={image} alt='img-1' />

                                <div className='bg-warning fs-4'>-50%</div>
                            </div>

                            <div id={css.listImg} className='d-flex justify-content-between flex-wrap'>
                                <div className={css.imgSmall} onClick={() => setImage(ImgProduct2)}>
                                    <img src={ImgProduct2} alt="img-2" />
                                </div>
                                <div className={css.imgSmall} onClick={() => setImage(ImgProduct3)}>
                                    <img src={ImgProduct3} alt="img-2" />
                                </div>
                                <div className={css.imgSmall} onClick={() => setImage(ImgProduct4)}>
                                    <img src={ImgProduct4} alt="img-2" />
                                </div>
                                <div className={css.imgSmall} onClick={() => setImage(ImgProduct5)}>
                                    <img src={ImgProduct5} alt="img-2" />
                                </div>
                                <div className={css.imgSmall} onClick={() => setImage(ImgProduct1)}>
                                    <img src={ImgProduct1} alt="img-2" />
                                </div>
                            </div>
                        </div>

                        <div id={css.infoProduct} className='col h-100 d-grid gap-3 ps-5'>
                            <div className='d-grid gap-2'>
                                <p>MOBILE PHONES</p>
                                <h4>Samsung Galaxy Z Fold3 5G 3 colors in 512GB</h4>
                            </div>

                            <div className='d-grid gap-4'>
                                <div className='d-flex gap-1'>
                                    <div className='text-warning'>
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </div>
                                    <p>6 Reviews</p>
                                </div>

                                <div className='d-flex gap-2 align-items-end'>
                                    <p className='text-secondary text-decoration-line-through'>$9.99</p>
                                    <p className='text-danger fs-4 fw-bold'>$6.99</p>
                                </div>

                                <p className='text-secondary lh-base'>
                                    It is long established fact that a reader will be distracted by readable there content of a page when looking at its layout.
                                </p>

                                <div className='d-grid gap-2'>
                                    <p>COLOR</p>

                                    <div className='d-flex gap-3'>
                                        <div className='rounded-circle border bg-warning' style={{ width: "20px", height: "20px" }}></div>
                                        <div className='rounded-circle border bg-info' style={{ width: "20px", height: "20px" }}></div>
                                        <div className='rounded-circle border' style={{ width: "20px", height: "20px" }}></div>
                                        <div className='rounded-circle border bg-danger' style={{ width: "20px", height: "20px" }}></div>
                                    </div>
                                </div>

                                <form action='' method='post' className='d-grid gap-4'>
                                    <p>SIZE</p>

                                    <select class="form-select" aria-label="Default select example">
                                        <option value="small">Small</option>
                                        <option value="medium">Medium</option>
                                        <option value="large">Large</option>
                                        <option value="extra">Extra Large</option>
                                    </select>

                                    <div className='d-flex gap-2'>
                                        <div className='col btn border d-flex gap-3 justify-content-between'>
                                            <p>-</p>
                                            <p>1</p>
                                            <p>+</p>
                                        </div>

                                        <div className='col-1 btn border justify-content-center'>
                                            <AiOutlineHeart />
                                        </div>

                                        <button className='col-8 btn btn-dark rounded-0 border' type='submit'>Add To Cart</button>
                                    </div>
                                </form>

                                <div className='d-grid gap-4' data-aos="fade-up">
                                    <div className='d-grid gap-3'>
                                        <p>Category: <span className='text-secondary'>Kitchen</span></p>
                                        <p>Tags: <span className='text-secondary'>Beer, Foamer</span></p>
                                        <p>SKU: <span className='text-secondary'>KE-91039</span></p>
                                    </div>

                                    <div className='text-danger d-flex gap-2' data-aos="fade-up">
                                        <HiFlag />
                                        <p>Report This Item</p>
                                    </div>

                                    <div className='d-flex gap-2' data-aos="fade-up">
                                        <p>Share This</p>
                                        <div className='d-flex gap-2'>
                                            <FaFacebookF />
                                            <FaTwitter />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='mt-5 bg-white' id={css.contentProduct}>
                <div className='border-bottom'>
                    <div className='container-lg container-fluid py-3' id={css.listMenu}>
                        <div className='fw-bold' onClick={() => setToggle(1)} style={toggle === 1 ? { color: "#000" } : null}>Description</div>
                        <div className='fw-bold' onClick={() => setToggle(2)} style={toggle === 2 ? { color: "#000" } : null}>Reviews</div>
                        <div className='fw-bold' onClick={() => setToggle(3)} style={toggle === 3 ? { color: "#000" } : null}>Seller Info</div>
                    </div>
                </div>

                <div>
                    {
                        toggle === 1 ? <Description /> : toggle === 2 ? <Reviews /> : <SellerInfo />
                    }
                </div>
            </section>
        </main>
    )
}
