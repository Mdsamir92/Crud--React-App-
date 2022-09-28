import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';

function Update() {
    const[id,setId]=useState("");
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");

    const navigate= useNavigate();

    useEffect(()=>{
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"));
    },[]);

    const handleUpdate=(e)=>{
        e.preventDefault();
        axios.put(
            `https://632c652f5568d3cad884c4bc.mockapi.io/Crud-Youtube/${id}`,
        {
            name:name,
            email:email,
        }
        
        ).then(()=>{
            navigate("/read");

        })
      
    };
  return (
    <div>
    <h2>Update</h2>
        
<form>
<div className="mb-3">
    <label className="form-label">Name</label>
    <input type="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label  className="form-label">Email address</label>
    <input type="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} />
    <div  className="form-text">We'll never share your email with anyone else.</div>
  </div>
 
  
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input"/>
    <label className="form-check-label">Check me out</label>
  </div>
  <button type="submit" className="btn btn-warning mx-2"  onClick={handleUpdate}>Update</button>
  <Link to="/read">
  <button className='btn btn-warning mx-2' >Back</button>

  </Link>
</form>
    </div>
  )
}

export default Update;