import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Link from "./Link";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);

function App() {
  return (
    <div>
      <NavBar user={user} />
      <Home user={user} />
      <About user={user} />
      <Link user={user}/>
    </div>
  );
}

export default App;
