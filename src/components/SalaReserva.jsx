import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getSalaReunionesService } from '../services/salaReuniones.services';

export const SalaReunionesReserva = () => {
const [sala , setSala] = useState(null);
const location = useLocation()
const id = location?.state?.id;
const getAllSalaReuniones = async ()=> {
    try {
      const response = await getSalaReunionesService();
      console.log(response)
      const data = response.data;
      const sala = data?.find((sala) => sala._id === id)
      setSala(sala);
     
      
    }catch (err){
      console.log(err)
    }
  
  }
  useEffect(() => {
   id && getAllSalaReuniones()
  }, [id]);
  

  return (
    <div>
      <img src={sala?.imagen} alt="sala" width={700}></img> 
      <p>{sala?.name}</p>
      <p>{sala?.direccion}</p>
      <div className='descripcion-horario'>
        <p className='horarios'>{sala?.Horarios}</p>
      </div>
      
      <div className='descripcion-texto'>
        <p className='descripcion'>{sala?.Descripcion}</p>
      </div>

      <div 
      className='descripcion-precio'>
      <p className='descripcion'>{sala?.Precio}</p> 
      </div>
      
      
      <a href='/formulario-reserva'><button className='boton-reserva'>Reserve Date</button></a>
     
    </div>
  )
}

export default SalaReunionesReserva
