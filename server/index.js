const express = require('express')
const PizzaRouter = require('./routes/PizzaRouter')
const cors = require('cors');
const app = express()

app.use(express.json());

app.use(cors());

app.use('/api', PizzaRouter)

app.listen(3001, () => {
    console.log('server started on PORT 3001');
})