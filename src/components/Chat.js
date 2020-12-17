import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

export default function Chat() {
  const [message, setMessage] = useState()
  
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