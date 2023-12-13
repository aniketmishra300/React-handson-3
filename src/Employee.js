import React from 'react'
import { useState } from 'react'
import EmployeeSecond from './EmployeeSecond'
import './App.css'

const Employee = () => {

    const[name,setName]= useState("")
    const[dep,setDep]= useState("")
    const[rate,setRate]= useState("")
    const[data,setData]= useState([])
    const[click,SetClick]=useState(true)

    const nameChange=(n)=>{
        setName(n.target.value)
    }

    const deptChange=(d)=>{
        setDep(d.target.value)
    }

    const rateChange=(r)=>{
        setRate(r.target.value)
    }

    const handleClick=(event)=>{
        event.preventDefault();

        const obj={
            name:name,
            dep:dep,
            rate:rate
        }
        
        const value = [...data,obj]
        setData(value)
        console.log(value)


        SetClick(false)
    }

    const toggle=()=>{
        SetClick(!click)
        console.log(!click)
    }

  return (
    <div>
        {click?(
        <>
         <h1>EMPLOYEE FEEDBACK FORM</h1>
        <form>
            <label className='inputs'>Name : 
                <input type="text" name='name' onChange={nameChange} />
            </label>
            <br/>
            <label className='inputs'>Department :
                <input type="text" name='department' onChange={deptChange}/>
            </label>
            <br/>
            <label className='inputs'>Rating :
                <input type="number" name='rank' onChange={rateChange}/>
            </label>
            <br/>
            <button type='submit' onClick={handleClick}>Submit</button>               
        </form>
        </>):
            (<EmployeeSecond value={data} toggle={toggle}/>)}
    </div>
  )
}

export default Employee