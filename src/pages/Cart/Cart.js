import React from 'react'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import CartItem from './Components/CartItem'
import SubTotal from './Components/SubTotal'

export default function Cart() {
  return (
    <main style={{backgroundColor: "var(--white)"}}>
      <Breadcrumb location="Your Cart" />

      <div className='container-xl container-fluid py-md-4 py-5'>
        <table class="table border">
          <thead>
            <tr className='text-center'>
              <th className='py-3'>PRODUCT</th>
              <th>COLOR</th>
              <th>SIZE</th>
              <th>PRICE</th>
              <th>QUANTITY</th>
              <th>TOTAL</th>
              <th></th>
            </tr>
          </thead>
          <tbody className='border-0'>
            <CartItem />
            <CartItem />
            <CartItem />
          </tbody>
        </table>

        <div className='d-md-flex d-grid gap-4 gap-md-0 justify-content-md-between'>
          <form action='' method='post' className='d-flex col-lg-3 col-12 col-md-5' style={{height: "fit-Content"}}>
            <input type='text' placeholder='Discount Code' className='col rounded-0 form-control'/>
            <button type='button' className='col btn-dark'>Apply</button>
          </form>

          <SubTotal />
        </div>
      </div>
    </main>
  )
}
