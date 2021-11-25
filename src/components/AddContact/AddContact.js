import React, { useState } from 'react';

const AddContact = ({addContact}) => {
    const [newContact, setNewContact] = useState({
        name: "",
        lastName: "",
        phone: ""
    })
    function handleValues (e){
        let contact = {
            ...newContact,
            [e.target.name]: e.target.value
        }
    
        setNewContact(contact)
        
      }
      function checkValues (){
        if(!newContact.name || !newContact.lastName || !newContact.phone){
          alert('Заполните поля!')
          return
        }
        setNewContact({name:'', lastName:'', phone:'', photo:''})
        addContact({...newContact, id: Date.now()})
      }
    return (
        <div className="d-flex flex-column align-items-center mt-3 mb-3">
            <input
        value={newContact.name}
        onChange={handleValues}
        type="text"
        placeholder="Name"
        name="name"
        className="col-3 mb-1"
        // style={{backgroundColor: "", color: "white"}}
      />
      <input
        value={newContact.lastName}
        onChange={handleValues}
        type="text"
        placeholder="LastName"
        name="lastName"
        className="col-3 mb-1"
      />
      <input
        value={newContact.phone}
        onChange={handleValues}
        type="text"
        placeholder="Phone"
        name="phone"
        className="col-3 mb-1"
      />
      <input
        value={newContact.photo}
        onChange={handleValues}
        type="text"
        placeholder="Photo"
        name="photo"
        className="col-3 mb-1"
      />
      <button onClick={() => checkValues()} className="btn btn-success col-3">
        Add Contact
      </button>
        </div>
    );
};

export default AddContact;