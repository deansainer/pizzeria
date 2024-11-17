const db = require('../db')

class UserController{
    async getPizzas(req, res){
        const { sortBy = 'rating', order = 'asc' } = req.query;

        try {
            const allPizzas = await db.query(`
                SELECT * FROM pizzas
                ORDER BY ${sortBy} ${order}
            `);
            res.json(allPizzas.rows);
        } catch (err) {
            res.status(500).json({ error: 'Database query failed' });
        }
    }
}

module.exports = new UserController;