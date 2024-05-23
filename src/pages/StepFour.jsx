import React from "react";
import { ProgressBar } from "../components/ProgressBar";
import { AppHeader } from "../components/AppHeader";
import { AnswerItem } from "../components/AnswerItem";
import { useState } from "react";
import { LinkButton } from "../components/LinkButton";

const StepFour = () => {

  const variants = [
    {
      id: "variant-1",
      LabelText: "1"
    },
    {
      id: "variant-2",
      LabelText: "2"
    },
    {
      id: "variant-3",
      LabelText: "3"
    },
    {
      id: "variant-4",
      LabelText: "4"
    },
    {
      id: "variant-5",
      LabelText: "5"
    },
  ];
  
  const [checkedAnswer, setcheckedAnswer]=useState(null);

  if(checkedAnswer==null){
    localStorage.setItem("checkedLike","")
  }else{
    localStorage.setItem("checkedLike",JSON.stringify(checkedAnswer))
  }


  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          {/* <div className="indicator">
            <div className="indicator__text">
              <span className="indicator__description">
                Скидка за прохождение опроса:
              </span>
              <span className="indicator__value">15%</span>
            </div>
            <div className="indicator__progressbar">
              <div className="indicator__unit indicator__unit-1 _active"></div>
              <div className="indicator__unit indicator__unit-2 _active"></div>
              <div className="indicator__unit indicator__unit-3 _active"></div>
              <div className="indicator__unit indicator__unit-4"></div>
            </div>
          </div> */}

          <ProgressBar
          currentStep={3}
          />
          <div className="question">
            {/* <h2>4. Занимательный вопрос</h2> */}
            <AppHeader headerText="Понравились ли вам наши курсы?" headerType="h2"/>
            <ul className="level-variants">
              {/* <li className="variant-wrapper">
                <input required type="radio" name="variant" id="variant-1" />
                <label htmlFor="variant-1">1</label>
              </li>
              <li className="variant-wrapper">
                <input required type="radio" name="variant" id="variant-2" />
                <label htmlFor="variant-2">2</label>
              </li>
              <li className="variant-wrapper">
                <input required type="radio" name="variant" id="variant-3" />
                <label htmlFor="variant-3">3</label>
              </li>
              <li className="variant-wrapper">
                <input required type="radio" name="variant" id="variant-4" />
                <label htmlFor="variant-4">4</label>
              </li>
              <li className="variant-wrapper">
                <input required type="radio" name="variant" id="variant-5" />
                <label htmlFor="variant-5">5</label>
              </li> */}

             {variants.map((elem) => (
              <AnswerItem 
              key={elem.id} 
              id={elem.id} 
              LabelText={elem.LabelText}
              onChange={()=>setcheckedAnswer(elem.LabelText)}
              checked={checkedAnswer===elem.LabelText}
              />
             ))}
            </ul>
            {/* <button type="button" id="next-btn" disabled>
              Далее
            </button> */}
            <LinkButton isDisabled={checkedAnswer === null}
             buttonType="button"
            buttonText="Далее" 
            LinkBtn="/Thanks"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepFour;
