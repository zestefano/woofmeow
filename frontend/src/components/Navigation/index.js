import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import BecomeSitterModal from '../AddSitterModal';
import SignupFormModal from '../SignupFormPage/signupModal';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const sitterIds = useSelector(state => Object.values(state.sitters))
//   console.log(sitterIds?.find(userId => sitterIds[userId] === sessionUser?.id))
  const userSitters = sitterIds.map(a => a.userId)
// console.log(sessionUser)
// console.log()

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
        <SignupFormModal />
      </>
    );
  }

  return (
    <div className='navbar'>
      <div className='navBarContent'>
          <div className='navBarLeft'>
            <NavLink exact to="/">Home</NavLink>
            {isLoaded && sessionLinks}
          </div>

          <div className='navBarRight'>
              <Link to="/sitters">Sitters</Link>
          </div>
     </div>
     </div>
  );
}

export default Navigation;