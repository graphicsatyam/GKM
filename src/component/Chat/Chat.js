import React from 'react';
import './Chat.css';
import { Link } from "react-router-dom";

const Chat = () => {
  return (
    <div>
        <div className="whatsapp-icon">
    <Link to = "https://wa.me/919811080335?text=Hello How can I help You ?" target='_blank' rel="noopener noreferrer">
    <img src="images/whatsapp.png" alt="" className=''/>
    </Link>
  </div>

    </div>
  )
}

export default Chat
