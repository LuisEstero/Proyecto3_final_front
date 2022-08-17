import { Button } from 'bootstrap'
import React from 'react'
import { useState, useEffect } from 'react'
import { getSalaReunionesService } from '../services/salaReuniones.services'
import ButtonSala from '../components/Button-Card'
import { RowContainer } from './OficinaPage'


function SalaReunionesPage() {
  const [salaReuniones, setSalaReuniones] = useState([])
  const getAllSalaReuniones = async () => {
    try {
      const response = await getSalaReunionesService()
      console.log(response)
      setSalaReuniones(response.data)
      console.log(response.data)
    } catch (err) {
      console.log(err)
    }
  
  }
  useEffect(() => {
    getAllSalaReuniones()
  }, [])
  return (
    <RowContainer>
      {salaReuniones.map((sala) => {
        return <ButtonSala {...sala} />
      })}
    </RowContainer>
  )
}



export default SalaReunionesPage
