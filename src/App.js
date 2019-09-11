import React, {useState, useEffect} from "react";
import axios from 'axios';
import "./App.css";
import DailyPhoto from './DailyPhoto';
import Title from './Title';
import ExpandButton from './ExpandButton';
import Explanation from './Explanation';

function App() {

const [dailyPhoto, setDailyPhoto] = useState('');
const [title, setTitle] = useState('');
const [explanationText, setText] = useState('');
const [textIsDisplayed, toggleTextDisplay] = useState(false);

const displayTextOnClick = () => {
  textIsDisplayed === false ? toggleTextDisplay(true) : toggleTextDisplay(false);
  console.log(textIsDisplayed);
};

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=UduqvDaP7LGRKcA1oSOeQkx1Iyow9Qo7NujzYwmc')
    .then(response => {
      console.log(response.data)
      setDailyPhoto(response.data.hdurl)
      setTitle(response.data.title)
      setText(response.data.explanation)
    })
    .catch(error => console.log(error))
  }, []);
/* 
  useEffect(() => {
    const nasaApi = axios.get('https://api.nasa.gov/planetary/apod?api_key=UduqvDaP7LGRKcA1oSOeQkx1Iyow9Qo7NujzYwmc');
  }, []); */

  return (
    <div className="App">

      <DailyPhoto url={dailyPhoto} className="daily-photo-container"/>
      <div className ="upper-container">
        <Title text={title} className="info-text-container" />
        <ExpandButton textStatus={textIsDisplayed} action={displayTextOnClick}/>
        <Explanation data={explanationText} displayStatus={textIsDisplayed}/>
      </div>
    </div>
  );
}

export default App;
