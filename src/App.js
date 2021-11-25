import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddContact from './components/AddContact/AddContact';
import ContactList from './components/ContactList/ContactList';
import EditModal from './components/EditModal/EditModal';

const App = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [contacts, setContacts] = useState([]);
  const [contactToEdit, setContactToEdit] = useState(null);
  function getContactToEdit(item) {
    setContactToEdit(item);
    handleShow();
  }
  function updateContact (){
    let arr = contacts.map((item) => {
      if(item.id !== contactToEdit.id){
        return item
      }else{
        return contactToEdit;
      }
    })
    setContacts(arr)
    handleClose()
    // console.log(arr);
  }
  function addContact(contact) {
    setContacts([...contacts, contact]);
  }
  function deleteContact(id) {
    let filteredContacts = contacts.filter((item) => item.id !== id);
    setContacts(filteredContacts);
  }
  return (
    <div>
        <AddContact addContact={addContact}/>
        {contactToEdit ? (
          <EditModal
          contactToEdit={contactToEdit}
          setContactToEdit={setContactToEdit}
          show={show}
          handleClose={handleClose}
          updateContact={updateContact}
          />
          ) : null}
          <ContactList contacts={contacts}
          getContactToEdit={getContactToEdit}
          deleteContact={deleteContact}/>
    </div>
  );
};

export default App;