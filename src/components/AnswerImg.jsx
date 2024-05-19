import React from "react";

export const AnswerImg = ({id,PText,onChange, checked}) => {
    return(
        <li className="variant-wrapper">
        <input 
        required 
        type="radio" 
        name="variant" 
        id={id}
        onChange={onChange} 
        checked={checked}
        />
        <label htmlFor={id}>
          <img src="./img/laugh.png" alt="laugh" />
          <p>{PText}</p>
        </label>
      </li>
    );
};