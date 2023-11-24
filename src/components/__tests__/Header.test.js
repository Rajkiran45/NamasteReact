import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux";
import appStore from "../../utils/redux/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";


it('should render Header Component with Login Button', () => { 
    render(
        <BrowserRouter>
    <Provider store={appStore}>
        <Header/>
    </Provider>
        </BrowserRouter>
    );


    // const loginButton = screen.getByRole("button");
    const loginButton = screen.getByRole("button",{name: "Login"});

    expect(loginButton).toBeInTheDocument();
 });
it('should render Header Component with Cart Items with 0', () => { 
    render(
        <BrowserRouter>
    <Provider store={appStore}>
        <Header/>
    </Provider>
        </BrowserRouter>
    );


    // const cartItems = screen.getByText("Cart🛒(0)");
    // we can use regex to find text approx by just adding like this /abc/
    const cartItems = screen.getByText(/Cart/);

    expect(cartItems).toBeInTheDocument();
 });
it('should change login to logout by onClick', () => { 
    render(
        <BrowserRouter>
    <Provider store={appStore}>
        <Header/>
    </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button",{ name: "Login"});

    fireEvent.click(loginButton);
    // fireevent is used when a component keeps changing by an event

    const logoutButton = screen.getByRole("button",{ name: "Logout"});

    expect(logoutButton).toBeInTheDocument();
 });