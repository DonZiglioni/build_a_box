import React from "react";
import { render } from "@testing-library/react"
import BoxList from "./BoxList";

it('Renders Successfully', () => {
    render(<BoxList />);
})

it('Matches Snapshot', () => {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
})