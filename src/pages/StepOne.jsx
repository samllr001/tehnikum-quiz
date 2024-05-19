import React from "react";
import { AppInput } from "../components/AppInput";
import { AppButton } from "../components/AppButton";
import { AppHeader } from "../components/AppHeader";
import { LinkButton } from "../components/LinkButton";


const StepOne = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <div className="indicator">
            <div className="indicator__text">
              <span className="indicator__description">
                Скидка за прохождение опроса:
              </span>
              <span className="indicator__value">15%</span>
            </div>
            <div className="indicator__progressbar">
              <div className="indicator__unit indicator__unit-1"></div>
              <div className="indicator__unit indicator__unit-2"></div>
              <div className="indicator__unit indicator__unit-3"></div>
              <div className="indicator__unit indicator__unit-4"></div>
            </div>
          </div>
          <div className="question">
            <AppHeader
            headerText="1. Занимательный вопрос"
            headerType="h1"
            />
            <AppInput
            inputType="text"
            id="answer"
            inputPlaceholder="Ваш ответ"
            errorText="Введите в правильном формате"
            />
            <AppButton 
            isDisabled={false} 
            buttonType="button" 
            buttonText="Далее"
            /> 
            <LinkButton isDisabled={false} LinkType="Button"Linktext="Далее" LinkBtn="/step-two"/>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
