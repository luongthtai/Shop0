import React from 'react'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
    return (
        <div className='container'>
            <div className='text-center'>
                <h1>Ooopp !!!</h1>
                <Link to="/">Back to Home</Link>
            </div>
        </div>
    )
}
