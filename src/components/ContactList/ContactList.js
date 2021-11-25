import React from 'react';
import ContactCard from '../ContactCard/ContactCard';
const ContactList = ({ contacts, deleteContact, getContactToEdit}) => {
    return (
        <div className="d-flex flex-wrap justify-content-center">
            {contacts.map((item) => (
                <ContactCard key={item.id} item={item} deleteContact={deleteContact} getContactToEdit = {getContactToEdit}/>
            ))}
        </div>
    );
};

export default ContactList;