import React, {useEffect, useState} from "react"
import {Col, Container, Row} from "react-bootstrap"
import './App.css'


function App() {
  const [message, setMessage] = useState("")
  const [counter, setCounter] = useState(5000)

  useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000)
    counter % 5 === 0 && setMessage("")
    counter % 10 === 0 &&
      fetch("http://localhost:8080/api")
        .then(r => r.json())
        .then(data => setMessage(data.text))
        .catch(error => setMessage("Error occurred: " + error))
  }, [counter])

  return (
    <Container>
      <Row>
        <Col className={"color3"} style={{padding: 10}}>
          <h1>Architecture Ref. Card 05 (Frontend)</h1>
          <br/>

          <div style={styles.ball}>{counter}</div>
          { message.length>0 &&
            <p>Answer from backend: "{ message }"</p>
          }
        </Col>
      </Row>
    </Container>
  )
}

const styles = {
  ball: {
    width: '100px',
    height: '100px',
    backgroundColor: '#7D6C8C',
    position: 'relative',
    borderRadius: '50px',
    animation: 'sender 4s infinite',
    /*animationName: 'sender',
    animationDuration: '4s',
    animationIteration: 'infinity'*/
    textAlign: 'center',
    paddingTop: '20px',
    color: 'white',
  },
}

export default App;
