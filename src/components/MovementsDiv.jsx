import React from 'react'

const MovementsDiv = ({move}) => {

  return (
    <div className='print_div'><p> {move.selected}</p><p> {move.concept}</p><p> {move.money}€</p> </div>
  )
}

export default MovementsDiv