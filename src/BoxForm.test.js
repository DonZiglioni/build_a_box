import React from "react";
import { render } from "@testing-library/react"
import BoxForm from "./BoxForm";

it('Renders Successfully', () => {
    render(<BoxForm />);
})

it('Matches Snapshot', () => {
    const { asFragment } = render(<BoxForm />);
    expect(asFragment()).toMatchSnapshot();
})