const express= require('express');
const userModal = require('../modals/user.modal');

  // function to add a new user to the database.
const addUser= async(params)=>{

   try {
       const {student_code, firstName, lastName, dateOfBirth, email, mobNum,city,state} = params;

       const data= new userModal({student_code, firstName, lastName, dateOfBirth, email, mobNum,city,state});
       
       
       let result = await data.save();
       
       return result;
   } 
   catch (error) 
   {
    console.log({error:"Internal Server Error...."})
    
   }
};


// Delete a user 
const deleteUser = async (req) => {
    const { id } = req.body;
    const query = { _id: id  };
    const update = { _status: 'Inactive', isDeleted: true };
    const options = {new: true}
    const deletedEntry =  await userModal.findOneUserByKey(query, update, options);
    return deletedEntry;
}



 // finding one user by key.
const findOneUserByKey= async(query)=>{

    const data = await userModal.findOne(query);
    return data;
}

// updating one user by key.
const updateOneUserByKey= async(req,res)=>{
      try {
        const {student_code, firstName, lastName, dateOfBirth, email, mobNum,city,state} = req.body;

        const updateUser= await userModal.findOneAndUpdate({id:_id},req.body,{new:true});

        return updateUser;
        
      } catch (error) {
        return res.send({error: error.message});
      }

}


// function to get all the students.
const getAllUserList = async (params) => {
    let { pageNo, count, search , sortKey, sortOrder } = params;
    let query = {};
    let sort = { created: -1 };

    if (search){
        query.firstName = { $regex: search, $options: "i" }
    }

    if (sortKey && sortOrder) {
        sort = { [sortKey]: sortOrder }
    }

    if (!pageNo){
        pageNo = 0;
    }

    if (!count){
        count = 10;
    }

    const result =  await userModal.find(query).sort(sort).skip(pageNo * count).limit(count).lean(); 
    return result;

}


module.exports=
{
addUser,
deleteUser,
findOneUserByKey,
updateOneUserByKey,
getAllUserList}