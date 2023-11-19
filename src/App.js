/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { RangeComponent } from './components/RangeComponent';
import { PChart } from './components/PChart';
import { Nav } from './components/Nav';


function App() {
  const [hvalue,sethomevalue]=useState(3000);
  const [dpvalue,setdpvalue]=useState(600);
  const [lvalue,setlvalue]=useState(2400);
  const [intvalue,setintvalue]=useState(5);
  const[principle,setprinciple]=useState(0)
  const [intrestamt,setintrestamt]=useState(0);
  const[monthlypayment,setmonthlypaymanet]=useState(0);
  const [year,setyear]=useState(5);

  useEffect(() => {
    setprinciple(hvalue-dpvalue)
  
    
  }, [hvalue,dpvalue])

  useEffect(() => {
    setintrestamt(intvalue+12)//12 is a loan term Principal loan amount x interest rate + loan term = interest.
  
    
  }, [principle,intvalue])
  useEffect(() => {
    let monthpay=Math.round(principle*(intvalue/12))
    if(monthpay<0){
      monthpay=0;
    }
           setmonthlypaymanet(monthpay);      // monthly payment = principal x (interest rate / 12).
  
    
  }, [principle,intvalue])
  
  useEffect(()=>{

    setprinciple(principle+(year*12))

  },[year])


    
console.log(year);
  return (
    <div className="w-screen ">
      <Nav/>
      <div className='w-full flex'>
      <RangeComponent sethomevalue={sethomevalue} hvalue={hvalue} 
       dpvalue={dpvalue}  setdpvalue={setdpvalue} lvalue={lvalue} setlvalue={setlvalue} intvalue={intvalue} setintvalue={setintvalue} setyear={setyear}/>
       <PChart  monthlypayment={monthlypayment} intvalue={intrestamt} principle={principle} />
      </div>
       
    </div>
  );
}

export default App;
