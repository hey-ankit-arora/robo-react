import React, {	Component } from 'react'
import '../styles/Hello.css'


class Hello extends Component {
render() {
	return (
	<div className= 'f1 tc'> 
		<h1> Hey Welcome to Component Worlds </h1>
		<h2> This is H2 Component </h2>
		<p> {this.props.greetings} This is paragraph component </p>
	</div>
			)
	
}
}

export default Hello 