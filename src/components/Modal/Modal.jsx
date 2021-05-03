import React, { Component } from 'react';
import { createPortal } from 'react-dom';
const modalRoot = document.getElementById('modal-root')

class Modal extends Component {
	// state = {
	// 	// showModal: false,
	// }
	componentDidMount() {
		window.addEventListener('keydown', this.handleKeyDown)
	}

	componentWillUnmount() {
	 window.removeEventListener('keydown', this.handleKeyDown) 
	}
	handleKeyDown = (event) => {
		if (event.code === 'Escape') {
			this.props.openModal()
		}

	}
	
	handleBackdrop = (event) => {
		if (event.currentTarget === event.target) {
			this.props.openModal()
		}
	}

	render() {
				
		return createPortal (
			<div className="Overlay" onClick={this.handleBackdrop}>
				<div className="Modal" >
					{this.props.children}
    		</div>
			</div>, modalRoot
			
		 );
	}
}
 
export default Modal;
