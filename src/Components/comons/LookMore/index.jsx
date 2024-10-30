import { useState } from "react"
import styles from "./LookMore.module.css"


const LookMore = ({conteudo}) => {
    
    const [mostrar, setMostrar] = useState(false)

    let dadoQuebrado = conteudo.split("") 
    // if(dadoQuebrado.length <= 100){
    //     setMostrar(true)
    // }
    //console.log(dadoQuebrado)
    let parteDadoQuebrado = []

    for(let i = 0; i < 100;i++) {
        parteDadoQuebrado.push(dadoQuebrado[i])
    }
    
    const  mostrarConteudo = () => {
        setMostrar(true)
    }
  return (
    <div>
        {/* {dadoQuebrado.map( (item, index) => {
            if(index < 12 ){
                return (
                    <span>{item}</span>
                 )
            }
           }
        )  } */}
        {mostrar === false && <p className={styles.texto} > {parteDadoQuebrado} { <button className={styles.btn_verMais} onClick={() => mostrarConteudo()} >Ver mais</button>} ... </p> } 
        {mostrar  && <p className={styles.texto} > {conteudo}   </p> } 
        
        
    </div>
  )
}

export default LookMore