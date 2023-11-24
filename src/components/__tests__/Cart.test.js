import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_RES_MENU from "./mocks/mockResMenu.json";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/redux/appStore";
import '@testing-library/jest-dom';

global.fetch = jest.fn(()=>
     Promise.resolve({
        json: ()=> Promise.resolve(MOCK_RES_MENU)
    })
)

test('should Load restaurant Menu Component', async() => { 
    await act(async()=> render(
        <BrowserRouter>
    <Provider store={appStore}>
    <RestaurantMenu/>
    </Provider>
        </BrowserRouter>
    ));
    const accordionHeader = screen.getByText('Quick Bites(2)');
    fireEvent.click(accordionHeader);

    expect(screen.getAllByTestId("foodItems").length).toBe(2);
    // expect(screen.getByText("Cart🛒(0)")).toBeInTheDocument();

    const addBtns = screen.getAllByRole("button",{name: "Add +"});
    fireEvent.click(addBtns[0]);

    // expect(screen.getByText("Cart🛒(1)")).toBeInTheDocument();
    fireEvent.click(addBtns[1]);

    // expect(screen.getByText("Cart🛒(2)")).toBeInTheDocument();
 });