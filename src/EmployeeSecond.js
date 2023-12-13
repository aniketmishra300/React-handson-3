import React from 'react'
import './App.css'

const EmployeeSecond = ({value,toggle}) => {

    
  return(
    <div>
        <h1>EMPLOYEE FEEDBACK DATA</h1>
    <div class='flexBox'>
        {value.map((item,index)=>{
            return(
             
                <div class='innerDiv'>
                    <span key={index}>Name:{item.name} | </span>
                    <span key={index}>Department:{item.dep} | </span>
                    <span key={index}>Rating:{item.rate}</span>
                </div>
           
            )
            
        })}
    </div>
        <button className='back' onClick={toggle}>Back</button>   
    </div>
  )
}

export default EmployeeSecond