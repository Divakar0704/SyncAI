import React, { useState } from 'react';
import "./Sidebar.css";
import "../../assets/assets"
import { assets } from '../../assets/assets';
import { useContext } from 'react';
import { Context } from '../../context/Context';

export const Sidebar = () => {

    const [extended,setExtended]=useState( false)
    const {onSent,prevPrompts,setRecentPrompt,newChat} = useContext(Context);

    const loadPrompt = async (prompt) =>{
       setRecentPrompt(prompt)
        await onSent(prompt)
    }
 return (
    <div className='sidebar'>
        <div className="top">
            <img onClick={()=>
                setExtended(prev=>!prev)
            } 
            className='menu' src={assets.menu_icon}
             alt="menuIcon" 
             />

            <div onClick={()=>newChat()} className="new-chat">
                <img  src={assets.plus_icon} alt="plus_icon" />
                {extended?<p>New Chat</p>:null}
                
            </div>
           {extended ?
            <div className="recent">
                <p className="recent-title">
                    Recent</p>
                    {prevPrompts.map((item,index)=>{
                            return (
                                <div onClick={()=>loadPrompt(item)} className="recent-entry">
                        <img src={assets.message_icon} alt="message_icon" />
                        <p> {item.slice(0,18) }...</p>
                    </div>
                            )
                    })}
                    
                
            </div> : null
        }
        </div>
        <div className="bottom">
            <div className="bottom-item recent-entry">
                <img src={assets.question_icon} alt="question_icon" />
                {extended?<p>Help</p>:null}
                
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.history_icon} alt="question_icon" />
                {extended?<p>Activity</p>:null}
                
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.setting_icon} alt="setting_icon" />
                {extended?<p>setting</p>:null}
                
            </div>
        </div>
    </div>
  );
}