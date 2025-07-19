import axios from "axios"

export const getcategoryInfint = async ()=>{
    const res = await axios.get(`https://dummyjson.com/products/categories`)
    return res.data
}

