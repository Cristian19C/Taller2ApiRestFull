const mongoose = require('mongoose');

// const URI = "mongodb://127.0.0.1:27017/taller";

const URI ="mongodb+srv://cristiancordoba01:dtM1I9yQWeH1tRDu@pruebamongo.dmpktu9.mongodb.net/taller";

mongoose.set('strictQuery', false)

const options = {
    useNewUrlParser: true, useUnifiedTopology:true
}

mongoose.connect(URI, options)
    .then(()=> console.log('conectado de forma correcta'))
    .catch( e=> console.log(e))


module.exports = mongoose;