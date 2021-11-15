

const traerPaises = async (pais = "") => {

    const key = "5b5a179fe3db21abc77ba9fc7095b0c105b13e7fc138aaa35836a18ba622b860"
    const resp = await fetch(`https://allsportsapi.com/api/football/?&met=Countries&APIkey=${key}`)
    const paises = await resp.json()
    return paises.result
}

export default traerPaises
