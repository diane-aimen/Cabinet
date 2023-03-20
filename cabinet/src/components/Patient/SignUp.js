import React from 'react'
import '../../styles/SignUp.css'
import Logo from '../../assets/Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faTransgenderAlt, faKey, } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

function SignUp() {


    const [gender, setGender] = useState('');
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (event) => {
        setGender(event.target.value);  //Save Value of Check in State gender
    }
    const handlePassword = (event) => {
        setPassword(event.target.value); //save password
        

    }
    const handleConfirmPass=(event)=>{
        setConfirmPassword(event.target.value); //save confirmation 
        setErrorMessage(""); // despair message after retrying 
    }

    const handleSubmit=(event)=>{ 
        event.preventDefault() //to deosn't relaod page when the else checked

        if(password!==confirmPassword)
            setErrorMessage("Passwords don't match");
        
    }



    return (
        <div className='container'>
            <div className='log'>
                <img src={Logo} alt="logo" />
            </div>
            <form onSubmit={handleSubmit}>

            <div className='form' >

                <div id='user'><span><FontAwesomeIcon icon={faUser} /> </span>
                    <input className='inpu' type="text" placeholder='Prenom' id="username" /></div>

                <div id='user'><span><FontAwesomeIcon icon={faUser} /> </span>
                    <input className='inpu' type="text" placeholder='Nom' id="username" /></div>

                <div id='user'><span><FontAwesomeIcon icon={faEnvelope} /> </span>
                    <input className='inpu' type="text" placeholder='E-mail' id="username" /></div>


                <div ><span><FontAwesomeIcon icon={faTransgenderAlt} /> </span>
                    <select className='inpu' id="gender" name="gender" value={gender} onChange={handleChange}>
                        <option value="">gender</option>
                        <option value="male">Homme</option>
                        <option value="female">Femme</option>
                    </select>








                    <div id='pass' ><span id='key'><FontAwesomeIcon icon={faKey} /> </span>
                        <input className='inpu'  type="password"
                            placeholder='Mot de pass' id="password" onChange={handlePassword} />
                    </div>

                    <div id='pass' ><span id='key'><FontAwesomeIcon icon={faKey} /> </span>
                        <input className='inpu'  type="password"
                            placeholder='Confirmer Mot de pass' id="password" onChange={handleConfirmPass}  />
                            <div id='error' style={{ color: "red" }}>{errorMessage}</div>
                            
                    </div>


                    <button id='submit' type='submit' > S'inscrie </button>
                    <div id='account'>
                        <p> Already have an account ?  <a href='AuthentificationP'> Log in </a></p>
                    </div>

                </div>
            </div>
            </form>
        </div>





    )
}
export default SignUp