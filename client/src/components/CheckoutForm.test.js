import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render (<CheckoutForm />)

    const header = screen.getByText(/checkout form/i)
    expect(header).toBeTruthy()
});

test("form shows success message on submit with form details", async () => {
    render (<CheckoutForm />)

    const firstName = screen.getByLabelText(/first name:/i)
    const lastName = screen.getByLabelText(/last name:/i)
    const address = screen.getByLabelText(/address:/i)
    const city = screen.getByLabelText(/city:/i)
    const state = screen.getByLabelText(/state:/i)
    const zip = screen.getByLabelText(/zip:/i)

    fireEvent.change(firstName, {target: {value: 'Alden', name: 'firstName'}})
    fireEvent.change(lastName, {target: {value: 'Ho', name: 'lastName'}})
    fireEvent.change(address, {target: {value: '555 West St', name: 'address'}})
    fireEvent.change(city, {target: {value: 'Manhattan', name: 'city'}})
    fireEvent.change(state, {target: {value: 'NY', name: 'state'}})
    fireEvent.change(zip, {target: {value: '85005', name: 'zip'}})

    const button = screen.getByRole('button')
    fireEvent.click(button)

    const message = await screen.getByText(/alden/i)
    expect(message).toBeTruthy()
});
