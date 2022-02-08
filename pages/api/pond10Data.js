const pond_10= require("../../models/pond");
import dbConnect from "../../utils/dbConnection";
dbConnect();


export default async function handler(req, res) {
  const payload = await pond_10.find().sort({'_id': -1}).limit(5);

  res.json(payload);
 
  
}
