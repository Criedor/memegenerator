import React from 'react';
import './ImageSlider.css';


const ImageSlider = ( {getData, getSearch, onHandleSelectedMeme} ) => {
    console.log('This is getData in image slider: ')
    console.log({getData})
    if (!getSearch){
        return (
        <div className='grid-wrapper-image-slider'>
            <div className='image-slider'>
                {!getData ? '' : getData.map(item => (
                    <img className='img-from-api' src={item.url} key={item.id} alt={item.name} onClick={(event) => onHandleSelectedMeme(event)}/>
                )
                    )}
            </div>
        </div>
        )}
    else {
        return (
        <div className='grid-wrapper-image-slider'>
            <div className='image-slider'>
                {!getSearch ? '' : getSearch.map(item => (
                    <img className='img-from-api' src={item.url} key={item.id} alt={item.name} onClick={(event) => onHandleSelectedMeme(event)}/>
                )
                    )}
            </div>
        </div>
        )   
    }
}


export default ImageSlider;