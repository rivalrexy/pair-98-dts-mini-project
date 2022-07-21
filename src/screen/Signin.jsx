import React, { useRef } from 'react'
import { auth } from '../authentication/firebase'
import './Signin.css'
import Button from '../components/Button'
const Signin = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const signUp = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then(user => {
            console.log(user)
        }).catch(err => {
            console.log(err)
        })
    }
    const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then(user => {
            console.log(user)
        }).catch(err => {
            console.log(err)
        })
    }
    return (
        <div className="AppContainer">
            <form action="">
                <input className="Inputan" ref={emailRef} type="email" />
                <input className="Inputan" ref={passwordRef} type="password" />
                 <Button 
                color='#ffffff' 
                background='#E50913' 
                title='Login'
                width='310px'
                height='40px'
                padding= '10px'
                marginLeft='370px' 
                onClick={signIn}
                 />
            </form>
        </div>
    )
}

export default Signin
