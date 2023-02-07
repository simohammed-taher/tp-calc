import React, { useState } from 'react'

function Somme() {

    const [nbr1,setNbr1]=useState(0)
    const [nbr2,setNbr2]=useState(0)
    const [moye,setMoye]=useState(0)


    function calculer (e) {
        e.preventDefault();
let moy=(parseFloat(nbr1)+parseFloat(nbr2));
setMoye((moy));
// =>moy.toFixed(2))
    }
  return (
    <form>
    <h1>Calculatrice</h1>
    <input type="text" name='nbr1' value={nbr1} onChange={(e) =>{setNbr1 (e.target.value)}}></input>+
    <input type="text" name='nbr2'value={nbr2}   onChange={(e) =>{setNbr2 (e.target.value)}}></input>=
    <button type='submit' onClick={calculer}>Calculer</button><br />
    <label>Résultat</label> 
    <input type="text" name='moye' value={moye} onChange={(e) =>{setMoye (e.target.value)}}  ></input>
    </form>
  )
}

export default Somme