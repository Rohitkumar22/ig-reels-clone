import React from 'react';
import  './VideoFooter.css';
import{Button,Avatar} from '@material-ui/core';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from "react-ticker";
import FavoriteIcon from '@material-ui/icons/Favorite';
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import SendIcon from '@material-ui/icons/Send';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
function VideoFooter({Channel,Profile_Pic,Likes,Shares,Song}){
return (
    <div className="videoFooter">
    <div className="videoFooter_text">
    <Avatar src={Profile_Pic}/>
    <h3>
    {Channel}.<Button>Follow</Button>
    </h3>
    </div>
    <div className="videoFooter_ticker" >
    <MusicNoteIcon 
    className="videoFooter_icon"
    />
    <Ticker mode="smooth" >
    {
        ({index})=>(
           <> <h1>{Song}</h1> </>
                    )
    }

    
    </Ticker>
    </div>
    <div className="videoFooter_action" >
    <div className="videoFooter_actionleft" >
    
    <FavoriteIcon fontsize="large" />
    <ModeCommentIcon fontsize="large" />
    <SendIcon fontsize="large" />
    <MoreHorizIcon fontsize="large" />
    </div>
    <div className="videoFooter_actionright" >
    <div className="videoFooter_stats" >
    <FavoriteIcon/>
    <p>{Likes}</p>
    </div>
    <div className="videoFooter_stats" >
    <ModeCommentIcon/>
    <p>{Shares}</p>
    </div>
    
    </div>
    
    </div>
    </div>
)
}
export default VideoFooter