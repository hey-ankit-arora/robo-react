import React from 'react';
import Card from '../components/Card';

const CardList = ({robots}) => {
	/*if(true) {
		throw new Error('NOOOOOOOOO!');
	}*/
	const cardComponenet = robots.map((user,i) => {
		return  <Card key= {robots[i].id}id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
	}
	// <li>{user} </li>
	)
	return (
		<div>
 {cardComponenet}
  </div>
		);
		
}

export default CardList;