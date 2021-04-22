import React from 'react';
import ResusableForm from './ReusableForm';

function EditTicketForm (props) {
  return (
    <React.Fragment>
      <ResusableForm
      buttonText="Update Ticket" />
    </React.Fragment>
  );
}

export default EditTicketForm;
