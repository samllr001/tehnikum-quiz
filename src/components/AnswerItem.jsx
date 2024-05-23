import React from "react";

export const AnswerItem = ({id,imgSrc, imgAlt, LabelText,onChange,checked}) => {
    return(
        <li className="variant-wrapper">
        <input 
        required 
        type="radio" 
        name="samir" 
        id={id}
        onChange={onChange}
        checked={checked}
        />
         <label htmlFor={id}> 
        {imgSrc && <img src={imgSrc} alt={imgAlt} />}
        {LabelText} 
        </label>

      </li>
      
    );
};
