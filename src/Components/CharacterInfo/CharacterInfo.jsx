import { useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from 'react-modal'
import {faXmark} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import Hufflepuff from '../../assets/houseCrestsHufflepuff.png'
import Gryffindor from '../../assets/houseCrestsGryffindor.png'
import Slytherin from '../../assets/houseCrestsSlytherin.png'
import Ravenclaw from '../../assets/houseCrestsRavenclaw.png'

import './style.css'

const CharacterInfo = (props) => {
	const [modalIsOpen, setModalIsOpen] = useState(false)
	
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
	
	Modal.setAppElement("#root")

	function openModal() {
		setModalIsOpen(true)
	}

	const closeModal = () => {
		setModalIsOpen(false)
	}

  return (
	<>
	  <Modal
			isOpen={modalIsOpen}
			onRequestClose={closeModal}
			contentLabel="Character Modal"
			overlayClassName="modal-overlay"
			className="modal-content"
		>
			<div className="background-blur">
				<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
					<div className="status" style={props.alive ? {background: '#009944'} : {background: '#cf000f'}}>
						{props.alive ? <p>Alive</p> : <p>Deceased</p>}
					</div>
					<div onClick={closeModal} className="close-modal">
						<FontAwesomeIcon icon={faXmark} style={{ fontSize: '26px' }} />
					</div>
				</div>
				<div>
					<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
						<h2>{props.name}</h2>
					</div>
				</div>
				<div className="modal-body">
					{props.image ? (
					<div>
						<img src={props.image} alt="Character Photo" height="250px"/>
					</div>) : null
					}
					<div>
						<ul>
							<li>Date of Birth: {props.dateOfBirth ? props.dateOfBirth : 'Not Found'}</li>
							<li>Species: {props.species ? props.species : 'Not Found'}</li>
							<li>Gender: {props.gender ? props.gender : 'Not Found'}</li>
							<li>House: {props.house ? props.house : 'Not Found'}</li>
							<li>Ancestry: {props.ancestry ? props.ancestry : 'Not Found'}</li>
							<li>
								Wand:
								<ul>
									<li>Wood: {props.wand.wood ? props.wand.wood : 'Not Found'}</li>
									<li>Core: {props.wand.core ? props.wand.core : 'Not Found'}</li>
									<li>Length: {props.wand.length ? props.wand.length : 'Not Found'}</li>
								</ul>
							</li>
							<li>Patronus: {props.patronus ? props.patronus : 'Not Found'}</li>
							<li>
								Alternate Names:
								{props.altNames.length === 0 ? ' Not Found' : (
									<ul>
										{props.altNames.map((altName) => {
											return <li>{altName}</li>
										})}
									</ul>
								)}
							</li>

						</ul>
					</div>
					<div className="role">
						{props.staff ? (
							<Link to={'/characters/staff'}>
								<p>Staff</p>
							</Link>
							) : ''}
						{props.student ? (
							<Link to={'/characters/students'}>
								<p>Student</p>
							</Link>
							) : ''}
					</div>
				</div>
			</div>
		</Modal>
    	<div className="character-card" onClick={openModal}>
			<h2>{props.name}</h2>
			<Link to={`/houses/${props.house}`}>
				<img src={houseImage} className="house-crest" />
			</Link>
			<div className="character-info">
				<div>
					<p>Species: {props.species ? props.species : 'Not Found'}</p>
					<p>Gender: {props.gender ? props.gender : 'Not Found'}</p>
					<p>Ancestry: {props.ancestry ? props.ancestry : 'Not Found'}</p>
					<p>Patronus: {props.patronus ? props.patronus : 'Not Found'}</p>
				</div>
			</div>
		</div>
	</>
  )
}

export default CharacterInfo