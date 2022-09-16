import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ExpensesContext from '../Context/ExpensesContext';
import MovementsDiv from './MovementsDiv';

const FilterList = () => {
  const {setExpMovements, expMovements}= useContext(ExpensesContext)
    const options = [
        {
          name: "Electricidad"},
          {name: "Agua"},
          {  name: "Gas"},
          { name: "Ocio"},
          { name: "Alimentación"},
          {name: "Varios"},
          
      ];

 
      const [filter, setFilter]= useState(options)
      const [showFilter, setShowFilter]= useState([])
      
      const navigate = useNavigate()

      const handleFilter =(e)=>{
        navigate('/filter')
        setShowFilter(expMovements.filter(move => move.selected === e.target.textContent))
       
      }
  return (
    <>
    <div>

       {filter.map((option, index)=>(
            <div className='filter-div' onClick={handleFilter} key={index}>{option.name}</div>
       ))}


    </div>

    <div>
      {showFilter.map((el)=>(
        <MovementsDiv key={el.id} move={el}/>
      ) )}
    </div>

    </>
  )
}

export default FilterList