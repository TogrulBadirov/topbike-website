import { useContext, useState } from "react";
import axios from "axios";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const RegisterForm = ({ changeMode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [registrationStatus, setRegistrationStatus] = useState(null);
  const navigate = useNavigate();

  const {setToken} = useContext(UserContext)


  const handleRegister = async (e) => {
    e.preventDefault();
    setError(null);
    setRegistrationStatus(null)
    try {
      const response = await axios.post("http://localhost:5234/user", { email, password });
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
    <div className="register-container">
      <p className="form-content">REGISTER</p>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Email adress"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <span className="error">{error && error}</span>
        <span className="success">{registrationStatus && registrationStatus}</span>
        <button>REGISTER</button>
      </form>
      <div className="create-account">
        <p>
          <span className="go-to-register" onClick={changeMode}>
            Back to login
          </span>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
