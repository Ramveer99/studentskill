const mongooes=require('mongoose')


const aboutsSchema= new mongooes.Schema({
    title:String,
    aboutuser:String

})

const aboutsmodel=mongooes.model('userabout', aboutsSchema);
module.exports=aboutsmodel