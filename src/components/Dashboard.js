import React from 'react'
import MainComponent from './MainComponent'
import Navbar from './Navbar'
// import { useNavigate } from 'react-router-dom';

function Dashboard({ products }) {

 // const navigate = useNavigate();

  // const handleLogout = () => {
  //   localStorage.removeItem('user'); 
  //   navigate.push('/login');
  //   console.log('Logout clicked');
  // };

  return (
      <div>
      <Navbar>
        {/* <button onClick={handleLogout}>Logout</button> */}
      </Navbar>
          <MainComponent products={products} />
    </div>
  )
}

export default Dashboard