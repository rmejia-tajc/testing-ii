import React from 'react';
import {render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Display from './Display.js'
import Dashboard from '../dashboard/Dashboard.js';


describe("<Display/> Component Tests", () => {


    it("renders without crashing", () => {
  
      const sanityCheck = render(<Display />);
    });
  


    it('should check if balls and strikes reset to "0" when "hit" button is clicked', () => {
  
      const { getByText } = render(<Display />);
  
      const balls = getByText(/balls:/i);
      const strikes = getByText(/strikes:/i);

      const hitButton = getByText(/hit/i);      
      fireEvent.click(hitButton);

      expect(balls).toHaveTextContent(0);
      expect(strikes).toHaveTextContent(0);
  
    });


    describe('strike', () => {
        it('increases strikes by one when clicked', () => {

            const { getByText } = render(<Display />);

            const strikes = getByText(/strikes:/i);

            const strikeButton = getByText(/strike/i);
            fireEvent.click(strikeButton);

            expect(strikes).toHaveTextContent(1);
        })
        
    })
  
  
  
  });