import axios from 'axios';
import React, { useState ,useEffect} from 'react'
import { Link } from 'react-router-dom';

function Read() {

  const [data,setData]=useState([]);
  const [tabledark,setTabledark]=useState('')

  const getData=()=>{
   axios.get("https://632c652f5568d3cad884c4bc.mockapi.io/Crud-Youtube")
   .then((res)=>{
    // console.log(res.data);
    setData(res.data)
   });
  }
  function handleDelete(id){
    axios.delete(`https://632c652f5568d3cad884c4bc.mockapi.io/Crud-Youtube/${id}`)
    .then(()=>{
      getData();
    });
  }
  const setToLocalStorage=(id,name,email)=>{
    localStorage.setItem("id",id)
    localStorage.setItem("name",name)
    localStorage.setItem("email",email)

  }
  useEffect(()=>{
    getData();
  },[]);
 
  return (
    <div>
    {/* Darkmode */}
    <div className='for-check form-switch'>
    <input className='form-check-input' type="checkbox" 
      onClick={()=>{
        if(tabledark=== 'table-dark') setTabledark("")
        else setTabledark("table-dark")

      }}
    />

    </div>

      <div className='d-flex justify-content-between m-2'>
     <h2>Read Operation</h2>
     <Link to="/">
      <button className='btn btn-warning'>Create file</button>
     </Link>
   
    </div>

    <table className={`table ${tabledark}`}>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col"> Name</th>
      <th scope="col">Email</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  
  {
    data.map((eachData)=>{
      return(
        <>
        <tbody>
    <tr>
      <th scope="row">{eachData.id}</th>
      <td>{eachData.name}</td>
      <td>{eachData.email}</td>
     
      <td>
      <Link to="/update"><button className='btn btn-primary' 
      onClick={()=>setToLocalStorage
      (eachData.id, eachData.name,eachData.email)}>Edit </button></Link>
        
      </td>
      <td>
      <button className='btn btn-warning' onClick={()=> handleDelete(eachData.id)}>Delete </button>
      </td>
    </tr>
   
  </tbody>
  
        </>
      )

    })
  }
</table>
    </div>
  )
}

export default Read;