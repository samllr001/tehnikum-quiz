import React, { useState } from "react";
import { ProgressBar } from "../components/ProgressBar";
import { AppHeader } from "../components/AppHeader";
import { AnswerItem } from "../components/AnswerItem";
import {LinkButton } from "../components/LinkButton";

const StepTwo = () => {

const variants = [
  {
    id: "variant-1",
    LabelText:"Frontend"
  },
  {
    id: "variant-2",
    LabelText:"Backend"
  },
  {
    id: "variant-3",
    LabelText:"UX/UI"
  },
  {
    id: "variant-4",
    LabelText:"Uzum"
  },
]  

const [checkedAnswer, setcheckedAnswer]=useState(null);

if(checkedAnswer==null){
  localStorage.setItem("checkedCourse","")
}else{
  localStorage.setItem("checkedCourse",JSON.stringify(checkedAnswer))
}

  return (
    <div className="container">
      <div className="wrapper">
        <div className="variants-quiz">
         <ProgressBar currentStep={1}/>
          <div className="question">
           <AppHeader headerText="На каком курсе вы обучаетесь ?" headerType="h2"/>
            <ul className="variants">
              {variants.map((elem) =>
              <AnswerItem 
              key={elem.id} 
              id={elem.id} 
              LabelText={elem.LabelText}
              onChange={()=>setcheckedAnswer(elem.LabelText)}
              checked={checkedAnswer===elem.LabelText}
              />
              )}
            </ul>
            <LinkButton isDisabled={checkedAnswer === null}
             LinkTypeType="button" 
            LinktextText="Далее" 
            LinkBtn="/step-three"/>
            {/* <button type="button" disabled id="next-btn">
              Далее
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
