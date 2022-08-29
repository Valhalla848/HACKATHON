import React from "react";
import BoltIcon from "@mui/icons-material/Bolt";
import ForumIcon from "@mui/icons-material/Forum";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import "../styles/Navbar.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Box, Menu, MenuItem, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = () => {
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const style = {
    width: "300px",
    height: "200px",
  };
  return (
    <div className="MainNavbar">
      <div className="navbar">
        <div className="navbar-left">
          <div className="navbar-left-logo">
            {/* <BoltIcon className="navbar-left-logo-icon" /> */}
          </div>
          <div className="navbar-left-nav">
            <div
              className="navbar-left-nav-text"
              onClick={() => navigate("/models")}
            >
              MODELS
            </div>
            <div
              className="navbar-left-nav-text"
              onClick={() => navigate("/custom")}
            >
              CUSTOM SOLUTIONS
            </div>
            <div
              className="navbar-left-nav-text"
              onClick={() => navigate("/owner")}
            >
              OWNERSHIP
            </div>
            <div
              className="navbar-left-nav-text"
              onClick={() => navigate("/sport")}
            >
              MOTORSPORT
            </div>
          </div>
        </div>
        <div className="navbar-right">
          <div className="navbar-right-dop">
            <div
              className="navbar-right-dop-text"
              onClick={() => navigate("/dealer")}
            >
              DEALERSHIPS
            </div>
            <div
              className="navbar-right-dop-text"
              onClick={() => navigate("/museum")}
            >
              MUSEUM
            </div>
            <div className="navbar-right-dop-text">STORE</div>
          </div>
          <div className="navbar-right-icon">
            <div className="navbar-right-icons-icon">
              <ForumIcon />
            </div>
            <div className="navbar-right-icons-icon">
              <AccountCircleIcon
                className="Auth-icon"
                onClick={handleOpenUserMenu}
              />
            </div>
            <Menu
              sx={{
                mt: "45px",
                ml: "60px",
                d: "flex",
                flexDirection: "column",
              }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <Typography textAlign="center">
                {" "}
                <AccountCircleIcon />{" "}
              </Typography>
              <MenuItem className="Auth-in" onClick={handleCloseUserMenu}>
                <Typography
                  textAlign="center"
                  onClick={() => navigate("/login")}
                >
                  SIGN IN
                </Typography>
              </MenuItem>
              <MenuItem className="Auth-up" onClick={handleCloseUserMenu}>
                <Typography
                  textAlign="center"
                  onClick={() => navigate("/register")}
                >
                  SIGN UP
                </Typography>
              </MenuItem>
            </Menu>

            <div className="navbar-right-icons-icon">
              <MenuIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
