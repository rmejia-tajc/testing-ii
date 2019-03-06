import React from "react";
import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";

import Dashboard from "./Dashboard.js";

describe("<Dashboard/> Component Tests", () => {



  it("renders without crashing", () => {

    const sanityCheck = render(<Dashboard />);
  });

 

  it('should display a button with "strike" on it', () => {

    const { getByText } = render(<Dashboard />);

    const text = getByText(/strike/i);

    expect(text).toBeInTheDocument();
  });

  it('should display a button with "ball" on it', () => {

    const { getByText } = render(<Dashboard />);

    const text = getByText(/ball/i);

    expect(text).toBeInTheDocument();
  });

  it('should display a button with "foul" on it', () => {

    const { getByText } = render(<Dashboard />);

    const text = getByText(/foul/i);

    expect(text).toBeInTheDocument();
  });

  it('should display a button with "hit" on it', () => {

    const { getByText } = render(<Dashboard />);

    const text = getByText(/hit/i);

    expect(text).toBeInTheDocument();
  });



});
