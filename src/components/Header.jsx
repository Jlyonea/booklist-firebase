import { signOut } from "firebase/auth";
import { NavLink } from "react-router-dom";
import { auth } from "../firebase/config.js";
import { useDispatch } from 'react-redux';
import { setUser } from '../store/usersSlice.js';
import { resetBooksSlice } from '../store/booksSlice.js';

function Header({pageTitle}) {

  const dispatch = useDispatch();

  function handleSignOut(){
    if(confirm('Are you sure you want to log out?')){
      signOut(auth).then(() => {
        dispatch(setUser(null));        
        dispatch(resetBooksSlice(null));
      }).catch((error) => {
        console.log(error);
      });
    }
  }

    return (
      <>

            <h1>{pageTitle}</h1>

            <div className="header-btns">

                    <NavLink to="/">
                      <button className="btn">
                          Book List
                      </button>
                    </NavLink>

                    <NavLink to="/add-book">
                      <button className="btn">
                          Add Book +
                      </button>
                    </NavLink>

                    <button onClick={handleSignOut} className="btn transparent">
                      Logout
                    </button>

               
            </div>
    
      </>
    )
  }
  
  export default Header
  