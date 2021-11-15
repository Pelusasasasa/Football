import React, {useEffect, useState } from 'react'
import Buscador from './components/Buscador';
import TarjetaLogo from './components/TarjetaLogo';
import traerPaises from './helpers/traerPaises';


const FutbolApp = () => {
    const [paises, setPaises] = useState([])
    useEffect(()=>{
        traerPaises().then(
            p=>{setPaises(p)})
    },[])
    return (
        <>
            <Buscador paises={paises} setPaises={setPaises}/>
            <div className="seccionPaises">
                {
                    paises.map(({country_key,country_name,country_logo})=>{
                    return(
                        <TarjetaLogo key={country_key} urlLogo={country_logo} pais={country_name}/>
                    )  
                    })
                }
            </div>
        </>
    )
}

export default FutbolApp
