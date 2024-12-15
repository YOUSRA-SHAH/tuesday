import React from 'react'
import Header from './component/Header'
import HomeBanner from './component/HomeBanner'
import Logossection from './component/Logossection'
import NewArrivalMain from './component/NewArrivalMain'


import card1 from './assets/img/card1.png'
import card2 from './assets/img/card2.png'
import card3 from './assets/img/card3.png'
import card4 from './assets/img/card4.png'

import card5 from './assets/img/card5.png'
import card6 from './assets/img/card6.png'
import card7 from './assets/img/card7.png'
import card8 from './assets/img/card8.png'
import TopSelling from './component/TopSelling'
import BrowesSection from './component/BrowesSection'
import ImgSlider from './component/ImgSlider'
import Footer from './component/Footer'
const App = () => {

  const ArrivalData=[
  {
    img:card1,
    title:"T-SHIRT WITH TAPE DETAILS" ,
    rating:"4.5/5",
    Price:"$120" ,
    percentage:"-15%"
  },
  {
    img:card2,
    title:"SKINNY FIT JEANS" ,
    rating:"4.5/5",
    Price:"$240",
    deleteprice:"$260",
    percentage:"-20%"
  },
  {
    img:card3,
    title:"CHECKERED SHIRT" ,
    rating:"4.5/5",
    Price:"$180",
    percentage:"-20%"
  },
  {
    img:card4,
    title:"SLEEVE STRIPED T-SHIRT" ,
    rating:"4.5/5",
    Price:"$130",
    deleteprice:"$160",
    percentage:"-30%"
  }
  
  
]
const sellingData=[
  {
    img:card5,
    title:"VERTICAL STRIPED SHIRT" ,
    rating:"4.5/5",
    Price:"$212" ,
    percentage:"-20%"
  },
  {
    img:card6,
    title:"COURAGE GRAPHIC T-SHIRT" ,
    rating:"4.5/5",
    Price:"$145",
    deleteprice:"$260",
    percentage:"-20%"
  },
  {
    img:card7,
    title:"LOOSE FIT BERMUDA SHORTS" ,
    rating:"4.5/5",
    Price:"$80",
    percentage:"-20%"
  },
  {
    img:card8,
    title:"FADED SKINNY JEANS" ,
    rating:"4.5/5",
    Price:"$210",
    deleteprice:"$160",
    percentage:"-30%"
  }
  
  ]
  return (
    <div>
   <Header />
   <HomeBanner />
   <Logossection />
   <NewArrivalMain data={ArrivalData} />

   <div className="container">
    <hr />
   </div>

   <TopSelling data={sellingData}/>
   <BrowesSection />
 
    <ImgSlider />
    <Footer />
    </div>
  )
}

export default App
