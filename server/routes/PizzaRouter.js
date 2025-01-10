const express = require("express");
const router = express.Router();

const PizzaController = require('../controllers/PizzaController');
const AdminController = require("../controllers/AdminController");

router.get('/pizzas', PizzaController.getPizzas)
router.post('/admins/logIn', AdminController.logIn)
router.post('/admins/signUp', AdminController.signUp)
router.get('/orders', PizzaController.getOrders)
router.post('/orders/:orderId/complete', PizzaController.completeOrder)
router.get('/orders/:orderId', PizzaController.getOrder)
router.post('/newOrder', PizzaController.newOrder)



module.exports = router;


