import React from 'react';

const Card = ({name,email,id}) => {
	return (
<div className= ' tc bg-light-red dib br3 pa4  ma4 grow shadow-5'> 
<img alt = 'robots'src= {`https://robohash.org/${id}10x10`} />
<div>
	<h2 className>{name}</h2>
	<p> {email}</p>
</div>
</div>
		);
}

export default Card