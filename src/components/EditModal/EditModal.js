import React from 'react';
import { Button, Modal } from "react-bootstrap";
const EditModal = ({show, handleClose, contactToEdit, setContactToEdit, updateContact}) => {
    // console.log("this is product", productToEdit);
function handleValues (e){
    let editedContact = {
        ...contactToEdit,
        [e.target.name]: e.target.value
    }
    setContactToEdit(editedContact)
    console.log(editedContact)
}
    return (
        <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex flex-column align-items-center">
            <input onChange={handleValues} value={contactToEdit.name} placeholder="Name" name="name" className="mb-1"/>
            <input onChange={handleValues} value={contactToEdit.lastName} placeholder="LastName" name="lastName" className="mb-1"/>
            <input onChange={handleValues} value={contactToEdit.phone} placeholder="Phone" name="phone" className="mb-1"/>
            <input onChange={handleValues} value={contactToEdit.phone} placeholder="Photo" name="photo" className="mb-1"/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => updateContact()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    );
};

export default EditModal;