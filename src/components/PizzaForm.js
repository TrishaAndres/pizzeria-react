import React, { useState } from 'react';

const PizzaForm = ({ addPizza }) => {
  const [name, setName] = useState('');
  const [diameter, setDiameter] = useState('');
  const [toppings, setToppings] = useState([]);

  const toppingOptions = ['Pepperoni', 'Bacon', 'Mushrooms', 'Chicken', 'Peppers', 'Onions'];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !diameter) return;
    const pizza = {
      name,
      diameter: parseInt(diameter),
      toppings,
    };
    addPizza(pizza);
    setName('');
    setDiameter('');
    setToppings([]);
  };

  const handleToppingChange = (e) => {
    const value = e.target.value;
    if (toppings.includes(value)) {
      setToppings(toppings.filter(t => t !== value));
    } else {
      setToppings([...toppings, value]);
    }
  };

  return (
    <div className="card p-4 shadow-sm mb-4">
      <h3 className="mb-3">Create Your Pizza</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Pizza Name</label>
          <input className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Diameter (inches)</label>
          <input type="number" className="form-control" value={diameter} onChange={(e) => setDiameter(e.target.value)} min="6" max="54" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Toppings</label>
          {toppingOptions.map((topping) => (
            <div className="form-check" key={topping}>
              <input
                className="form-check-input"
                type="checkbox"
                value={topping}
                id={topping}
                checked={toppings.includes(topping)}
                onChange={handleToppingChange}
              />
              <label className="form-check-label" htmlFor={topping}>
                {topping}
              </label>
            </div>
          ))}
        </div>
        <button className="btn btn-primary" type="submit">Add Pizza</button>
      </form>
    </div>
  );
};

export default PizzaForm;
