import React from 'react'
import { useState } from 'react'
import '../styles/Comp.css';

export default function Comp() {
const [principal,setPrincipal]=useState();
const [interest, setInterest]=useState();
const [time, setTime]=useState();
const [answer,setAnswer]=useState(null);

    const onChangeHandler=(e)=>{
            
            if(e.target.name==='principal'){
                setPrincipal(e.target.value);
                
            }
            else if(e.target.name==='interest'){
                setInterest(e.target.value);
            }
            else if(e.target.name==='time'){
                
                setTime(e.target.value);
            }
            
        
    }
    const Calculate=(e)=>{
        e.preventDefault();
        const n=4.58785;
        setAnswer(Math.floor(principal*(Math.pow(1+interest/(100*n),n*time))));
    }
  return (
    <form onSubmit={Calculate} className="form__group">
        <h1>Compound Interest Calculator</h1>
        
        <input placeholder="Amount " className='form__field' type="number" name='principal' value={principal} onChange={onChangeHandler}/> 
        
        <input placeholder='Rate of Interest' className='form__field' type="percent" name='interest'value={interest} onChange={onChangeHandler}/>
        <input placeholder='Number of years' className='form__field' type="number" name='time' value={time} onChange={onChangeHandler}/>
        <input type="submit" value="Calculate"/>
        <div><h2>Final amount :{answer? answer:''}</h2> <h2>  Interest amount :{answer ? answer-principal:''}</h2></div>
    </form>
  )
}
