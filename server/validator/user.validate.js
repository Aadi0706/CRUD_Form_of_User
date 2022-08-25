// const { body, validationResult } = require('express-validator');

// const user= require('../modals/user.modal');

  const validateAddUser = (req, res, next) => {
  const { student_code, firstName, lastName, email,mobNum, city, state } = req.body
  let errors = [];


     // first name validations.
  if(!firstName){
    errors.push({error:'Firstname required', statusCode:102})
  }
  else if(!(/^[a-zA-Z\-]+$/).test(String(req.body.firstName))){
    errors.push({error: 'First name should be valid', statusCode:102});
  }
  else{
    req.body.firstName=firstName;
  }
    
   

    
  
     
     // last name validations.    
  if(!lastName){
    errors.push({error: 'Last name required', statusCode:102});
  }
  else if(!(/^[a-zA-Z\-]+$/).test(String(req.body.lastName))){

    errors.push({error: 'lastname should be valid', statusCode:102});
  }
   else{
     req.body.lastName=lastName;
   }
  


       // email validations
  if(!email){
    errors.push({error: 'email is required', statusCode:102});
  }
  else if(!(/^[\-0-9a-zA-Z\.\+_]+@[\-0-9a-zA-Z\.\+_]+\.[a-zA-Z]{2,}$/).test(String(req.body.email))){
    errors.push({error:'Please enter a valid email address', statusCode:102})
  }
  else{
    req.body.email=email;
  }
    
    	
	
    

  if(mobNum){

    if( !(/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/).test(Number(req.body.mobNum))){
      errors.push({error:'Please enter a valid mobile number', statusCode:102})
    }
    if(!(/^\d{10}$/).test(Number(req.body.mobNum))){
      errors.push({error:'Please enter a valid mobile number', statusCode:102})
    }
    req.body.mobNum=mobNum;
  }
  if(!mobNum){
    errors.push({error:'Number required', statusCode:102});
  }

  if(city){
    
    if(!(/^[a-zA-Z\-]+$/).test(String(req.body.city))){
      errors.push({error: 'city name should be valid', statusCode:102});
    }

    req.body.city=city;
  }
  if(!city){
    errors.push({error:'City required cannot be empty', statusCode:102});
  }

  if(state){
    
    if(!(/^[a-zA-Z\-]+$/).test(String(req.body.state))){
      errors.push({error: 'state name should be valid', statusCode:102});
    }

    req.body.state=state;
  }
  if(!state){
    errors.push({error:'State required', statusCode:102});
  }
 
  

  if (errors.length) {
    return res.status(400).json({ errors });
  }
  next();
}



module.exports = validateAddUser;