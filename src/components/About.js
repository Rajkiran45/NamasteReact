import React from 'react';
import { UserFunction } from "./Class&Function/UserFunction";
import { UserClass } from "./Class&Function/UserClass";
import UserContext from '../utils/UserContext';

class About extends React.Component{
    constructor(props) {
        super(props);
        // console.log('Parent Constructor')
    }

    componentDidMount(){
        // console.log('Parent ComponentDidMount');
    }

    render() {
        // console.log('Parent Render')
        return(
        <div>
            <UserContext.Consumer>
                {({ loggedInUser }) => (
                    <h1 className="font-bold text-xl">{loggedInUser}</h1>
                )}
            </UserContext.Consumer>
            <p>This made by using Class based Components</p>
            <h2>Class Vs Functional</h2>
            {/* <UserFunction name={"Rajkiran (Functional)"} location={"Banglore"}/> */}
            {/* <UserClass name={"First"} location={"Hyderabad"}/> */}
            {/* <UserClass name={"Second"} location={"Singapore"}/> */}
            {/* <UserClass name={"Third"} location={"Delhi"}/> */}
        </div>
        );
    }  
}
 
export default About;














/* ----- Notes On Lifecycle -----  
Basically Life Cyle is Done by this Order
 - Constructor
 - Render
 - ComponentDidMount

No it is not exactly currect way to remember Because if there are Multiple Components then You Get Confused 
So the Correct way React Does is to Optimise the code effectively and show some html data to user before triggering any api calls or data

- Parent Constructor
- Parent Render

    - First Child Constructor
    - First Child Render
    - Second Child Constructor
    - Second Child Render
    - Third Child Constructor
    - Third Child Render

    - First Child ComponentDidMount
    - Second Child ComponentDidMount
    - Third Child ComponentDidMount

- Parent ComponentDidMount


Because React First Gives the User All Render Functions and then Batches or Combines all ComponentDidMount phases to reduce the time for DOM Manipulation
There are TWO Stages 1) Render Stage and 2) Commit Stage  constructor and render comes under Render stage and componentDidMount comes under Commit stage

Look at this Diagram for more information 
https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
*/