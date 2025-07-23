const express = require('express');
const router = express.Router();

const player =require('../models/player');




router.post('/', async(req, res)=>{
    try{
        const data = req.body;

        const newplayer = new player(data);

        const response =await newplayer.save();
        console.log('data saved');
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error : 'invalid server error'});


    }
})


router.get('/' ,async(req,res)=>{
    try{

        const data =  await player.find();
           console.log('data saved');
        res.status(200).json(data);


    }

    catch(err){

        console.log(err);
        res.status(500).json({error :'invalid server error'});
    }

})


router.get('/:skillset' , async(req ,res)=>{

    try{
        const skillset = req.params.skillset; 
        if(skillset =='batsman' || skillset == 'bowler' || skillset =='coach'){

            const response =  await Player.find({skill:skillset});
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

        const playerId = req.params.id;
        const updatedPlayerData = req.body;

        const response = await Player.findByIdAndUpdate(playerId , updatedPlayerData,{
            new : true,
            runValidators : true,

        })

        if(!response){
            return res.status(404).json({error : 'player not found'});
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

        const playerId = req.params.id;
        
        const response = await Player.findByIdAndDelete(playerId);
        
        if(!response){
            return res.status(404).json({error : 'person not found'});
        }
        
        console.log('data delete');
        
            res.status(200).json({message :'player delete successfully'});
            
            
            
        }
    
        catch(err){
                
                console.log(err);
                res.status(500).json({error: 'invalid  server error'})
            }
        })


module.exports = router;