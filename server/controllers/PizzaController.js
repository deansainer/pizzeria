const db = require('../db');

class PizzaController {
  async getPizzas(req, res) {
    const { category, orderBy = 'rating', order = 'asc' } = req.query;

    try {
        if (category){
            const allPizzas = await db.query(`SELECT * FROM pizzas WHERE category = $1 ORDER BY ${orderBy} ${order}`, [category]);
            return res.json(allPizzas.rows);
        } else {
            const allPizzas = await db.query(`SELECT * FROM pizzas ORDER BY ${orderBy} ${order}`);
            return res.json(allPizzas.rows);
        }

    } catch (err) {
      res.status(500).json({ error: 'Database query failed' });
    }
  }

  async newOrder(req, res){
    const {orderId, firstName, secondName, address, addressAdditional, city, state, phone, email, deliveryTime, orderedItems, total} = req.body;
    try {
      const orderedItemsJSON = JSON.stringify(orderedItems);
      const newOrder = await db.query(`INSERT INTO orders (
        orderId, firstName, secondName, address, addressAdditional, city, state, phone, email, deliveryTime, orderedItems, total) 
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)`,
        [orderId, firstName, secondName, address, addressAdditional, city, state, phone, email, deliveryTime, orderedItemsJSON, total])
        
      res.json('Order created succesfully')
    } catch (error) {
      res.json(error)
    }
  }
}

module.exports = new PizzaController();
