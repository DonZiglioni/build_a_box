import React from "react";
import { render } from "@testing-library/react"
import Box from "./Box";

it('Renders Successfully', () => {
    render(<Box />);
})

it('Matches Snapshot', () => {
    const { asFragment } = render(<Box />);
    expect(asFragment()).toMatchSnapshot();
})