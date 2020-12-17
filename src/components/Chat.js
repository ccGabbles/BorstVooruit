import React, { useEffect, useState } from 'react'
import socketIOClient from 'socket.io-client'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import { ENDPOINT } from '../constants'

export default function Chat() {
  const [message, setMessage] = useState()
  const [response, setResponse] = useState()

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT)
    
    socket.on("FromAPI", data => {
      setResponse(data)
    });
  }, [])
  
  function submitForm(event) {
    setMessage("")
  }
   
  return (
    <div>
      <Card style={{ width: '18rem' }}>

  <Card.Body>
    <Card.Title>Borst Vooruit Chat</Card.Title>
    <InputGroup className="mb-3">
    <FormControl
      placeholder="Type tekst"
      value={message}
    />
  
  </InputGroup>
    <Button variant="primary" type="submit" onClick={submitForm}>Verzend</Button>
  </Card.Body>
</Card>
</div>
  )
}