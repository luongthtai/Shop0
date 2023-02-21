import React from 'react'
import avtar from "../../../assets/image/banner-2.png"
import { AiFillStar } from 'react-icons/ai'

export default function CustomerItem() {
  return (
    <div className='p-5 mx-3 d-grid gap-4' style={{backgroundColor: "var(--bgColor)"}}>
        <div className='d-flex gap-1'>
            <div className='text-warning'>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
            </div>
            <p>(5.0)</p>
        </div>

        <div className='text-secondary lh-base'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an into the find unknown printer took a galley of type and scrambled it to make a type inot the specimen book. It has survived not only five centuries but also the on leap into find it a electronic typesetting, remaining end to make it.</div>
        
        <div className='d-flex gap-3'>
            <img src={avtar} alt='avarta' style={{width: "50px", height: "50px"}} className='rounded-circle'/>

            <div>
                <h5>Ridoy Rock</h5>
                <p>London, Uk</p>
            </div>
        </div>
    </div>
  )
}
