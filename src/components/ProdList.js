import React from 'react'
import ProdCard from './ProdCard'

function ProdList( {produits}) {
  return (
    <div>
      {
        produits.map((por,i)=> <ProdCard por={por}  key={i}/>)
      }
      
    </div>
  )
}

export default ProdList
