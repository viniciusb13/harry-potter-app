import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Loading from '../../Components/Loading/Loading'
import CharacterInfo from '../../Components/CharacterInfo/CharacterInfo'
import axios from 'axios'

const HouseCharacters = () => {
    const { house } = useParams();

    const [houseCharacters, setHouseCharacters] = useState([])
    const [loading, setLoading] = useState(false)

    const getCharactersFromHouse = async () => {
        try {
            setLoading(true);
		    const response = await axios.get(`https://hp-api.onrender.com/api/characters/house/${house}`)
		    setHouseCharacters(response.data)
            setLoading(false);
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    useEffect(() => {
		getCharactersFromHouse()
	}, [])

    if(loading) {
        return <Loading />
    }

  return (
    <div>
        <div className="character-list">
        {
            houseCharacters.map((character, index) => {
                return (
                    <CharacterInfo
                        key={index}
                        name={character.name}
                        image={character.image}
                        species={character.species}
                        gender={character.gender}
                        house={character.house}
                        dateOfBirth={character.dateOfBirth}
                        yearOfBirth={character.yearOfBirth}
                        ancestry={character.ancestry}
                        eyeColour={character.eyeColour}
                        hairColour={character.hairColour}
                        wand={character.wand}
                        patronus={character.patronus}
                    />
                )
            })
        }
    </div>
    </div>
  )
}

export default HouseCharacters