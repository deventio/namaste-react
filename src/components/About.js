import User from "./User";
import UserClass from "./UserClass";
import React from "react";
class About extends React.Component{
  constructor(props){
    super(props);
    console.log("About Constructor")
  }

   componentDidMount(){
        console.log("Parent Component Did Mount");
    }
  render(){
      console.log("About Render")
     return (
    <div>
      <h1>About</h1>
      <h2>Namaste React Course Work done by Upasana</h2>
    
    <UserClass  name={"Upasana Sharma(class)"} location={"Kolkata, India"}/>
    <UserClass  name={"Elon Musk"} location={"US"}/>
    </div>
  );
  }
}

/* 
- Parent Constructor
- Parent render

    - First Constructor
    - First Render

    - Second Constructor
    - Second Render

    <DOM UPDATED - IN SINGLE BATCH>

    - First ComponentDidMount
    - Second ComponentDidMount
    
- Parent ComponentDidMount

*/

export default About;
