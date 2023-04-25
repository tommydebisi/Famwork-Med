import React from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import "./Header.scss";
import ProfileDropdown from './ProfileDropdown';
import Hamburger from './HeaderHamburger';

const Header = () => {
    return (
    <div className="headerContainer" data-testid="header-1">
        <div className="logo">
            Team-A Health
        </div>
        <div className="search">
            <input placeholder="Search doctors" type="search" />
            <button>
                <SearchOutlinedIcon />
            </button>
        </div>
        <div className="details">
            <h4>Docs</h4>
            <NotificationsOutlinedIcon />
            <AccountCircleOutlinedIcon />
            <div className="userName">User</div>
            <div className="drop-down">
                <ProfileDropdown />
            </div>
        </div>
        <div className="hamburger" data-testid="hamburger-1">
            <Hamburger />
        </div>
    </div>
  )
}

export default Header;