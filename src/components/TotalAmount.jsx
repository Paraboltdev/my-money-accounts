import React, { useContext, useState } from 'react'
import ExpensesContext from '../Context/ExpensesContext'
import MonthContext from '../Context/MonthContext'

const TotalAmount = () => {
    const {totalPlus} = useContext(MonthContext)
    const {amount}= useContext(ExpensesContext)
   
    const resta = totalPlus-amount
   
  return (
    <div>
        <p className='amount_p'>Saldo disponible: <span>{resta}</span></p>
    </div>
  )
}

export default TotalAmount