import { useEffect, useState } from "react"
import useFetchAllProducts from "../../hooks/useFetchAllProducts/index"

//import StarRate from "../StarRate"
import styles from "./ContainerProdutos.module.css"
import Produto from "../Produto"



const ContainerProdutos = () => {
    const [products, setProducts] = useState([])
    
     const newProducts = useFetchAllProducts("https://fakestoreapi.com/products")
     
     

     useEffect(() => {
      
      setTimeout(() => {
        console.log(newProducts)
        setProducts(newProducts)
        console.log(products)
      },1000)
      
     }, [products])
    
  return (
    <div className={styles.containerProdutos} >
      {products.length === 0  && <div className={styles.loading} > <h2>Caregando ...</h2> </div> }
      {products.length !== 0  && 
        products.map((product) => (
              
              <Produto 
                titulo={product.title} 
                imagem={product.image} 
                preco={product.price} 
                ranking={product.rating.rate} 
                id={product.id} 
                descricao={product.description}
                key={product.id}
              />
              
      ) )}
    </div>
  )
}

export default ContainerProdutos