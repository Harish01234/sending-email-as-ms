import * as dotenv from 'dotenv'
dotenv.config({  path: './.env'})
 
 const email=process.env.EMAIL;

 const password=process.env.PASSWORD;

 export {email,password}

 console.log(email);
 