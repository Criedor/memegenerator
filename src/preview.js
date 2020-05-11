import React from 'react';
import './Preview.css';


const Preview = (props) => {

    return (
        <div className="memebackground" style={{backgroundImage: `url(${props.meme_img})`}}>
            <textarea className="text1" placeholder="Put your Meme Text here..."></textarea>
            <textarea className="text2" placeholder="Put your Meme Text here..."></textarea>
        </div>
    )
}


export default Preview;