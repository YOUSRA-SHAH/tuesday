import React from 'react'

const NewArrivalMain = (props) => {
  return (
    <div>
      <div className="container py-5">
        <div className="mainHeading-section">
            <h1>NEW ARRIVALS</h1>
        </div>
        <div className="row pt-5">

            {
                props.data.map((datas)=>{
                return(
                  <>
                    <div className="col-lg-3 col-6 mt-3">

                <div className="card border-0">
      <img src={datas.img} className="card-img-top" alt="..." />
      <div className="py-3 cardscontent">
        <h5 className="">{datas.title}</h5>
        <h5 className="">{datas.title}</h5>

        <div>
<svg width={17} height={15} viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.24494 0.255005L11.8641 5.89491L18.0374 6.6431L13.4829 10.8769L14.679 16.9793L9.24494 13.956L3.8109 16.9793L5.00697 10.8769L0.452479 6.6431L6.62573 5.89491L9.24494 0.255005Z" fill="#FFC633"/>
</svg>
<svg width={17} height={15} viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.24494 0.255005L11.8641 5.89491L18.0374 6.6431L13.4829 10.8769L14.679 16.9793L9.24494 13.956L3.8109 16.9793L5.00697 10.8769L0.452479 6.6431L6.62573 5.89491L9.24494 0.255005Z" fill="#FFC633"/>
</svg>
<svg width={17} height={15} viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.24494 0.255005L11.8641 5.89491L18.0374 6.6431L13.4829 10.8769L14.679 16.9793L9.24494 13.956L3.8109 16.9793L5.00697 10.8769L0.452479 6.6431L6.62573 5.89491L9.24494 0.255005Z" fill="#FFC633"/>
</svg>
<svg width={17} height={15} viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.24494 0.255005L11.8641 5.89491L18.0374 6.6431L13.4829 10.8769L14.679 16.9793L9.24494 13.956L3.8109 16.9793L5.00697 10.8769L0.452479 6.6431L6.62573 5.89491L9.24494 0.255005Z" fill="#FFC633"/>
</svg>
<svg width={17} height={15} viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.24494 0.255005L11.8641 5.89491L18.0374 6.6431L13.4829 10.8769L14.679 16.9793L9.24494 13.956L3.8109 16.9793L5.00697 10.8769L0.452479 6.6431L6.62573 5.89491L9.24494 0.255005Z" fill="#FFC633"/>
</svg>

<span className='px-2 rating'>{datas.rating}</span>
        </div>
       
        <div className="d-flex">
        <h3>{datas.Price}</h3>
        <h3 className='deleteprice px-2'>{datas.deleteprice}</h3>
      <div className='percentage mb-0'><span className='px-2 px-md-4 mb-0'>{datas.percentage}</span></div>
        </div>
      </div>
    </div>
           
    </div>  
    </> 
                )})
             
}

        </div>

        <div className="row py-4 d-flex justify-content-center">
          <div className="col-md-3">
            <button className='btn btn-lg  w-100 '>View All</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewArrivalMain
