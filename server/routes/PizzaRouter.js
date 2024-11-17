const express = require("express");
const router = express.Router();

const PizzaController = require('../controllers/PizzaController')

router.get('/pizzas', PizzaController.getPizzas)



module.exports = router;