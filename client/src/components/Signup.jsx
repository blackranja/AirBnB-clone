import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const registerUser = async (ev) => {
        ev.preventDefault();

        console.log(name, email, password)
        try {
            await axios.post('http://127.0.0.1:4000/register', {
                name,
                email,
                password
            });
            alert('Registaration successful. Now you can log in');
        } catch (e) {
            alert(`Registration Failed. please typr again later :${e}`);
        }
       
    }
  return (
    <div className="mt-4 grow flex items-center justify-around">
            <div className="mt-20">
                <h1 className="text-4xl text-center mb-4">
                    Register
                </h1>
              <form
                  onSubmit={registerUser}
                  className="max-w-md mx-auto">
                  <input
                      type="text"
                      placeholder="John Doe"
                      value={name}
                      onChange={ev => setName(ev.target.value) }
                  />
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
                      onChange={ev=>setPassword(ev.target.value)}
                  />
              <button className="primary" type="submit">Signup</button>
                    <div className="text-center py-2 text-gray-500 text-sm pt-6">
                        Already have an account?
                        <Link to='/login' className="pl-2 underline text-black">
                            Login Now
                      </Link>
                      
                    </div>
                </form>
            </div>
            </div>
  )
}

export default Signup