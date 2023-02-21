import React from 'react'
import css from "./MainMenu.module.scss"
import { TfiAngleRight } from 'react-icons/tfi'
import { Link } from 'react-router-dom'

export default function MainMenu() {
    return (
        <div id={css.mainMenu} className='py-3'>
            <ul className='d-grid gap-1'>
                <li><Link to="/" className='d-flex justify-content-between p-3'>Home <TfiAngleRight /></Link></li>
                <li className='d-flex justify-content-between p-3'>Shop <TfiAngleRight /></li>
                <li className='d-flex justify-content-between p-3'>Page <TfiAngleRight /></li>
                <ul className='ms-4'>
                    <li className='d-flex justify-content-between p-3'>Privacy Policy <TfiAngleRight /></li>
                    <li className='d-flex justify-content-between p-3'>FAQ <TfiAngleRight /></li>
                    <li className='d-flex justify-content-between p-3'>Terms and Conditions <TfiAngleRight /></li>
                </ul>
                <li><Link className='d-flex justify-content-between p-3' to="/about">About <TfiAngleRight /></Link></li>
                <li className='d-flex justify-content-between p-3'>Blogs <TfiAngleRight /></li>
                <li className='d-flex justify-content-between p-3'>Contact <TfiAngleRight /></li>
            </ul>
        </div>
    )
}
