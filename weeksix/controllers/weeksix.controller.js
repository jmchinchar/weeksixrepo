var WeeksixService = require('../services/weeksix.service.js');


_this = this

exports.getWeeksixs = async function(req, res, next){

        var page = req.query.page ? req.query.page : 1
        var limit = req.query.limit ? req.query.limit : 10; 
    
        try{
        
            var weeksixs = await WeeksixService.getWeeksixs({}, page, limit)
     
            return res.status(200).json({status: 200, data: weeksixs, message: "Succesfully Weeksixs Recieved"});
            
        }catch(e){
            
    //Return an Error Response Message 
    //with Code and the Error Message.
            
            return res.status(400).json({status: 400, message: e.message});
            
        }
    }
    exports.createWeeksix = async function(req, res, next){

        var weeksix = {
            title: req.body.title,
            description: req.body.description,
            status: req.body.status
        }
    
        try{

            var createdWeeksix = await WeeksixService.createWeeksix(weeksix)
            return res.status(201).json({status: 201, data: createdWeeksix, message: "Succesfully Created WeekSix"})
        }catch(e){
            
     
    return res.status(400).json({status: 400, message: "Weeksix Creation was Unsuccesfull, I am sorry :( "})
        }
    }
    
    exports.updateWeeksix = async function(req, res, next){

        if(!req.body._id){
            return res.status(400).json({status: 400., message: "Id must be present"})
        }
    
        var id = req.body._id;
    
        console.log(req.body)
    
        var weeksix = {
            id,
            title: req.body.title ? req.body.title : null,
            description: req.body.description ? req.body.description : null,
            status: req.body.status ? req.body.status : null
        }
    
        try{
            var updatedWeeksix = await WeeksixService.updateWeeksix(weeksix)
            return res.status(200).json({status: 200, data: updatedWeeksix, message: "Succesfully Updated Weeksix"})
        }catch(e){
            return res.status(400).json({status: 400., message: e.message})
        }
    }
    
    exports.removeWeeksix = async function(req, res, next){

        var id = req.params.id;
    
        try{
            var deleted = await WeeksixService.deleteWeeksix(id)
            return res.status(204).json({status:204, message: "Succesfully Weeksix Deleted"})
        }catch(e){
            return res.status(400).json({status: 400, message: e.message})
        }
    
    }
    