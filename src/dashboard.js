import React from 'react'
import LeftPane from './components/leftpane/leftpane'
import Maindash from './components/maindash/maindash'
import TopPane from './components/toppane/toppane'

function Dashboard() {
  return (
    <div className='rows'>
      
      <div className='col-2'>
        <LeftPane/>
      </div>
      <div className='col-10'>
        <TopPane/>
        <div className=''>
          <Maindash/>
        </div>
      </div>
        
    </div>
  )
}

export default Dashboard