import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import Loading from '../../Components/Loading/Loading'
import CharacterInfo from '../../Components/CharacterInfo/CharacterInfo'

const StudentCharacters = () => {
    const { type } = useParams();
    const [characterType, setCharacterType] = useState([])

    const [loading, setLoading] = useState(false)

    const getCharactersByType = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`https://hp-api.onrender.com/api/characters/${type}`)
            setCharacterType(response.data)
            setLoading(false);
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    useEffect(() => {
        getCharactersByType()
    }, [])

    if(loading) {
        return <Loading />
    }

  return (
    <div>
        <div className="character-list">
            {
                characterType.map((character, index) => {
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

export default StudentCharacters