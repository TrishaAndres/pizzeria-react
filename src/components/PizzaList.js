import React from 'react';

const PizzaList = ({ pizzas, removePizza }) => {
  const calcArea = (d) => Math.PI * Math.pow(d / 2, 2);
  const calcCost = (pizza) => {
    const basePerInch = 0.028 + 0.039 + 0.008;
    const toppingRates = {
      Pepperoni: 0.015,
      Bacon: 0.017,
      Mushrooms: 0.01,
      Chicken: 0.02,
      Peppers: 0.009,
      Onions: 0.008,
    };
    const area = calcArea(pizza.diameter);
    const base = area * basePerInch;
    const topping = pizza.toppings.reduce((sum, t) => sum + (toppingRates[t] || 0) * area, 0);
    return (base + topping).toFixed(2);
  };

  return (
    <div className="card p-4 shadow-sm">
      <h4 className="mb-3">Your Pizzas</h4>
      {pizzas.length === 0 ? (
        <p>No pizzas added yet.</p>
      ) : (
        <ul className="list-group">
          {pizzas.map((pizza, idx) => (
            <li className="list-group-item d-flex justify-content-between align-items-start" key={idx}>
              <div>
                <h5>{pizza.name}</h5>
                <p><strong>Diameter:</strong> {pizza.diameter}"</p>
                <p><strong>Toppings:</strong> {pizza.toppings.join(', ') || 'None'}</p>
                <p><strong>Cost:</strong> ${calcCost(pizza)}</p>
              </div>
              <button className="btn btn-outline-danger btn-sm" onClick={() => removePizza(idx)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PizzaList;
