import React, {lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Contact from "./components/Contact";
import ErrorElement from "./components/ErrorElement";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/redux/appStore";
import Cart from "./components/Cart";


const About = lazy(()=> import("./components/About"));
const Grocery = lazy(()=> import("./components/Grocery/Grocery"));

const AppLayout = () => {

    const [userName, setUserName] = useState();

    useEffect(()=>{
        const data = {
            name: "Rajkiran",
        };
        setUserName(data.name);
    },[])

    return (
    <Provider store={appStore} >
    <UserContext.Provider value={{ loggedInUser: userName, setUserName}}>
    <div className="app">
        <Header />
        <Outlet />
    </div>
    </UserContext.Provider>
    </Provider>
    );
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children : [
            {
                path: '/',
                element : <Body />
            },
            {
                path: '/about',
                element : 
                <Suspense fallback={<h1>Loading...!</h1>}>
                    <About />
                </Suspense>
            },
            {
                path: '/contact',
                element : <Contact />
            },
            {
                path: '/grocery',
                element : 
                <Suspense fallback={<h1>Loading...!</h1>}>
                    <Grocery />
                </Suspense>
            },
            {
                path: '/restaurants/:resId',
                element: <RestaurantMenu/>
            },
            {
                path: '/cart',
                element: <Cart />
            }
        ],
        errorElement: <ErrorElement />
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);