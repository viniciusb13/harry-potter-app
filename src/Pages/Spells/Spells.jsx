import { useState, useEffect } from 'react'
import axios from 'axios'

import Loading from '../../Components/Loading/Loading'
import backgroundCard from '../../assets/background-card.jpeg'
import './style.css'

const Spells = () => {
  const [spells, setSpells] = useState([])
  const [loading, setLoading] = useState(false)

  const getSpells = async () => {
      try {
          setLoading(true);
          const response = await axios.get('https://hp-api.onrender.com/api/spells/')
          setSpells(response.data)
          setLoading(false);
      } catch (error) {
          setLoading(false)
          console.log(error)
      }
  }

  useEffect(() => {
      getSpells()
  }, [])

  if(loading) {
      return <Loading />
  }

  return (
    <div className="spell-list-container">
      {
        spells.map((spell, index) => {
          return (
            <div key={index} className="spell-card-background">
              <div className="spell-card">
                <h2>{spell.name}</h2>
                <p>{spell.description}</p>
              </div>
            </div>
          )
        })
      }
      {/* <div className="spell-card">
        Cartão de Feitiço
      </div> */}
    </div>
  )
}

export default Spells