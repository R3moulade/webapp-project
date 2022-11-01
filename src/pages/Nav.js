// Natalia Blautenberg - I have added styling to the icons
import { NavLink } from "react-router-dom";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import LibraryAddOutlinedIcon from '@mui/icons-material/LibraryAddOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import "./Nav.css"

export default function Nav() {
  return (
    <nav className="fixed-bottom border" style={{position: "fixed", bottom: "0", backgroundColor: "white", color: "white", width: "100%", height: "100px"}}>
     
      <div className="test1">
      <NavLink to="/dashboard"><DashboardOutlinedIcon style={{ color: 'black', margin:"15px", fontSize: "35" }}className="test2"/></NavLink>
      <NavLink to="/shops"><MapOutlinedIcon style={{ color: 'black', margin:"15px", fontSize: "35" }}/></NavLink>
      <NavLink to="/addpost"><LibraryAddOutlinedIcon style={{ color: 'black', margin:"15px", fontSize: "35"}}/></NavLink>
      <NavLink to="/profile"><AccountCircleOutlinedIcon style={{ color: 'black', margin:"15px", fontSize: "35"}}/></NavLink>
      </div>

      
    </nav>
  );
}
