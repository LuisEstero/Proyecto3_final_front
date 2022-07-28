import React, { useState } from 'react'
import styled from '@emotion/styled'
import InputCustom from '../components/InputCustom'
import moment from 'moment'


const Container = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
text-align: center;
`

const Text = styled.p`
display:flex;
flex-direction:column;
color: ${props => props.colorText && props.colorText};
`


const OficinaPage = () => {
    const [color, setColor] = useState('')
    const [showText, setShowText] = useState(false)
    const [book , setBook] = useState({salaName:'', daySelected:'', nameUser:'', surnameUser:'',emailUser:'',})

    const handleChange = ( e) => {
        setBook({...book, [e.target.name]: e.target.value})
    }
    const today = new Date()
    const todayFormated = moment(today).format('yyyy-mm-dd')
    console.log(book.daySelected)
    
  return (
    <Container>
      
        
        {/* {showText ? <Text colorText={color}>OficinaPage</Text> : <Text>el texto está oculto</Text>}
        <button onClick={() => setColor('red')}>Rojo</button>
        <button onClick={() => setColor('blue')}>Azul</button>
        <button onClick={() => setColor('green')}>Verde</button>
        <button onClick={() => setShowText(!showText)}>{showText ?'Ocultar Texto' : 'Mostrar Texto'}</button> */}
<InputCustom value={book.salaName} handleChange={handleChange} type='text' legendName='Room Name' name='salaName'/>
<InputCustom value={book.nameUser} handleChange={handleChange} type='text' legendName='Name' name='nameUser'/>
<InputCustom value={book.surnameUser} handleChange={handleChange} type='text' legendName='Persons' name='surnameUser'/>
<InputCustom value={book.emailUser} handleChange={handleChange} type='text' legendName='Email' name='emailUser'/>
<InputCustom minDate={todayFormated} value={book.daySelected} handleChange={handleChange} type='date' legendName='Date' name='daySelected'/>


<a href='/formulario-reserva'><button className='boton-reserva'>Reserves </button></a>
        

        </Container>
  )
}




export default OficinaPage