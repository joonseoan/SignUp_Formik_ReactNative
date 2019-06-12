import React, { useState } from 'react';
// import InputDetail from './InputDetail'; 
import Inputs from './Inputs';

export default () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ confirmPassword, setConfirmPassword ] = useState('');
    const [ telephone, setTelephone ] = useState('');

    const handleInputChange = (e) => {
        
        console.log(e)
        // const { value } = e.target;

        // if(name === 'email') setEmail(value);
        // if(name === 'password') setPassword(value);
        // if(name === 'confirmPassword') setConfirmPassword(value);
        // if(name === 'telephone') setTelephone(value);
    }

    console.log(email)
    console.log(password)
    console.log(confirmPassword)
    console.log(telephone)

    const values = [ { email: { email, setEmail }}, 
        { password: { password, setPassword}}, 
        { confirmPassword: { confirmPassword, setConfirmPassword }},
        { telephone: { telephone, setTelephone }} 
    ];
    
    return <Inputs setValues={ values } /> 
     
}