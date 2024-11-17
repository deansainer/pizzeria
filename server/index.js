const express = require('express')
const PizzaRouter = require('./routes/PizzaRouter')
const cors = require('cors');
const app = express()

app.use('/api', PizzaRouter)
app.use(cors());

app.use(express.json())

app.listen(3001, () => {
    console.log('server started on PORT 3000');
})