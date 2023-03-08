import { query } from "../../lib/db";
export default async function signIn(req, res){
    if (req.method === "POST"){
        const reqPayload = req?.body
        // res.json(reqPayload)
        try {
            console.log("phone", reqPayload.phone)
            const querySql =
              "SELECT * FROM tbl_user where phonenumber = ?";
            const valueParams = [reqPayload.phone];
            const data = await query({ query: querySql, values: valueParams });
            console.log(querySql)
            res.json({ users: data[0].firstname });
          } catch (error) {
            // unhide to check error
            res.json({ error: error.message });
          }
    }
}