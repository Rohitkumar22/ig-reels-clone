import React, { useState, useRef } from 'react'
import VideoHeader from './VideoHeader'
import VideoFooter from './VideoFooter'
import './VideoCard.css';


function VideoCard({Channel,Profile_Pic,Url,Likes,Shares,Song}) {
const[Isvideoplaying,setIsvideoplaying]=useState(false)
const vedioRef=useRef(null)
const playVedio=()=>
{
if(Isvideoplaying)
{
//stop playing
vedioRef.current.pause();
setIsvideoplaying(false)
}
else{
    vedioRef.current.play();
    setIsvideoplaying(true)
}
}
    return (
        <div className='videoCard'>
       <VideoHeader/>
          <video className='videoCard_player' 
          ref={vedioRef}
          onClick={playVedio}
          src={Url}
           alt='IG Reels Video' loop  /> 
           <VideoFooter
           Channel={Channel}
           Profile_Pic={Profile_Pic}
           Likes={Likes}
           Shares={Shares}
           Song={Song}
           />
        
        </div>

    )
}

export default VideoCard;