import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import PizzaForm from './components/PizzaForm';
import PizzaList from './components/PizzaList';
import Receipt from './components/Receipt';

function App() {
  const [pizzas, setPizzas] = useState([]);
  const [tipPercent, setTipPercent] = useState(20);
  const [useRewards, setUseRewards] = useState(false);

  const addPizza = (pizza) => {
    setPizzas([...pizzas, pizza]);
  };

  const removePizza = (index) => {
    const updated = [...pizzas];
    updated.splice(index, 1);
    setPizzas(updated);
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4 fancy-title">🍕 Pizzeria</h1>
      <PizzaForm addPizza={addPizza} />
      <PizzaList pizzas={pizzas} removePizza={removePizza} />

      {pizzas.length > 0 && (
        <div className="card p-4 shadow-sm mt-4">
          <div className="mb-3">
            <label className="form-label"><strong>Tip %</strong></label>
            <input
              type="number"
              className="form-control"
              value={tipPercent}
              min="0"
              max="100"
              onChange={(e) => setTipPercent(Number(e.target.value))}
            />
          </div>

          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              id="rewardsCheck"
              checked={useRewards}
              onChange={() => setUseRewards(!useRewards)}
            />
            <label className="form-check-label" htmlFor="rewardsCheck">
              Use rewards points ($20 max)
            </label>
          </div>

          <Receipt pizzas={pizzas} tipPercent={tipPercent} useRewards={useRewards} />
        </div>
      )}
    </div>
  );
}

export default App;
