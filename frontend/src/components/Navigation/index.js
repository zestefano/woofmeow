import React from 'react';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import BecomeSitterModal from '../AddSitterModal';
import SignupFormModal from '../SignupFormPage/signupModal';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const sitterIds = useSelector(state => Object?.values(state?.sitters))
//   console.log(sitterIds?.find(userId => sitterIds[userId] === sessionUser?.id))
  const userSitters = sitterIds?.map(a => a?.userId)
// console.log(sessionUser)
// console.log()


  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
    <div>
      <ProfileButton user={sessionUser} />
      {!userSitters?.includes(sessionUser?.id) && (
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
            <NavLink exact to="/"><img className='logo' src="https://res.cloudinary.com/zaf/image/upload/v1643602627/woofmeow/output-onlinejpgtools_xk0alz.png"/></NavLink>
            {isLoaded && sessionLinks}
          </div>

          <div className='navBarRight'>
              <Link to="/sitters">Search Sitters</Link>
          </div>
     </div>
     </div>
  );
}

export default Navigation;