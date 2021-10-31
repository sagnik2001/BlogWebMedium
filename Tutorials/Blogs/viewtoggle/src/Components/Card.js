import React from 'react'
import Card from "react-bootstrap/Card";
function CardView() {
  return (
    <div style={{display: 'flex',flexDirection: 'row'}}>
  
<Card style={{ width: '18rem',marginLeft: '2em' }}>
<Card.Body>
<Card.Title>Andrew</Card.Title>
<Card.Subtitle className="mb-2 text-muted">Age:35</Card.Subtitle>
<Card.Text>
Occupation: Doctor
</Card.Text>
<Card.Text>
Country : Australia
</Card.Text>
</Card.Body>
</Card>
<Card style={{ width: '18rem' ,marginLeft: '2em'}}>
<Card.Body>
<Card.Title>Liam</Card.Title>
<Card.Subtitle className="mb-2 text-muted">Age:42</Card.Subtitle>
<Card.Text>
Occupation: Cricketer
</Card.Text>
<Card.Text>
Country : England
</Card.Text>
</Card.Body>
</Card>
<Card style={{ width: '18rem',marginLeft: '2em' }}>
<Card.Body>
<Card.Title>Seema</Card.Title>
<Card.Subtitle className="mb-2 text-muted">Age:32</Card.Subtitle>
<Card.Text>
Occupation: HouseWife
</Card.Text>
<Card.Text>
Country : India
</Card.Text>
</Card.Body>
</Card>
    </div>
  )
}

export default CardView
