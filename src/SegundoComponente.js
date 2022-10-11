import React from 'react'

export const PrimerComponente = () => {

const libros = ["El principito, Caperusita roja, los tres cochinitos"];

return(
  <div>    
      <h1>Segundo Componente</h1>
      <h2>Lista de libros</h2>

      {libros.length>=1? (
        <ul>
          {libros.map((libro, indice)=>{
          return <li key ={indice}>{libro}</li>
        })}
        </ul>
      ):
      (<p>No Hay libros </p>)
      }
  </div>
  )
}