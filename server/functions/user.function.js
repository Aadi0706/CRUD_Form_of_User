
const userControl= require('../controllers/usercontroller');


// function to add a single user.
const addUser= async (params) => {
   
     let {firstName,student_code}=params;

     let userexist= await userControl.findOneUserByKey({student_code});

     if(userexist){
        throw "User already exists in the database."
     }

     let result= await userControl.addUser(params);
     return {message:"User added successfully",result:result}
}




// function to get all users from the database.
const getAllUsers = async (params,res)=>{
   const { pageNo, count, search, sortKey, sortOrder } = params;
   const userList =  await userControl.getAllUserList({ pageNo, count, search, sortKey, sortOrder });

   if (!userList){
      return res.status(500).send({error:"userlist does not exist"});
   }    
   else{
       return userList;
   }

}

// function to get a single user.
const getSingleUser = async(req,res) => {

   const {stud_code} = req.params;
   //const {_id}=req.params;
   
   let stuCodeExist = await userControl.findOneUserByKey({ stud_code});

   if(stuCodeExist){
       return stuCodeExist;      
   }
   else{
         notFoundError({
           response: res,
           message: 'Student does not exist'
       })

   }
};

// function to update a user data

const updateUser = async (req,res) => {
   const { id, student_code, firstName, lastName, email, mobile, status } = req.body;
   let getStuCode = userControl.findOneUserByKey({ student_code, _id: { $ne: id }});
   let getEmail = userControl.findOneUserByKey({ email, _id: { $ne: id}});
   let getMobile = userControl.findOneUserByKey({ mobile, _id: { $ne: id }});

   let [ stuCodeExist, emailExist, mobileExist ] = await Promise.all([getEmpCode, getEmail, getMobile]);

   if(stuCodeExist){
       throw new Error(`Student with this student code already exists in the database`);
   }
   else if(emailExist){
      throw new Error(`Email already exists in the database`);
   }
   else if(mobileExist){
      throw new Error('This mobile number already exists');
   }

   const result = await userControl.updateOneUserByKey(req);
   if(result){
      return result;
   }
   else{
     throw new Error("Internal server error");
   }
}


//DELETE a user from the database
const deleteUser = async(req,res) =>{
   try{
   const { id } = req.body;
   const result = await userControl.deleteUser(req);
   return result;
   }
   catch(err){
       serverError({
           response: res,
           message: 'Internal server error',
           error: err
       })
   }
}


module.exports={
   addUser,
   getAllUsers,
   getSingleUser,
   updateUser,
   deleteUser
}