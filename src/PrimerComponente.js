import React from 'react'

export const PrimerComponente = () => {

let nombre = "Marcos";
let apellido = "Espinoza";
let usuario = {

  nombre: "maria",
  apellido: "Lopez",
  estatura: 160
} 
return(
  <div>
    <h1>Primer componente</h1>
    <ul>
    <li>  Mi nombre es: <strong>{nombre}</strong></li>
    <li>  Mi apellido  es: <strong>{apellido}</strong> </li>
    </ul>
    <ul>
<li>  Mi nombre es: <strong>{usuario.nombre}</strong></li>
<li>  Mi apellido es: <strong>{usuario.apellido}</strong></li>
<li>  Mi estatura es: <strong>{usuario.estatura}</strong></li>
   </ul>

   </div>
  )
}
