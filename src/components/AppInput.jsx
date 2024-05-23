import React from 'react';

export const AppInput = ({
    inputLabel, 
    inputPlaceholder, 
    isRequired, 
    inputType, 
    id, 
    errorText,
    inputValue,
    inputChange,
    hasError,
    onChange
}) => {
    return (
        <label className={`input-wrapper ${hasError && "_error"} `} htmlFor={id}>
              {inputLabel}
              <input
                required= {isRequired}
                type={inputType}
                name={id}
                id={id}
                placeholder={inputPlaceholder}
                value={inputValue}
                // onChange={(e)=>inputChange(e.target.value)}
                onChange={onChange}
              />
              {hasError && <span id="error-message">
                {errorText}
              </span>}
            </label>
    )
}
