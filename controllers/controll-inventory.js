const Inventory = require('./../models/inventory')


module.exports = {
    index : async (req,res)=>{
        try{
            const data = await Inventory.find({})

            return res.status(200).json({"state":true,"data":data})            
        }catch(err){
            return res.status(503).json({"state":false, "error":err.err})
        }
    },

    findById : async( req,res)=>{
        const {id} = req.params   
        try {
            const inventory = await Inventory.findById(id)
            
            return res.status(200).json({"state":true,"data":inventory})
        } catch (error) {
            return res.status(500).json({"state":false,"error":error})
        }     
    },

    save : async(req,res)=>{
        const inventory = new Inventory(req.body)

        try {
            const data = await inventory.save()

            return res.status(200).json({"state":true,"data":data})
        } catch (error) {
            return res.status(500).json({"state":false,"error":error})
        }
        
        return res.status(200).json({"state":true,"data":inventory})
    },

    update : async(req,res)=>{
        const {id} = req.params

        const inventory = req.body

        try {
         const data = await Inventory.findByIdAndUpdate(id,inventory)   

         return res.status(200).json({"state":true,"data":data})
        } catch (error) {
            return res.status(500).json({"status":500,"error":error})
        }
    },
    erase : async (req,res)=>{
        const {id} = req.params       

        try {
            const data = await Inventory.findByIdAndDelete(id)
            
            return res.status(200).json({"state":true,"data":data})
        } catch (error) {
            return res.status(500).json({"state":false,"error":error})
        }
    }
}