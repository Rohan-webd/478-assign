import React, { useState } from 'react'
import {RxDotFilled} from 'react-icons/rx';
import AccordionItem from './AccordionItem';
function Product(props) {


  const [currInd , setcurrInd] = useState(0);
  const [open , setOpen] = useState(false);

  const toggle = (index)=>{
    if(open === index){
      return setOpen(null);
    }
    setOpen(index);
  }
  const setCurrentIndex = (index)=>{
    setcurrInd(index);
  }
  const slides = [
    "https://decemdrinks.com/cdn/shop/products/SpicedBlend_Back_1024x1024.png?v=1659602678",
    "https://decemdrinks.com/cdn/shop/products/SpicedBlend_Front_1024x1024.png?v=1659602678",
    "https://www.209lebanesewine.com/cdn/shop/products/961-beer-porter-pack-of-6-bottles.png?v=1691568606&width=200"
  ]

  const Accordion = [
    {title : "DESCRIPTION",
    desc : "LONDON DRY is perfect for those who love a G&T. It's full of flavour but at 10% ABV it means you can enjoy the same ritual and taste but just with less alcohol. The unique combination of botanicals are steeped for 24 hours, then distilled, capturing the essential oils and big flavours. Before being masterfully blended with natural flavours to boost the character and provide a long refreshing finish at just 10%."
    },
    {title : "TASTE",
    desc : "Upfront Juniper berry, authentic woody juniper with more of a floral berry coming through the mid palate, coriander seed in the middle, finishing with herbaceous backnotes."
    },
    {title : "SERVE",
    desc : "Simply serve 50ml chilled over ice with 150ml premium Indian Tonic and a lemon slice. 2.3% ABV."
    }

  ]
  return (
    <div className="container h-screen flex">
    {/* Carousel */}
    <div className={`w-1/2 h-full flex-column justify-center ${props.isHidden ? 'opacity-40' : ''}`} style={{"alignItems" : "center"}}>
    <div className="w-[90%] h-[90%] mt-12 p-5 flex justify-end" style={{"alignItems" : "center"}}>
    <div className="w-[60%] h-[100%] border flex justify-center mt-10" style={{"alignItems" : "center" , borderRadius : "50%" , border : "1px solid #000"}}>
    <div className="w-[50%] h-[70%] bg-contain duration-500" style={{backgroundImage : `url(${slides[currInd]})` , backgroundRepeat : "no-repeat"}}>

    </div>
    </div>
    </div>
    <div className="flex justify-center translate-x-[95px]">
    {slides.map((slide,index)=>(
    <div key={index} onClick={()=> setCurrentIndex(index)} className="text-2xl cursor-pointer"><RxDotFilled /></div>
     ))}
     </div>

     {/* <button onClick={nextSlide}>NEXT</button>
     <button onClick={prevSlide}>PREV</button> */}

     </div>

     {/* Text */}
     <div className={`w-1/2 h-full p-4`}>
     <div className="w-[80%] h-[95%] mt-8 p-4 flex justify-center items-center">
     <div className={`w-[80%] h-[70%] ${props.isHidden ? 'opacity-40' : ''}`}>
     <ul className="flex w-full justify-between">
      <li className="font-bold hover:text-[#2455f6] transition-all duration-300 cursor-pointer">
        <u>LONDON DRY</u> 
      </li>
      <li className="hover:text-[#2455f6] transition-all duration-300 cursor-pointer">SPICED BLEND</li>
      <li className="hover:text-[#2455f6] transition-all duration-300 cursor-pointer">APERTIF</li>
      <li className="hover:text-[#2455f6] transition-all duration-300 cursor-pointer">TRIO</li>
     </ul>
     <hr className="w-[100%] h-[1.5px] bg-black mt-[14px]"/>

     <div className="">
      <h1 className="text-3xl mt-4">
       <span className="font-semibold">LONDON DRY</span> 
        <br /> <i>made with</i> British Gin
      </h1>
      
      <div className="w-[100%] flex justify-between mt-6 text-[18px]">
        <h3>
        Blended <i>in</i> England
        </h3>
        <h3 className="font-medium">
          10%Vol / 700ml
        </h3>
      </div>

      <button className="w-full bg-black text-[#fff] p-[10px] text-[22px] hover:text-[#fff] hover:bg-[#2455f6] transition-all duration-300 delay-50 ease-linear mt-4" style={{borderRadius : '40px'}}>£29.95 — Add to Bag</button>
      <p className="text-center text-[#2455f6] font-semibold mt-4">FREE UK DELIVERY</p>
      <hr className="w-[100%] h-[1.5px] bg-black mt-[14px]"/>
      {Accordion.map((accord , index)=>(
        <AccordionItem key={index} open={index === open} toggle={()=>{toggle(index)}} title={accord.title} desc={accord.desc}/>
      ))}

     </div>
     </div>
     </div>
     </div>
    </div>
  )
}

export default Product