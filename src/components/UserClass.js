import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
        this.state={
            count: 0,
            count2: 2
        }
    }
    render(){

        const {name, location} = this.props;
        return( 
            <div className="user-card">
                <h1>Count: {this.state.count}</h1>
                  <h1>Count: {this.state.count2}</h1>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h2>Social: Twitter</h2>
            </div>
        );
    }
}

export default UserClass;