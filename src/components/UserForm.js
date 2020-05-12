import React from 'react';

const UserForm = (props) => {
    const { inputs, setInputs } = props;

    const onChange = event=> {
        setInputs({
            ...inputs,
            [event.target.name]: event.target.value
            })
        };
        
        return(
            <form>
                <div className ="form-ground">
                    <label htmlFor="firstName">First Name:</label>
                    <input onChange={onChange} type="text" name="firstName"/>
                </div>
                <div className="form-ground">
                    <label htmlFor="lastName">Last Name:</label>
                    <input onChange={onChange} type="text" name="lastName"/>
                </div>
                <div className="form-ground">
                    <label htmlFor="email">Email:</label>
                    <input onChange={onChange} type="text" name="email"/>
                </div>
                <div className="form-ground">
                    <label htmlFor="password">Password:</label>
                    <input onChange={onChange} type="password" name="password"/>
                </div>
                <div className="form-ground">
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input onChange={onChange} type="confirmPassword" name="confirmPasword"/>
                </div>
            </form>
        )
    
}

export default UserForm;










