import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

function Read() {
    const {id} = useParams();
    const [student, setsStudent] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:8081/read/'+id)
        .then(res => {
            console.log(res)
            setsStudent(res.data[0]);
        })
        .catch(err => console.log(err))
    }, [])

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <div className='p-2'>
            <h2>Student Deatils</h2>
            <h2>{student.Id}</h2>
            <h2>{student.Name}</h2>
            <h2>{student.Email}</h2>
            <h2>{student.Phone_no}</h2>
            <h2>{student.DOB}</h2>
            </div>
            <Link to ="/" className='btn btn-sm btn-primary me-2'>Back</Link>
            <Link to={`/edit/${student.Id}`} className='btn btn-sm btn-info'>Edit</Link>
        </div>
    </div>
  )
}

export default Read