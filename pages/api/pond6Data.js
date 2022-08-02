const { POND_6_COLLECTION } = require("../../models/pond");
import dbConnect from "../../utils/dbConnection";
dbConnect();
let payload;
export default async function handler(req, res) {
  const payload = await POND_6_COLLECTION.find().sort({'_id': -1}).limit(1);
  res.json(payload);

}
