import React from 'react';
import "./leftpane.css";
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import BuildIcon from '@mui/icons-material/Build';
import FolderIcon from '@mui/icons-material/Folder';
import InsightsIcon from '@mui/icons-material/Insights';
import TableChartIcon from '@mui/icons-material/TableChart';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function LeftPane() {

  const handelPane= ()=>{
    console.log("clicked me man");
  }
 

  return (
    <div className='leftpanemaindiv'>
        <div className='sbadmindiv'>
          <span className='emogi'>🤡</span>
          <h4 className='sbadmin'>SB ADMIN^2</h4>
        </div>

        <hr/> 

        <div className=' container divind'>
          <DashboardIcon/>
          <span className='content'>Dashboard</span>
        </div>

        <hr/>

        <div className='interfacediv'>
          <p className='text-muted'>INTERFACE</p>
          <div className='container divind'>
            <SettingsIcon/>
            <span className='content'>Components</span>
            <ArrowForwardIosIcon className='forarrow'/>
          </div>
          <div className='container divind'>
            <BuildIcon/>
            <span className='content'>Utitlities</span>
            <ArrowForwardIosIcon className='forarrow'/>
          </div>
        </div>

        <hr/>

        <div className='addons'>
          <p className='text-muted'>ADDONS</p>
          <div className='container pagesdiv divind'>
            <FolderIcon/>
            <span className='content'>Pages</span>
            <ArrowForwardIosIcon className='forarrow'/>
          </div>
          <div className='container divind'>
            <InsightsIcon/>
            <span className='content'>Charts</span>
          </div>
          <div className='container divind'>
            <TableChartIcon/>
            <span className='content'>Tables</span>
          </div>
        </div>

        <hr/>

        <div className='drawericondiv'>
          <ArrowBackIosIcon onClick={handelPane} className='drawer'/>
        </div>
        
    </div>
  )
}

export default LeftPane