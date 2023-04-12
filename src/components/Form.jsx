import React, { useState } from 'react';

const HookForm = () => {
    const [firstname, setFirstName] = useState("");
    // const [fNameError, setFNameError] = useState("");
    const [lastname, setLastName] = useState("");
    // const [lNameError, setLNameError] = useState("");
    const [email, setEmail] = useState("");
    // const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    // const [passwordError, setPasswordError] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    // const [confPasswordError, setConfPasswordError] = useState("");
// 
    // const createUser = (e) => {
    //     e.preventDefault();
    //     const newUser = {
    //         firstname, lastname, email, password, confirmpassword
    //     };
    //     console.log(newUser);
    //     setFirstName('');
    //     setLastName('');
    //     setEmail('');
    //     setPassword('');
    //     setConfirmPassword('');

    // // const handleFirstName = (e) => {
    // //     setFirstName(e.target.value);
    // //     if(e.target.value.length < 1 ){ setFNameError("First Name is required");}
    // //     else { setFNameError('');}
    // // }
    // };


    return(
        <>
            <form onSubmit={ () => {} } className="container">
                <div className="row g-3 m-2">
                    <div className="col-4">
                        <label className="form-label">First Name:</label>
                        </div>
                    <div className="col-5">
                        <input type="text" className="form-control" value={firstname} onChange={ (e) => setFirstName(e.target.value) } />
                        {firstname.length < 2 && firstname.length > 0 ? 
                        (<p className='text-danger fw-bold'>First Name must be at least 2 characters</p>) : ''}
                    </div>
                </div>
                <div className="row g-3 m-2">
                    <div className="col-4">
                        <label className="form-label">Last Name:</label>
                    </div>
                    <div className="col-5">
                        <input type="text" className="form-control" value={lastname} onChange={(e) => setLastName(e.target.value)} />
                        {
                            lastname.length < 2 && lastname.length > 0 ?
                            (<p className='text-danger fw-bold'>Last Name must be at least 2 characters</p>) : ''
                        }
                    </div>
                </div>
                <div className="row g-3 m-2">
                    <div className="col-4">
                        <label className="form-label">Email:</label>
                    </div>
                    <div className="col-5">
                        <input type="text" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    {
                            email.length < 2 && email.length > 0 ?
                            (<p className='text-danger fw-bold'>Email must be at least 2 characters</p>) : ''
                        }
                </div>
                <div className="row g-3 m-2">
                    <div className="col-4">
                        <label className="form-label">Password:</label>
                    </div>
                    <div className="col-5">
                        <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    {
                            password.length < 7 && password.length > 0 ?
                            (<p className='text-danger fw-bold'>Password must be at least 7 characters</p>) : ''
                        }
                </div>
                <div className="row g-3 m-2">
                    <div className="col-4">
                        <label className="form-label">Confirm Password:</label>
                    </div>
                    <div className="col-5">
                        <input type="password" className="form-control" value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    </div>
                    {
                            confirmpassword !== password ?
                            (<p className='text-danger fw-bold'>Passwords must match!</p>) : ''
                        }
                </div>
            </form>
            <p>
                First Name:{firstname}
            </p>
            <p>
                Last Name:{lastname}
            </p>
            <p>
                Email:{email}
            </p>
            <p>
                Password:{password}
            </p>
            <p>
                Confirm Password:{confirmpassword}
            </p>
        </>
    );
};
export default HookForm