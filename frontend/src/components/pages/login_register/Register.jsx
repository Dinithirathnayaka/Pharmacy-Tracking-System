import React, { useState } from "react";


export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [confirmpass, setConfirmpass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
    <div className="form-container">
        <img src="register.png" alt="user icon"/>
        <div id="create-account">CREATE AN ACCOUNT</div>
        <form className="register-form" onSubmit={handleSubmit}>
            
            <input value={email} onCharge={(e) => setEmail(e.target.value)} type="email" placeholder="Email address" id="email" name="email" /> 
            
            <input value={pass} onCharge={(e) => setPass(e.target.value)} type="password" placeholder="Password" id="password" name="password" />     
            
            <input value={confirmpass} onCharge={(e) => setConfirmpass(e.target.value)} type="password" placeholder="Confirm password" id="cpassword" name="cpassword" />
            
            <button type="submit">SUBMIT</button> 

        </form>
        
        <button className="link-button" onClick={() => props.onFormSwitch('pharmacistregister')}>Register as a pharmacist</button>
        
    </div>
    )
}