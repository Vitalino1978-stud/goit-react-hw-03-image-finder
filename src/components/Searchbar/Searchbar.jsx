import React, { Component } from 'react';
class Searchbar extends Component {

	state = {
		query: '',
			
	}
	
	handleChange = event => {
		this.setState({ query: event.currentTarget.value  });
	}

	handleSubmit = event => {
		event.preventDefault();
		this.props.onSubmit(this.state.query)
	}

	
	render() { 
		return (
			<header className="Searchbar">
				<form className="SearchForm" onSubmit={this.handleSubmit}>
					<button type="submit" className="SearchForm-button"></button>
					<input value={this.state.query} type="text" className="SearchForm-input" onChange={ this.handleChange}/>
				</form>
			</header>
		 );
	}
}
 
export default Searchbar;