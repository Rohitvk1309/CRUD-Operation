
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function Home() {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         axios.get('http://localhost:8081/')
//             .then(res => setData(res.data))
//             .catch(err => console.log(err));
//     }, []);

//     return (
//         <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
//             <div className='w-50 bg-white rounded p-3'>
//                 <h2>Student List</h2>
//                 <table className="table">
//                     <thead>
//                         <tr>
//                             <th>ID</th>
//                             <th>Name</th>
//                             <th>Email</th>
//                             <th>Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {data.map((student, index) => (
//                             <tr key={index}>
//                                 <td>{student.id}</td>
//                                 <td>{student.Name}</td>
//                                 <td>{student.Email}</td>
//                                 <td>
//                                     <button className='btn btn-sm btn-info'>Read</button>
//                                     <button className='btn btn-sm btn-primary mx-2'>Edit</button>
//                                     <button className='btn btn-sm btn-danger'>Delete</button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// }

// export default Home;






// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// function Home() {
//     const [data, setData] = useState([]);

    

//     useEffect(() => {
//         axios.get('http://localhost:8081/')
//             .then(res => setData(res.data))
//             .catch(err => console.log(err));
//     }, []);

//     const handleDelete = (id) => {
//       axios.delete('http://localhost:8081/delete/'+id)
//       .then(res =>{
//           location.reload();
//       })
//       .catch(err => console.log(err));
//     }

//     return (
//         <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
//             <div className='w-75 bg-white rounded p-3'>
//                 <h2 className="text-center mb-4">Student List</h2>
//                 <div className='d-flex justify-content-end'> 
//                   <Link to ="/create" className='btn btn-sm btn-success'>Create +</Link>
//                 </div>
//                 <table className="table table-striped">
//                     <thead>
//                         <tr>
//                             <th>Id</th>
//                             <th>Name</th>
//                             <th>Email</th>
//                             <th>Phone_no</th>
//                             <th>DOB</th>
//                             <th>Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {data.map((student, index) => (
//                             <tr key={index}>
//                                 <td>{student.Id}</td>
//                                 <td>{student.Name}</td>
//                                 <td>{student.Email}</td>
//                                 <td>{student.phone_no}</td>
//                                 <td>{student.DOB}</td>
//                                 <td>
//                                     <Link to={`/read/${student.Id}`} className='btn btn-sm btn-info me-2'>Read</Link>
//                                     <Link to={`/edit/${student.Id}`} className='btn btn-sm btn-primary me-2'>Edit</Link>
//                                     <button onClick={ () => handleDelete(student.Id)} className='btn btn-sm btn-danger'>Delete</button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// }

// export default Home;






import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8081/')
            .then(res => {
                setData(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setError(err);
                setLoading(false);
            });
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8081/delete/${id}`)
            .then(res => {
                setData(data.filter(student => student.Id !== id));
            })
            .catch(err => console.log(err));
    };

    // if (loading) {
    //     return <div>Loading...</div>;
    // }

    // if (error) {
    //     return <div>Error loading data. Please try again later.</div>;
    // }

    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-75 bg-white rounded p-3'>
                <h2 className="text-center mb-4">Student List</h2>
                <div className='d-flex justify-content-end mb-3'>
                    <Link to="/create" className='btn btn-sm btn-success'>Create +</Link>
                </div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone No</th>
                            <th>DOB</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((student, index) => (
                            <tr key={index}>
                                <td>{student.Id}</td>
                                <td>{student.Name}</td>
                                <td>{student.Email}</td>
                                <td>{student.phone_no}</td>
                                <td>{student.DOB}</td>
                                <td>
                                    <Link to={`/read/${student.Id}`} className='btn btn-sm btn-info me-2'>Read</Link>
                                    <Link to={`/edit/${student.Id}`} className='btn btn-sm btn-primary me-2'>Edit</Link>
                                    <button onClick={() => handleDelete(student.Id)} className='btn btn-sm btn-danger'>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Home;
