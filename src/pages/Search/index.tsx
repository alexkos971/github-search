import React, { useState, useContext, useEffect } from "react";

import {Result} from "../../components/Main";
import List from "../../components/List";
import Input from "../../components/Input"
import "./Search.scss";

import axios from "axios"

interface SearchProps {
	data: Object[];
	placeholder: string;
	disabled?: boolean;
	onChange: () => void;
	type: string;
}

const Search: React.FC<SearchProps>  = () => {
	let { result, setResult } = useContext(Result);

    const getData = async (username: string) => {
    	try {  		
   			return await axios.get(`https://api.github.com/search/users?q=${username}`)
   				.then((res) => {
   					return setResult(res.data.items);		
   				});
   				// .then(async () => {
 							// let newRes = result;

 							// for (let item of newRes) {
 							// 	await axios.get(`https://api.github.com/users/${item.login}/repos`)
 							// 		.then(res => {
 							// 			item.repos_length = res.data.length
 							// 		});
 							// setResult(newRes)
 							// }

   				// })
   			}	
    	catch (e) {
    		return <h2 className="title">Not found</h2>
    	}
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    	getData(e.target.value)
    }
	

	const [ loadAnimate, setLoadAnimate ] = useState(false);

	let timer = setTimeout(() => {
	    setLoadAnimate(true);
	}, 2200);

	useEffect(() => {
		return () => {
			clearTimeout(timer)
		} 
	}, [timer])

		return (
			<>
			{loadAnimate && 
				<div className="app-main-search">
					<h2 className="title">Search</h2>

					<Input placeholder="Type some user" disabled={!loadAnimate} onChange={handleChange}/>

					{result && 
						<>
							<h2>Results</h2>
							<List data={result} type="users"/>
						</>
					}
				</div>
			}
			</>
		)
}

export default Search;