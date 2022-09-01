import React, { useEffect } from "react";
import BoltIcon from "@mui/icons-material/Bolt";
import ForumIcon from "@mui/icons-material/Forum";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import "../styles/Navbar.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Box, Menu, MenuItem, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../context/AuthContextProvider";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = () => {
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
    console.log(user);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const style = {
    width: "300px",
    height: "200px",
  };
  const { user, logout, checkAuth } = useAuth();

  useEffect(() => {
    checkAuth();
  }, [user]);

  const handleLogout = () => {
    logout();
    navigate("/");
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
            {user ? (
              <div
                className="navbar-left-nav-text"
                onClick={() => navigate("/admin")}
              >
                ADMIN
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="navbar-right">
          <div className="navbar-right-dop">
            <div className="navbar-right-dop-text">{user}</div>

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
            <div
              className="navbar-right-dop-text"
              onClick={() => navigate("/products")}
            >
              STORE
            </div>
          </div>
          <div className="navbar-right-icon">
            <div className="navbar-right-icons-icon">
              <a href="https://t.me/daniel_super_top_bot" className="href">
                {" "}
                <ForumIcon />
              </a>
            </div>
            <div
              className="navbar-right-icons-icon"
              onClick={() => navigate("/cart")}
            >
              <ShoppingCartRoundedIcon className="Cart-icon" />
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
                <abbr title={user}>
                  {" "}
                  <AccountCircleIcon sx={{ mt: 1 }} />{" "}
                </abbr>
              </Typography>

              <MenuItem className="Auth-in" onClick={handleCloseUserMenu}>
                {user ? (
                  <Typography textAlign="center" onClick={handleLogout}>
                    LOG OUT{user.first_name}
                  </Typography>
                ) : (
                  <div>
                    <Typography
                      textAlign="center"
                      onClick={() => navigate("/register")}
                    >
                      SIGN UP{user.first_name}
                    </Typography>
                    <Typography
                      textAlign="center"
                      onClick={() => navigate("/register")}
                    >
                      SIGN IN{user.first_name}
                    </Typography>
                  </div>
                )}
              </MenuItem>
            </Menu>

            {/* <div className="navbar-right-icons-icon">
              <MenuIcon />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
