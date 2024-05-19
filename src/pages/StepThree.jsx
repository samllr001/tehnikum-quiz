import React from "react";
import { ProgressBar } from "../components/ProgressBar";
import { AppHeader } from "../components/AppHeader";
import { AnswerItem } from "../components/AnswerItem";
import { useState } from "react";



const StepThree = () => {

  const variants = [
    {
      id: "variant-1",
      LabelText:"Ваш ответ 1",
      imageUrl: "./img/laugh.png"
    },
    {
      id: "variant-2",
      LabelText:"Ваш ответ 2",
      imageUrl: "./img/hearts.png"
    },
    {
      id: "variant-3",
      LabelText:"Ваш ответ 3",
      imageUrl: "./img/smirk.png"
    },
    {
      id: "variant-4",
      LabelText:"Ваш ответ 4",
      imageUrl: "./img/fright.png"
    },
  ]
  
  const [checkedAnswer, setcheckedAnswer]=useState(null);
  console.log(checkedAnswer);  


  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
        <ProgressBar/>
          <div className="question">
          <AppHeader headerText="Выберите подходящий емоджи " headerType="h2"/>
            <ul className="emoji-variants">
            {variants.map((elem) =>
              <AnswerItem 
              key={elem.id} 
              id={elem.id} 
              src={elem.imageUrl}
              LabelText={elem.LabelText}
              onChange={()=>setcheckedAnswer(elem.id)}
              checked={checkedAnswer===elem.id}
              />
              )}
            </ul>
            <button type="button" disabled id="next-btn">
              Далее
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
