import React from 'react'
import './product.css'

const Product = () => {
  return (
    <section className='product'>
      <div className='container'>
        <div className='creations-box flex'>
            <h2>our creations</h2>
            <span className='flex first'>see all</span>
        </div>
        <div className='grid-product'>
            <div className='product-card'>
                <img src='assets/desktop/image-deep-earth.jpg' alt='earth' className='desktop' />
                <img src='assets/mobile/image-deep-earth.jpg' alt='earth' className='mobile' />
                <h3>deep <br /> earth</h3>
            </div>
            <div className='product-card'>
                <img src='assets/desktop/image-night-arcade.jpg' alt='arcade' className='desktop' />
                <img src='assets/mobile/image-night-arcade.jpg' alt='arcade' className='mobile' />
                <h3>night <br /> arcade</h3>
            </div>
            <div className='product-card'>
                <img src='assets/desktop/image-soccer-team.jpg' alt='soccer' className='desktop' />
                <img src='assets/mobile/image-soccer-team.jpg' alt='soccer' className='mobile' />
                <h3>soccer <br /> team vr</h3>
            </div>
            <div className='product-card'>
                <img src='assets/desktop/image-grid.jpg' alt='grid' className='desktop' />
                <img src='assets/mobile/image-grid.jpg' alt='grid' className='mobile' />
                <h3>the <br /> grid</h3>
            </div>
            <div className='product-card'>
                <img src='assets/desktop/image-from-above.jpg' alt='above' className='desktop' />
                <img src='assets/mobile/image-from-above.jpg' alt='above' className='mobile' />
                <h3>from up <br /> above vr</h3>
            </div>
            <div className='product-card'>
                <img src='assets/desktop/image-pocket-borealis.jpg' alt='pocket' className='desktop' />
                <img src='assets/mobile/image-pocket-borealis.jpg' alt='pocket' className='mobile' />
                <h3>pocket <br /> borealis</h3>
            </div>
            <div className='product-card'>
                <img src='assets/desktop/image-curiosity.jpg' alt='curiosity' className='desktop' />
                <img src='assets/mobile/image-curiosity.jpg' alt='curiosity' className='mobile' />
                <h3>the <br /> curiosity</h3>
            </div>
            <div className='product-card'>
                <img src='assets/desktop/image-fisheye.jpg' alt='fisheye' className='desktop' />
                <img src='assets/mobile/image-fisheye.jpg' alt='fisheye' className='mobile' />
                <h3>make it <br /> fisheye</h3>
            </div>
        </div>
        <span className='flex second'>see all</span>
      </div>
    </section>
  )
}

export default Product
