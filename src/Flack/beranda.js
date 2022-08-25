import React from 'react'
import './main-content.css'
import './main-responsive.css'
import Background from '../image/homepage-hero2.png'

const Beranda = () => {
  return (
    <div className='container-beranda'>

      <div className='hero-beranda'>
        <div className='hero-beranda2'>
            <div className='title'> 
              <h1 className='title-beranda'>Membantu membangun Digital Assets, Strategy Marketing yang efektif pada Bisnis Anda</h1>
              <p className='title-beranda'>Mulai belajar terarah dengan learning path</p>
            </div>
              <img className='image-beranda' src={Background}></img>
        </div>
      </div>
      <div className='container-percaya'>

          <div className='percaya'>
            <p>Berpengalaman Lebih Dari 10 Tahun</p>
          </div>
          

      </div>
    </div>
  )
}

export default Beranda