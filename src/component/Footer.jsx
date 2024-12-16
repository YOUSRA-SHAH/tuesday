import React from 'react'
import logo from '../assets/img/logo.png'
import bank from '../assets/img/bank.png'
import { FaInstagram, FaTwitter, FaFacebook, FaGithub } from 'react-icons/fa'


const Footer = () => {
  return (
   <>
   <div className="container footer-banner">
<div className="row">
  <div className='col-md-7'>
<h1 className='text-white'>STAY UPTO DATE ABOUT <br />OUR LATEST OFFERS</h1>
  </div>
 <div className="col-md-5">
 <form className="position-relative  header-form-footer " role="search">

<div className='search-icon'>
<svg
  width={24}
  height={24}
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M21 4.125H3C2.70163 4.125 2.41548 4.24353 2.2045 4.4545C1.99353 4.66548 1.875 4.95163 1.875 5.25V18C1.875 18.4973 2.07254 18.9742 2.42417 19.3258C2.77581 19.6775 3.25272 19.875 3.75 19.875H20.25C20.7473 19.875 21.2242 19.6775 21.5758 19.3258C21.9275 18.9742 22.125 18.4973 22.125 18V5.25C22.125 4.95163 22.0065 4.66548 21.7955 4.4545C21.5845 4.24353 21.2984 4.125 21 4.125ZM12 11.9738L5.89219 6.375H18.1078L12 11.9738ZM8.69906 12L4.125 16.1925V7.8075L8.69906 12ZM10.3641 13.5262L11.2397 14.3297C11.4472 14.52 11.7185 14.6255 12 14.6255C12.2815 14.6255 12.5528 14.52 12.7603 14.3297L13.6359 13.5262L18.1078 17.625H5.89219L10.3641 13.5262ZM15.3009 12L19.875 7.8075V16.1925L15.3009 12Z"
    fill="black"
    fillOpacity="0.4"
  />
</svg>


</div>
        <input
          className="form-control px-5  me-2 py-2 w-100"
          type="search"
          placeholder="Enter your email address"
          aria-label="Search"
        />
        


        <button className='btn btn-lg  w-100 viewall-btn1 py-1 my-2'>Subscribe to Newsletter</button>
      </form> 
 </div>
  </div>
  </div>


  <div className="container-fluid footer-main">
 <div className="container footer-inner">
  <div className="row">
    <div className="col-lg-4 mb-4 mb-lg-0 footer-content">
      <div className='pb-3'>
      <a className="navbar-brand" href="#">
            <img src={logo} alt='' className='mainlogo' />
          </a>
      </div>

          <div className='pb-3'>
          <p>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
          </div>
   
{/*socialmedia*/}
<div className='d-flex'>
<div className='flex space-x-4 mt-6'>
    <a href="#" className="hover:text-grey-400">
      <FaTwitter size={24}/>
    </a>
    <a href="#" className="hover:text-grey-400">
      <FaFacebook size={24}/>
    </a>
    <a href="#" className="hover:text-grey-400">
      <FaInstagram size={24}/>
    </a>
    <a href="#" className="hover:text-grey-400">
      <FaGithub size={24}/>
    </a>
   </div> 
</div>
   
    </div>
    <div className="col-lg-2 col-6 mt-3 mt-lg-0">
     <div className="pb-2">
     <h5>COMPANY</h5>
     </div>
     <div className='pb-3 link-footer'>
     <a href="" className='text-dark text-decoration-none'>
      About
     </a>
     </div>
     <div className='pb-3 link-footer'>
     <a href=""className='text-dark text-decoration-none' >
      Features
     </a>
     </div>
     <div className='pb-3 link-footer'>
     <a href=""className='text-dark text-decoration-none' >
      Works
     </a>
     </div>
     <div className='pb-3 link-footer'>
     <a href="" className='text-dark text-decoration-none'>
      Career
     </a>
     </div>

    </div>
    <div className="col-lg-2 col-6 mt-3 mt-lg-0">
     <div className="pb-2">
     <h5>HELP</h5>
     </div>
     <div className='pb-3 link-footer'>
     <a href="" className='text-dark text-decoration-none'>
      Customer Support
     </a>
     </div>
     <div className='pb-3 link-footer'>
     <a href=""className='text-dark text-decoration-none' >
      Delivery Details
     </a>
     </div>
     <div className='pb-3 link-footer'>
     <a href=""className='text-dark text-decoration-none' >
       Terms & Conditions
     </a>
     </div>
     <div className='pb-3 link-footer'>
     <a href="" className='text-dark text-decoration-none'>
      Privacy Policy
     </a>
     </div>

    </div>
    <div className="col-lg-2 col-6 mt-3 mt-lg-0">
     <div className="pb-2">
     <h5>FAQ</h5>
     </div>
     <div className='pb-3 link-footer'>
     <a href="" className='text-dark text-decoration-none'>
     Account
     </a>
     </div>
     <div className='pb-3 link-footer'>
     <a href=""className='text-dark text-decoration-none' >
      Manage Deliveries
     </a>
     </div>
     <div className='pb-3 link-footer'>
     <a href=""className='text-dark text-decoration-none' >
       Orders
     </a>
     </div>
     <div className='pb-3 link-footer'>
     <a href="" className='text-dark text-decoration-none'>
      Payments
     </a>
     </div>

    </div>
    <div className="col-lg-2 col-6 mt-3 mt-lg-0">
     <div className="pb-2">
     <h5>RESOURCES</h5>
     </div>
     <div className='pb-3 link-footer'>
     <a href="" className='text-dark text-decoration-none'>
     Free eBooks
     </a>
     </div>
     <div className='pb-3 link-footer'>
     <a href=""className='text-dark text-decoration-none' >
      Develoment Tutorials
     </a>
     </div>
     <div className='pb-3 link-footer'>
     <a href=""className='text-dark text-decoration-none' >
      How to - Blog
     </a>
     </div>
     <div className='pb-3 link-footer'>
     <a href="" className='text-dark text-decoration-none'>
      Youtube Playlist
     </a>
     </div>

    </div>
   
    

  </div>


  <hr />

  <div className="row">
    <div className="col-md-8">
      <p className='pt-3 text-center text-md-start'>Shop.co © 2000-2023, All Rights Reserved</p>
    </div>
    <div className="col-md-4">
      <img src={bank} className='w-100' alt="" />
    </div>
  </div>
 </div>
  </div>
   </>
   
  )
}

export default Footer
