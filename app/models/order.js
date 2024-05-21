




import mongoose from "mongoose"

const OderSchema= new mongoose.Schema({
    email : {type:String,require:true},
 name:{type: String},
    userId: {type:String, require:true},
    oderId:{type:Number, require:true},
    products:{type:Object,require:true},
    address: {type: String , require: true},
    pincode: {type: Number},
    contact: {type:Number},
    ammount: {type: Number,require:true},
    status:{type:String, default:"pending ",require: true}

},{timestamps:true})
const Oders =  mongoose.models?.Oders || mongoose.model('Oders', OderSchema);

export default Oders;