import React, { useState } from 'react'
import "./App.css"

const App = () => {
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const[newData,setnewData]=useState([])
  const dataAdded=()=>{
    const updateddata= {id:new Date().getTime.toString(),email:email,password:password}
    setnewData([...newData,updateddata])
    setEmail("")
    setPassword("")
    console.log(updateddata)
  }
  return (
    <div>
    <div className='main'>
  <div className='sub_main'>
<h1>Login Form</h1>
<div className='form_data'>
<label>Email</label> <br/>
<input text="text" placeholder='Enter email' value={email} onChange={(e)=>{
  setEmail(e.target.value)
}}></input><br/>
<label>Password</label> <br/>
<input text="text" placeholder='Enter email'value={password} onChange={(e)=>{
  setPassword(e.target.value)
}}></input>
<button className='btn' onClick={dataAdded}>Submit</button>
</div>

    </div>
    </div>
    {
      newData.map((curr)=>{
        const {id,email,password}=curr;
        return (
          
          <div className='data' key={id}>
          <div className='sub_data'>
          <h2 className='child1'> {email} </h2>
          <h2 className='child2'>  {password}</h2>
          </div>
          </div>
        )
      })
    }
    </div>
  )
}

export default App
