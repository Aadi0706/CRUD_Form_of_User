
const express= require('express');
const Validator= require('../validator/user.validate');
const userFunction = require('../functions/user.function');
const router = express.Router();

// route for creating a user
router.post('/createUser',Validator, async (req, res) => {
    try {
        console.log('inside user post');

        let params = {...req.body}

        const user = await userFunction.addUser(params);

        return res.status(200).send({user});

    } catch (error) {
        return res.status(500).send({error: error.message});
    }
});

// route for updating a user

router.put('/updateUser',Validator, async (req,res) => {

    try {
          const updatedUser = await userFunction.updateUser(req, res);
          
          return res.status(201).send({updatedUser});
    } 
    catch (error) {
        
        return res.status(500).send({error:error.message});
    }

});


// route for getting a single user 
router.get('/about/:stud_code',Validator, async(req,res)=>{
      
    const { stud_code } = req.params;
    try{
        if(stud_code){
            let result = await userFunction.getSingleUser(req,res);
           
            return res.status(200).send({result});
          }
        else 
        {
           return res.status(500).send({error: "stud_code doesnot exist"});
        }
    } 
    catch(err)  
    {
     
        return res.status(500).send({error: error.message});
    } 
});



// route for converting(deleting) a status of the user to Inactive.

router.put('/deleteUser', async(req, res)=>{

    
    try {
        const result= await userFunction.deleteUser(req,res);
        return res.status(201).send({result, message:"Changed the status of the user to Inactive."});
    } catch (error) {
        
        return res.status(500).send({error: error.message});
    }
});

// route for getting all the users.

router.get('/userList', async(req,res)=>{
    try {
        const { pageNo, count, search, sortKey, sortOrder } = req.query;

        const users= await userFunction.getAllUsers({pageNo, count, search, sortKey, sortOrder});
        return res.status(200).send({users})

    } catch (error) {
        return res.status(500).send({error: error.message});
    }
})


module.exports =router;