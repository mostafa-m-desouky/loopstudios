import React from 'react'
import "./about.css"

export default function About() {
  return (
    <section className='about'>
      <div className='container'>
        <div className='img-box'>
            <img src='/assets/desktop/image-interactive.jpg' alt='interactive' />
        </div>
        <div className='txt-box'>
            <h2>the leader in interactive vr</h2>
            <p>
                Founded in 2011, Loopstudios has been producing world-class virtual reality projects for
                some of the best companies around the globe. Our award-winning creations have transformed
                businesses through digital experiences that bind to their brand.
            </p>
        </div>
      </div>
    </section>
  )
}
