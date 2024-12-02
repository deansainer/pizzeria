CREATE TABLE Orders (
    orderId BIGINT NOT NULL PRIMARY KEY,
    firstName VARCHAR(255) NOT NULL,
    secondName VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    addressAdditional VARCHAR(255),
    city VARCHAR(100) NOT NULL,
    state VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    email VARCHAR(255) NOT NULL,
    deliveryTime VARCHAR(10) NOT NULL,
    orderedItems JSON NOT NULL,
    total DECIMAL(10, 2) NOT NULL,
    isCompleted boolean
);



CREATE TABLE pizzas (
    id SERIAL PRIMARY KEY,
    image VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    category INT NOT NULL,
    rating INT NOT NULL
);

INSERT INTO Orders (
    orderId, firstName, secondName, address, addressAdditional, city, state, phone, email, deliveryTime, orderedItems, total
) VALUES (
    5947548543, 
    'Denys', 
    'Vlasiuk', 
    'Zlota 43', 
    'apt 356', 
    'Warsaw', 
    'Warsaw', 
    '+487286742568', 
    'myemailaddress@gmail.com', 
    '22:43', 
    '[
        {
            "id": 1,
            "image": "https://media.dodostatic.com/image/r:292x292/11EE8739E55F5BCE89E33C950E9F9698.avif",
            "title": "Pepperoni Fresh",
            "price": "11.99",
            "category": 1,
            "rating": 3,
            "quantity": 1,
            "selectedThickness": 0,
            "selectedSize": 0
        },
        {
            "id": 7,
            "image": "https://media.dodostatic.com/image/r:292x292/11EE873ED9C21CE2A2D71C0FEE8462CB.avif",
            "title": "Quattro Formaggi",
            "price": "13.99",
            "category": 2,
            "rating": 2,
            "quantity": 3,
            "selectedThickness": 0,
            "selectedSize": 0
        }
    ]', 
    39.95
);