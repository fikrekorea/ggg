import express from 'express'
import mysql from 'mysql'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());

const con= mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "dbfigap",
})
con.connect(function(err){
    if(err){
        console.log("Error in connection");
    }
    else{
        console.log("Connected");
    }
})
app.post('/login',(req, res)=> {
    const sql="SELECT * FROM tbluser WHERE Username=? AND Password=?";
    con.query(sql, [req.body.username, req.body.password],(err,result) =>{
        if(err) return res.json({Status:"Error", Error:"Error in running query"});
        if(result.length > 0 ) {
            return res.json({Status: "Success"})
        } else{
            return res.json({Status:"Error", Error:"Wrong username or password"});
        }
    })
})

app.post('/signup',(req, res)=> {
    const sql="SELECT * FROM tbluser WHERE Username=? AND Password=?";
    con.query(sql, [req.body.username, req.body.password],(err,result) =>{
        if(err) return res.json({Status:"Error", Error:"Error in running query"});
        if(result.length > 0 ) {
            return res.json({Status: "Success"})
        } else{
            return res.json({Status:"Error", Error:"Wrong username or password"});
        }
    })
})
app.listen(8081,()=>{
    console.log("Running");
})