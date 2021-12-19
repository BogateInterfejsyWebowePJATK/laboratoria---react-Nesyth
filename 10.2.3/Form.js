import React from 'react';
import validCredentials from '../data/data.json';
import { useState } from 'react';

function Form() {
    const [logged, setLogged] = useState(false);

    const [errors, setErrors] = useState({
        error: ''
    })

    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })

    const validate = () => {
        let errs = {};

        if (credentials["email"] === validCredentials.email && credentials["password"] === validCredentials.password) {
            return true;
        } else {
            errs["error"] = "Incorrect credentials";
        }

        setErrors(errs);
        return false;
    } 

    const handleChanges = (e) => {
        setErrors({});
        setLogged(false);
        const input = {...credentials};
        input[e.target.name] = e.target.value;
        setCredentials(input);
    }

    const _onSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            setLogged(true);
        }
    }

    return (
        <form onSubmit={_onSubmit}>
            <input placeholder="E-mail" name="email" value={credentials.email} type="email" onChange={handleChanges} required/>
            <input placeholder="Password" name="password" value={credentials.password} type="password" onChange={handleChanges} required/> 
            <input type="submit" value="Sign In"/>
            <div className="err">
                {errors.error}
            </div> 
            {logged && 
                <div className="success">
                    Signed in successfuly!
                </div>
            }
        </form>
    );
}

export default Form;