import React from "react";

export class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            count: 0,
        };
        // console.log(this.props.name + 'Child Constructor')
    }
    componentDidMount(){
        // console.log(this.props.name + 'Child ComponentDidMount')
    }
    render(){
        // console.log(this.props.name + 'Child Render')
        const {name, location} = this.props
        const {count} = this.state

        return(
            
            <div>
            <h3>Class Based Card</h3>
            <p>Name: {name}</p>
            <p>Location: {location}</p>
            <p>Count: {count}</p>
            <button onClick={()=>{ 
                this.setState({
                     count: this.state.count + 1
                    })}
        }>Click to Increase</button>
        </div>
        );
    }
}
