import { useState, useEffect } from 'react'

import { getCharacters } from '../../api/axios.js'
import Loading from '../../Components/Loading/Loading'
import CharacterInfo from '../../Components/CharacterInfo/CharacterInfo'
import SearchBar from '../../Components/SearchBar/SearchBar'
import './style.css'

const Characters = () => {
    const [characters, setCharacters] = useState([])
    const [loading, setLoading] = useState(false)
    const [searchResults, setSearchResults] = useState([])

    useEffect(() => {
        setLoading(true)
        getCharacters().then(res => {
            setCharacters(res)
            return res
        }).then(res => {
            setSearchResults(res)
        })
        setLoading(false)
    }, [])

    if(loading) {
        return <Loading />
    }

  return (
    <>
        <SearchBar totalResults={characters} setSearchResults={setSearchResults} />
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
    </>
  )
}

export default Characters