import React, { useEffect,useState } from 'react'
import Styles from "./Recipes.module.scss"
import axios from 'axios';
export default function Recipes() {
  const sendData = () => {
    window.location.href = '#us';
  }
    const [mealsItems, setMealsItems] = useState([]);
    useEffect(() => {
      getMeals()
    
      
    }, [])
    
    let getMeals= async()=>{
        let{data}= await axios.get(" https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast")
        setMealsItems(data.meals);
    }
  return (
    <>
    <div className='container'>
        <h2 className={`${Styles.title}`}>RECIPES</h2>


     
 <div className=' d-flex justify-content-center'>
 <div className={`row row-cols-1 row-cols-md-3 g-4  ms-5 ${Styles.photo} `} >
      {mealsItems.slice(0,3).map((item,index)=>(
         <div className="col  " key={index}>
         <div className={`card h-100 ${Styles.cards}`}>
           <img src={`${item.strMealThumb}`} className={`card-img-top `} alt="food"/>
           <div className="card-body">
             <h5 className={`card-title ${Styles.data}`}> {item.strMeal} </h5>
             <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit voluptatem reiciendis enim rerum quod molestias cum id accusantium, dicta in molestiae. Nesciunt soluta ad iste.</p>
           </div>
         </div>
       </div>
))}
 
  
  
</div>
 </div>
     



<div className='d-flex justify-content-center '>
<button type="button" onClick={() => sendData()} className={`btn btn-warning ${Styles.text} my-5  `}>
              Contact us
            </button>
</div>
    </div>
    </>
  )
}
