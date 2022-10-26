import { NavLink } from "react-router-dom";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import LibraryAddOutlinedIcon from '@mui/icons-material/LibraryAddOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';

export default function Nav() {
  return (
    <nav style={{position: "fixed", bottom: "0", backgroundColor: "lightgray", color: "white", width: "100%", height: "100px"}}>
      
      <NavLink to="/dashboard"><DashboardOutlinedIcon/></NavLink>
      <NavLink to="/shops"><MapOutlinedIcon/></NavLink>
      <NavLink to="/addpost"><LibraryAddOutlinedIcon/></NavLink>
      <NavLink to="/profile"><AccountCircleOutlinedIcon/></NavLink>

      
    </nav>
  );
}
