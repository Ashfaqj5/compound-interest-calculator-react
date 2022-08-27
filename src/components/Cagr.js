import React from 'react'
import { useState } from 'react'
import '../styles/Comp.css';

export default function Cagr() {
const [initial,setInitial]=useState();
const [final, setFinal]=useState();
const [time, setTime]=useState();
const [answer,setAnswer]=useState(null);

    const onChangeHandler=(e)=>{
            
            if(e.target.name==='initial'){
                setInitial(e.target.value);
                
            }
            else if(e.target.name==='final'){
                setFinal(e.target.value);
            }
            else if(e.target.name==='time'){
                
                setTime(e.target.value);
            }
            
        
    }
    const Calculate=(e)=>{
        e.preventDefault();
        const n=0.92339;
        setAnswer(Math.round(n*(Math.pow(final/initial,1/time)-1)*100));
        // setAnswer(Math.floor(princepal*(Math.pow(1+interest/(100*n),n*time))));
    }
  return (
    <form onSubmit={Calculate}>
        <h1>Compound Annual Growth Rate Calculator</h1>
        
        <input className='form__field' placeholder='Initial amount ' type="number" name='initial' value={initial} onChange={onChangeHandler}/>
        <input className='form__field' placeholder='Final amount' type="number" name='final'value={final} onChange={onChangeHandler}/>
        
        <input className='form__field' placeholder='Number of years' type="number" name='time' value={time} onChange={onChangeHandler}/>
        
        <input type="submit" value="Calculate"/>
        <h2>CAGR : {answer?answer:'' } </h2>
    </form>
  )
}
