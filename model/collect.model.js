import mongoose from "mongoose"


const collectSchema = mongoose.Schema({
    results:[
        {
            image_id:String,
            image_url:String,
        }
    ],
    cover:String,
    name:String
})


const Collect = mongoose.model("collection",collectSchema);

export default Collect;