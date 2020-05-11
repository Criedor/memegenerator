import React from 'react';
import './ImageOutput.css';


const ImageOutput = (props) => {
    const reload = ()=> {
        window.location.reload()
    }


    return (
        <div className="ImageOutput">
        <button className="button"> Save MEME</button>
        <button className="button" onClick={reload}> Reset</button>

        </div>
    )
}


export default ImageOutput;