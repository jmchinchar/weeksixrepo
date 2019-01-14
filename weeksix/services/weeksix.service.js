var WeekSix = require('../models/weeksix.model.js')


_this = this


exports.getWeeksix = async function(query, page, limit){



    var options = {
        page,
        limit
    }

    
try {
    var weeksixs = await WeekSix.paginate(query, options)
 

    return weeksixs;

} catch (e) {


    throw Error('Oh No! We got an error while Paginating our Week-Six Tasks, so sorry!' )
}
}

exports.createWeeksix = async function(weeksix){
    
    // Creating a new Mongoose Object by using the new keyword
    
        var newWeeksix = new WeekSix({
            title: weeksix.title,
            description: weeksix.description,
            date: new Date(),
            status: weeksix.status
        })
    
        try{
    
            var savedWeeksix = await newWeeksix.save()
    
            return savedWeeksix;
        }catch(e){

    
            throw Error("Error while Creating Weeksix")
        }
    }


    exports.updateWeeksix = async function(weeksix){
        var id = weeksix.id
    
        try{
        
            var oldWeeksix = await WeekSix.findById(id);
        }catch(e){
            throw Error("Error occured while Finding the Weeksix")
        }
    
        if(!oldWeeksix){
            return false;
        }
    
        console.log(oldWeeksix)
  
        oldWeeksix.title = weeksix.title
        oldWeeksix.description = weeksix.description
        oldWeeksix.status = weeksix.status
    
    
        console.log(oldWeeksix)
    
        try{
            var savedWeeksix = await oldWeeksix.save()
            return savedWeeksix;
        }catch(e){
            throw Error("And Error occured while updating the Weeksix");
        }
    }

    exports.deleteWeeksix = async function(id){
 
        try{
            var deleted = await WeekSix.deleteOne({_id: id})
            if(deleted.n === 0){
                throw Error("Weeksix Could not be deleted")
            }
            return deleted
        }catch(e){
            throw Error("Error Occured while Deleting the Weeksix")
        }
    }

