import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import "./App.css";
import DailyPhoto from "./DailyPhoto";
import Title from "./Title";
import ExpandButton from "./ExpandButton";
import Explanation from "./Explanation";
import Date from "./Date";

function App() {
  const [dailyPhoto, setDailyPhoto] = useState("");
  const [title, setTitle] = useState("");
  const [explanationText, setText] = useState("");
  const [textIsDisplayed, toggleTextDisplay] = useState(false);
  const [date, setDate] = useState(0);

  const StyledDiv = styled.div`
    z-index: 10;
    width: 70%;
    color: white;
    text-align: center;
    position: absolute;
    bottom: 50%;
    left: 15%;
    margin: 0 auto;
  `;

  const displayTextOnClick = event => {
    textIsDisplayed === false
      ? toggleTextDisplay(true)
      : toggleTextDisplay(false);
    const upperContainer = document.querySelector(".upper-container");
    upperContainer.classList.add("explanation-active");
  };

  const dateSetter = (event) => {
    console.log(document)
  }

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=UduqvDaP7LGRKcA1oSOeQkx1Iyow9Qo7NujzYwmc"
      )
      .then(response => {
        setDailyPhoto(response.data.hdurl);
        setTitle(response.data.title);
        setText(response.data.explanation);
      })
      .catch(error => console.log(error));
  }, []);
  /* 
  useEffect(() => {
    const nasaApi = axios.get('https://api.nasa.gov/planetary/apod?api_key=UduqvDaP7LGRKcA1oSOeQkx1Iyow9Qo7NujzYwmc');
  }, []); */

  return (
    <div className="App">
      <DailyPhoto url={dailyPhoto} className="daily-photo-container" />
      <StyledDiv className="upper-container">
        <Date value={date} action={setDate}/>
        <ExpandButton action={dateSetter} textValue="View past date" className="viewdate" link='#'></ExpandButton>
        <Title text={title} />
        <ExpandButton
          className ="expand"
          textValue="View Explanation"
          action={displayTextOnClick}
          link='#bottom'
        />
        <Explanation data={explanationText} displayStatus={textIsDisplayed} />
      </StyledDiv>
      <div id="bottom"></div>
    </div>
  );
}

export default App;
