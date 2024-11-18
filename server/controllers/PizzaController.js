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
}

module.exports = new PizzaController();
