import "./maindash.css"
import React from 'react';
import {EarnTabMon, EarnTabAnn, TasksTab, PendingTab} from '../tabs/tabs';
import DownloadIcon from '@mui/icons-material/Download';
import Linechart from "../../charts/linechart";
import Piechart from "../../charts/piechart";
import Projects from "../projects/projects";
import Illustration from "../illustrations/illustration";
import Color from "../colors/color";
import DevAppr from "../devApproach/devapr";


function Maindash() {
  return (
    <div className='container maindashdiv'>
      <div className='top'>
        <h4>Dashboard</h4>        
        <button className='btn btn-primary' type="button"><DownloadIcon color='action'/>Generate Report</button>
      </div>
      <div className='tabsdiv'>
        <EarnTabMon/>
        <EarnTabAnn/>
        <TasksTab/>
        <PendingTab/>
      </div>
      <div className="chartsdiv">
        <Linechart/>
        <Piechart/>
      </div>
      <div className="row">
        <div className="col-6">
          <Projects/>
          <Color/>
        </div>
        <div className="col-6">
          <Illustration/>
          <DevAppr/>
        </div>
      </div>
    </div>
  )
}


export default Maindash