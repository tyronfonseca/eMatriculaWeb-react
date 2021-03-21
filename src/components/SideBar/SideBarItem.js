import React from 'react';
import { Link } from 'react-router-dom';

const SideBarItem = (key, dataItem) => {
	return(
		<li key={key} className="sidebar-item">
			<Link to={dataItem.path}>
				{dataItem.icon}
				<span>{dataItem.title}</span>
			</Link>
		</li>
	);
};

export default SideBarItem;