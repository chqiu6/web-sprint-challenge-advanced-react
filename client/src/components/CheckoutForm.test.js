import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>);
    const h2 = screen.getByText(/checkout form/i);
    expect(h2).toBeInTheDocument;
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm/>);
    //labels
    const firstName = screen.getByLabelText(/first name/i);
    const lastName = screen.getByLabelText(/last name/i);
    const address = screen.getByLabelText(/address/i);
    const city = screen.getByLabelText(/city/i);
    const state = screen.getByLabelText(/state/i);
    const zip = screen.getByLabelText(/zip/i);

    //form values
    fireEvent.change(firstName, {target: {value : "Chucky"}});
    expect(firstName).toHaveValue("Chucky");

    
    fireEvent.change(lastName, {target: {value : "Qiu"}});
    expect(lastName).toHaveValue("Qiu");

    
    fireEvent.change(address, {target: {value : "111 test st"}});
    expect(address).toHaveValue("111 test st");

    
    fireEvent.change(city, {target: {value : "BKLYN"}});
    expect(city).toHaveValue("BKLYN");

    
    fireEvent.change(state, {target: {value : "NY"}});
    expect(state).toHaveValue("NY");

    
    fireEvent.change(zip, {target: {value : "111111"}});
    expect(zip).toHaveValue("111111");

    //button 
    const button = screen.getByRole("button", {name: /checkout/i});
    fireEvent.click(button);

    //post msgs
    const successMsg = screen.getByTestId(/successmessage/i);
    expect(successMsg).toBeInTheDocument;

    const successNameMsg = screen.getByText(/chucky qiu/i);
    expect(successNameMsg).toBeInTheDocument;

    const successAddressMsg = screen.getByText(/111 test st/i);
    expect(successAddressMsg).toBeInTheDocument;

    const successCSZMsg = screen.getByText(/bklyn, ny 111111/i);
    expect(successCSZMsg).toBeInTheDocument;
});
