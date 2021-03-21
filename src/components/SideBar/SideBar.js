import './Sidebar.css';

import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { IoMenuOutline, IoCloseCircleOutline} from 'react-icons/io5'
import { IconContext } from 'react-icons';

import {SideBarData} from '../../data/SideBarData';
import SideBarItem from './SideBarItem';

const SideBar = () => {
	const [sidebarActive, setSideBar] = useState(false);

	const showSidebar = () => setSideBar(!sidebarActive);

	return (
		<>
			<IconContext.Provider value={{color: '#fff'}}>
				<div className="sidebar">
					<Link to="#" className="sidebar-bars">
						<IoMenuOutline onClick={showSidebar} style={{ color: 'black' }}/>
					</Link>
				</div>
				<nav className={sidebarActive ? 'sidebar-menu active' : 'sidebar-menu'}>
					<ul className="sidebar-menu-items" onClick={showSidebar}>
						<li className="sidebar-toggle">
							<Link to="#" className="sidebar-bars">
								<IoCloseCircleOutline/>
							</Link>
						</li>
						{SideBarData.map((item, index) => (SideBarItem(index, item)))}
					</ul>
				</nav>
			</IconContext.Provider>
		</>
	);
}

export default SideBar;