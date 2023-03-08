import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className="mt-4 grow flex items-center justify-around">
            <div className="mt-20">
                <h1 className="text-4xl text-center mb-4">
                    Register
                </h1>
              <form className="max-w-md mx-auto">
                  <input type="text" placeholder="John Doe"/>
              <input type="email" placeholder="your@email.com" />
              <input type="password" placeholder="password" />
              <button className="primary">Signup</button>
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