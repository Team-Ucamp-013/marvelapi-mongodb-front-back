import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

const App = () => {
  const [marvel, setMarvel] = useState([])
  const [backDatos, setDatos] = useState([])

  const getMarvelAPI = async() =>{
    const url = 'https://gateway.marvel.com:443/v1/public/characters?apikey=d023408b0642f897db18a8eeb6cf7545&ts=1679526990&hash=4dbfe9bf912345a8d96fcabc1c50b8dc'
    const {data: {data: {results}}}= await axios.get(url)
    console.log(results)
    setMarvel(results)
  }

   const handleSubmit = async(element) =>{
    if(element){
      const dataTosend = {
        name: element.name,
        description: element.description,
        modified:element.modified
        }
    
        const url = 'http://localhost:5003/marvel'
        const response = await axios.post(url, dataTosend)
        console.log("post", response)
        setDatos(response)
    }
   }

  useEffect(()=>{
    getMarvelAPI();
    handleSubmit();
  },[]); 
  console.log("aqui estado",marvel)
  return (
    <div>
 <Container>
  <Row>
  {marvel.map(element =>
        <Card key={element.id} md={4} style={{width: '18rem'}}>
         <img src={`${element.thumbnail.path}.${element.thumbnail.extension}`} />
         <Card.Title>{element.name} <button onClick={()=> handleSubmit(element)}>★</button></Card.Title>
        </Card>
    )}
  </Row>
 </Container>
      
    </div>
  )
}

export default App
