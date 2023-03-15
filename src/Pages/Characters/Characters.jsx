import { useState, useEffect } from 'react'

import { getCharacters } from '../../api/axios.js'
import Loading from '../../Components/Loading/Loading'
import CharacterInfo from '../../Components/CharacterInfo/CharacterInfo'
import './style.css'

const Characters = () => {
    const [characters, setCharacters] = useState([])
    const [loading, setLoading] = useState(false)
    // const [q, setQ] = useState("")

    useEffect(() => {
        setLoading(true)
        getCharacters().then(res => {
            setCharacters(res)
            setLoading(false)
        })
    }, [])

    if(loading) {
        return <Loading />
    }

  return (
    <div className="character-list">
        {/* <div className="search-wrapper">
            <label htmlFor="search-form">
                <input
                    type="search"
                    name="search-form"
                    id="search-form"
                    className="search-input"
                    placeholder="Search for..."
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                />
                {console.log(q)}
            </label>
        </div> */}
        {/* <div className="character-list"> */}
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
    // </div>
  )
}

export default Characters