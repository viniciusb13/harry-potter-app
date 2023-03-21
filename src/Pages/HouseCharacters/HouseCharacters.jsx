import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { getHouse } from '../../api/axios.js'
import SearchBar from '../../Components/SearchBar/SearchBar'
import Loading from '../../Components/Loading/Loading'
import CharacterInfo from '../../Components/CharacterInfo/CharacterInfo'

const HouseCharacters = () => {
    const { house } = useParams();

    const [houseCharacters, setHouseCharacters] = useState([])
    const [loading, setLoading] = useState(false)
    const [searchResults, setSearchResults] = useState([])

    useEffect(() => {
        setLoading(true)
		getHouse(house).then(res => {
            setHouseCharacters(res)
            return res
        }).then(res => {
            setSearchResults(res)
            setLoading(false)
        })
	}, [])

    if(loading) {
        return <Loading />
    }

  return (
    <div>
        <SearchBar totalResults={houseCharacters} setSearchResults={setSearchResults} />
        <div className="character-list">
        {
            searchResults.map((character, index) => {
                return (
                    <CharacterInfo
                        key={index}
                        name={character.name}
                        image={character.image}
                        species={character.species}
                        gender={character.gender}
                        house={character.house}
                        dateOfBirth={character.dateOfBirth}
                        ancestry={character.ancestry}
                        eyeColour={character.eyeColour}
                        hairColour={character.hairColour}
                        wand={character.wand}
                        patronus={character.patronus}
                        alive={character.alive}
                        altNames={character.alternate_names}
                        staff={character.hogwartsStaff}
                        student={character.hogwartsStudent}
                    />
                )
            })
        }
    </div>
    </div>
  )
}

export default HouseCharacters