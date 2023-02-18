import { fireEvent, render,screen, waitFor } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import App from "../App";
import Navigation from "./Navigation";



let container: HTMLElement|null = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container!);
  container!.remove();
  container = null;
});

describe('i am going to test if this componenets renders correctly',()=>{
    it('navigation component rendering',()=>{
        
        render(<App />)

        let homeLink : HTMLElement = screen.getByText(/Ehealth/i)
        let appointmentLink : HTMLElement = screen.getByText(/Appointments/i)
      
        expect(homeLink).toBeInTheDocument()
        expect(appointmentLink).toBeInTheDocument()
       

    })

    it('search is rendering',()=>{
        
      render(<App />)

        let searchButton : HTMLElement = screen.getByTestId('search-test-id')
     // let appointmentLink : HTMLElement = screen.getByText(/Appointments/i)
    
      expect(searchButton).toBeInTheDocument()
    //  expect(appointmentLink).toBeInTheDocument()
     

  })

    it('list of doctors is rendered',async()=>{
          
      render(<App />)

        let searchButton : HTMLElement = screen.getByTestId('search-test-id')
      // let appointmentLink : HTMLElement = screen.getByText(/Appointments/i)

      //  expect(searchButton).toBeInTheDocument()
      
        //expect(screen.getAllByTestId('sr-main-section')).toThrow()

        //fireEvent.click(searchButton)

       

        
      //  expect(appointmentLink).toBeInTheDocument()
    //  screen.debug()

    // let doctorsList : HTMLElement = screen.getByRole('div',{name: /search-list/i})
    //   await waitFor(()=>screen.getAllByTestId('sr-main-section'))  

    //   let searchItems : HTMLElement[] = screen.getAllByTestId('sr-main-section')
     
     
    //  // expect(searchItems).toBeInTheDocument()

    //   expect(searchItems).toHaveLength(6)


      

    })





})