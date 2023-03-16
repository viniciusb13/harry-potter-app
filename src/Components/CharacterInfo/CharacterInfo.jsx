import { useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from 'react-modal'

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
			<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
				<div className="status" style={props.alive ? {background: 'green'} : {background: 'red'}}>
					{props.alive ? <p>Alive</p> : <p>Deceased</p>}
				</div>
				<div>
					<h2>{props.name}</h2>
				</div>
				<div onClick={closeModal} className="close-modal">X</div>
			</div>
			<div className="modal-body">
				<div>
					{ props.image ? <img src={props.image} alt="Character Photo" height="250px"/> : null }
				</div>
				<div>
					<ul>
						<li>Date of Birth: {props.dateOfBirth}</li>
						<li>Species: {props.species}</li>
						<li>Gender: {props.gender}</li>
						<li>House: {props.house}</li>
						<li>Ancestry: {props.ancestry}</li>
						<li>
							Wand:
							<ul>
								<li>Wood: {props.wand.wood}</li>
								<li>Core: {props.wand.core}</li>
								<li>Length: {props.wand.length}</li>
							</ul>
						</li>
						<li>Patronus: {props.patronus}</li>
						<li>Alternate Names: {props.altNames}</li>
					</ul>
				</div>
				<div className="role">
					{props.staff ? <p>Staff</p> : ''}
					{props.student ? <p>Student</p> : ''}
				</div>
			</div>
		</Modal>
    	<div className="character-card" onClick={openModal}>
			<h2>{props.name}</h2>
			<Link to={`/houses/${props.house}`}>
				<img src={houseImage} className="house-crest" />
			</Link>
			<div className="character-info">
				{/* <div>
					{ props.image ? <img src={props.image} alt="Character Photo" height="250px"/> : null }
					<p>Date of Birth: {props.dateOfBirth}</p>
				</div> */}
				<div>
					<p>Species: {props.species}</p>
					<p>Gender: {props.gender}</p>
					<p>Ancestry: {props.ancestry}</p>
					<p>Patronus: {props.patronus}</p>
				</div>
			</div>
		</div>
	</>
  )
}

export default CharacterInfo