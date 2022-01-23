import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import BecomeSitterModal from '../AddSitterModal';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const sitterIds = useSelector(state => Object.values(state.sitters))
//   console.log(sitterIds?.find(userId => sitterIds[userId] === sessionUser?.id))
  const userSitters = sitterIds.map(a => a.userId)
// console.log(useSelector(state => state.sitters))

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
    <div>
      <ProfileButton user={sessionUser} />
      {!userSitters.includes(sessionUser?.id) && (
        <BecomeSitterModal />
    )}
    </div>
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <ul>
      <li>
        <NavLink exact to="/">Home</NavLink>
        {isLoaded && sessionLinks}
      </li>
      <li>
 
          
      </li>
      <li>
          <Link to="/sitters">Sitters</Link>
      </li>
    </ul>
  );
}

export default Navigation;