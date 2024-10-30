import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import styles from "./StarRate2.module.css"

const StarRate2 = ({stars}) => {
    
    let starsInt = Math.trunc(stars)
    const maxStars = starsInt 
    let delta = stars - starsInt
    const tamanho = "18px"
  return (
    <div className={styles.flexContainer} >
        {[...Array(5)].map((item,index) => {
            if(index < starsInt){
                return(
                    < >
                    <FaStar key={index} color="yellow"  size={tamanho} />
                    </>
                    )
            }
            else{
                if(maxStars === index){
                    if(delta<=0.5){
                        return(
                            < >
                            <FaStar key={index} color="gray"  size={tamanho} />
                            </>
                            )
                    }
                    else{
                        return(
                            < >
                            <FaStarHalfAlt key={index} color="yellow"  size={tamanho} />
                            </>
                            )
                    }
                }
                else{
                    return(
                        < >
                        <FaStar color="gray"  size={tamanho} />
                        </>
                        )
                }
            }
            
        })}
    </div>
  )
}

export default StarRate2