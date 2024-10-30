import { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRate = ({value}) => {
    const [rating, setRating] = useState(null)
    const [rateCollor, setRateCollor] = useState(null)
  return (
    <>
        {[...Array(5)].map( (star, index)  => {
            const currentRate = index + 1
            return (
                <>
                    
                    <label>
                        <input  
                            type="radio" 
                            name="rate" 
                            value={currentRate} 
                            onClick={() => setRating(currentRate)}
                            
                        />
                        <FaStar color={currentRate <= (rateCollor || rating) ? "yellow" : "grey" } size={"50px"} />
                    </label>
                    
                </>
                
            )
        })}
    </>
  )
}

export default StarRate