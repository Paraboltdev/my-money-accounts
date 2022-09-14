import React from "react";
import { useNavigate } from "react-router-dom";
import './header.css'


const Header = () => {

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
        <div onClick={handleBills}>Ingresos</div>
        <div onClick={handleExpenses}>Gastos</div>
      </div>
    </div>
  );
};

export default Header;
