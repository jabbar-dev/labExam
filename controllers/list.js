const express = require('express');
const res = require('express/lib/response');
const Jabbar = require('../model/person');

const router = express.Router();


router.get('/', (req, res)=>{

    res.send('hi2');
 //   res.render('./list.ejs',{jabbar:[{fullName:'jabbar',email:'hi@hi.com'}]})

})




// router.post('/',async(req,res)=>{

// const peson = await Person.find();

//     console.log(jabbar[0])

//     res.send('ok')



//   await  jabbar.forEach(j=>{
//         if(j.username==req.body.username){
//             res.send("Logged In Successfully")
//         }
//         else{
//             res.send('NO')
//         }
   // })
   



module.exports = router