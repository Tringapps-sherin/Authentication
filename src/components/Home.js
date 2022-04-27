import {useNavigate} from "react-router-dom";
import { useAuth } from "../Auth";
import '../App.css';

export default function Home() {
  const auth = useAuth();
  const navigate = useNavigate();
  function logout(){
  auth.signout();
  navigate("/Login");
}
  return (auth.user && <div><h3>welcome {auth.user}</h3>
  <button class='lg' onClick={logout}>logout</button>
  </div>);
  }
