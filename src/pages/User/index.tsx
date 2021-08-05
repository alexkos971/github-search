import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Icon from "../../components/Icon";
import "./User.scss"

import List from "../../components/List";
import Preloader from "../../components/Preloader";

interface UserProps {
	data: Object,
	name: string,
	request: string,
	fill: string,
	className?: string,
	onClick?: () => Object;
	type: string;
	res: Object
}

const User: React.FC<UserProps> = () => {
	const [data, setData] = useState(null);

	let request = useParams();

	const getRepos = async (name) => {
		try {
			return await axios.get(`https://api.github.com/users/${name}/repos`)
				.then((res) => {
					return setData({...data, repos: res.data})
				});
		}
		catch (e) {
			console.log(e)
		}
	}


	const getUser = async () => {
		try {		
			await axios.get(`https://api.github.com/users/${request.name}`)
				.then(async res => {
					return await setData(res.data);
				});
	
		}
		catch (e) {
			console.log(e)
		}
	}



	useEffect(() => {
		if (!data) {
			getUser();
		}

		else if (data && !data.repos) {
			getRepos(data.login)
		}
	}, [data]);
			
	
	if (!data) {
		return <Preloader/>
	} 

	return (
		<div className="app-main-profile">

			<div className="app-main-profile-header">	
				<Link to="/search">
					<Icon name='arrow-left' fill="#000" className="app-main-profile-header-arrow"/>
				</Link>

				<h2>Profile</h2>
			</div>

			<div className="app-main-profile-description">
				<div className="app-main-profile-description-avatar">
					<img src={data.avatar_url} alt="Profile avatar"/>
				</div>

				<div className="app-main-profile-description-text">
					<h3>{data.login}</h3>
					<span>Email: <h5>{data.email ? data.email : 'not specified'}</h5></span>
					<span>Location: <h5>{data.location ? data.location : 'not specified'}</h5></span>
					<span>Join Date: <h5>{data.created_at}</h5></span>

					<div className="app-main-profile-description-text-follow">				
						<span>Followers: <h5>{data.followers}</h5></span>
						<span>Following: <h5>{data.following}</h5></span>
					</div>
		
					<a href={`https://github.com/${data.login}`}>
						<span>Go to github</span>
					</a>
				</div>
			</div>
			
			{data.bio && 
				<div className="app-main-profile-bio">
					<div className="app-main-profile-bio-circle"></div>
					<span>{data.bio}</span>
				</div>
			}

			{data.repos && data.repos.length &&
				<div className="app-main-profile-repos">
					<h2>Repos: {data.repos.length}</h2>

					<List data={data.repos} type="repos"/>
				</div>

			}

					
		</div>
	)
}

export default User;