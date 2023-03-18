import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import "./projects.css"

function Projects() {
  return (
    <div className='projectsmaindiv'>
        <h5 className='projhead'>Projects</h5>
        <div className='progdiv'>
            <div className='labeldiv'>
                <label className="projproglabel" for="#prog">Server Migration</label>
                <span>20%</span>
            </div>
            <div className='linprogdiv'>
                <LinearProgress id='pojprog' variant="determinate" value={20} />
            </div>
        </div>

        <div className='progdiv'>
            <div className='labeldiv'>
                <label className="projproglabel" for="#prog">Sales Tracking</label>
                <span>40%</span>
            </div>
            <div className='linprogdiv'>
                <LinearProgress id='pojprog' variant="determinate" value={40} />
            </div>
        </div>

        <div className='progdiv'>
            <div className='labeldiv'>
                <label className="projproglabel" for="#prog">Customer Database</label>
                <span>60%</span>
            </div>
            <div className='linprogdiv'>
                <LinearProgress id='pojprog' variant="determinate" value="60" />
            </div>
        </div>

        <div className='progdiv'>
            <div className='labeldiv'>
                <label className="projproglabel" for="#prog">Payout Details</label>
                <span>80%</span>
            </div>
            <div className='linprogdiv'>
                <LinearProgress id='pojprog' variant="determinate" value={80} />
            </div>
        </div>

        <div className='progdiv'>
            <div className='labeldiv'>
                <label className="projproglabel" for="#prog">Account Setup</label>
                <span>Complete!</span>
            </div>
            <div className='linprogdiv'>
                <LinearProgress sx={{backgroundColor: "red"}} id='pojprog' variant="determinate" value={100} />
            </div>
        </div>

        
        
    </div>
  )
}

export default Projects