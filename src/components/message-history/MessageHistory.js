import React from 'react';
import './MessageHistory.css'

const MessageHistory = ({msg}) =>{

    if(!msg) return null
    return msg.map((row, index)=>
        <div key={index} className='message-history mt-3'>

         <div className='send font-weight-bold text-secondary'>
              
              <div className='sender'>
                   {row.messageBy}
              </div>

              <div className='date'>
                 {row.date}
              </div>

         </div>

            <div className='message'>
               {row.message}
            </div>

        </div>
    )
};

export default MessageHistory;