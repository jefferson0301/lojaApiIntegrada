import { Link } from "react-router-dom"
import useFetchOneProduct from "../../hooks/useFetchOneProduct"
import StarRate2 from "../comons/StarRate2"
import styles from "./Produto.module.css"
import LookMore from "../comons/LookMore"

const Produto = ({titulo,imagem,preco,ranking,id, descricao}) => {

    const dado = useFetchOneProduct(id)    

     const dadosProduto = (id) => {
        
         console.log(dado)
     }

  return (
    <div className={styles.containerProduto} key={id} >
              <h2 className={styles.titulo} >{titulo}</h2>
              <img className={styles.imagem} width="250px" height="250px" src={imagem} alt={titulo} />
              <h3 className={styles.preco} > R$ {preco}</h3>
              {/* <p className={styles.descricao} >{descricao}</p> */}
              <LookMore conteudo={descricao} />
              <div className={styles.flex} > 

                {<StarRate2 stars={ ranking } />} {ranking} 
              </div>
              
              <button className={styles.btn_comprar} >Comprar</button> 
    </div>
  )
}

export default Produto