import React from "react";
import { Link } from "react-router-dom";

import "./List.scss";

const List = ({ data, type }) => {

	// function getRandomColor() {
	//   let letters = '0123456789ABCDEF';
	//   let color = '#';
	//   for (let i = 0; i < 6; i++) {
	//     color += letters[Math.floor(Math.random() * 16)];
	//   }
	//   return color;
	// }

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

									{item.repos_length && <span className="app-main-list-item-repo">Repos: {item.repos_length}</span>}
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
							<a href={item.html_url} key={item.id}>
								<li className="app-main-list-item">
										<span className="title">{item.name}</span>

										<div className="app-main-list-item-description">
											<span>{item.forks} Forks</span>

											{item.language && 
												<div className="app-main-list-item-description-language">
													<div className={`app-main-list-item-description-language ${item.language.toLowerCase() !== ('c++' || 'c#') ? item.language.toLowerCase() : (item.language.toLowerCase() === 'c++' ? 'cpp' : 'c-sharp')}`}></div>
													<span>{item.language}</span>
												</div>
											}
										</div>
								</li>
							</a>
						)
					})
				}
			</ul>
		)
	}
}

export default List;