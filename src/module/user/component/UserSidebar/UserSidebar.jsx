import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  SidebarContainer,
  Logo,
  MenuList,
  MenuItem,
  MenuLink,
  LogoutContainer,
  LogoutButton,
  SidebarWrapper,
  ToggleButton,
  ModalOverlay,
  ModalContainer,
  ModalContent,
  ModalButtons,
  ModalButton
} from './UserSidebar.style';
import {
  FaTachometerAlt,
  FaBookOpen,
  FaUser,
  FaFileContract,
  FaBell,
  FaHeadset,
  FaPowerOff
} from 'react-icons/fa';
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { MdOutlineMenuOpen } from "react-icons/md";
import { getCookiesData } from '../../../../utils/cookiesService';
import { getUserByUserId, logoutUser } from '../../../../api/authApi';
const UserSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const [id, setId] = useState('');
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  useEffect(() => {
    const { userId } = getCookiesData();
    setId(userId);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarOpen]);

  const handleMenuClick = () => {
    if (window.innerWidth <= 576) {
      setIsSidebarOpen(false);
    }
  };
  const handleConfirmLogout = async () => {
    const userData = await getUserByUserId(id);
    const response = await logoutUser({ email: userData.user.email });
    if (response.success) {
      navigate("/");
    }
  };
  const handleLogoutClick = () => {
    setShowLogoutModal(true);
  };
  const handleCancelLogout = () => {
    setShowLogoutModal(false);
  };



  return (
    <>
      {/* Toggle Button */}
      <ToggleButton onClick={toggleSidebar} >
        <MdOutlineMenuOpen size={24} />
      </ToggleButton>

      {/* Sidebar */}
      <SidebarWrapper ref={sidebarRef} isSidebarOpen={isSidebarOpen}>
        <SidebarContainer>
          <MenuList>
            <MenuItem>
              <MenuLink to="/user" end onClick={handleMenuClick}>
                <FaTachometerAlt className='sidebar-icon' /> Dashboard
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/user/my-courses" onClick={handleMenuClick}>
                <FaBookOpen className='sidebar-icon' /> My Courses <AiOutlineRight className='arrow-icon' />
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to={`/user/profile/${id}`} onClick={handleMenuClick}>
                <FaUser className='sidebar-icon' /> Profile
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/user/tandc" onClick={handleMenuClick}>
                <FaFileContract className='sidebar-icon' /> T&amp;C
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink to="/user/notification" onClick={handleMenuClick}>
                <FaBell className='sidebar-icon' /> Notification
              </MenuLink>
            </MenuItem>

            <MenuItem>
              <MenuLink to="/user/contactsupport" onClick={handleMenuClick}>
                <FaHeadset className='sidebar-icon' /> Contact Support
              </MenuLink>
            </MenuItem>

            <LogoutButton onClick={handleLogoutClick}>
              <FaPowerOff size={28} /> Log out
            </LogoutButton>

          </MenuList>

          {/* <LogoutContainer>
         
          </LogoutContainer> */}
        </SidebarContainer>
      </SidebarWrapper>
      {showLogoutModal && (
        <ModalOverlay>
          <ModalContainer>
            <ModalContent>
              <p>Are you sure you want to logout?</p>
              <ModalButtons>
                <ModalButton $primary onClick={handleConfirmLogout}>Yes</ModalButton>
                <ModalButton onClick={handleCancelLogout}>No</ModalButton>
              </ModalButtons>
            </ModalContent>
          </ModalContainer>
        </ModalOverlay>
      )}
    </>
  );
};

export default UserSidebar;
