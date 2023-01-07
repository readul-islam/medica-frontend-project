import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import LightModeIcon from "@mui/icons-material/LightMode";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { ListItem, Paper } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import * as React from "react";
import {
  logoStyle,
  menuStyle,
  mobileMenuIconStyle,
  modeStyle,
  navbarContainerStyle,
} from "./styles";
const pages = ["Home", "Service", "Doctors", "Blog", "Contact us"];
const profile = [
  { id: 1, name: "Profile", icon: <AccountCircleIcon /> },
  { id: 2, name: "Dashboard", icon: <DashboardCustomizeIcon /> },
  { id: 3, name: "Notification", icon: <NotificationsIcon /> },
  { id: 4, name: "Logout", icon: <LogoutIcon /> },
];

function NavbarView({ colorMode,handleProfileMenu,setSeeProfile,seeProfile,theme}) {
  

  return (

 
      <>
        <AppBar sx={{ position: "sticky", top: 0 }}>
          <Container maxWidth="lg">
            <Toolbar disableGutters>
              <Box sx={navbarContainerStyle}>
                <IconButton
                  sx={mobileMenuIconStyle}
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  // onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={logoStyle}
                >
                  Medica
                </Typography>
                {/* page menu */}
                <Box sx={menuStyle}>
                  {pages.map((page) => (
                    <Button
                      key={page}
                      // onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: "white", display: "block" }}
                    >
                      {page}
                    </Button>
                  ))}
                </Box>

                {/* avatar */}
                <Box sx={{ position: "relative" }}>
                  <Tooltip title="Open profile">
                    <IconButton onClick={()=>setSeeProfile(!seeProfile)} sx={{ p: 0 }}>
                      <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/2.jpg"
                      />
                    </IconButton>
                  </Tooltip>
                  <IconButton
                    onClick={colorMode.toggleColorMode}
                    color="inherit"
                  >
                    {theme.palette.mode === "dark" ? (
                      <Box sx={modeStyle.iconContainer}>
                        {" "}
                        <LightModeIcon sx={modeStyle.icon} />
                        <Typography variant="6" sx={modeStyle.iconText}>
                          Light
                        </Typography>
                      </Box>
                    ) : (
                      <Box sx={modeStyle.iconContainer}>
                        {" "}
                        <DarkModeOutlinedIcon sx={modeStyle.icon} />{" "}
                        <Typography variant="6" sx={modeStyle.iconText}>
                          Dark
                        </Typography>
                      </Box>
                    )}
                  </IconButton>

                  {/* card for profile */}
                  {seeProfile && (
                    <Paper
                      sx={{
                        maxWidth: "300px",
                        position: "absolute",
                        left: { xs: -70, md: 0 },
                        top: 60,
                      }}
                      elevation={3}
                    >
                      <List>
                        {profile.map((data, index) => (
                          <>
                            <ListItem
                              key={index}
                              onClick={() => handleProfileMenu(data)}
                              disablePadding
                            >
                              <ListItemButton>
                                <ListItemIcon>{data.icon}</ListItemIcon>
                                <ListItemText primary={data.name} />
                              </ListItemButton>
                            </ListItem>
                            {!(data.id === 4) && <Divider />}
                          </>
                        ))}
                      </List>
                    </Paper>
                  )}
                </Box>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </>
  
  );
}
export default NavbarView;
