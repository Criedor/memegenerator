import React, { useState, useEffect } from 'react';
import ImageInputs from './ImageInputs'
import ImageSlider from './ImageSlider'
import './App.css';

function App() {
const [data, setData] = useState()

const [search, setSearch] = useState();

const handleInput = (input) => {
    setSearch(data.filter(item => !item.name.includes(input) ? null : item.name.includes(input)
    
    ))
    console.log(search)
}


useEffect( () => {
  // API CALL IMGFLIP
      var myHeaders = new Headers();
      myHeaders.append("Cookie", "__cfduid=d670a2bc303530def6e9a2be073c49ff11589186257; iflipsess=lp0ntvd14i9d83dboaklhlqa4i");

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
      const apiCall = async () => {
      let call = await fetch("https://api.imgflip.com/get_memes", requestOptions)
        .then(response => response.json())
        .then(result => setData(result.data.memes))
        .catch(error => console.log('error', error.message));
      }
      apiCall()
},[]);


  return (
    <>
    <div className="App">
      <ImageInputs onHandleInput={handleInput}/>
      <ImageSlider getData={data}/>
    </div>
    </>
  );
}

export default App;
