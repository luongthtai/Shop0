import React from 'react'
import banner from "../../../../assets/image/about-banner.png"

export default function HeroSection() {
    return (
        <section className='container-lg container-fluid py-5'>
            <div className='row row-cols-1 row-cols-lg-2 gy-4 align-items-center'>
                <img src={banner} alt='banner' style={{objectFit: "cover"}}/>

                <div className='d-grid gap-4 ps-4'>
                    <h4>What is e-commerce business?</h4>
                    <p className='text-secondary lh-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the on leap into electronic typesetting.</p>

                    <ul className='text-secondary ps-4 d-grid gap-3' style={{listStyleType: "disc"}}>
                        <li>Slim body with metal cover</li>
                        <li>Latest Intel Core i5-1135G7 processor (4 cores / 8 threads)</li>
                        <li>8GB DDR4 RAM and fast 512GB PCIe SSD</li>
                        <li>NVIDIA GeForce MX350 2GB GDDR5 graphics card backlit keyboard</li>
                    </ul>

                    <button type='button' className='btn btn-warning rounded-0' style={{width: "fit-content"}}>Contact Us</button>
                </div>
            </div>
        </section>
    )
}
