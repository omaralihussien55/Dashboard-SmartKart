
import axios from "axios"

type GetByCategoryOptions = {
  category: string;
  limit?: number;
  skip?: number;
};


export const getallProduct = async ({
  category,
  limit = 10,
  skip = 0,
}: GetByCategoryOptions) => {
  const baseUrl = "https://dummyjson.com/products";
  const url =
    category === "all"
      ? `${baseUrl}?limit=${limit}&skip=${skip}`
      : `${baseUrl}/category/${encodeURIComponent(category)}?limit=${limit}&skip=${skip}`;

  const res = await axios.get(url);
  return res.data; 
};

export const getproductbyId = async (id:string)=>{

    const res = await axios.get(`https://dummyjson.com/products/${id}`)

    return res.data
}


export const getProductByCategory = async (category:string)=>{
    const res = await axios.get(`https://dummyjson.com/products/category/${category}`)
    return res.data
}

