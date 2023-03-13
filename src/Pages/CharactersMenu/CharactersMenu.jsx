// import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import './style.css'

const CharactersMenu = () => {
	return (
		<div className="characters-menu">
			<Link className="button" to={`/characters/students`}>
				Students
			</Link>
			<Link className="button" to={`/characters/staff`}>
				Staff
			</Link>
		</div>
	)
}

export default CharactersMenu