import React from 'react'
import logo from '../assets/img/logo.png'
const Header = () => {
  return (
    <div>
        <div className='header-main'>
 <p className='py-2 text-white text-center '><small>Sign up and get 20% off to your first order.</small> <a href='' className='text-white'>
 Sign Up Now
    </a></p>
        </div>
     <div className="Container">
     <nav className="navbar navbar-expand-lg ">
     
  <div>
  <button
      className="navbar-toggler border-0 me-md-2 ps-0"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.375 12C21.375 12.2984 21.2565 12.5845 21.0455 12.7955C20.8345 13.0065 20.5484 13.125 20.25 13.125H3.75C3.45163 13.125 3.16548 13.0065 2.9545 12.7955C2.74353 12.5845 2.625 12.2984 2.625 12C2.625 11.7016 2.74353 11.4155 2.9545 11.2045C3.16548 10.9935 3.45163 10.875 3.75 10.875H20.25C20.5484 10.875 20.8345 10.9935 21.0455 11.2045C21.2565 11.4155 21.375 11.7016 21.375 12ZM3.75 7.125H20.25C20.5484 7.125 20.8345 7.00647 21.0455 6.7955C21.2565 6.58452 21.375 6.29837 21.375 6C21.375 5.70163 21.2565 5.41548 21.0455 5.2045C20.8345 4.99353 20.5484 4.875 20.25 4.875H3.75C3.45163 4.875 3.16548 4.99353 2.9545 5.2045C2.74353 5.41548 2.625 5.70163 2.625 6C2.625 6.29837 2.74353 6.58452 2.9545 6.7955C3.16548 7.00647 3.45163 7.125 3.75 7.125ZM20.25 16.875H3.75C3.45163 16.875 3.16548 16.9935 2.9545 17.2045C2.74353 17.4155 2.625 17.7016 2.625 18C2.625 18.2984 2.74353 18.5845 2.9545 18.7955C3.16548 19.0065 3.45163 19.125 3.75 19.125H20.25C20.5484 19.125 20.8345 19.0065 21.0455 18.7955C21.2565 18.5845 21.375 18.2984 21.375 18C21.375 17.7016 21.2565 17.4155 21.0455 17.2045C20.8345 16.9935 20.5484 16.875 20.25 16.875Z" fill="black"/>
</svg>

    </button>

    <a className="navbar-brand" href="#">
      <img src={logo} alt='' className='mainlogo' />
    </a>
  </div>

  <div className='d-flex d-lg-none'>
    <div className="search mobile mx-1">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.7959 20.2041L17.3437 15.75C18.6787 14.0104 19.3019 11.8282 19.087 9.64607C18.8722 7.4639 17.8353 5.44516 16.1867 3.99937C14.5382 2.55357 12.4014 1.78899 10.2098 1.86071C8.01829 1.93244 5.93607 2.8351 4.38558 4.38559C2.83509 5.93608 1.93243 8.0183 1.8607 10.2098C1.78898 12.4014 2.55356 14.5382 3.99936 16.1867C5.44515 17.8353 7.46389 18.8722 9.64606 19.087C11.8282 19.3019 14.0104 18.6787 15.75 17.3438L20.2059 21.8006C20.3106 21.9053 20.4348 21.9883 20.5715 22.0449C20.7083 22.1016 20.8548 22.1307 21.0028 22.1307C21.1508 22.1307 21.2973 22.1016 21.4341 22.0449C21.5708 21.9883 21.695 21.9053 21.7997 21.8006C21.9043 21.696 21.9873 21.5717 22.044 21.435C22.1006 21.2983 22.1298 21.1517 22.1298 21.0037C22.1298 20.8558 22.1006 20.7092 22.044 20.5725C21.9873 20.4358 21.9043 20.3115 21.7997 20.2069L21.7959 20.2041ZM4.12499 10.5C4.12499 9.23915 4.49888 8.0066 5.19938 6.95824C5.89987 5.90988 6.89551 5.09278 8.06039 4.61027C9.22527 4.12776 10.5071 4.00151 11.7437 4.2475C12.9803 4.49348 14.1162 5.10064 15.0078 5.9922C15.8994 6.88376 16.5065 8.01967 16.7525 9.2563C16.9985 10.4929 16.8722 11.7747 16.3897 12.9396C15.9072 14.1045 15.0901 15.1001 14.0418 15.8006C12.9934 16.5011 11.7608 16.875 10.5 16.875C8.80977 16.8733 7.18927 16.2011 5.99411 15.0059C4.79894 13.8107 4.12673 12.1902 4.12499 10.5Z" fill="black"/>
</svg>

    </div>

    <div className="cart-mobile mx-1">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.375 20.25C9.375 20.6208 9.26503 20.9834 9.059 21.2917C8.85298 21.6 8.56014 21.8404 8.21753 21.9823C7.87492 22.1242 7.49792 22.1613 7.1342 22.089C6.77049 22.0166 6.4364 21.838 6.17417 21.5758C5.91195 21.3136 5.73337 20.9795 5.66103 20.6158C5.58868 20.2521 5.62581 19.8751 5.76773 19.5325C5.90964 19.1899 6.14996 18.897 6.45831 18.691C6.76665 18.485 7.12916 18.375 7.5 18.375C7.99728 18.375 8.47419 18.5725 8.82582 18.9242C9.17745 19.2758 9.375 19.7527 9.375 20.25ZM17.25 18.375C16.8792 18.375 16.5166 18.485 16.2083 18.691C15.9 18.897 15.6596 19.1899 15.5177 19.5325C15.3758 19.8751 15.3387 20.2521 15.411 20.6158C15.4834 20.9795 15.662 21.3136 15.9242 21.5758C16.1864 21.838 16.5205 22.0166 16.8842 22.089C17.2479 22.1613 17.6249 22.1242 17.9675 21.9823C18.3101 21.8404 18.603 21.6 18.809 21.2917C19.015 20.9834 19.125 20.6208 19.125 20.25C19.125 19.7527 18.9275 19.2758 18.5758 18.9242C18.2242 18.5725 17.7473 18.375 17.25 18.375ZM22.0753 7.08094L19.5169 15.3966C19.3535 15.9343 19.0211 16.4051 18.569 16.739C18.1169 17.0729 17.5692 17.2521 17.0072 17.25H7.77469C7.2046 17.2482 6.65046 17.0616 6.1953 16.7183C5.74015 16.3751 5.40848 15.8936 5.25 15.3459L2.04469 4.125H1.125C0.826631 4.125 0.540483 4.00647 0.329505 3.7955C0.118526 3.58452 0 3.29837 0 3C0 2.70163 0.118526 2.41548 0.329505 2.2045C0.540483 1.99353 0.826631 1.875 1.125 1.875H2.32687C2.73407 1.87626 3.12988 2.00951 3.45493 2.25478C3.77998 2.50004 4.01674 2.84409 4.12969 3.23531L4.81312 5.625H21C21.1761 5.62499 21.3497 5.6663 21.5069 5.74561C21.664 5.82492 21.8004 5.94001 21.905 6.08164C22.0096 6.22326 22.0795 6.38746 22.1091 6.56102C22.1387 6.73458 22.1271 6.91266 22.0753 7.08094ZM19.4766 7.875H5.45531L7.41375 14.7281C7.43617 14.8065 7.48354 14.8755 7.54867 14.9245C7.6138 14.9736 7.69315 15.0001 7.77469 15H17.0072C17.0875 15.0002 17.1656 14.9746 17.2303 14.927C17.2949 14.8794 17.3426 14.8123 17.3662 14.7356L19.4766 7.875Z" fill="black"/>
</svg>

    </div>
 
 <div className="user-mobile mx-1">
 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 1.875C9.99747 1.875 8.0399 2.46882 6.37486 3.58137C4.70981 4.69392 3.41206 6.27523 2.64572 8.12533C1.87939 9.97543 1.67888 12.0112 2.06955 13.9753C2.46023 15.9393 3.42454 17.7435 4.84055 19.1595C6.25656 20.5755 8.06066 21.5398 10.0247 21.9305C11.9888 22.3211 14.0246 22.1206 15.8747 21.3543C17.7248 20.5879 19.3061 19.2902 20.4186 17.6251C21.5312 15.9601 22.125 14.0025 22.125 12C22.122 9.3156 21.0543 6.74199 19.1562 4.84383C17.258 2.94567 14.6844 1.87798 12 1.875ZM7.45969 18.4284C7.98195 17.7143 8.66528 17.1335 9.45418 16.7331C10.2431 16.3327 11.1153 16.124 12 16.124C12.8847 16.124 13.7569 16.3327 14.5458 16.7331C15.3347 17.1335 16.0181 17.7143 16.5403 18.4284C15.2134 19.3695 13.6268 19.875 12 19.875C10.3732 19.875 8.78665 19.3695 7.45969 18.4284ZM9.375 11.25C9.375 10.7308 9.52896 10.2233 9.8174 9.79163C10.1058 9.35995 10.5158 9.0235 10.9955 8.82482C11.4751 8.62614 12.0029 8.57415 12.5121 8.67544C13.0213 8.77672 13.489 9.02673 13.8562 9.39384C14.2233 9.76096 14.4733 10.2287 14.5746 10.7379C14.6759 11.2471 14.6239 11.7749 14.4252 12.2545C14.2265 12.7342 13.8901 13.1442 13.4584 13.4326C13.0267 13.721 12.5192 13.875 12 13.875C11.3038 13.875 10.6361 13.5984 10.1438 13.1062C9.65157 12.6139 9.375 11.9462 9.375 11.25ZM18.1875 16.8694C17.4583 15.9419 16.5289 15.1914 15.4688 14.6737C16.1444 13.9896 16.6026 13.1208 16.7858 12.1769C16.9689 11.2329 16.8688 10.2558 16.498 9.36861C16.1273 8.4814 15.5024 7.72364 14.702 7.19068C13.9017 6.65771 12.9616 6.37334 12 6.37334C11.0384 6.37334 10.0983 6.65771 9.29797 7.19068C8.49762 7.72364 7.87275 8.4814 7.50198 9.36861C7.13121 10.2558 7.0311 11.2329 7.21424 12.1769C7.39739 13.1208 7.85561 13.9896 8.53125 14.6737C7.4711 15.1914 6.54168 15.9419 5.8125 16.8694C4.89661 15.7083 4.32614 14.3129 4.1664 12.8427C4.00665 11.3725 4.2641 9.88711 4.90925 8.55644C5.55441 7.22578 6.5612 6.10366 7.81439 5.31855C9.06757 4.53343 10.5165 4.11703 11.9953 4.11703C13.4741 4.11703 14.9231 4.53343 16.1762 5.31855C17.4294 6.10366 18.4362 7.22578 19.0814 8.55644C19.7265 9.88711 19.984 11.3725 19.8242 12.8427C19.6645 14.3129 19.094 15.7083 18.1781 16.8694H18.1875Z" fill="black"/>
</svg>

 </div>
  </div>
   
    <div className="collapse navbar-collapse pt-3 pt-lg-0 " id="navbarSupportedContent">
      <ul className="navbar-nav  mb-2 mb-lg-0">
      
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle text-dark"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
           <span className="pe-2">Shop</span> 
           <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="7"
    viewBox="0 0 12 7"
>
    <path
        d="M 20 20 L 50 80 L 80 20"
        stroke="black"
        stroke-width="5"
        fill="none"
    />
</svg>



          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                On Sale
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                New Arrivals
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Brands
              </a>
            </li>
          </ul>
        </li>


        <li className="nav-item">
            <a className="nav-link " aria-current="page" href='#'>On Sale</a>
        </li>
        <li className="nav-item">
            <a className="nav-link " aria-current="page" href='#'>New Arrivals</a>
        </li>
        <li className="nav-item">
            <a className="nav-link " aria-current="page" href='#'>Brands</a>
        </li>

       
      </ul>
      <form className="position-relative mx-4 header-form d-none d-lg-block" role="search">

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
        
      </form>

      <div className='d-none d-lg-flex justify-content-lg-end'>
        <a href='' className='mx-2'>
        <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  className="shopping-cart-icon"
>
  <circle cx="9" cy="21" r="1"></circle>
  <circle cx="20" cy="21" r="1"></circle>
  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
</svg>
        </a>
        <a href='' className='mx-2'>
          
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2.375C9.99747 2.375 8.0399 2.96882 6.37486 4.08137C4.70981 5.19392 3.41206 6.77523 2.64572 8.62533C1.87939 10.4754 1.67888 12.5112 2.06955 14.4753C2.46023 16.4393 3.42454 18.2435 4.84055 19.6595C6.25656 21.0755 8.06066 22.0398 10.0247 22.4305C11.9888 22.8211 14.0246 22.6206 15.8747 21.8543C17.7248 21.0879 19.3061 19.7902 20.4186 18.1251C21.5312 16.4601 22.125 14.5025 22.125 12.5C22.122 9.8156 21.0543 7.24199 19.1562 5.34383C17.258 3.44567 14.6844 2.37798 12 2.375ZM7.45969 18.9284C7.98195 18.2143 8.66528 17.6335 9.45418 17.2331C10.2431 16.8327 11.1153 16.624 12 16.624C12.8847 16.624 13.7569 16.8327 14.5458 17.2331C15.3347 17.6335 16.0181 18.2143 16.5403 18.9284C15.2134 19.8695 13.6268 20.375 12 20.375C10.3732 20.375 8.78665 19.8695 7.45969 18.9284ZM9.375 11.75C9.375 11.2308 9.52896 10.7233 9.8174 10.2916C10.1058 9.85995 10.5158 9.5235 10.9955 9.32482C11.4751 9.12614 12.0029 9.07415 12.5121 9.17544C13.0213 9.27672 13.489 9.52673 13.8562 9.89384C14.2233 10.261 14.4733 10.7287 14.5746 11.2379C14.6759 11.7471 14.6239 12.2749 14.4252 12.7545C14.2265 13.2342 13.8901 13.6442 13.4584 13.9326C13.0267 14.221 12.5192 14.375 12 14.375C11.3038 14.375 10.6361 14.0984 10.1438 13.6062C9.65157 13.1139 9.375 12.4462 9.375 11.75ZM18.1875 17.3694C17.4583 16.4419 16.5289 15.6914 15.4688 15.1737C16.1444 14.4896 16.6026 13.6208 16.7858 12.6769C16.9689 11.7329 16.8688 10.7558 16.498 9.86861C16.1273 8.9814 15.5024 8.22364 14.702 7.69068C13.9017 7.15771 12.9616 6.87334 12 6.87334C11.0384 6.87334 10.0983 7.15771 9.29797 7.69068C8.49762 8.22364 7.87275 8.9814 7.50198 9.86861C7.13121 10.7558 7.0311 11.7329 7.21424 12.6769C7.39739 13.6208 7.85561 14.4896 8.53125 15.1737C7.4711 15.6914 6.54168 16.4419 5.8125 17.3694C4.89661 16.2083 4.32614 14.8129 4.1664 13.3427C4.00665 11.8725 4.2641 10.3871 4.90925 9.05644C5.55441 7.72578 6.5612 6.60366 7.81439 5.81855C9.06757 5.03343 10.5165 4.61703 11.9953 4.61703C13.4741 4.61703 14.9231 5.03343 16.1762 5.81855C17.4294 6.60366 18.4362 7.72578 19.0814 9.05644C19.7265 10.3871 19.984 11.8725 19.8242 13.3427C19.6645 14.8129 19.094 16.2083 18.1781 17.3694H18.1875Z" fill="black"/>
</svg>
        </a>
      </div>
    </div>
  
</nav>



     </div>
     </div>
  )
}

export default Header
