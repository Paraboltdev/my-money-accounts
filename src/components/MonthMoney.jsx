import React, { useContext } from "react";
import MonthContext from "../Context/MonthContext";
import './monthMoney.css'

const MonthMoney = () => {
  const {
    handleConcept,
    handleSubmit,
    handleMoney,
    totalAmount,
    setTotalAmount,
    movements,
    setMovements,
    concept,
    setConcept,
    money,
    setMoney,
    totalPlus
  } = useContext(MonthContext);

  const blockInvalidChar = (e) => ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault();

  console.log(movements);
  return (
    <div className="main_div">
      <h3>Ingresos</h3>
      <div className="input_div">
        <input type="text" placeholder="concepto"  onChange={handleConcept} />

        <input type="number"  onKeyDown={blockInvalidChar} placeholder="0.00" onChange={handleMoney} />
        <button onClick={handleSubmit}>+</button>
      </div>
      <div>
        {movements.map((move) => (
          <div className="print_div" key={move.id}>
           <p> {move.concept}</p> <p> {move.money}€</p>{" "}
          </div>
        ))}
      </div>
      <p className="total">{totalPlus}€</p>
    </div>
  );
};

export default MonthMoney;
