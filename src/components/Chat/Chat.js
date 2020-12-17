import React, { useState } from 'react'
import "./Chat.css"
import Card from 'react-bootstrap/Card'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

export default function Chat() {
  const [newMessage, setNewMessage] = useState("")
const [messages, setMessages] = useState([])
  
  function submitForm(event) {
    event.preventDefault()

    setMessages([...messages, newMessage])

    setNewMessage("")
  }
   
  return (
    <div className="Chat">
      <Card style={{ width: '18rem' }}>

  <Card.Body>
    <Card.Title style={{color:"white"}}>Borst Vooruit Chat</Card.Title>
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
  return ( <div style={{color:"white", border: "solid 1px lightgrey", margin: "0.5rem"}} >

  <p>{message}</p>
  </div>)
})}
</Card>
</div>
  )
}