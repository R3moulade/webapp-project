import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav style={{position: "fixed", bottom: "0", backgroundColor: "lightgray", color: "white", width: "100%", height: "100px"}}>
      
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/shops">Shops</NavLink>
      <NavLink to="/addpost">Add Post</NavLink>
      <NavLink to="/profile">Profile</NavLink>

      
    </nav>
  );
}
