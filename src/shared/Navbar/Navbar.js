import { useTheme } from "@mui/material/styles";
import { useContext, useState } from "react";
import { ColorModeContext } from "../../theme";
import NavbarView from "./NavbarView";


const Navbar = () =>{
  const colorMode = useContext(ColorModeContext);
  const [anchorElNav, setAnchorElNav] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [seeProfile, setSeeProfile] =useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const theme = useTheme();

  const handleProfileMenu = (data) => {
    console.log(data);
    setSeeProfile(false);
  };



  return (
    <>
      <NavbarView colorMode={colorMode} theme={theme} handleProfileMenu={handleProfileMenu} seeProfile={seeProfile} setSeeProfile={setSeeProfile} />
    </>
  )    
}

export default Navbar