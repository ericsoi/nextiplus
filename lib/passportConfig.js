import bcryptjs from "bcryptjs";
import { query } from "./db";
const localStrategy = require('passport-local').Strategy
module.exports = function(passport){
    passport.use(
        new localStrategy((username, password, done)=>{
            const sql= "SELECT * FROM tbl_user where phonenumber = ?"
            const data = query({ query: sql, values: [username]});
            if (data.length === 0){
                return done
            }
            bcryptjs.compare(password,data[0].password,(err,responce)=>{
                if(err){
                    throw err
                }
                if(responce === true){
                    return done (null, result[0])
                }else{
                    return done (null, false)
                }
            })
        })
    )
    passport.serializeUser((user, done)=>{
        done(null, user.id)
    })
    passport.deserializeUser((id, done)=>{
        const dequery = "SELECT * FROM tbl_user where ID =?"
        const dedata = query({ query: dequery, values: [id]});
        const userInfo = {
            id:dedata[0].ID,
            phone:dedata[0].phonenumber
        }
        done(null, userInfo)
    })
}