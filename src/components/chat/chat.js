import React from 'react';
import '../chat/chat.css';
import { GiShoppingCart} from 'react-icons/gi';
import { BsFillChatLeftTextFill} from 'react-icons/bs';
function Chat(){
    return(
        <div className='box'>
            <div className='chat'>
                <div  style={{display:'flex'}}>
                <BsFillChatLeftTextFill className='chat-logo'/>
                <h2 >Chatroom</h2>
                </div>
                <a href='#' className='create-button'><center>Create</center></a>
                <a href='#' className='join-button'><center>Join with code</center></a>
                
            </div>
            <div className='cart'>
                <GiShoppingCart className='cart-logo'/>
                <h2>Your cart is empty</h2>
                <p>You have no items in your shopping cart.Let's go shopping now </p>
                <a href='#' className='shop-button'><center>Shop Now</center></a>
            </div>
        </div>
    );
}

export default Chat;