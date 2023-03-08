import bcryptjs from "bcryptjs";
import { query } from "../../lib/db";
export default async function signIn(req, res){
    if (req.method === "POST"){
        const reqPayload = req?.body
        // console.log(reqPayload)
        // res.json(reqPayload)
        try {
            console.log("phone", reqPayload.phone)
            const querySql = "SELECT * FROM tbl_user where phonenumber = ?";
            const instertSql = "INSERT INTO tbl_user (`phonenumber`,`emailaddress`,`firstname`,`lastname`,`password`) VALUES(?,?,?,?,?)"
            const valueParams = [reqPayload.phone.trim()];
            const insertParams = [reqPayload.phone, reqPayload.email, reqPayload.firstname, reqPayload.lastname, bcryptjs.hashSync(reqPayload.password, 10)]
            const data = await query({ query: querySql, values: valueParams});
            if (data.length > 0){
                res.json({ message: "User Already Taken", code: 409 });
            }
            
            if (data.length === 0){
                const hashedPassword=bcryptjs.hashSync(reqPayload.password, 10)
                const insert = await query({ query: instertSql, values: insertParams });
                res.json({ message: "User Created", code: 201 });
            }
            //res.json({ users: data });
          } catch (error) {
            // unhide to check error
            res.json({ error: error.message });
          }
    }
}