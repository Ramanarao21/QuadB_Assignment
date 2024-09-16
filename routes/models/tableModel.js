import mongoose from "mongoose";

const tableSchema = new mongoose.Schema({
    name:{type:String},
    last: {type:String},
    buy:{type:String},
    sell: {type:String},
    volume: {type: String},
    base_unit: {type:String}
})

const tableModel = mongoose.models.table || mongoose.model('table', tableSchema);

export default tableModel