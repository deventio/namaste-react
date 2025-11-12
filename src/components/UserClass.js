import React from "react";
class UserClass extends React.Component{
    constructor(props){
          console.log("UserClass constructor");
        super(props);
        console.log(props);
        this.state={
            count: 22,
            count2: 2
        }
    }

    componentDidMount(){
        console.log("Child Component Did Mount");
    }
    render(){

        console.log("UserClass render");
        const {name, location} = this.props;
        const {count, count2} = this.state;
        return( 
            <div className="user-card">
                <h1>Count: {count}</h1>
                   <h1>Count2: {count2}</h1>
            <button onClick={()=>{
                this.setState({
                    count: this.state.count+1,
                    count2:this.state.count2+1
                })
            }}>Count Increase</button>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h2>Social: Twitter</h2>
            </div>
        );
    }
}

export default UserClass;