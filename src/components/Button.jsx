import React,{useState} from "react";

const Button = (props)=>{
    const {color,background,title, padding, width, height,type,marginLeft} = props;
    return(
    <button
        type={type}
        style={
        {
            color:color,
            backgroundColor:background, 
            padding:padding, 
            width:width,
            height:height,
            marginLeft:marginLeft
        }}
        >{title}</button>
               
    )
};

export default Button;