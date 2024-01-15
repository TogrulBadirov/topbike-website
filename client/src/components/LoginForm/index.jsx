import { useContext, useState } from "react";
import axios from "axios";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const LoginForm = ({changeMode}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [registrationStatus, setRegistrationStatus] = useState(null);
  const navigate = useNavigate();

  const {setToken} = useContext(UserContext)


  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    setRegistrationStatus(null)
    try {
      const response = await axios.post("http://localhost:5234/user/login", { email, password });
      console.log("test",response.data);
      if (response.data.success) {
        setRegistrationStatus(response.data.message)
        setToken(response.data.token)
        setTimeout(() => {
          console.log("success");
          navigate("/");
          window.location.reload(false);
        }, 1000);
      } else {
        setError(response.data.message || 'Registration failed. Please try again.');
        console.log("error");
      }
    } catch (error) {
      console.error("An error occurred during registration:");
      setError( (error.response && error.response.data.message) || 'Registration failed. Please try again.');
    }
  };

  return (
    <div className="login-container">
         <div className="login-image">
         <img src="https://topbike-store-demo.myshopify.com/cdn/shop/files/LOGO.png?v=1613575279" alt="" />
         </div>
         <hr />
         <p className="form-content">Great to have you back!</p>
        <form action=""  onSubmit={handleLogin}>
            <input type="text" placeholder="Email adress" onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
            <span className="error">{error && error}</span>
        <span className="success">{registrationStatus && registrationStatus}</span>
            <button>LOG IN</button>
        </form>
        <div className="create-account">
            <p>Don’t have an account? <span className="go-to-register" onClick={changeMode}> Register now</span></p>
        </div>
    </div>
  )
}

export default LoginForm