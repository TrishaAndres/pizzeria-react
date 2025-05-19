import React from 'react';

const Receipt = ({ pizzas, tipPercent, useRewards }) => {
  const calcArea = (d) => Math.PI * Math.pow(d / 2, 2);
  const calcPizzaCost = (pizza) => {
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
    return base + topping;
  };

  const subtotal = pizzas.reduce((sum, p) => sum + calcPizzaCost(p), 0);
  const tax = subtotal * 0.06;
  const tip = subtotal * (tipPercent / 100);
  const reward = useRewards ? Math.min(subtotal, 20) : 0;
  const total = subtotal + tax + tip - reward;

  return (
    <div className="card p-4 mt-4 shadow-sm bg-light">
      <h4>🧾 Receipt Summary</h4>
      <p><strong>Subtotal:</strong> ${subtotal.toFixed(2)}</p>
      <p><strong>Tax (6%):</strong> ${tax.toFixed(2)}</p>
      <p><strong>Tip ({tipPercent}%):</strong> ${tip.toFixed(2)}</p>
      <p><strong>Rewards Used:</strong> -${reward.toFixed(2)}</p>
      <h5 className="mt-3"><strong>Total:</strong> ${total.toFixed(2)}</h5>
    </div>
  );
};

export default Receipt;
