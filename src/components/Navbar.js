import React from 'react'
import './navbar.css';
import { Link } from 'react-router-dom'

function Navbar() {
  return (
      <>
    <div className="parent-div">
      <div className="child-wrapper">
        <div className='left-rail'>
          <div className='left-rail-list'>
            <svg className='left-rail-title'></svg>
            <div className='leftmenu'>
              <Link to='/'><p className="sidebar-items"><svg className="dashsvg"></svg><span>DASHBOARD</span></p></Link>
              <Link to='/members'><p className="sidebar-items"><svg className="membersvg"></svg><span>MEMBERS</span></p></Link>
              <Link to='/projects'><p className="sidebar-items"><svg className="projectsvg"></svg><span>PROJECTS</span></p></Link>
              <Link to='/clients'><p className="sidebar-items"><svg className="clientsvg"></svg><span>CLIENTS</span></p></Link>
              <Link to='/workplan'><p className="sidebar-items"><svg className="workplansvg"></svg><span>WORKPLAN</span></p></Link>
              <Link to='/messages'><p className="sidebar-items"><svg className="messagesvg"></svg><span>MESSAGES</span></p></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Navbar;