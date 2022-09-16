import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ExpensesContext from "../Context/ExpensesContext";
import MonthContext from "../Context/MonthContext";
import './header.css'


const Header = () => {
  const {setMovements} = useContext(MonthContext)
  const {setExpMovements}= useContext(ExpensesContext)
  const handleReset= ()=>{
    setMovements([])
    setExpMovements([])
  }

  const navigate = useNavigate()
  const handleBills= () =>{
    navigate('/monthMoney')
  }

  const handleExpenses= () =>{
    navigate('/commonExpensives')
  }
  return (
    <div className="header_main_div">
      <h1>Mis Cuentas</h1>
      <div className="select_div">
        <button onClick={handleBills}>Ingresos</button>
        <button onClick={handleExpenses}>Gastos</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Header;
