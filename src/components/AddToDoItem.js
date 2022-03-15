import React from 'react'
import { useState } from 'react'

export const AddToDoItem = ({ add }) => {
  
  const [Title, setTitle] = useState("");
  const [Desc, setDesc] = useState("");
  const [Date, setDate] = useState("");
  
  return (
    <div className="bg-primary container">
      <h2 className='text-center'>AddToDoItem</h2>
      <div className="mb-3">
        <label for="exampleFormControlInput1 " className="form-label mx-3 my-3">Todo title</label>
        <input type="email" className="form-control mx-3" value = {Title} 
        onChange={(e)=>(setTitle(e.target.value))} id="Todo-title" required />
        <div className="mb-3">
          <label for="exampleFormControlInput1 mx-3" className="form-label mx-3 my-3">Desc</label>
          <input type="text" className="form-control mx-3" value = {Desc} 
          onChange={(e)=>(setDesc(e.target.value))} id="Desc"  required/>
          <label for="exampleFormControlInput1 mx-3" className="form-label mx-3 my-3">Date</label>
          <input type="Date" className="form-control mx-3" value = {Date} 
          onChange={(e)=>(setDate(e.target.value))} id="Date" required/>
          <div className="btn btn-success  mx-3 my-3" onClick={()=>add(Title,Desc,Date)}>Add </div>
        </div>
      </div>
    </div>
  )
}
