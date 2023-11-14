import { useEffect, useState } from "react";

export function UserFunction({name,location}){
    const [count, setCount] = useState(0);

    useEffect(()=>{
        //API Call to be made
    },[])

    return(
        <div>
            <h3>Functional Based Card</h3>
            <p>Name: {name}</p>
            <p>Location: {location}</p>
            <p>Count:{count}</p>
            <button onClick={()=>{
                setCount(count + 1);
            }}>Click to Increase</button>
        </div>
    );
}










/*
- UseEffect has a Callback function and a dependency Array 
Eg:  useEffect(()=>{
    ----- Here the API Call is made in this function ---


},[ ]);     -------- Here [] empty array is used to render the callback function only once

- Here we can say as per class based components useffect Callback function is like componentDidMount, and [ ] array is like componentDidUpdate
- But componentDidUnmount can be used in functional Components by adding return to the callback function 
    - useEffect(()=>{
        console.log("Use Effect is Called")
        return () =>{
            console.log("useEffect is Returned")
        };
    }, [ ]);

    console.log("Render");
- Now here the Render is called first then UseEffect is called but useEffect is retuned when we change the path to other compoents like from about to dashboard

*/
