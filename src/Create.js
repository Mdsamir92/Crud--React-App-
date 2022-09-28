import React,{useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Create() {

  const history=useNavigate("");
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");

    // const header={"Access-Control-Allow-Origin":""}
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post(
            'https://632c652f5568d3cad884c4bc.mockapi.io/Crud-Youtube',
            {
                name:name,
                email:email,
            } )
       .then(()=>{
        history("/read");
       });
    }

  return (
    <div>  {name}{email}
    
    <div className='d-flex justify-content-between m-2'>
     <h2>Create</h2>
     <Link to="/read">
      <button className='btn btn-warning'>Show Data</button>
     </Link>
   
    </div>
   
<form>
<div className="mb-3">
    <label className="form-label">Name</label>
    <input type="text" className="form-control" onChange={(e)=>setName(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label  className="form-label">Email address</label>
    <input type="email" className="form-control" onChange={(e)=>setEmail(e.target.value)}/>
    <div  className="form-text">We'll never share your email with anyone else.</div>
  </div>
 
  
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input"/>
    <label className="form-check-label">Check me out</label>
  </div>
  <button type="submit" className="btn btn-warning" onClick={handleSubmit}>Submit</button>
</form>
    
    </div>
  )
}

export default Create;