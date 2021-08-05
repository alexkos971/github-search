import React from "react";

import "./Input.scss";

const Input = ({ placeholder, disabled, onChange }) => {
	return (
		<div className="app-main-input">
			<input type='text' placeholder={placeholder} disabled={disabled} onChange={onChange}/>
		</div>
	)
}

export default Input;