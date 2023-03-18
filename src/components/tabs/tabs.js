import "./tabs.css"
import React from 'react';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AssignmentLateIcon from '@mui/icons-material/AssignmentLate';
import LinearProgress from '@mui/material/LinearProgress';
 
function EarnTabMon() {
  return (
    <div className='tabdiv1' style={{background: "blue"}}>
        <div className='innerdiv'>
            <div className='contentdiv'>
                <span className="heading" style={{color: "blue"}}>EARNINGS (MONTHLY)</span>
                <h3 className="value">$40,000</h3>
            </div>
            <div className='icondiv'>
                <CalendarTodayIcon sx={{ fontSize: 40 }} className="icon" color="action"/>
            </div>
        </div>
    </div>
  )
}

function EarnTabAnn() {
    return (
      <div className='tabdiv2' style={{background: "green"}}>
          <div className='innerdiv'>
              <div className='contentdiv'>
                  <span className="heading" style={{color: "green"}}>EARNINGS (ANNUAL)</span>
                  <h3 className="value">$215,000</h3>
              </div>
              <div className='icondiv'>
                  <AttachMoneyIcon sx={{ fontSize: 40 }} className="icon" color="action"/>
              </div>
          </div>
      </div>
    )
}

function TasksTab() {
    let progress = 50;
    return (
      <div className='tabdiv3' style={{background: "violet"}}>
          <div className='innerdiv'>
              <div className='contentdiv'>
                  <span className="heading" style={{color: "violet"}}>TASKS</span>
                  <h3 className="value">{`${progress}%`}</h3>
              </div>
              <div className="progdiv">
                  <LinearProgress className="progbar" variant="determinate" value={progress} />
              </div>
              <div className='icondiv'>
                  <AssignmentIcon sx={{ fontSize: 40 }} className="icon" color="action"/>
              </div>
          </div>
      </div>
    )
}


function PendingTab() {
    return (
      <div className='tabdiv4' style={{background: "#bf7617"}}>
          <div className='innerdiv'>
              <div className='contentdiv'>
                  <span className="heading" style={{color: "#bf7617"}}>PENDING REQUESTS</span>
                  <h3 className="value">18</h3>
              </div>
              <div className='icondiv'>
                  <AssignmentLateIcon sx={{ fontSize: 40 }} className="icon" color="action"/>
              </div>
          </div>
      </div>
    )
}

export {EarnTabMon, EarnTabAnn, TasksTab, PendingTab}