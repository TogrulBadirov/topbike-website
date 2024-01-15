import { useState } from "react"
import "./index.scss"
import LoginForm from "../LoginForm"
import RegisterForm from "../RegisterForm"
import { IoClose } from "react-icons/io5";

const LoginRegisterModal = ({setIsModalOpen}) => {
    const [mode, setMode] = useState("login")
    const changeMode = ()=>{
        mode === "login" ? setMode("register") : setMode("login")
    }
  return (
    <section id="LoginRegisterModal" onClick={()=>setIsModalOpen(false)}> 
        <div className="login-register-form" onClick={(e)=>e.stopPropagation()}>
        <span className="close-icon" onClick={()=>setIsModalOpen(false)}>
        <IoClose />
        </span>
            {mode === "login" ? <LoginForm changeMode={changeMode}/> : <RegisterForm changeMode={changeMode}/>}
        </div>
    </section>
  )
}

export default LoginRegisterModal