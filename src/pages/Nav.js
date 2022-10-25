import { NavLink } from "react-router-dom";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import HolidayVillageOutlinedIcon from '@mui/icons-material/HolidayVillageOutlined';
import LibraryAddOutlinedIcon from '@mui/icons-material/LibraryAddOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

export default function Nav() {
  return (
    <nav style={{position: "fixed", bottom: "0", backgroundColor: "lightgray", color: "white", width: "100%", height: "100px"}}>
      
      <NavLink to="/dashboard"><DashboardOutlinedIcon/></NavLink>
      <NavLink to="/shops"><HolidayVillageOutlinedIcon/></NavLink>
      <NavLink to="/addpost"><LibraryAddOutlinedIcon/></NavLink>
      <NavLink to="/profile"><AccountCircleOutlinedIcon/></NavLink>

      
    </nav>
  );
}
