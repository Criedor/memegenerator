import React from 'react';
import './ImageSlider.css';

/* {getData.map(item => (
    <img src={item.url} key={item.id} alt={item.name}/>
)
    )} */

const ImageSlider = ( {getData} ) => {
    console.log('This is getData in image slider: ')
    console.log({getData})
    return (
        <div className='grid-wrapper-image-slider'>
            <div className='image-slider'>
                {!getData ? '' : getData.map(item => (
                    <img className='img-from-api' src={item.url} key={item.id} alt={item.name}/>
                )
                    )}
            </div>
        </div>
    )
}

export default ImageSlider;