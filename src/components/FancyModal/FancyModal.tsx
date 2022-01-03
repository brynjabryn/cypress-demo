import React, { useState } from 'react';
  
function FancyModal() {
	
	const [isShown, setIsShown ] = useState(false);
	
	return (
	<>
		{isShown ? 
		
			(
				<div className="deque-dialog-screen">
					<h1 id="dialogHeading_first-deque-dialog" className="deque-dialog-heading">Fancy Modal Header</h1>
					<p className="deque-dialog-description" id="dialogDescription_first-deque-dialog">Please enter your first and last name.</p>
					<form className="deque-dialog-content">
						<label htmlFor="nameInput_first-deque-dialog">First Name</label>
						<input className="deque-input" id="nameInput_first-deque-dialog" type="text" data-trap-enter="true" />
						<label htmlFor="lastNameInput_first-deque-dialog">Last Name</label>
						<input className="deque-input" id="lastNameInput_first-deque-dialog" type="text" data-trap-enter="true" />
					</form>
					<div className="deque-dialog-buttons">
						<button className="deque-button deque-dialog-button-submit">Submit</button>
						<button className="deque-button deque-dialog-button-cancel">Cancel</button>
						<button className="deque-dialog-button-close" aria-label="Close dialog"><span aria-hidden="true"></span></button>
					</div>
				</div>
			)
	
		: null }
	</>
	);
  
}

export default FancyModal;