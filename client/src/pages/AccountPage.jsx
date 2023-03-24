import React, { useContext,useState} from 'react'
import { UserContext } from '../context/userContext';
import { Link, Navigate, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import axios from 'axios';

const AccountPage = () => {
  const [redirect, setRedirect] = useState('');
   let { subpage } = useParams() ;
  if (subpage === undefined) {
    subpage = "profile";
  }

  const { ready, user,setUser } = useContext(UserContext);
  async function logout() {
    await axios.post('/logout');
   setRedirect('/');
    setUser(null);
}

  if(!ready){
    return 'Loading.....';
  }
  if(ready && !user && !redirect){
    return <Navigate to={'/login'} />
    
  }
 
  function linkClasses(type = null) {
    let classes = "py-2 px-6";
    if (type === subpage) {
      classes += 'bg-primary text-white rounded-full';

    }
    return classes;
  }
  if (redirect) {
    return <Navigate to={redirect}/>
  }

  return (
    <div>
      <Navbar/>
      <nav className="w-full flex jusify-center mt-8 gap-2">
        <Link className={linkClasses('profile')} to={'/account'}>My account</Link>
        <Link className={linkClasses('bookings')} to={'/account/bookings'}>My bookings</Link>
        <Link className={linkClasses('places')} to={'/account/places'}>My accommodations</Link>
      </nav>
      {subpage === 'profile'&&(
        < div className="text-center max-w-lg mx-auto">
          Logged in as {user.name} ({user.email})<br />
          <button onClick={logout} className="primary">Logout</button>
        </div>
      )
          }
    </div>
  )
}

export default AccountPage