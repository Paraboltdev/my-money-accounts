import React, { useContext } from 'react'
import ExpensesContext, { ExpensesProvider } from '../Context/ExpensesContext'
import './commonExpensives.css'
import MovementsDiv from './MovementsDiv'
const CommonExpensives = () => {
    const {amount,handleConcept,handleSubmit,handleSelected, handleMoney,options,setOptions,totalExpAmount, setTotalExpAmount ,expMovements, setExpMovements,concept, setConcept,money, setMoney} = useContext(ExpensesContext)

    const blockInvalidChar = (e) => ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault();

  return (
    <div className='main_div'>
      <h3>Gastos</h3>
        <div className='form_div'>
            <select onChange={handleSelected}>
           {options.map((option, i)=>(
                <option key={i}
                 value={option.name}
                 
                 >{option.name}</option>
           ))}

            </select>

          

           <input type="text" placeholder="concepto" onChange={handleConcept} />
     
           <input type="number"  onKeyDown={blockInvalidChar} placeholder="0.00" onChange={handleMoney} />
           <button onClick={handleSubmit}>+</button>
                
     
             </div>
             <div >
             {expMovements.map((move)=>(
                <MovementsDiv key={move.id} move={move} />
                 ))}
             </div>
             <p className='total'>{amount}€</p>

    </div>
  )
}

export default CommonExpensives