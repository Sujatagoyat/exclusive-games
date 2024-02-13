import React from 'react'
import Imagepoker from '../assets/png/poker.png'
import Imageaviator from '../assets/png/aviator.png'

function NuestraMission2() {
    return (
        <section id='Mission' className='bg-clr-2 py-5 position-relative overflow-hidden'>
            <div className="container">
                <div className="row ">

                    <div className="col-lg-6 item-center">
                        <img className='w-100 max-w-538 cursor-pointer position-relative ' src={Imagepoker} alt="poker.png" />
                        <div className='ellipse-position opacity-50 d-lg-block d-none'>
                            <div className='ellipse-1 blur'></div>
                        </div>
                        <div className='my-box'>
                            <h2 className='heading color-white pt-60'>Nuestra Visión</h2>
                            <p className='text color-lightwhite max-w-444 pt-2'>Nuestra visión es ser líderes indiscutibles en la industria de los juegos de azar y llevar nuestra pasión por el entretenimiento más allá de las fronteras. Imagina un mundo donde la emoción y la diversión no tengan límites, y ese es el mundo que queremos crear contigo.</p>
                            <p className='bttn color-green bttn-hover cursor-pointer mb-lg-0 mb-5 '>Aprende más ⟶</p>
                        </div>



                    </div>


                    <div className="col-lg-6  flex-column-reverse flex-lg-column item-center">
                        <div className='my-box'>
                            <h2 className='heading color-white mt-lg-0 mt-5 '>Nuestra Visión</h2>
                            <p className='text color-lightwhite max-w-444 pt-2'>Nuestra visión es ser líderes indiscutibles en la industria de los juegos de azar y llevar nuestra pasión por el entretenimiento más allá de las fronteras. Imagina un mundo donde la emoción y la diversión no tengan límites, y ese es el mundo que queremos crear contigo.</p>
                            <p className='bttn color-green pb-60 mb-0 cursor-pointer bttn-hover'>Aprende más ⟶</p>
                        </div>
                        <img className='w-100 cursor-pointer max-w-538' src={Imageaviator} alt="aviator.png" />
                        {/* <div className='ellipse-2-position blur opacity-50'>
                            <div className='ellipse-2'></div>
                        </div> */}


                    </div>
                </div>
            </div>
        </section>
    )
}

export default NuestraMission2