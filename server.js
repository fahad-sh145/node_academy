const express = require('express');

const app =express();
 
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

// const Person =require('./models/person');

// const player = require('./models/player')



// app.post('/player', async(req, res)=>{
//     try{
//         const data = req.body;

//         const newplayer = new player(data);

//         const response =await newplayer.save();
//         console.log('data saved');
//         res.status(200).json(response);
//     }
//     catch(err){
//         console.log(err);
//         res.status(500).json({error : 'invalid server error'});


//     }
// })


// app.get('/player' ,async(req,res)=>{
//     try{

//         const data =  await player.find();
//            console.log('data saved');
//         res.status(200).json(data);


//     }

//     catch(err){

//         console.log(err);
//         res.status(500).json({error :'invalid server error'});
//     }

// })

// app.post('/person',async(req ,res)=>{
    
//     try{
        
        
//         const data = req.body;
        
        
//         //create a new person using the mongoose model
        
//         const newPerson = new Person(data);
        
        
//         //save the new person to the database
        
//         const response = await newPerson.save();
//         console.log('data saved');
//         res.status(200).json(response);
//     }
    
//     catch(err){
//         console.log(err);
//         res.status(500).json({error :' invalid server error'});
//     }
    
// })


// app.get('/person', async(req ,res)=>{
//     try{

//         const data =  await Person.find();
//           console.log('data saved');
//         res.status(200).json(data);
//     }
//     catch(err){
//          console.log(err);
//         res.status(500).json({error :' invalid server error'});
//     }
//     }
// )



// app.get('/person/:fahad' , async(req ,res)=>{

//     try{
//         const fahad = req.params.fahad; 
//         if(fahad =='frontend' || fahad == 'backend' || fahad =='database'){

//             const response =  await Person.find({work:fahad});
//           console.log('data saved');

//             res.status(200).json(response);
//         }
//         else{
//             res.status(404).json({error :'invalid work error'});
//         }
      
//     }

//     catch(err){

//         console.log(err);
//         res.status(500).json({error: 'invalid  server error'})
//     }
// })



app.get('/' , function(req ,res){
    res.send("hii how are you");
})


app.get('/virat' ,(req, res)=>{
    res.send(" i am fine");
})


app.post('/value' ,(req ,res)=>{
    res.send("i am a postman");
})


app.get('/rohit' ,(req ,res)=>{

    var players ={
        name:"fahad",
        age:20,
        profession:"backend developer",
        value: true

    }
    res.send(players);
    // res.send(" i am rohit");
})




const Personroutes = require('./routes/personroutes');
const Playerroutes = require('./routes/playerroutes');

app.use('/person' ,Personroutes);
app.use('/player' ,Playerroutes);


// const playerroute = require('./routes/playerroutes');
// app.use('/player' ,playerroute);

app.listen(4000,()=>{
    console.log(" i am still alive");  //check whether server is working or not
});