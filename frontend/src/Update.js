import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'



function Update() {

    const {id} = useParams();
    const navigate = useNavigate()
   
    useEffect(()=>{
        axios.get('http://localhost:8081/read/'+id)
        .then(res => {
            console.log(res)
            setvalues({...values, name:res.data[0].Name,email:res.data[0].Email, phone_no:res.data[0].phone_no, DOB:res.data[0].DOB });
        })
        .catch(err => console.log(err))
    }, [])



    const [values, setvalues] = useState({
        name: '',
        email:'',
        phone_no:'',
        DOB :''
    })
    const handleUpdate =(event) =>{
        event.preventDefault();
        axios.put('http://localhost:8081/update/'+id,values)
        .then(res => {
            console.log(res)
            navigate('/')
        }).catch(err => console.log(err));
    }


  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={handleUpdate}>
          <h2>Update Student</h2>
          <div className='mb-2'> 
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder='Enter Name' className='form-control' value={values.name}
            onChange={e=>setvalues({...values,name:e.target.value})} />
          </div>
          <div className='mb-2'>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder='Enter Email' className='form-control' value={values.email}
            onChange={e=>setvalues({...values,email:e.target.value})}  />
          </div>
          <div className='mb-2'>
            <label htmlFor="phone_no">phone_no.</label>
            <input type="tel" id="phone_no" placeholder='Enter Phone_no.' className='form-control' value={values.phone_no}
            onChange={e=>setvalues({...values,phone_no:e.target.value})}  />
          </div>
          <div className='mb-2'>
            <label htmlFor="dob">D.O.B</label>
            <input type="date" id="dob" placeholder='Enter Date of Birth' className='form-control' value={values.DOB}
            onChange={e=>setvalues({...values,DOB:e.target.value})} />
          </div>
          <button className='btn btn-success'>Update</button>
        </form>
      </div>
    </div>
  )
}

export default Update