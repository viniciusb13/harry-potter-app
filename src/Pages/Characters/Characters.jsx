import { useState, useEffect } from 'react'
import axios from 'axios'

import Loading from '../../Components/Loading/Loading'
import CharacterInfo from '../../Components/CharacterInfo/CharacterInfo'
import './style.css'

const Characters = () => {
    const [characters, setCharacters] = useState([])
    const [loading, setLoading] = useState(false)

    const getCharacters = async () => {
        try {
            setLoading(true);
            const response = await axios.get('https://hp-api.onrender.com/api/characters/')
            setCharacters(response.data)
            setLoading(false);
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    useEffect(() => {
        getCharacters()
    }, [])

    if(loading) {
        return <Loading />
    }

  return (
    <div className="character-list">
        {
            characters.map((character, index) => {
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
  )
}

export default Characters