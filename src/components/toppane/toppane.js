import React from 'react';
import './toppane.css';
import NotificationsNoneIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import SearchIcon from '@mui/icons-material/Search';
import avatar from "./avatar.jpg";


function TopPane() { 
  return (
    
    <nav className="navbar">
        <div className="searchdiv">
            <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <SearchIcon fontSize="large" className='searchicon'/>
            </form>
        </div>
        <div className='naviconandprofdiv'>
            <div className='notificons'>
                <NotificationsNoneIcon color="disabled"/>
                <EmailIcon color="disabled"/>
            </div>
            <div className='profileicondiv'>
                <span className='avatarname'>Douglas McGee</span>
                <div className='profileimgdiv'>
                    <img className='avatarimg' src={avatar} alt="profile avatar"/>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default TopPane