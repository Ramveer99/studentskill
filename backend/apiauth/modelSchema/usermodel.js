const mongooes=require('mongoose')
const validator=require('validator')


const userdata= new mongooes.Schema({
    name: 
    // {
         String,
        // required: [true, "Please Enter Name"],
    //   },
    email:
    // {
         String,
        // required: [true, "Please Enter Email"],},
    password:
    // {
        String,
        // required:[true,'please enter password'],
        // minLength:[8,"Password must contain 8 char.. "]
    // }
})

const usermodel=mongooes.model('logindetail',userdata)

module.exports=usermodel