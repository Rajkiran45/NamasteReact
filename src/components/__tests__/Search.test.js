import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body"
import MOCK_API_DATA from "../__tests__/mocks/mockresListData.json"
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_API_DATA);
        }
    })
});


it('should Search res List for Snacks text input', async() => { 

    await act(async()=>render(
    <BrowserRouter>
        <Body/>
    </BrowserRouter>
    ));

        const searchBtn = screen.getByRole("button",{name: "Search"});

        const searchInput = screen.getByTestId('searchInput');


        fireEvent.change(searchInput,{target: { value: "snacks"}})
        fireEvent.click(searchBtn);


       const cardsAfterSearch =  screen.getAllByTestId('resCard');
        // expect(searchBtn).toBeInTheDocument();
        expect(cardsAfterSearch.length).toBe(2);


 })
it('should filter Top Rated Restaurant', async() => { 

    await act(async()=>render(
    <BrowserRouter>
        <Body/>
    </BrowserRouter>
    ));
       const cardsBeforeFilter =  screen.getAllByTestId('resCard');
        expect(cardsBeforeFilter.length).toBe(9);
    
      const topRatedBtn = screen.getByRole('button',{name: 'Top Rated Restaurant'});
        fireEvent.click(topRatedBtn);

      const cardsAfterFilter = screen.getAllByTestId('resCard');
        expect(cardsAfterFilter.length).toBe(9)
 })
