import React from 'react'
import ImageHead from '../assets/png/logo.png'

function Header() {
  return (
    <header className='bg-img  min-vh-100 d-flex flex-column'>
      <div className='bg-clr'>
        <div className="container">
          <nav className='pt-3 pb-3' >
            <div className='d-flex justify-content-between align-items-center' >
              <img className='cursor-pointer my-image' src={ImageHead} alt="logo.png" />
              <label htmlFor="menu-icon">
                <span></span>
                <span></span>
                <span></span>
              </label>
              <input type="checkbox" id='menu-icon' hidden />
              {/* <div className='sm-screen'> */}
              {/* <div className='d-flex gap-50  align-items center ' > */}
              <ul className='d-flex align-items-center gap-5 mb-0 sm-screen'>
                <li><a className='link  underline position-relative' href="">Hogar</a></li>
                <li><a className='link underline position-relative' href="#Mission">Misión</a></li>
                <li><a className='link underline position-relative' href="">Tragamonedas</a></li>
                <li><a className='link text-nowrap underline position-relative' href="#Por">Por qué elegirnos</a></li>
                <li><a className='link underline position-relative' href="">Ofertas</a></li>
                <li><button className='bttn nav-bttn d-lg-none d-block'>Acceso</button></li>
              </ul>

              {/* </div> */}
              <div className='position-relative d-lg-block d-none'>
                <button className='bttn nav-bttn'>Acceso</button>
                <div className='btn-svg d-lg-block d-none'>
                  <svg width="106" height="28" viewBox="0 0 106 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1C1 15.3594 12.6406 27 27 27H105" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                  </svg>
                </div>
              </div>
            </div>


            {/* </div> */}
          </nav>
        </div>
      </div>
      <div className='flex-grow d-flex align-items-center'>
        <div className="container">
          <h1 className='main-heading color-white max-w-505 text-center mx-auto '>Exclusive Games. Pasión por ganar</h1>
          <p className='text color-white max-w-727 mx-auto pb-40 pt-3 text-center'>En Exclusive Games somos un equipo apasionado de personas dedicados al desarrollo de multiplataformas para juegos de azar. A lo largo de nuestra vida consumimos todo tipo de juegos hasta que un día decidimos crear los propios.</p>
          <div className='position-relative max-w-162 mx-auto '>
            <button className='bttn btn-1-style  '>Empezar</button>
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
      </div>
    </header>
  )
}

export default Header