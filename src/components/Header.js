import React from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  return (<header className='py-8'>
    <div className="container mx-auto">
      <div className='flex justify-between items-center'>
        <a href="#">
          <img src={logo} alt="" style={{ width: '50%', height: '50%' }} />
        </a>
        <button className='btn btn-sm'> Click</button>
      </div>
    </div>
  </header>);
};

export default Header;
