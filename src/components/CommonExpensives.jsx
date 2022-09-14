import React, { useContext } from 'react'
import ExpensesContext, { ExpensesProvider } from '../Context/ExpensesContext'
import './commonExpensives.css'
const CommonExpensives = () => {
    const {amount,handleConcept,handleSubmit,handleSelected, handleMoney,options,setOptions,totalAmount, setTotalAmount ,movements, setMovements,concept, setConcept,money, setMoney} = useContext(ExpensesContext)

    const blockInvalidChar = (e) => ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault();

  return (
    <div className='main_div'>
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
             {movements.map((move)=>(
                 <div className='print_div' key={move.id}><p> {move.selected}</p><p> {move.concept}</p><p> {move.money}€</p> </div>
                 ))}
             </div>
             <p className='total'>{amount}€</p>

    </div>
  )
}

export default CommonExpensives