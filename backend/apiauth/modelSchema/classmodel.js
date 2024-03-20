const mongooes=require('mongoose')


const classSchema= new mongooes.Schema({
    title:{type:String},
    aboutclass:{type:String},
    filename:{type:String},
    // image: String,
    // contentType: String,
    // data: Buffer,
})

const classModel=mongooes.model('classdetail',classSchema)

module.exports=classModel