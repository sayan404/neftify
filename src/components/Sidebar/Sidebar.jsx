import React, { useState } from 'react';
import './Sidebar.css';
import { TbHexagonLetterN } from 'react-icons/tb';
import { GiNestedHexagons } from 'react-icons/gi';
import { TbHexagons } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [token, setToken] = useState(true);
  const [pair, setPair] = useState(false);
  const navigate = useNavigate();

  const tokenClickHandler = () => {
    setPair(false);
    setToken(true);
    navigate('/token');
  };

  const pairClickHandler = () => {
    setToken(false);
    setPair(true);
    navigate('/pair');
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <div className='menu-toggle' onClick={toggleSidebar}>
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
      </div>
    <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
      <p className='logo'>
        <TbHexagonLetterN className='logo_icon' />
        NFTify
      </p>
      <p
        className={token ? 'token_adrs_txt focus' : 'token_adrs_txt'}
        onClick={tokenClickHandler}
      >
        <TbHexagons className='logo_icon spcl' />
        Token Address
      </p>
      <p
        className={pair ? 'pair_adrs_txt focus' : 'pair_adrs_txt'}
        onClick={pairClickHandler}
      >
        <GiNestedHexagons className='logo_icon spcl' />
        Pair Address
      </p>
    </div>
    </>
  );
};

export default Sidebar;
