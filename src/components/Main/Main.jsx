import React,{useContext} from 'react';
import "./Main.css";
import "../../assets/assets";
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';

export const Main = () => {

   const {
		onSent,
		recentPrompt,
		showResult,
		loading,
		resultData,
		setInput,
		input,
	} =  useContext(Context);

    const handleCardClick = (promptText) => {
			setInput(promptText);
		};

 return (
   <div className="main">
    <div className="nav">
        <p>  SyncAI </p>
        <img src={assets.user_icon} alt="user" />
    </div>

    <div className="main-container">

        {!showResult ?
        <>
        <div className="greet">
            <p><span> Namastey ,Dev </span></p>
            <p>How can I help you today ? </p>
        </div>

        <div className="cards" onClick={() =>onSent("Write detailed requirements for building an engaging & fun fitness tracking app")}>
            <div className="card"
            >
                <p> Write detailed requirements for building an engaging & fun fitness tracking app</p>
                <img src={assets.compass_icon} alt="compass" />
            </div>
            
             <div className="card"  onClick={() =>onSent("Suggest Some Place To Visit In Vizag.")} >
                <p> Suggest beautiful places in vizag to visit in trip. </p>
                <img src={assets.code_icon} alt="compass" />
            </div>

             <div className="card"  onClick={() =>onSent("Briefly give summary about Urban Planning .")}>
                <p> Briefly give summary about Urban Planning . </p>
                <img src={assets.bulb_icon} alt="compass" />
            </div>

             <div className="card"  onClick={() =>onSent("Brainstrom team bonding activities for our work retreat. ")}>
                <p> Brainstrom team bonding activities for our work retreat. </p>
                <img src={assets.message_icon} alt="compass" />
            </div> 
        </div></>
        :
        <>
            <div className="result">
                <div className="result-title">
                    <img src={assets.user_icon} alt="" />
                    <p> {recentPrompt} </p>
                </div>
                <div className="result-data">
                    <img src={assets.gemini_icon} alt="" />
                    {loading?
                    <div className="loader">
                        <hr />
                        <hr />
                        <hr />
                    </div>
                    :<p dangerouslySetInnerHTML={{__html:resultData}} />
                    }
                    
                </div>
            </div>
        </>
        

        }
        
        <div className="main-bottom">
            <div className="search-box">
                <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" name="input" 
                placeholder="enter prompt here "
                 />

                <img src={assets.gallery_icon} alt="gallery_icon" />
                <img src={assets.mic_icon} alt="mic_icon" />
                <img onClick={()=>onSent()} src={assets.send_icon} alt="send_icon" />
            </div>
                <p className="bottom-info">
                    Gemini may display inaccurate info, including about people, so
							double-check its responses. Your privacy & Gemini Apps
                </p>
        </div>
    </div>
   </div>
  );
}