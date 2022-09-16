import React, { useContext, useState } from 'react'
import ExpensesContext from '../Context/ExpensesContext'
import MonthContext from '../Context/MonthContext'
import CommonExpensives from './CommonExpensives'
import FilterList from './FilterList'
import Header from './Header'
import MonthMoney from './MonthMoney'

const Main = () => {
 

  return (
    <>

    <div style={{background:'#F1EDEC'}}>
       <CommonExpensives/>
       
    </div>
    
    </>
  )
}

export default Main