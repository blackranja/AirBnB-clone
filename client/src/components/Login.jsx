import React,{useState} from 'react'
import { Link, Navigate } from 'react-router-dom'
import axios from "axios";
import { UserContext } from '../context/userContext';
const { setUser } = useContext(UserContext);

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const handleLoginSubmit = async (ev) => {
        ev.preventDefault();
        try {
            const userInfo = await axios.post('/login', { email, password });
            setUser(userInfo);
            alert('Login successful');
            setRedirect(true);
        } catch (e) {
            alert('Login Failed');
        }
    }
    if (redirect) {
        return <Navigate to={'/'}/>
    }
    return (
      <div className="mt-4 grow flex items-center justify-around">
            <div className="mt-20">
                <h1 className="text-4xl text-center mb-4">
                    Login
                </h1>
          <form className="max-w-md mx-auto" onSubmit={handleLoginSubmit}>
                    <input
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={ev => setEmail(ev.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={ev => setPassword(ev.target.value)}
                    />
              <button className="primary">Login</button>
                    <div className="text-center py-2 text-gray-500 text-sm pt-6">
                        Don't have an account yet?
                        <Link to='/login' className="pl-2 underline text-black">
                            Register Now
                        </Link>
                    </div>
                </form>
            </div>
            </div>
  )
}

export default Login