
export const UseFetchPaises = (paises,nombre) => {

    let nombreMayuscula = nombre.toUpperCase()
    const result = paises.filter((p)=>p.country_name.toUpperCase().startsWith(nombreMayuscula))
    return result
}


