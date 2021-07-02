import React, { useState } from 'react';
import LeftMenu from './LeftMenu';
import RightMenu from './RightMenu';
import { Drawer, Button } from 'antd';
import Icon from '@ant-design/icons';
import './Navbar.css';
// import '../../../src/App.css'


function NavBar() {

  const [visible, setVisible] = useState(false)
  const [navbar, setNavbar] = useState(false); //스크롤 위치 상태 초기화

  const changeBackground = () => {
    if(window.scrollY >= 80 ){
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  // window.addEventListener('scroll', changeBackground);

  const showDrawer = () => {
    setVisible(true)
  };

  const onClose = () => {
    setVisible(false)
  };

  return (
    <nav className={navbar ? 'navbar active' : 'navbar'} style={{ position: 'fixed', zIndex: 5, width: '100%' }}>
      <div className ='logo'>
        <a href="/">Triplus</a>
      </div>
      <div className="menu__container">
        <div className="menu_left">
          <LeftMenu mode="horizontal" />
        </div>
        <div className="menu_rigth">
          <RightMenu mode="horizontal" />
        </div>
        <Button
          className="menu__mobile-button"
          type="primary"
          onClick={showDrawer}
        >
          <Icon type="align-right" />
        </Button>
        <Drawer
          title="Basic Drawer"
          placement="right"
          className="menu_drawer"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          <LeftMenu mode="inline" />
          <RightMenu mode="inline" />
        </Drawer>
      </div>
    </nav>
  )
}

export default NavBar