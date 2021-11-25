import React from 'react';
import { Card, Button } from "react-bootstrap"
const ContactCard = ({item, deleteContact, getContactToEdit}) => {
    return (
        <Card className="m-2 bg-dark text-light" style={{ width: "18rem", borderRadius: "30px"}}>
        <Card.Img variant="top" src={item.photo} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
            {item.lastName}
          </Card.Text>
          <Card.Text>
            {item.phone}
          </Card.Text>
          <Button variant="danger" className="m-1" onClick={() => deleteContact(item.id)}>Delete</Button>
          <Button onClick={() => getContactToEdit(item)} variant="success" className="m-1">Edit</Button>
        </Card.Body>
      </Card>
    );
};

export default ContactCard;