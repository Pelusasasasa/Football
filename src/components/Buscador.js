import React, { useState } from 'react'
import { UseFetchPaises } from '../hooks/UseFetchPaises'

const Buscador = ({paises,setPaises}) => {
    const [inputValue,setInputValue] = useState("")
    const handleInput = (e) =>{
       setInputValue(e.target.value)
    }
    const submit = e =>{
        e.preventDefault()
        const paisesElegidos = UseFetchPaises(paises,inputValue)
        setPaises(paisesElegidos)

    }

    return (
        <form  onSubmit={submit} className="buscador">
            <input type="text" onChange={handleInput}/>
        </form>
    )
}

export default Buscador
