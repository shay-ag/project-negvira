import './Footer.css'

import React from 'react'

const Footer = () => {
  return (
      <div className='footer'>
          <div className='footer1'>
              <div className='box'>
                  <div>
                    <p className='boxTop'>Handles</p>  
                  </div>
                  <div>
                    <div><a href="/">Facebook</a></div>
                    <div><a href="/">Twitter</a></div>
                    <div><a href="/">Linkedin</a></div>  
                    <div><a href="/">Instagram</a></div>  
                  </div>
              </div>
              <div className='box'>
                  <div>
                    <p className='boxTop'>Company</p>  
                  </div>
                  <div>
                    <div><a href="/">Career</a></div>
                    <div><a href="/">About</a></div>
                    <div><a href="/">Admissions</a></div>
                    <div><a href="/">Contact us</a></div>
                  </div>
              </div>
              <div className='box'>
                  <div>
                    <p className='boxTop'>Office</p>  
                  </div>
                  <div>
                    <div><a href="/">Monday-Saturday</a></div>
                    <div><a href="/">10.00-18.00</a></div>
                    <div><a href="/">Office-2nd Floor, A.N Market Opposite Pizza Hut, </a></div>
                    <div><a href="/">Ramnagri More Ashiana Digha Road, Patna-800025</a></div>
                  </div>
              </div>
              <div className='box'>
                  <div>
                    <p className='boxTop'>Contact us</p>  
                  </div>
                  <div>
                    <div><a href="/">+91 7894561230</a></div>
                    <div><a href="/">+91 7894561230</a></div>
                    <div><a href="/">xyz@gmail.Company</a></div>
                    <div><a href="/">xyz@gmail.Company</a></div>
                  </div>
              </div>
          </div>
          <div className='footer2'>
              <div className='apps'>
                  <div><i class="fa-brands fa-google-play"></i> Play Store</div>
                  <div><i class="fa-brands fa-app-store"></i> App Store</div>
              </div>
              <div className='socialMedia'>
                  <i class="fa-brands fa-facebook"></i>
                  <i class="fa-brands fa-instagram"></i>
                  <i class="fa-brands fa-twitter"></i>
                  <i class="fa-brands fa-youtube"></i>
                  <i class="fa-brands fa-linkedin"></i>
              </div>
              <div>Copyright ©️ Negvira 2023</div>
          </div>
    </div>
  )
}

export default Footer