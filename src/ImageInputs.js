import React from 'react'
import './ImageInput.css';



const ImageInputs = ({ onHandleInput }) => {

    const enterKeyInput = input => {
        if (input.keyCode === 13) {
            onHandleInput();
        }
    }

    return (
        <div className='flex-wrap'>
        <input className='search' 
        type="text" 
        placeholder='Search meme'
        onSubmit={(input) => enterKeyInput(input.value)}
        />
        <button className='button upload'>Upload</button>
        </div>
    )
}

export default ImageInputs;