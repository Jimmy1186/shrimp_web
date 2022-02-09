const { POND_8_COLLECTION } = require("../../models/pond");
import dbConnect from "../../utils/dbConnection";
dbConnect();
let payload;
export default async function handler(req, res) {

 



      const changeStream = await POND_8_COLLECTION.watch();

      changeStream.on("change", async (next) => {
        payload = await POND_8_COLLECTION.find().sort({ _id: -1 }).limit(5);
      });
      console.log("8 up")
        res.json(payload)

    



}
