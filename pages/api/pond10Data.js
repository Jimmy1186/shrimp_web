const { POND_10_COLLECTION } = require("../../models/pond");
import dbConnect from "../../utils/dbConnection";
dbConnect();


export default async function handler(req, res) {
  const payload = await POND_10_COLLECTION.find().sort({'_id': -1}).limit(5);

  res.json(payload);
 
  
}
