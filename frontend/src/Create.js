// import React from 'react'

// function create() {
//   return (
//     <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
//       <div className='w-50 bg-white rounded p-3'>
//         <form>
//           <h2>Add Student</h2>
//           <div className='mb-2'> 
//             <label htmlFor="">Name</label>
//             <input type="text" placeholder='Enter Name' className='form-control' />
//           </div>
//           <div>
//             <label htmlFor="">Email</label>
//             <input type="email" placeholder='Enter Email' className='form-control' />
//           </div>
//           <div>
//             <label htmlFor="">Phone No.</label>
//             <input type="tel" placeholder='Enter Phone no.' className='form-control' />
//           </div>
//           <div>
//             <label htmlFor="">D.O.B</label>
//             <input type="date" placeholder='Enter Date of Birth' className='form-control'/>
//           </div>
//           <button className='btn btn-success'>Submit</button>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default create




import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Create() {
  const [values, setvalues] = useState({
    name: '',
    email:'',
    phone_no : '',
    DOB:''
  })
  
  const navigate = useNavigate();

  const handleSubmit =(e) =>{
    e.preventDefault();
    axios.post('http://localhost:8081/student', values)
    .then(res =>{
      console.log(res);
      navigate('/');
      // e.target.reset()
    } )
    .catch(err=> console.log(err))
  }


  

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={handleSubmit}>
          <h2>Add Student</h2>
          <div className='mb-2'> 
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder='Enter Name' className='form-control'
            onChange={e=>setvalues({...values,name:e.target.value})} />
          </div>
          <div className='mb-2'>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder='Enter Email' className='form-control' 
            onChange={e=>setvalues({...values,email:e.target.value})}  />
          </div>
          <div className='mb-2'>
            <label htmlFor="phone_no">phone_no.</label>
            <input type="tel" id="phone_no" placeholder='Enter Phone_no.' className='form-control'
            onChange={e=>setvalues({...values,phone_no:e.target.value})}  />
          </div>
          <div className='mb-2'>
            <label htmlFor="dob">D.O.B</label>
            <input type="date" id="dob" placeholder='Enter Date of Birth' className='form-control' 
            onChange={e=>setvalues({...values,DOB:e.target.value})} />
          </div>
          <button className='btn btn-success'>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Create;
