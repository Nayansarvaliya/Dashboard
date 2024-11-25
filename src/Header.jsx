import React from 'react';
import { FaUserCircle, FaBell, FaEnvelope } from 'react-icons/fa';

const Header = () => {
  return (
    <header style={{ background: '#282c34', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 20px' }}>
      <div style={{ fontSize: '18px', fontWeight: 'bold' }}>Analytical</div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <FaEnvelope style={{ margin: '0 10px', cursor: 'pointer' }} />
        <FaBell style={{ margin: '0 10px', cursor: 'pointer' }} />
        <FaUserCircle style={{ margin: '0 10px', cursor: 'pointer' }} size={24} />
      </div>
    </header>
  );
};

export default Header;
