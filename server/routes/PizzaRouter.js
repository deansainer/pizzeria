const express = require("express");
const router = express.Router();

const PizzaController = require('../controllers/PizzaController')

router.get('/pizzas', PizzaController.getPizzas)
router.get('/orders', PizzaController.getOrders)
router.post('/orders/:orderId/complete', PizzaController.completeOrder)
router.get('/orders/:orderId', PizzaController.getOrder)
router.post('/newOrder', PizzaController.newOrder)



module.exports = router;


