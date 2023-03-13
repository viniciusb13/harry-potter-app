import React from 'react'
import { Link } from 'react-router-dom'
import Hufflepuff from '../../assets/houseCrestsHufflepuff.png'
import Gryffindor from '../../assets/houseCrestsGryffindor.png'
import Slytherin from '../../assets/houseCrestsSlytherin.png'
import Ravenclaw from '../../assets/houseCrestsRavenclaw.png'

import './style.css'

const CharacterInfo = (props) => {
	  let houseImage = ''
	  if(props.house === 'Hufflepuff') {
		  houseImage = Hufflepuff
	  } else if(props.house === 'Gryffindor') {
		  houseImage = Gryffindor
	  } else if(props.house === 'Slytherin') {
		  houseImage = Slytherin
	  } else if(props.house === 'Ravenclaw') {
		  houseImage = Ravenclaw
	  }

  return (
    <div className="character-card">
		{/* <div className="character-card-header"> */}
        	<h2>{props.name}</h2>
		{/* </div> */}
		<Link to={`/houses/${props.house}`}>
			<img src={houseImage} className="house-crest" />
		</Link>
		<div className="character-info">
			<div>
				{ props.image ? <img src={props.image} alt="Character Photo" height="250px"/> : null }
				<p>Date of Birth: {props.dateOfBirth}</p>
			</div>
			<div>
				<p>Species: {props.species}</p>
				<p>Gender: {props.gender}</p>
				{/* <p>House: {props.house}</p> */}
				<p>Ancestry: {props.ancestry}</p>
				{/* <p>{props.wand}</p> */}
				<p>Patronus: {props.patronus}</p>
			</div>
		</div>
</div>
  )
}

export default CharacterInfo