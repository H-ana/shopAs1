import React from 'react';
import '../leecooper/leecooper.css';
import {data} from '../leecooper/data.js';
import Star from '../images/stars.png';
import {FaRegHeart} from 'react-icons/fa';
const LeeCooper = () => {
    const[cards,setCards]=React.useState(data);
   return(
    <>
    <div className='container'>
        <h1>MEN’S CLOTHING /LEE COOPER</h1>
        {
           cards.map((card)=>{
            const {image,name,decr}=card;
            return(
                <div className='card'>
                   <img src={image}/>
                   <a href='#'><div className='heart'><FaRegHeart/></div></a>
                   <div className='details'>
                    <h2>{brand}</h2>
                    <h3>{name}</h3>
                    <img src={Star}></img>
                    <h5>{rate}</h5>
                    <a href="#">
                    <Button>Add to Cart</Button>
                    </a>
                    </div>
                 </div>   
            );
           }) 
        }
    </div>
    </>
   )
   }
export default LeeCooper;