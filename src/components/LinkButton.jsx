import React from "react";
import { Link } from "react-router-dom";

export const LinkButton = ({LinkBtn, Linktext, LinkType, isDisabled}) => {
    return (
        <Link to={LinkBtn}>
             <button type={LinkType} 
             disabled={isDisabled}  
             id="next-btn">
              {Linktext}
            </button>
        </Link>
    );
};