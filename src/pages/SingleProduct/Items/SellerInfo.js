import React from 'react'
import RelatedProduct from '../Components/RelatedProduct'
import ProductItem from '../../../components/ProductItem/ProductItem'
import { AiFillStar } from 'react-icons/ai'
import image1 from "../../../assets/image/about-banner.png"

export default function SellerInfo() {
  return (
    <>
      <div className='py-5' style={{ backgroundColor: "var(--bgColor)" }}>
        <div className='container-lg container-fluid' data-aos="fade-up">
          <div className='row row-cols-3 pb-4 border-bottom'>
            <div className='col'>
              <div className="d-flex gap-3 align-items-center">
                <div className="d-flex gap-3 align-items-center">
                  <img src={image1} alt="avarta" className="rounded-circle" style={{ width: "80px", height: "80px" }} />
                </div>

                <div className="d-grid gap-3">
                  <div className="d-grid gap-2">
                    <h6>Rafiqui Islam</h6>

                    <p className="text-secondary">London, UK</p>
                  </div>

                  <div className='d-flex gap-2'>
                    <div className="text-warning">
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </div>
                    <p>(4.0)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='col d-flex flex-column justify-content-between'>
              <p>Product: <span className="text-secondary">120</span></p>
              <p>Category: <span className="text-secondary">Mobile Phone, Sport, Gaming, Electronics</span></p>
              <p>Tags: <span className="text-secondary">Beer, Foamer</span></p>
            </div>

            <div className='col d-flex flex-column justify-content-between'>
              <p>Product: <span className="text-secondary">120</span></p>
              <p>Category: <span className="text-secondary">Mobile Phone, Sport, Gaming, Electronics</span></p>
              <p>Tags: <span className="text-secondary">Beer, Foamer</span></p>
            </div>
          </div>

          <div className='d-grid gap-3 pt-4 clasName="text-secondary"'>
            <h4>Product from Shop</h4>

            <div className='row row-cols-4 gy-4'>
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
            </div>
          </div>
        </div>
      </div>

      <RelatedProduct />
    </>
  )
}
