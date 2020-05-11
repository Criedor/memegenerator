import React, { useState, useEffect } from 'react';
import './App.css';
import Preview from "./preview"

function App() {
const [data, setData] = useState()
const [selectedMeme, setSelectedMeme] = useState("https://i.imgflip.com/1bij.jpg")





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
      <Preview meme_img={selectedMeme}   />
    </div>
    </>
  );
}

export default App;
