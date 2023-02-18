import React, { useState } from 'react'
import css from "./Header.module.scss"
import { Link } from 'react-router-dom'
import { Category } from '../../data/Categories'
import { BsArrowRepeat } from 'react-icons/bs'
import { AiOutlineHeart, AiOutlineShopping, AiOutlineUser } from 'react-icons/ai'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { HiOutlineMenuAlt2 } from 'react-icons/hi'
import { BiSearch } from 'react-icons/bi'
import CateHeader from '../CateHeader/CateHeader'
import MainMenu from '../MainMenu/MainMenu'

export default function Header() {
  const [toggle, setToggle] = useState(true)

  return (
    <header>
      <div className='py-2' id={css.header}>
        <div className='container d-flex justify-content-between'>
          <div className='d-flex gap-4'>
            <Link to="/">Account</Link>
            <Link to='/'>Track Order</Link>
            <Link to='/'>Support</Link>
          </div>

          <div className='d-sm-flex gap-4 d-none'>
            <Link to='/'>United State</Link>
            <Link to='/'>USD</Link>
            <Link to='/'>Bangla</Link>
          </div>
        </div>
      </div>

      <div className='container py-3 d-none d-lg-block'>
        <div className='d-flex justify-content-between align-items-center'>
          <h1 className='text-warning'>Shop0</h1>

          <form action='' method='post' className='w-50'>
            <div className='input-group d-flex'>
              <div className='input-group w-75'>
                <input type='text' className='form-control' placeholder='Search Product...' />
                <select className='form-select text-secondary'>
                  {
                    Category.map(item => <option key={item.name} value={item.name}>{item.name}</option>)
                  }
                </select>
              </div>

              <button className='btn btn-warning col-2'>Search</button>
            </div>
          </form>

          <div className='d-flex gap-4' id={css.itemGroup}>
            <div>
              <BsArrowRepeat className='fs-4' />
              <span className='bg-warning rounded-circle'>2</span>
            </div>

            <div>
              <AiOutlineHeart className='fs-4' />
              <span className='bg-warning rounded-circle'>2</span>
            </div>

            <div>
              <AiOutlineShopping className='fs-4' />
              <span className='bg-warning rounded-circle'>2</span>
            </div>

            <div>
              <AiOutlineUser className='fs-4' />
            </div>
          </div>
        </div>
      </div>

      <div className='bg-warning d-none d-lg-block'>
        <div className='container d-flex justify-content-between border-0'>
          <div className='nav nav-tabs d-flex gap-5 align-items-center border-0'>
            <li className='nav-item h-100 pt-2 border-0'>
              <select className='form-select active border-0 rounded-top rounded-0 h-100'>
                <option defaultValue className='d-none'>All Categories</option>
                {
                  Category.map((item) => <option key={item.name} value={item.name}>{item.name}</option>)
                }
              </select>
            </li>

            <li class="nav-item"><Link to="/">HomePage</Link></li>
            <li class="nav-item"><Link to="/">Shop</Link></li>
            <li class="nav-item"><Link to="/">Pages</Link></li>
            <li class="nav-item"><Link to="/about">About</Link></li>
            <li class="nav-item"><Link to="/">Blog</Link></li>
            <li class="nav-item"><Link to="/">Contact</Link></li>
          </div>

          <div className='btn btn-dark rounded-0 my-2 d-flex align-items-center gap-1'>
            Become a Seller <MdOutlineKeyboardArrowRight />
          </div>
        </div>
      </div>

      <div id={css.headerSm} className='bg-white d-block d-lg-none container-fluid'>
        <div className='d-flex justify-content-between align-items-center py-2'>
          <HiOutlineMenuAlt2 className='text-black fs-4' data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasWithBackdrop" />

          <h1 className='text-warning'>Shop0</h1>

          <div>
            <AiOutlineShopping className='fs-4' />
            <span className='bg-warning rounded-circle'>2</span>
          </div>
        </div>
      </div>

      <div class="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExample">
        <div class="offcanvas-header">
          <div className='d-flex gap-3'>
            <div className={css.icons}>
              <BsArrowRepeat className='fs-4' />
              <span className='bg-warning rounded-circle'>2</span>
            </div>

            <div className={css.icons}>
              <AiOutlineHeart className='fs-4' />
              <span className='bg-warning rounded-circle'>2</span>
            </div>
          </div>

          <button type="button" class="btn-close text-reset bg-danger rounded-circle text-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>

        <div class="offcanvas-body px-0">
          <form action='' method='post' className='container-fluid'>
            <div className='input-group'>
              <input className='border-1 form-control' type='text' name='search' id='search' placeholder='Search Product...' style={{ width: "80%" }} />
              <button className='bg-warning border-0' style={{ width: "20%" }}><BiSearch /></button>
            </div>
          </form>

          <div>
            <div className='py-2 container-fluid'>
              <p className={toggle ? 'btn fw-bold' : 'btn fw-bold text-secondary'} onClick={() => setToggle(true)}>Categrories</p>
              <p className={toggle ? 'btn border-start fw-bold text-secondary' : 'btn border-start fw-bold'} onClick={() => setToggle(false)}>Main Menu</p>
            </div>

            {
              toggle ? <CateHeader /> : <MainMenu />
            }



          </div>
        </div>
      </div>
    </header>
  )
}
