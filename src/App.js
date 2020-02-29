import React, { useState } from 'react'
import './App.css'
import logo from './logo.svg'
const App = () => {
    //const[name,setName] =useState('JuanBS')
   const [contador, setContador] =useState(0)

   const sumar = () =>{
       setContador(contador+1)
   }
   const restar = () =>{
       setContador(contador-1)
   }
    return(
        <div className="App">
           <div className="App-header">
               <img src={logo}
               className="App-logo"></img>
               <div>JuanBS</div>
    <h5>{contador}</h5>
               <button onClick={sumar}>
               SUMAR
               </button>
               <button onClick={restar}>
                   RESTAR 
               </button>
           </div>
        </div>
    )
}
export default App