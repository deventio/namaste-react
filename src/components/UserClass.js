import React from "react";
class UserClass extends React.Component{
    constructor(props){
       
        super(props);
       // console.log(props);
        this.state={
            userInfo:{
                name: "Dummy",
                location : "Default",
                avatar_url:"http://dummy-photo.com",
            }
        }

           console.log(this.props.name+"Child constructor");
    }

    async componentDidMount(){
        console.log(this.props.name+"Child Component Did Mount");
   const data = await fetch("https://api.github.com/users/akshaymarch7");
      
   const json = await data.json();

   this.setState({
    userInfo:json
   });

   console.log(json);
    }

    componentDidUpdate(){
        console.log("componentdidipdate");
    }

      componentWillUnmount(){
        console.log("componentWillUnmount");
    }


    render(){

        console.log(this.props.name+"UserClass render");
       // const {name, location} = this.props;
       const {name, location, avatar_url} = this.state.userInfo;
       return( 
            <div className="user-card">
            <img src ={avatar_url}></img>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h2>Social: Twitter</h2>
            </div>
        );
    }
}

export default UserClass;

/***
 * 
 * Constructor (dummy)
 * Render (dummy)
 *      <HTML Dummy>
 * Component did mount
 *      <API call>
 *      <this.setstate> -> State variable is updated
 * 
 * ----- UPDATE
 * 
 *      render(API data )
 *      <HTML (new API data)>
 *      Component Did Update
 */