import React from 'react'
import { AiFillStar } from 'react-icons/ai'

export default function WriteReview() {
    return (
        <div className='py-4 d-grid gap-4'>
            <h4>Whire Your Reviews</h4>

            <div className="d-flex gap-1">
                <div className="text-secondary">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </div>
                <p>(0.0)</p>
            </div>

            <form action='' method='post' className='d-grid gap-4 mt-4'>
                <div className='row g-4'>
                    <div className='col'>
                        <label className='mb-3' htmlFor='name'>Name*</label>
                        <input className='form-control rounded-0' type='text' name='name' id='name' />
                    </div>

                    <div className='col'>
                        <label className='mb-3' htmlFor='email'>Email*</label>
                        <input className='form-control rounded-0' type='text' name='email' id='email' />
                    </div>

                    <div className='col'>
                        <label className='mb-3' htmlFor='phone'>Phone Number*</label>
                        <input className='form-control rounded-0' type='text' name='phone' id='phone' />
                    </div>
                </div>

                <div>
                    <label className='mb-3' htmlFor='message'>Message*</label>
                    <textarea className='form-control rounded-0' id='message' name='message' rows="5"></textarea>
                </div>

                <div className='text-end'>
                    <button className='btn btn-dark w-25 rounded-0'>Submit Review</button>
                </div>
            </form>
        </div>
    )
}
