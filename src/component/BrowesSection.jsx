import React from 'react'

import card9 from "../assets/img/card9.png"
import card10 from "../assets/img/card10.png"
import card11 from "../assets/img/card11.png"
import card12 from "../assets/img/card12.png"
const BrowesSection = () => {
  return (
    <div>
    <div className="container py-5 browse-main">
      <div className="mainHeading-section">
          <h1>BROWSE BY Dress STYLE</h1>
      </div>


      <div className="row pt-5 px-md-5">


        
      <div className="col-lg-4 col-md-6 mt-3">

<div className="card border-0 bg-transparent position-relative brrows-img">
<img src={card9} className="w-100" alt="..." />
<div className="py-3 card-browse-heading">
<h2 className="">Casual</h2>

</div>
</div>

</div>  


        <div className="col-lg-8 col-md-6 mt-3">

    <div className="card border-0 bg-transparent position-relative brrows-img">
<img src={card10} className="w-100" alt="..." />
<div className="py-3 card-browse-heading">
<h2 className="">Formal</h2>

</div>
</div>

</div>  
<div className="col-lg-8 col-md-6 mt-3">

<div className="card border-0 bg-transparent position-relative brrows-img">
<img src={card11} className="w-100" alt="..." />
<div className="py-3 card-browse-heading">
<h2 className="">Party</h2>

</div>
</div>

</div>  
<div className="col-lg-4 col-md-6 mt-3">

<div className="card border-0 bg-transparent position-relative brrows-img">
<img src={card12} className="w-100" alt="..." />
<div className="py-3 card-browse-heading">
<h2 className="">Gym</h2>

</div>
</div>

</div>  



 


</div>
    </div>
  </div>
  )
}

export default BrowesSection
