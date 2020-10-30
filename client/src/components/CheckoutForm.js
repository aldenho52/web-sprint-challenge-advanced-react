import React, { useState } from "react";
import { useForm } from '../hooks/useForm'

const initialValue = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  state: "",
  zip: "",
};

// This form should be handled by a "useForm" custom hook
// Build out the logic needed for a form custom hook (see the useForm.js file)
// and replace the necessary stateful logic from CheckoutForm with the hook

const CheckoutForm = (props) => {
  // const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showSuccessMessage, handleChanges, handleMessageSubmit] = useForm(false)
  // const [values, setValues] = useState(initialValue);
  const [values, handleValueChanges, handleValueSubmit] = useForm(initialValue)

  // const handleChanges = (e) => {
  //   setValues({ ...values, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setShowSuccessMessage(true);
  // };

  return (
    <>
      <form onSubmit={handleMessageSubmit}>
        <h2>Checkout Form</h2>
        <label htmlFor='firstName'>
          First Name:
          <input
            name="firstName"
            value={values.firstName}
            onChange={handleValueChanges}
            id="firstName"
          />
        </label>
        <label htmlFor='lastName'>
          Last Name:
          <input
            name="lastName"
            value={values.lastName}
            onChange={handleValueChanges}
            id="lastName"
          />
        </label>
        <label htmlFor='address'>
          Address:
          <input
            name="address"
            value={values.address}
            onChange={handleValueChanges}
            id='address'
          />
        </label>
        <label htmlFor='city'>
          City:
          <input name="city" value={values.city} onChange={handleValueChanges} id='city' />
        </label>
        <label htmlFor='state'>
          State:
          <input name="state" value={values.state} onChange={handleValueChanges} id='state'/>
        </label>
        <label htmlFor='zip'>
          Zip:
          <input id='zip' name="zip" value={values.zip} onChange={handleValueChanges} />
        </label>
        <button>Checkout</button>
      </form>

      {showSuccessMessage && (
        <div className="success-message" data-testid="successMessage">
          <p>
            You have ordered some plants! Woo-hoo! <span role="img">🎉</span>
          </p>
          <p>Your new green friends will be shipped to:</p>
          <br />
          <br />
          <p>
            {values.firstName} {values.lastName}
          </p>
          <p>{values.address}</p>
          <p>
            {values.city}, {values.state} {values.zip}
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
