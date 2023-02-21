import React from 'react'
import Comment from '../Components/Comment'
import WriteReview from '../Components/WriteReview'
import RelatedProduct from '../Components/RelatedProduct'

export default function Reviews() {
  return (
    <>
      <div className='container-lg container-fluid d-grid gap-3 justify-content-center py-5' data-aos="fade-up">
        <h4>Review</h4>

        <div className='pb-2 d-grid gap-3'>
          <Comment />
          <Comment reply={true} />
        </div>

        <div className='text-center'>
          <button className='btn btn-dark rounded-0 text-center w-25 py-2'>Load More</button>
        </div>

        <WriteReview />
      </div>
     
      <RelatedProduct />
    </>
  )
}
