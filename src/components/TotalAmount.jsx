import React, { useContext, useEffect, useState } from 'react'
import ExpensesContext from '../Context/ExpensesContext'
import MonthContext from '../Context/MonthContext'

const TotalAmount = () => {
    const {totalPlus} = useContext(MonthContext)
    const {amount}= useContext(ExpensesContext)
    const [moneyTotal, setMoneyTotal]=useState(0)
    
    useEffect(()=>{
      const totalMoney = JSON.parse(localStorage.getItem("money"))
      if(totalMoney){
        setMoneyTotal(totalMoney)
      }
    },[])
    
    useEffect(()=>{
      localStorage.setItem("money",JSON.stringify(moneyTotal))
    },[moneyTotal])
    
    let suma = ( ) => {
      const resta = totalPlus-amount
      setMoneyTotal(resta)
    }
    
   
  return (
    <div>
        <p className='amount_p'onChange={suma}>Saldo disponible: <span>{moneyTotal}</span></p>
    </div>
  )
}

export default TotalAmount