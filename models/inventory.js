const mongoose = require('mongoose')
const {Schema} = mongoose
const InventorySchema = new Schema ({
    id_product: {
        type : String,
        required : true,
        unique : true
    },
    name : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    number : {
        type : Number,
        required :true
    },
    description : {
        type : String,
        required :true
    },
    brand : {
        type : String,
        required :true
    }
    

})

module.exports = mongoose.model('inventory', InventorySchema)