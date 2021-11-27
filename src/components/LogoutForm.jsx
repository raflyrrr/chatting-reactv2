import React, { useState } from 'react'
import {CgLogOut} from 'react-icons/cg'

const LogoutForm = () => {
    const [username] = useState('')
    const [password] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        localStorage.setItem("username",username);
        localStorage.setItem("password",password);
        window.location.reload();
       
    }
    console.log(handleSubmit)
    return (
        <div>
            <button onClick={handleSubmit} style={{marginLeft:"20px",marginTop:"20px",color:"#045afa",cursor:"pointer",border:"none"}}><CgLogOut/></button>
        </div>
    )
}

export default LogoutForm
