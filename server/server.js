import express, { json } from 'express'
import mysql2 from 'mysql2'
import cors from 'cors'
// const mysql = require('mysql2')


const app = express();
app.use(cors());
app.use(express.json())

const db = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "12345",
    database: 'curd'
})

db.connect(err=> {
    if (!err){
        console.log("connection successfull");
    } 
    else
     console.log(err)
})

app.get('/', (req, res) => {
    const sql = "SELECT * FROM student";
    db.query(sql, (err,result)=> {
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })
})



app.post('/student', (req, res) => {
    // console.log('Received POST request:', req.body);
    const sql = "INSERT INTO student (name,email,phone_no,DOB) VALUES (?)";
    console.log(req.body);
    const values = [
        req.body.name,
        req.body.email,
        req.body.phone_no,
        req.body.DOB
    ]
    db.query(sql,[values], (err,result) =>{
        if(err) return res.json(err);
        else{
            // res.send(result);
            return res.json(result);
        }
    })
    

})
app.get('/read/:id', (req, res) => {
    const sql = "SELECT * FROM student WHERE Id = ?";
    const id = req.params.id;

    db.query(sql,[id], (err,result)=> {
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })
})

app.put('/update/:id',(req,res) =>{
    const sql = 'UPDATE student SET `Name`=?, `Email`=?, `phone_no`=?,`DOB`=? WHERE Id=?';
    const id = req.params.id;
    db.query(sql, [req.body.name, req.body.email, req.body.phone_no, req.body.DOB, id], (err, result)=>{
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })
})

app.delete('/delete/:id', (req, res) =>{
    const sql = "DELETE FROM student WHERE Id = ?";
    const id = req.params.id;
    db.query(sql, [id], (err, result)=>{
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })
})

app.listen(8081, ()=>{
    console.log("listning")
})




