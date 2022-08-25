// const express = require('express');
// const app=express();
// const User= require('../modals/user.modal');


// // const { body, validationResult } = require('express-validator');
// const validateAddUser = require('../validator/user.validate');



// // route for getting all the users. --> get request to get all users.

// app.get('/', async(req,res)=>{
//      try {
        
//         const users= await User.find().lean().exec();

//         return res.status(200).send(users);


//      } catch (error) {
//         return res.status(500).send({message:error.message})
//      }
// });


// // route for posting a user to the database.

// app.post('/createUser',[validateAddUser],   
// async(req,res)=>{
//     try {

//         // const errors = validationResult(req);
//         // if (!errors.isEmpty()) {
//         //   return res.status(400).json({ errors: errors.array() });
//         // }
 
//         const user=await User.create(req.body);

//         return res.status(201).send({user});

//     } catch (error) {
//         return res.status(500).send({message:error});
//     }
// });


// // route for deleting a user from the database.

// app.delete('/:id', async(req,res) =>{

//     try {
//          const user=await User.findByIdAndDelete(req.params.id).lean()

           
          
//     } catch (error) {
        
//         return res.status(500).send({message:error.message});
//     }
// });



// // route for updating the user by id. 

// app.put('/:id', async(req,res)=>{

//     try {
//         const user=await User.findByIdAndUpdate({_id:req.params.id},req.body,{new:true}).lean().exec();

//         return res.status(200).send({user});
//     } 
//     catch (error) {
        
//         return res.status(500).send({message:error.message});
//     }
// });



// module.exports = app;


//   body("lastName").trim().isString().isAlpha(),
//   body("email").trim().isEmail(),
//   body("mobNum").isNumeric().notEmpty(),
//   body("city").trim().isString().notEmpty(),
//   body("state").trim().isString().notEmpty(),



 // console.log(body("firstName"));
        // if(!req.body.firstName){
        //     throw {error:'Enter first name',errorCode:204}
        // }


        // const errors = validationResult(req);
        // if (!errors.isEmpty()) {
        //   return res.status(400).json({ errors: errors.array() });
        // }
