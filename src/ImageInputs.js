import React from 'react'
import './ImageInput.css';



const ImageInputs = ({ onHandleInput }) => {

    return (
        <div className='flex-wrap'>
        <form onSubmit={ (event) => onHandleInput(event)}>
        <input className='search' 
        type="text" 
        placeholder='Search meme'
        />
        </form>
        <button className='button upload'>Upload</button>
        </div>
    )
}

export default ImageInputs;