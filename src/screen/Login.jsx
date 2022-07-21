import React,{useState} from "react";
import Button from '../components/Button'
import './login.css'
const Login = ()=>{

    const[input,setInput] = useState("");

    const getInput = (event )=>{
    const dataInputan = event.target.value;
    setInput(dataInputan);
    
    }

    const localSubmitHandler = (event) => {
    event.preventDefault();
    alert(getInput) 
    // setelah selesai, kosongkan input
    setInput("");
  };


    return(
        <>
        <body>
        <div className="AppContainer">
        <form action="" onSubmit={localSubmitHandler} className="Inputan">
        <input value={input} type='text' onChange={getInput}></input>
        <p>{input}</p>
        <Button 
            color='#ffffff' 
            background='#E50913' 
            title='Login'
            width='310px'
            height='40px'
            padding= '10px' 
            type='submit'
                 />
        </form>
        </div>
        </body>
       
       
            
        </>
   


    )
}
export default Login;