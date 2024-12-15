import React from 'react'
import logo from '../assets/img/logo.png'
import bank from '../assets/img/bank.png'



const Footer = () => {
  return (
   <>
   <div className="container footer-banner">
<div className="row">
    <div className="col-md-7">
        <h1 className='text-white'>STAY UPTO DATE ABOUT <br/> OUR LATEST OFFERS</h1>
    </div>
    <div className="col-md-5">
    <form className="position-relative  header-form-footer " role="search">

<div className='search-icon'>
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="22"
  height="22"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  className="search-icon"
>
  <circle cx="11" cy="11" r="8"></circle>
  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
</svg>




</div>
        <input
          className="form-control px-5  me-2 py-2 w-100"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        

        <button className='btn btn-lg  w-100 viewall-btn1 py-1 my-2'>Subscribe to Newsletter</button>
      </form>
    </div>
</div>
   </div>


   <div className="container-fluid footer-main">
    <div className="container footer-inner" >
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

<div className="d-flex">
    <div className='socialmain mx-2'>
<a href="">
<div className='social-icon'>
   <svg
  width={12}
  height={10}
  viewBox="0 0 12 10"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <circle cx={14} cy={14} r={14} fill="white" />
  <circle cx={14} cy={14} r="13.5" stroke="black" strokeOpacity="0.2" />
  <path
    d="M20.2071 10.9831C19.7881 11.1693 19.3458 11.2857 18.8802 11.3556C19.3458 11.0762 19.7183 10.6339 19.8812 10.0985C19.4389 10.3546 18.9501 10.5408 18.4146 10.6572C17.9956 10.2149 17.3904 9.93555 16.7386 9.93555C15.4815 9.93555 14.4572 10.9598 14.4572 12.2169C14.4572 12.4031 14.4805 12.5661 14.5271 12.729C12.6415 12.6359 10.9421 11.728 9.80141 10.3313C9.61518 10.6805 9.49878 11.0529 9.49878 11.472C9.49878 12.2634 9.89453 12.9618 10.5231 13.3808C10.1506 13.3576 9.80141 13.2644 9.4755 13.1015V13.1248C9.4755 14.2422 10.267 15.1733 11.3145 15.3828C11.1283 15.4294 10.9188 15.4527 10.7093 15.4527C10.5696 15.4527 10.4067 15.4294 10.267 15.4061C10.5696 16.314 11.4077 16.9891 12.4087 16.9891C11.6172 17.5943 10.6395 17.9668 9.56862 17.9668C9.38239 17.9668 9.19616 17.9668 9.0332 17.9435C10.0575 18.5953 11.2447 18.9678 12.5483 18.9678C16.7618 18.9678 19.0665 15.476 19.0665 12.4497C19.0665 12.3566 19.0665 12.2402 19.0665 12.1471C19.5088 11.8444 19.9045 11.4487 20.2071 10.9831Z"
    fill="black"
  />
</svg>

   </div>
</a>

    </div>
    <div className='socialmain mx-2'>
<a href="">
<div className='social-icon'>
<svg
  width={15}
  height={13}
  viewBox="0 0 15 13"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <circle cx={14} cy={14} r={14} fill="black" />
  <path
    d="M12.7087 20.3038V14.7503H10.8398V12.5859H12.7087V10.9898C12.7087 9.13752 13.84 8.12891 15.4924 8.12891C16.2839 8.12891 16.9642 8.18784 17.1624 8.21417V10.1499L16.0164 10.1505C15.1178 10.1505 14.9438 10.5775 14.9438 11.2041V12.5859H17.087L16.8079 14.7503H14.9438V20.3038H12.7087Z"
    fill="white"
  />
</svg>


   </div>
</a>

    </div>
    <div className='socialmain mx-2'>
<a href="">
<div className='social-icon'>
<svg
  width={14}
  height={14}
  viewBox="0 0 14 14"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M7.00076 1.44721C8.80947 1.44721 9.02366 1.45398 9.73818 1.48656C10.1678 1.49182 10.5933 1.5707 10.9962 1.71979C11.2884 1.83248 11.5538 2.00511 11.7753 2.22656C11.9967 2.44802 12.1694 2.71339 12.282 3.00559C12.4311 3.40853 12.51 3.83406 12.5153 4.26366C12.5475 4.97817 12.5546 5.19237 12.5546 7.00108C12.5546 8.80979 12.5479 9.02398 12.5153 9.7385C12.51 10.1681 12.4311 10.5936 12.282 10.9966C12.1694 11.2888 11.9967 11.5541 11.7753 11.7756C11.5538 11.997 11.2884 12.1697 10.9962 12.2824C10.5933 12.4315 10.1678 12.5103 9.73818 12.5156C9.02398 12.5479 8.80979 12.5549 7.00076 12.5549C5.19172 12.5549 4.97753 12.5482 4.26334 12.5156C3.83373 12.5103 3.40821 12.4315 3.00527 12.2824C2.71307 12.1697 2.44769 11.997 2.22624 11.7756C2.00479 11.5541 1.83216 11.2888 1.71947 10.9966C1.57038 10.5936 1.4915 10.1681 1.48624 9.7385C1.45398 9.02398 1.44689 8.80979 1.44689 7.00108C1.44689 5.19237 1.45366 4.97817 1.48624 4.26366C1.4915 3.83406 1.57038 3.40853 1.71947 3.00559C1.83216 2.71339 2.00479 2.44802 2.22624 2.22656C2.44769 2.00511 2.71307 1.83248 3.00527 1.71979C3.40821 1.5707 3.83373 1.49182 4.26334 1.48656C4.97785 1.4543 5.19205 1.44721 7.00076 1.44721ZM7.00076 0.226562C5.16205 0.226562 4.93043 0.234304 4.20785 0.267208C3.64561 0.278391 3.08934 0.384847 2.56269 0.582046C2.11092 0.752261 1.70172 1.019 1.36366 1.36366C1.01869 1.70184 0.751722 2.11127 0.581401 2.56334C0.384201 3.08998 0.277746 3.64625 0.266563 4.2085C0.234304 4.93043 0.226562 5.16205 0.226562 7.00076C0.226562 8.83946 0.234304 9.07108 0.267208 9.79366C0.278391 10.3559 0.384847 10.9122 0.582046 11.4388C0.752178 11.8908 1.01892 12.3002 1.36366 12.6385C1.70191 12.9832 2.11133 13.25 2.56334 13.4201C3.08998 13.6173 3.64626 13.7238 4.2085 13.7349C4.93108 13.7672 5.16172 13.7756 7.0014 13.7756C8.84108 13.7756 9.07172 13.7679 9.7943 13.7349C10.3565 13.7238 10.9128 13.6173 11.4395 13.4201C11.8893 13.2457 12.2978 12.9794 12.6389 12.6381C12.98 12.2968 13.246 11.8882 13.4201 11.4382C13.6173 10.9115 13.7238 10.3553 13.735 9.79301C13.7672 9.07108 13.775 8.83946 13.775 7.00076C13.775 5.16205 13.7672 4.93043 13.7343 4.20785C13.7231 3.64561 13.6167 3.08934 13.4195 2.56269C13.2493 2.11068 12.9826 1.70126 12.6379 1.36301C12.2996 1.01828 11.8902 0.751533 11.4382 0.581401C10.9115 0.384201 10.3553 0.277746 9.79301 0.266563C9.07108 0.234304 8.83947 0.226562 7.00076 0.226562Z"
    fill="black"
  />
  <path
    d="M7.00215 3.52344C6.31413 3.52344 5.64155 3.72746 5.06948 4.10971C4.49741 4.49195 4.05154 5.03525 3.78824 5.6709C3.52494 6.30655 3.45605 7.00601 3.59028 7.68081C3.72451 8.35561 4.05582 8.97546 4.54233 9.46197C5.02884 9.94847 5.64868 10.2798 6.32349 10.414C6.99829 10.5482 7.69774 10.4794 8.33339 10.2161C8.96904 9.95276 9.51234 9.50689 9.89459 8.93481C10.2768 8.36274 10.4809 7.69017 10.4809 7.00215C10.4809 6.07954 10.1144 5.19471 9.46197 4.54233C8.80958 3.88994 7.92476 3.52344 7.00215 3.52344ZM7.00215 9.26021C6.55555 9.26021 6.11897 9.12778 5.74764 8.87966C5.3763 8.63154 5.08688 8.27888 4.91597 7.86627C4.74506 7.45366 4.70034 6.99964 4.78747 6.56162C4.8746 6.1236 5.08966 5.72125 5.40546 5.40545C5.72125 5.08966 6.1236 4.8746 6.56162 4.78747C6.99964 4.70034 7.45367 4.74506 7.86627 4.91597C8.27888 5.08687 8.63154 5.3763 8.87966 5.74763C9.12778 6.11897 9.26021 6.55554 9.26021 7.00215C9.26021 7.60102 9.02231 8.17537 8.59884 8.59884C8.17537 9.02231 7.60102 9.26021 7.00215 9.26021Z"
    fill="black"
  />
  <path
    d="M10.6176 4.19807C11.0665 4.19807 11.4305 3.83412 11.4305 3.38517C11.4305 2.93621 11.0665 2.57227 10.6176 2.57227C10.1686 2.57227 9.80469 2.93621 9.80469 3.38517C9.80469 3.83412 10.1686 4.19807 10.6176 4.19807Z"
    fill="black"
  />
</svg>

   </div>
</a>

    </div>
    <div className='socialmain mx-2'>
<a href="">
<div className='social-icon'>
<svg
  width={14}
  height={13}
  viewBox="0 0 14 13"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M6.60685 0.226562C3.01591 0.226562 0.126953 3.11552 0.126953 6.70646C0.126953 9.56841 1.98992 11.9984 4.55488 12.8624C4.87888 12.9164 4.98688 12.7274 4.98688 12.5384C4.98688 12.3764 4.98688 11.9714 4.98688 11.4314C3.1779 11.8364 2.79991 10.5674 2.79991 10.5674C2.50291 9.81141 2.07092 9.62241 2.07092 9.62241C1.47693 9.21742 2.12492 9.21742 2.12492 9.21742C2.77291 9.27142 3.1239 9.89241 3.1239 9.89241C3.6909 10.8914 4.63588 10.5944 5.01387 10.4324C5.06787 10.0004 5.22987 9.73041 5.41887 9.56841C3.98789 9.40642 2.47592 8.83942 2.47592 6.35546C2.47592 5.65347 2.71891 5.05948 3.1509 4.62749C3.09691 4.46549 2.85391 3.8175 3.2049 2.89952C3.2049 2.89952 3.74489 2.73752 4.98688 3.57451C5.49987 3.43951 6.06686 3.35851 6.60685 3.35851C7.14684 3.35851 7.71383 3.43951 8.22682 3.57451C9.4688 2.73752 10.0088 2.89952 10.0088 2.89952C10.3598 3.79051 10.1438 4.43849 10.0628 4.62749C10.4678 5.08648 10.7378 5.65347 10.7378 6.35546C10.7378 8.83942 9.22581 9.37942 7.76783 9.54141C8.01083 9.73041 8.19982 10.1354 8.19982 10.7294C8.19982 11.5934 8.19982 12.2954 8.19982 12.5114C8.19982 12.6734 8.30782 12.8894 8.65882 12.8354C11.2238 11.9984 13.0867 9.56841 13.0867 6.70646C13.0867 3.11552 10.1978 0.226562 6.60685 0.226562Z"
    fill="black"
  />
</svg>

   </div>
</a>

    </div>
</div>

            </div>
            <div className="col-lg-2 col-6 mt-3 mt-lg-0">
               <div className="pb-2">
               <h5 className=''>COMPANY</h5>
               </div>

              <div className='pb-3 link-footer'>
            <a href="" className='text-dark text-decoration-none'>
                About
               </a>
               </div>
               <div className='pb-3 link-footer'>
               <a href="" className='text-dark text-decoration-none'>
                Features
               </a>
               </div>
<div className='pb-3 link-footer'>
<a href="" className='text-dark text-decoration-none'>
    Works
</a>
</div>
<div className='pb-3 link-footer'>
<a href="" className='text-dark text-decoration-none'>
    Career
</a>
</div>
            </div>

            <div className="col-lg-2 col-6  mt-3 mt-lg-0">
               <div className="pb-2">
               <h5 className=''>HELP</h5>
               </div>

              <div className='pb-3 link-footer'>
            <a href="" className='text-dark text-decoration-none'>
                Customer Support
               </a>
               </div>
               <div className='pb-3 link-footer'>
               <a href="" className='text-dark text-decoration-none'>
               Delivery Details
               </a>
               </div>
<div className='pb-3 link-footer'>
<a href="" className='text-dark text-decoration-none'>
Terms & Conditions
</a>
</div>
<div className='pb-3 link-footer'>
<a href="" className='text-dark text-decoration-none'>
    Privacy Policy
</a>
</div>
            </div>
            
            <div className="col-lg-2 col-6  mt-3 mt-lg-0">
               <div className="pb-2">
               <h5 className=''>FAQ</h5>
               </div>

              <div className='pb-3 link-footer'>
            <a href="" className='text-dark text-decoration-none'>
                Account
               </a>
               </div>
               <div className='pb-3 link-footer'>
               <a href="" className='text-dark text-decoration-none'>
              Manage Deliveries
               </a>
               </div>
<div className='pb-3 link-footer'>
<a href="" className='text-dark text-decoration-none'>
Orders
</a>
</div>
<div className='pb-3 link-footer'>
<a href="" className='text-dark text-decoration-none'>
   Payments
</a>
</div>
            </div>
           
            <div className="col-lg-2 col-6  mt-3 mt-lg-0">
               <div className="pb-2">
               <h5 className=''>RESOURCES</h5>
               </div>

              <div className='pb-3 link-footer'>
            <a href="" className='text-dark text-decoration-none'>
                Free eBooks
               </a>
               </div>
               <div className='pb-3 link-footer'>
               <a href="" className='text-dark text-decoration-none'>
              Development Tutorials
               </a>
               </div>
<div className='pb-3 link-footer'>
<a href="" className='text-dark text-decoration-none'>
How to - Blogs
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
