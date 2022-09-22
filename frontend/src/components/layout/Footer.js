import React, { Fragment } from 'react'
import "../layout/Footer.css"

const Footer = () => {
    return (
        <Fragment>
            {/* <footer className="py-1">
                <p className="text-center mt-1">
                    Shopping Cart - 2019-2020, All Rights Reserved
                </p>
            </footer> */}
            <footer className="footer-distributed">
        <div className="footer-left">
          <h3>
            <span><img src="/images/slogo.png" width='100' /></span>
          </h3>

          <p className="footer-links">
            <a href="#" className="link-1">
              Home
            </a>

            <a href="#">Blog</a>

            <a href="#">Pricing</a>

            <a href="#">About</a>

            <a href="#">Faq</a>

            <a href="#">Contact</a>
          </p>

          <p className="footer-company-name">Cococart © 2022</p>
        </div>

        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker"></i>
            <p>
              <span>Madduvil North,</span> Chavakachcheri, Jaffna
            </p>
          </div>

          <div>
            <i className="fa fa-phone"></i>
            <p>0768921236</p>
          </div>

          <div>
            <i className="fa fa-envelope"></i>
            <p>
              <a href="mailto:cococart@gmail.com">cococart@gmail.com</a>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>About the cococart</span>
            Cococart. through its website will create a huge market opportunity for 
            coconut buyers and sellers while using the whole coconut. 

          </p>

          <div className="footer-icons">
            <a href="#">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="#">
              <i className="fa fa-github"></i>
            </a>
          </div>
        </div>
      </footer>
        </Fragment>
    )
}

export default Footer
