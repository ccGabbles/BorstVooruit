import React, { useEffect, useState } from 'react'
import socketIOClient from 'socket.io-client'
import Card from 'react-bootstrap/Card'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import { ENDPOINT } from '../constants'

export default function Chat() {
  const [newMessage, setNewMessage] = useState("")
  const [messages, setMessages] = useState([])
  const [response, setResponse] = useState()

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT)
    
    socket.on("FromAPI", data => {
      setResponse(data)
    });
  }, [])

  function submitForm(event) {
    event.preventDefault()

    setMessages([...messages, newMessage])

    setNewMessage("")
  }
   
  return (
    <div>
      <Card style={{ width: '18rem' }}>

  <Card.Body>
    <Card.Title>Borst Vooruit Chat</Card.Title>
    <InputGroup className="mb-3">
    <FormControl
      placeholder="Type your message..."
      type="text"
      onChange={(event) => setNewMessage(event.target.value)}
      value={newMessage}
    />
  
  </InputGroup>
    <button className="chatButton" type="submit" onClick={submitForm}>Verzend</button>
  </Card.Body>
{messages.map((message)=> {
  return ( <div style={{border: "solid 1px grey", margin: "0.5rem"}} >

  <p>{message}</p>
  </div>)
})}
</Card>
</div>
  )
}