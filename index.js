const express  = require('express');
const cors = require('cors')

const app = express();

require('./drivers/connect-db')

app.use(express.json())
app.use(cors())

app.set('PORT', process.env.PORT || 3000)

app.use('/inventory', require('./routes/inventory'))


app.listen(app.get('PORT'), ()=> console.log(`server listen to port ${app.get('PORT')}`))