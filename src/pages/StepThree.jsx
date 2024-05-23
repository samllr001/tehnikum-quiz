import React from "react";
import { ProgressBar } from "../components/ProgressBar";
import { AppHeader } from "../components/AppHeader";
import { AnswerItem } from "../components/AnswerItem";
import { useState } from "react";
import { LinkButton } from "../components/LinkButton";


const StepThree = () => {

  const variants = [
    {
      id: "variant-1",
      LabelText:"Ваш ответ 1",
      imgSrc: "./img/laugh.png",
      imgAlt: "laugh",
    },
    {
      id: "variant-2",
      LabelText:"Ваш ответ 2",
      imgSrc: "./img/hearts.png",
      imgAlt: "hearts",
    },
    {
      id: "variant-3",
      LabelText:"Ваш ответ 3",
      imgSrc: "./img/smirk.png",
      imgAlt: "smirk",
    },
    {
      id: "variant-4",
      LabelText:"Ваш ответ 4",
      imgSrc: "./img/fright.png",
      imgAlt: "fright",
    },
  ];
  
  const [checkedAnswer, setcheckedAnswer]=useState(null);

  if(checkedAnswer==null){
    localStorage.setItem("checkedEmodji","")
  }else{
    localStorage.setItem("checkedEmodji",JSON.stringify(checkedAnswer))
  }


  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
        <ProgressBar currentStep={2}/>
          <div className="question">
          <AppHeader headerText="Выберите подходящий емоджи " headerType="h2"/>
            <ul className="emoji-variants">
            {variants.map((elem) => (
              <AnswerItem 
              key={elem.id} 
              id={elem.id} 
              imgSrc={elem.imgSrc}
              imgAlt={elem.imgAlt}
              LabelText={elem.LabelText}
              onChange={()=>setcheckedAnswer(elem.LabelText)}
              checked={checkedAnswer===elem.LabelText}
              />
             ))}
            </ul>
            <LinkButton isDisabled={checkedAnswer === null}
             buttonType="button"
            buttonText="Далее" 
            LinkBtn="/step-four"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
