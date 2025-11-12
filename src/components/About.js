import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>Namaste React Course Work done by Upasana</h2>
    <User name={"Upasana Sharma(function)"}/>
    <UserClass  name={"Upasana Sharma(class)"} location={"Kolkata, India"}/>
    </div>
  );
};

export default About;
