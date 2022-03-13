import React, {useState} from 'react'
import Login from '../../components/login/Login'
import Password_Reset from '../../components/password_reset/Password_Reset';
import './entry.css';

const Entry_page = () =>{

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [formLoad, setformLoad] = useState('login')


const handleOnChange = e =>{
    const {name,value} = e.target

    switch(name){
        case 'email':
            setEmail(value)
            break

            case 'password':
            setPassword(value)
            break

            default:
                break
    }

};

const handleOnSubmit = e =>{
    e.preventDefault()

    if(!email || !password)
    {
        return alert("Fill up all the form")
    }

    //Will call API later
    console.log(email, password)
};

const handleOnResetSubmit = e =>{
    e.preventDefault()

    console.log("Will reset password");
}


const formSwitcher = formtype =>{
    setformLoad(formtype);

    console.log(formtype);

}



    return (
        <div className='entry-page bg-info'>

     <div className='form-box'>

          {formLoad === 'login' &&  <Login 
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            formSwitcher = {formSwitcher}
            email={email}
            pass={password}
            />}
           
           {formLoad === 'reset' && 
            <Password_Reset
            handleOnChange={handleOnChange}
            handleOnResetSubmit={handleOnResetSubmit}
            formSwitcher = {formSwitcher}
            email={email}
            />    }


     </div>
            
           
            
        </div>
    )
}

export default Entry_page;