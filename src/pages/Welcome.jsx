import React, { useEffect, useState } from "react";
import { AppHeader } from "../components/AppHeader";
import { AppButton } from "../components/AppButton";
import { AppInput } from "../components/AppInput";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
const regex = /^[A-Za-zА-Яа-я]+$/;
const regexNum = /^\+?\d+$/; 

const [name,setName]=useState("");
const [phone,setPhone]=useState("");

const [nameError,setNameError]=useState(false)
const [phoneError,setPhoneError]=useState(false)
const navigate = useNavigate();

const [buttonError, setButtonError]=useState(true)

const handleClick = () =>{
  if(!regex.test(name)) {
    setNameError(true) 
   }else if(!regexNum.test(phone))
  {
    setPhoneError(true)
  }
   else{
    setNameError(false);
    setPhoneError(false);
    navigate("/step-one");
   }
}

useEffect(() =>{
  if(!name || !phone){
    setButtonError(true)
  }else{
    setButtonError(false)
  }
},[name,phone])

  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <AppHeader
          headerText="Добро пожаловать в квиз от лучшего учебного центра"
          headerType="h1"
          />
          <form className="welcome__form">
            <AppInput 
            // hasError={nameError}
            inputChange={setName}
            inputValue={name}
            inputLabel="Ваше имя" 
            inputPlaceholder="Ваш ответ"
            inputType="text"
            id= "username"
            errorText="Введите в правильном формате Имя"
            />
            <AppInput 
            // hasError={phoneError}
            inputLabel="Ваше номер" 
            inputValue={phone}
            inputChange={setPhone}
            inputPlaceholder="+998-90"
            inputType="tel"
            id= "phone"
            errorText="Введите номер в правильном формате"
            />
            <AppButton 
            isDisabled={buttonError} 
            buttonType="button" 
            buttonText="Далее"
            buttonClick= {handleClick}
            /> 
        
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
