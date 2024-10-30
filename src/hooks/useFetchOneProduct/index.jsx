import { useEffect, useState } from "react"


const useFetchOneProduct = (id) => {
    const [data, setData] = useState(null)
        
        useEffect(() => {
            fetch('https://fakestoreapi.com/products/'+id)
            .then(res=>res.json())
            .then(data=> setData(data))
        }, [id])
        
  return data
}

export default useFetchOneProduct