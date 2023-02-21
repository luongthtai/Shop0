import React from 'react'
import image from "../../../assets//image/product-details-1.png"
import { AiFillDelete } from 'react-icons/ai'

export default function CartItem() {
    return (
        <>
            <tr className='text-center border'>
                <td className='d-flex gap-4 align-items-center px-4'>
                    <img src={image} alt='product' className='border' style={{ width: "80px", height: "80px" }} />
                    <p>iPhone 12 Pro Max 128GB</p>
                </td>

                <td className='align-middle'>
                    <div className='rounded-circle bg-danger m-auto' style={{ width: "20px", height: "20px" }}></div>
                </td>

                <td className='text-secondary align-middle'>
                    Small
                </td>

                <td className='text-secondary align-middle'>
                    $38
                </td>

                <td className='align-middle'>
                    <div className='col btn border d-flex gap-3 justify-content-around'>
                        <p>-</p>
                        <p>1</p>
                        <p>+</p>
                    </div>
                </td>

                <td className='text-secondary align-middle'>
                    $38
                </td>

                <td className='text-secondary poiter text-danger align-middle' role="button">
                    <AiFillDelete />
                </td>
            </tr>
        </>
    )
}
