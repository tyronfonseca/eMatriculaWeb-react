import './Sidebar.css';

import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { IoMenuOutline, IoCloseCircleOutline} from 'react-icons/io5'
import { IconContext } from 'react-icons';

import {SideBarData} from '../../data/SideBarData';
import SideBarItem from './SideBarItem';
import clock from './clock';

const SideBar = (props) => {	
	const [sidebarActive, setSideBar] = useState(false);
	const [time, setTime] = useState(clock());

	const showSidebar = () => setSideBar(!sidebarActive);

	React.useEffect(() => {
		const interval = setInterval(() => { setTime(time => clock())}, 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<>
			<IconContext.Provider value={{color: '#fff'}}>
				<div className="sidebar row justify-content-around">
					<Link to="#" className="sidebar-bars col-1">
						<IoMenuOutline onClick={showSidebar} style={{ color: 'black' }}/>
					</Link>
					<div className="col-1">
						<span className="text-muted">{props.nameView}</span>
					</div>
					<div className="col-6 text-center">
						<img className="d-inline-block aling-top" src={require('../../img/ematriculaSmall.gif')} width="140" height="45" alt="Logo de eMatricula" />
						<span className="ciclo">I-Ciclo 2021</span>
					</div>
					<div className="col">
						<span className="clock">{time}</span>
					</div>
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