const express = require('express');
const router = express.Router();

const Person =require('../models/person');


router.post('/',async(req ,res)=>{
    
    try{
        
        
        const data = req.body;
        
        
        //create a new person using the mongoose model
        
        const newperson = new Person(data);
        
        
        //save the new person to the database
        
        const response = await newperson.save();
        console.log('data saved');
        res.status(200).json(response);
    }
    
    catch(err){
        console.log(err);
        res.status(500).json({error :' invalid server error'});
    }
    
})


router.get('/', async(req ,res)=>{
    try{

        const data =  await person.find();
          console.log('data saved');
        res.status(200).json(data);
    }
    catch(err){
         console.log(err);
        res.status(500).json({error :' invalid server error'});
    }
    }
)



router.get('/:fahad' , async(req ,res)=>{

    try{
        const fahad = req.params.fahad; 
        if(fahad =='frontend' || fahad == 'backend' || fahad =='database'){

            const response =  await Person.find({work:fahad});
          console.log('data saved');

            res.status(200).json(response);
        }
        else{
            res.status(404).json({error :'invalid work error'});
        }
      
    }

    catch(err){

        console.log(err);
        res.status(500).json({error: 'invalid  server error'})
    }
})



router.put('/:id' , async (req , res)=>{
    try{

        const personId = req.params.id;
        const updatedPersonData = req.body;

        const response = await Person.findByIdAndUpdate(personId , updatedPersonData,{
            new : true,
            runValidators : true,

        })

        if(!response){
            return res.status(404).json({error : 'person not found'});
        }

        console.log('data updated');

            res.status(200).json(response);
    }

    catch(err){

          console.log(err);
        res.status(500).json({error: 'invalid  server error'})
    }
})



router.delete('/:id' , async (req ,res)=>{

    try{

        const personId = req.params.id;
        
        const response = await Person.findByIdAndDelete(personId);
        
        if(!response){
            return res.status(404).json({error : 'person not found'});
        }
        
        console.log('data delete');
        
            res.status(200).json({message :'person delete successfully'});
            
            
            
        }
    
        catch(err){
                
                console.log(err);
                res.status(500).json({error: 'invalid  server error'})
            }
        })
    

        //adfkjdflk
module.exports =router;