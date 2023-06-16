import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import houseCrestsHufflepuffCrest from '../../assets/houseCrestsHufflepuff.png'
import houseCrestsGryffindorCrest from '../../assets/houseCrestsGryffindor.png'
import houseCrestsSlytherinCrest from '../../assets/houseCrestsSlytherin.png'
import houseCrestsRavenclawCrest from '../../assets/houseCrestsRavenclaw.png'

import './style.css'

const Houses = () => {
	return (
		<div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
			<Link className="house-crest-button" to={`/houses/gryffindor`}>
				<img className="house-crest" src={houseCrestsGryffindorCrest}></img>
				Gryffindor
			</Link>
			<Link className="house-crest-button" to={`/houses/slytherin`}>
				<img className="house-crest" src={houseCrestsSlytherinCrest}></img>
				Slytherin
			</Link>
			<Link className="house-crest-button" to={`/houses/hufflepuff`}>
				<img className="house-crest" src={houseCrestsHufflepuffCrest}></img>
				Hufflepuff
			</Link>
			<Link className="house-crest-button" to={`/houses/ravenclaw`}>
				<img className="house-crest" src={houseCrestsRavenclawCrest}></img>
				Ravenclaw
			</Link>
		</div>
	)
}

export default Houses