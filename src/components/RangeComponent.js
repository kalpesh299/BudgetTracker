import React from 'react'

export const RangeComponent = ({sethomevalue,hvalue, dpvalue,setdpvalue,lvalue,setlvalue,intvalue,setintvalue,setyear}) => {

    const handelHomevalue=(e)=>{
        sethomevalue(e.target.value);
        let dp=(intvalue*hvalue)/100;
        setdpvalue(dp);
        let la=hvalue-dpvalue;
        setlvalue(la)
    }

const handledp=(e)=>{
   
    setdpvalue(e.target.value)

 let la=hvalue-dpvalue;
 if(la<0){la=0}
        setlvalue(la)
}



  return (
    <div className='border-2 border-black w-2/4'>
        
        <h1 className='ml-4 mt-12 font-bold text-4xl'>Home Value</h1>
        <h2 className='ml-4 font-bold text-3xl'>₹{hvalue}</h2>
        <input className='ml-4 w-5/6 ' type='range' value={hvalue} onChange={(e)=>{handelHomevalue(e)}} max={10000} min={1000}/>

        <h1 className='ml-4  mt-12 font-bold text-4xl'>Down Payment</h1>
        <h2 className='ml-4 font-bold text-3xl'>₹{dpvalue}</h2>
        <input className='ml-4  w-5/6 ' type='range' value={dpvalue} onChange={(e)=>{handledp(e)}} max={6400} min={0}/>

        <h1 className='ml-4  mt-12 font-bold text-4xl'>Loan Amount</h1>
        <h2 className='ml-4 font-bold text-3xl'>₹{lvalue}</h2>
        <input className='ml-4  w-5/6 ' type='range' value={lvalue} onChange={(e)=>{setlvalue(e.target.value)}} max={6400} min={500}/>

        <h1 className='ml-4  mt-12 font-bold text-4xl'>Intrest Rate</h1>
        <h2 className='ml-4 font-bold text-3xl'>%{intvalue}</h2>
        <input className='ml-4  w-5/6 ' type='range' value={intvalue} onChange={(e)=>{setintvalue(e.target.value)}} max={12} min={2}/>

        <h1 className='ml-4 mt-4'>Tenure</h1>
       <select onChange={(e)=>{setyear(e.target.value)}} className='ml-4 w-5/6 p-3 border-2 border-black '>
        <option value={10}>10 yr</option>
        <option value={15}>15 yr</option>
        <option value={20}>20 yr</option>
        <option value={25}>25 yr</option>
       </select>


    </div>
  )
}
