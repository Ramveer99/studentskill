const mongooes=require('mongoose')
mongooes.connect('mongodb://127.0.0.1:27017/user').then(()=>
{
    console.warn('mongodb is connect successfull')
}
).catch((err)=>
{
    console.warn(err.message)
})