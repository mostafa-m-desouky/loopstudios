import React from 'react'
import './product.css'

const Product = () => {
  return (
    <section className='product'>
      <div className='container'>
        <div className='creations-box flex'>
            <h2>our creations</h2>
            <span className='flex'>see all</span>
        </div>
        <div className='grid-product'>
            <div className='product-card'>
                <img src='assets/desktop/image-deep-earth.jpg' alt='earth' />
                <h3>deep <br /> earth</h3>
            </div>
            <div className='product-card'>
                <img src='assets/desktop/image-night-arcade.jpg' alt='arcade' />
                <h3>night <br /> arcade</h3>
            </div>
            <div className='product-card'>
                <img src='assets/desktop/image-soccer-team.jpg' alt='soccer' />
                <h3>soccer <br /> team vr</h3>
            </div>
            <div className='product-card'>
                <img src='assets/desktop/image-grid.jpg' alt='grid' />
                <h3>the <br /> grid</h3>
            </div>
            <div className='product-card'>
                <img src='assets/desktop/image-from-above.jpg' alt='above' />
                <h3>from up <br /> above vr</h3>
            </div>
            <div className='product-card'>
                <img src='assets/desktop/image-pocket-borealis.jpg' alt='pocket' />
                <h3>pocket <br /> borealis</h3>
            </div>
            <div className='product-card'>
                <img src='assets/desktop/image-curiosity.jpg' alt='curiosity' />
                <h3>the <br /> curiosity</h3>
            </div>
            <div className='product-card'>
                <img src='assets/desktop/image-fisheye.jpg' alt='fisheye' />
                <h3>make it <br /> fisheye</h3>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Product
