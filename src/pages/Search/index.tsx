import React, { useState, useContext, useEffect } from "react";

import {Result} from "../../components/Main";
import List from "../../components/List";
import Input from "../../components/Input"
import "./Search.scss";

import axios from "axios"

interface SearchProps {
	placeholder: string;
	disabled?: boolean;
	onChange: () => void;
	result: Array<Object>;
	setResult: (result) => typeof result;
	type: string;
}

const Search: React.FC<SearchProps>  = () => {
	let { result, setResult } = useContext<SearchProps>(Result);

    const getData = async (username: string) => {
    	try {  		
   			return await axios.get(`https://api.github.com/search/users?q=${username}`)
   				.then((res) => {
   					return setResult(res.data.items);		
   				});
   			}	
    	catch (e) {
    		return <h2 className="title">Not found</h2>
    	}
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    	getData(e.target.value)
    }
	

	const [ loadAnimate, setLoadAnimate ] = useState(false);


	useEffect(() => {
		let timer = setTimeout(() => {
		    setLoadAnimate(true);
		}, 2200);

		return () => clearTimeout(timer)
	}, [])

		return (
			<>
			{loadAnimate && 
				<div className="app-main-search">
					<h2 className="title">Search</h2>

					<Input placeholder="Type some user" disabled={!loadAnimate} onChange={handleChange}/>

					{result.length > 0 && 
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