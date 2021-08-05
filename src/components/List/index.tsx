import React from "react";
import { Link } from "react-router-dom";

import "./List.scss";

const List = ({ data, type }) => {

	if (type === "users") {	
		return (
			<ul className="app-main-list">
				{
					data.map(item => {
						return (
							<li className="app-main-list-item" key={item.id}>
								<Link to={`/user/${item.login}`}>
									<div className="app-main-list-item-wrap">
										<img src={item.avatar_url} alt="Avatar"/>
									</div>
									
									<span className="app-main-list-item-login">{item.login}</span>

									<span className="app-main-list-item-repo">Repo: {item.login}</span>
								</Link>
							</li>
						)
					})
				}
			</ul>
		)
	}
	else if (type === 'repos') {
		return (
			<ul className="app-main-list">
			{/*<h2>Results</h2>*/}

				{
					data.map(item => {
						return (
							<li className="app-main-list-item" key={item.id}>
								<span className="title">{item.name}</span>

								<div className="app-main-list-item-description">
									<span>{item.forks} Forks</span>

									{item.language && 
										<div className="app-main-list-item-description-language">
											<div className={`app-main-list-item-description-language ${item.language.toLowerCase()}`}></div>
											<span>{item.language}</span>
										</div>
									}
								</div>
							</li>
						)
					})
				}
			</ul>
		)
	}
}

export default List;