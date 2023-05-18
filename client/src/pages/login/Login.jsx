
import { useContext, useState } from "react";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/Authcontex"

const Login = () => {
    const navigate = useNavigate()
    const [credentials, setSredentials] = useState({
        name:undefined,
        password:undefined,
    })

    const {user, loading, error, dispatch} = useContext(AuthContext)
    
  const handleChange = (e) => {
    setSredentials((prev) => ({...prev, [e.target.name]:e.target.value}))
  }
  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({type:"LOGIN_START",})
    try{

        const res = await axios.post('http://localhost:8800/api/auth/login',credentials)
            dispatch({type:"LOGIN_SUCCESS", payload:res.data})
            navigate('/')
            console.log(res.data)
        }catch(err){
            console.log(err.response.data)
        dispatch({type:"LOGIN_FAILURE", payload:err.response.data})
    }

  }
 return (
    <div className='login'>
        <div className='card'>
            <div className='left'>
                <h1>Hellow World</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit facere, officiis rerum tempore ullam quibusdam. Consequatur cum fugiat sunt minima nam fuga similique maxime distinctio doloribus. Iusto accusamus distinctio labore?</p>
                <span>Don't you     have an account?</span>
                <Link to="/register">
                <button>Register</button>
                </Link>
            </div>
            <div className='right'>
                <h1>Login</h1>
                <form>
                    <input type="text" placeholder="User Name" name="name" onChange={handleChange}/>
                    <input type="password" placeholder="Password"name="password" onChange={handleChange}/>
                    
                    <button onClick={handleClick} >Login</button>
                    {error && <span>{error.message}</span>}
                </form>
            </div>

        </div>
    </div>
  );
};

export default Login;
