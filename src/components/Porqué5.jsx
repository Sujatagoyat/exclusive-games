import React from 'react'
import Imagecasino from '../assets/png/casino-night.png'

function Porqué5() {
    return (
        <section className='py-23 bg-img-5 bg-clr-white'>
            <div className="container">
                <div className="row">
                <div className="col-lg-6 ">
                    <h1 className='heading pb-16 pt-79  '>Por qué elegirnos</h1>
                    <p className='text max-w-526 text-clr pb-24'>Con Exclusive Games tenés Exclusivos beneficios. Te reintegramos todo lo invertido en fichas en la moneda que elijas. En Exclusive Games siempre sumamos nuevos juegos. Juegos crash, los juegos interactivos que más pide la gente. Con Exclusive Games empezás a ganar ya! Creamos tu plataforma en solo 2 semanas.</p>

                    <div className='position-relative mb-5 mb-lg-0'>
                        <button className='bttn btn-1-style'>Aprende más</button>
                        <div className='btn-svg'>
                            <svg width="107" height="28" viewBox="0 0 107 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.5 1C1.5 15.3594 13.1406 27 27.5 27H105.5" stroke="url(#paint0_linear_2657_11)" stroke-width="1.5" stroke-linecap="round" />
                                <defs>
                                    <linearGradient id="paint0_linear_2657_11" x1="134.466" y1="25.6913" x2="113.531" y2="-37.3975" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#51C8EF" />
                                        <stop offset="1" stop-color="#7AF57A" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 flex-lg-column flex-column-reverse ">
                    <img className='w-100 h-100 object-fit-contain' src={Imagecasino} alt="casino-night.png" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Porqué5