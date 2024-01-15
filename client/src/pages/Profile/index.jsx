import { useContext, useEffect, useState } from "react"
import "./index.scss"
import { UserContext } from "../../context/UserContext"
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Profile = () => {
    const {user,setToken} = useContext(UserContext)
    const navigate = useNavigate();
    const [state, setState] = useState({
        countryName: "",
        countryCode: "",
        city: "",
        timezone: ""
      });
    const getGeoInfo = () => {
        axios
          .get("https://ipapi.co/json/")
          .then((response) => {
            let data = response.data;
            setState({
              ...state,
              countryName: data.country_name,
              city: data.city,
              timezone: data.timezone
            });
          })
          .catch((error) => {
            console.log(error);
          });
      };
      useEffect(() => {
        getGeoInfo();
      }, []);
  return (
    <section id='profile'>
        <h2>Profile</h2>
        <p>Email: {user.email}</p>

        <button onClick={()=>{
            localStorage.removeItem("token")
            setToken(null)
            navigate("/");
        }

            }>Sign out</button>
        

        <h3>Details</h3>
        <p>Country:{state.countryName}</p>
        <p>City:{state.city}</p>
        <p>timezone:{state.timezone}</p>

        <h4>RECENT ORDERS</h4>
        <p>You haven't placed any orders yet.</p>
    </section>
  )
}

export default Profile