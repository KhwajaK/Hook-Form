import React, { useState } from 'react';

const HookForm = () => {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");

    return(
        <>
            <form>
                <div>
                    <label>First Name:</label>
                    <input type="text" value={firstname} onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" value={lastname} onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input type="password" value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} />
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