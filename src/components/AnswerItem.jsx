import React from "react";

export const AnswerItem = ({id,src,LabelText,onChange,checked}) => {
    return(
        <li className="variant-wrapper">
          <img src={src} alt={LabelText}/> 
        <input 
        required 
        type="radio" 
        name="samir" 
        id={id}
        onChange={onChange}
        checked={checked}
        />
        <label htmlFor={id}>{LabelText}</label>
      </li>
      
    );
};