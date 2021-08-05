import React from "react";

const Icon = ({ name, fill, className = '', onClick = null }) => {
	switch (name) {
		case 'arrow-left':
			return (
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={className} viewBox="0 0 16 16">
				  <path fill={fill} d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
				</svg>
			)
		case 'history':
			return (
				<svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
					<path d="M15.25 0.75C9.0375 0.75 4 5.7875 4 12H0.25L5.1125 16.8625L5.2 17.0375L10.25 12H6.5C6.5 7.1625 10.4125 3.25 15.25 3.25C20.0875 3.25 24 7.1625 24 12C24 16.8375 20.0875 20.75 15.25 20.75C12.8375 20.75 10.65 19.7625 9.075 18.175L7.3 19.95C9.3375 21.9875 12.1375 23.25 15.25 23.25C21.4625 23.25 26.5 18.2125 26.5 12C26.5 5.7875 21.4625 0.75 15.25 0.75ZM14 7V13.25L19.35 16.425L20.25 14.9125L15.875 12.3125V7H14Z" fill={fill}/>
				</svg>
			)
		case 'deposits':
			return (
				<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
					<path d="M13 0.5C6.1 0.5 0.5 6.1 0.5 13C0.5 19.9 6.1 25.5 13 25.5C19.9 25.5 25.5 19.9 25.5 13C25.5 6.1 19.9 0.5 13 0.5ZM14.7625 20.6125V23H11.425V20.5875C9.2875 20.1375 7.475 18.7625 7.3375 16.3375H9.7875C9.9125 17.65 10.8125 18.675 13.1 18.675C15.55 18.675 16.1 17.45 16.1 16.6875C16.1 15.65 15.55 14.675 12.7625 14.0125C9.6625 13.2625 7.5375 11.9875 7.5375 9.425C7.5375 7.275 9.275 5.875 11.425 5.4125V3H14.7625V5.4375C17.0875 6 18.25 7.7625 18.325 9.675H15.875C15.8125 8.2875 15.075 7.3375 13.1 7.3375C11.225 7.3375 10.1 8.1875 10.1 9.3875C10.1 10.4375 10.9125 11.125 13.4375 11.775C15.9625 12.425 18.6625 13.5125 18.6625 16.6625C18.65 18.95 16.9375 20.2 14.7625 20.6125Z" fill={fill}/>
				</svg>
			)
		case 'withdrawals':
			return (
				<svg width="25" height="27" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
					<path d="M3 11.5V20.25H6.75V11.5H3ZM10.5 11.5V20.25H14.25V11.5H10.5ZM0.5 26.5H24.25V22.75H0.5V26.5ZM18 11.5V20.25H21.75V11.5H18ZM12.375 0.25L0.5 6.5V9H24.25V6.5L12.375 0.25Z" fill={fill}/>
				</svg>
			)
		case 'arrow':
			return (
				<svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} onClick={onClick}>
					<path d="M11.67 1.87001L9.9 0.100006L0 10L9.9 19.9L11.67 18.13L3.54 10L11.67 1.87001Z" fill={fill}/>
				</svg>
			)
		case 'carret':
			return (
				<svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M0 0L5 5L10 0H0Z" fill={fill}/>
				</svg>
			)
		default: return <span>Icon</span>
	}

}

export default Icon;