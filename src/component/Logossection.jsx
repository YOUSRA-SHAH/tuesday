import React from 'react'
import logo1 from '../assets/img/logo1.png'
import logo2 from '../assets/img/logo2.png'
import logo3 from '../assets/img/logo3.png'
import logo4 from '../assets/img/logo4.png'
import logo5 from '../assets/img/logo5.png'

const Logossection = () => {
  return (
    <div>
     <div className="container-fluid logossection">
    <div className="container">
        <div className="d-flex justify-content-between flex-wrap logossection-inner">
            <div>
        <img src={logo1} alt="" />
            </div>
            <div>
        <img src={logo2} alt="" />
            </div>
            <div>
        <img src={logo3} alt="" />
            </div>
            <div>
        <img src={logo4} alt="" />
            </div>
            <div>
        <img src={logo5} alt="" />
            </div>
        </div>
    </div>
        </div> 
    </div>
  )
}

export default Logossection
