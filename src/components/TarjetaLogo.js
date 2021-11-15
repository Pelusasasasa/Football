import React from 'react'

const TarjetaLogo = ({pais,urlLogo}) => {
    return (
        <div>
            <img src={urlLogo} alt={pais} />
            <h3>{pais}</h3>
        </div>
    )
}

export default TarjetaLogo
