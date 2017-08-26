import React, { Component, PropTypes } from 'react';

class ErrorsHelper extends Component{
	static propTypes = {
		errors: PropTypes.array
	};

	static defaultProps = {
		errors: []
	};

	render(){
		if( this.props.errors.length == 0 )
			return null;

		var errors = this.props.errors.map( (e, i) => {
			return (<span key={i}>&nbsp;&nbsp;{e}</span>);
		})
		return(
			<span
				id={this.props.name + '-help'}
				className='help-block red'>
			{errors}
			</span>
		)
	}
}

export default ErrorsHelper
