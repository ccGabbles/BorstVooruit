import React, { useEffect, useState } from 'react'
import "./Chat.css"
import socketIOClient from 'socket.io-client'
import Card from 'react-bootstrap/Card'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import { ENDPOINT } from '../../constants'

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
    <div className="Chat">
      <Card style={{ width: '18rem' }}>

  <Card.Body>
    <Card.Title className="Title">Borst Vooruit Chat</Card.Title>
    <InputGroup >
    <FormControl
      className="chatInput"
      placeholder="Type your message..."
      type="text"
      onChange={(event) => setNewMessage(event.target.value)}
      value={newMessage}
    />
  
  </InputGroup>
    <button className="chatButton" type="submit" onClick={submitForm}>Verzend</button>
  </Card.Body>
{messages.map((message)=> {
  return ( <div className="chatText"  >

  <p>{message}</p>
  </div>)
})}
</Card>
</div>
  )
}