import React from 'react';
import PropTypes from 'prop-types';

import './styles/index.module.css';

const ContactsList = ({ contacts, deleteContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (

      <li key={id}>
        <p>{`${name}: ${number}`}</p>
        <button type="button" onClick={() => deleteContact(id)}>Delete</button>
      </li>

    ))}
  </ul>
);

export default ContactsList;

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
