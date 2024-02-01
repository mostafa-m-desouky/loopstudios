import React from 'react'
import './footer.css'

function Footer() {
  return (
    <footer>
        <div className='container flex'>
            <div className='footer-brand'>
                <a href='index.js'><img src='/assets/logo.svg' alt='' /></a>
                <ul className='flex'>
                    <li><a href='index.js'>About</a></li>
                    <li><a href='index.js'>Careers</a></li>
                    <li><a href='index.js'>Events</a></li>
                    <li><a href='index.js'>Products</a></li>
                    <li><a href='index.js'>Support</a></li>
                </ul>
            </div>
            <div className='footer-right'>
                <div className='social-links flex'>
                    <a href='index.js'><i className="fa-brands fa-facebook"></i></a>
                    <a href='index.js'><i className="fa-brands fa-twitter"></i></a>
                    <a href='index.js'><i className="fa-solid fa-p"></i></a>
                    <a href='index.js'><i className="fa-brands fa-instagram"></i></a>
                </div>
                <p className='copyright'>&copy; 2024 loopstudios, All right reserved.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
