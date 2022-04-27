import React,{useState} from 'react';
import {useAuth} from './Auth';
import { useNavigate } from 'react-router-dom';
import './App.css';
export const Login =()=>{
    const auth=useAuth();
    const navigate=useNavigate();
let [user,setUser] =useState('');
const getValue = (event) =>{
const users= event.target.value;
console.log(users);
setUser(users);

}
const handleSubmit = (e) =>{
e.preventDefault();
console.log("you clicked submit",e.target[0].value);
auth.signin(user);
navigate('/');
}
return(
<div>
<h4>LOGIN HERE TO VISIT HOME PAGE!!</h4>
<form onSubmit={handleSubmit}>
<input type="text" name="name" placeholder='enter your name:' onChange={getValue}/>
<button class='sub' type='submit'>SUBMIT</button>

</form>
</div>
);
}       

