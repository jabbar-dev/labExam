const express = require('express');
const req = require('express/lib/request');
const Person = require('../model/person')
const listController = require('../controllers/list');
const app = require('..');


const router = express.Router();



router.post('/', async(req,res)=>{
    console.log(req.body)
    const persons = new Person({

        
        fullName: req.body.fullName,
        email : req.body.email,
        phone : req.body.phone,
        country : req.body.country,
        state : req.body.state,
        city: req.body.city,
        address : req.body.address,
        zip : req.body.zip

    })

    try{
        
        user = await persons.save()
         res.render('list')
        // console.log(persons)
        }
        catch(e){
     
         console.log(e)
         res.send('Error')
        }

    

})


router.get('/show',async(req,res)=>{

  //  const jabbar = new Jabbar();
    const jabbar = await Jabbar.find();

    console.log(jabbar)
    res.render('./show.ejs',{jabbar:jabbar})
})

router.get('/', (req,res)=>{
res.render('./register')

})


// router.post('/', async(req,res)=>{
//     console.log(req.body)
//     const newJabbar = new Jabbar({
        
//         username: req.body.username,
//         password: req.body.password
//     })



// })


router.use('/listC',listController)
module.exports = router;