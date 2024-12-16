import React from 'react'
import homemobile from '../assets/img/mobile.png'

const HomeBanner = () => {
  return (
    <div>
      <div className="container-fluid main-banner mt-3">
      <div className="container py-md-5">
       <div className='row '>
            <div className='col-md-6 my-5'>
                <div className='main-banner-content'>
                    <h1>FIND CLOTHES THAT MATCHES YOUR STYLE.</h1>

                    <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
               
               <button className='btn btn-lg'>Shop Now</button>
                </div>
            </div>

            <div className="col-md-7">
            <div className='row'>
        <div className="col-lg-4 col-6 home-banner-brands mt-3">
<h2>200+</h2>
<p>International Brands</p>
        </div>
       
        <div className="col-lg-4 col-6 home-banner-brands mt-3 banner-border d-flex justify-content-center">
<div className=''>
<h2>2,000+</h2>
<p>High-Quality Products</p>
</div>
        </div>
       
        <div className="col-lg-4 col-12 home-banner-brands banner-border mt-3 d-flex justify-content-center">
      <div className=''>
      <h2>30,000+</h2>
      <p>Happy Customers</p>
      </div>
        </div>
       
        </div>
            </div>


            <div className="row d-md-none">
                <div className="col-12">
                   <img src="" alt="" />  
                </div>
            </div>
        </div>
       

      </div>
    </div>
    </div>
  
      
  )
}

export default HomeBanner
