import React, { useEffect, useState } from "react";
import { AppInput } from "../components/AppInput";
// import { AppButton } from "../components/AppButton";
import { AppHeader } from "../components/AppHeader";
import { LinkButton } from "../components/LinkButton";
import {ProgressBar} from "../components/ProgressBar";
import { useNavigate } from "react-router-dom";

const StepOne = () => {
  const [desc,setDesc]=useState("");
  const [descError, setDescError]=useState(false);
  const [buttonError, setButtonError]=useState(true);
  const navigate = useNavigate();

 const regex = /^[A-Za-zА-Яа-я]+$/;

 const handleClick = () => {
  if (!regex.test(desc)) {
    setDescError(true);
  } else {
    setDescError(false);
    navigate("/step-two");
    localStorage.setItem("userOrigin", JSON.stringify(desc))
  }
};

  useEffect(() => {
    if (!desc) {
      setButtonError(true);
    } else {
      setButtonError(false);
    }
  }, [desc]);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
    <ProgressBar currentStep={0}/>
          <div className="question">
            <AppHeader
            headerText="Откуда вы про нас узнали?"
            headerType="h1"
            />
            <AppInput 
            hasError={descError}
            inputChange={setDesc}
            inputValue={desc}
            // inputLabel="Ваше имя" 
            inputPlaceholder="Ваш ответ"
            inputType="text"
            id= "username"
            onChange={(e) => setDesc(e.target.value)}
            // errorText="Введите имя в правильном формате"
            // hasError={true}
            />
            {/* <AppButton 
           isDisabled={false} 
           buttonType="button" 
           buttonText="Далее"
           buttonClick={handleClick}
            />  */}

            <LinkButton isDisabled={buttonError} LinkType="button"  onClick={handleClick} Linktext="Далее" LinkBtn="/step-two"/>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
