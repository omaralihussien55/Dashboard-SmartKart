import axios from "axios"

export const getorders = async ({limit=10,skip=0}:{limit:number,skip:number})=>{
    const res = await axios.get(` https://dummyjson.com/carts/user/33?limit=${limit}&skip=${skip}`)

    return res.data
}

export const getorderById = async (id:string | undefined)=>{
    const res = await axios.get(` https://dummyjson.com/carts/${id}`)

    return res.data
}

export const addCart = async(data:any)=>{
    const res = await axios.post(`https://dummyjson.com/carts/add`,data)
    return res.data
}