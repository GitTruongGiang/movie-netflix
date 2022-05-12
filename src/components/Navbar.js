import React, { useState } from "react";
import Netfixlogo from "../logo/images/5898144_netflix.png";
import SearchIcon from "@mui/icons-material/Search";
import useScrolly from "../hooks/useScrolly";
import {
  Box,
  Button,
  Container,
  SpeedDial,
  SpeedDialAction,
  Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import ShareIcon from "@mui/icons-material/Share";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const actions = [
  { icon: <AccountCircleIcon />, name: "Acount" },
  { icon: <SettingsIcon />, name: "Setting" },
  { icon: <ShareIcon />, name: "Share" },
];

function Navbar() {
  const auth = useAuth();
  const [scrolly] = useScrolly();
  let navigate = useNavigate();
  const [keywords, setKeywords] = useState("");
  function handleChangeMovie(e) {
    let keyword = e.target.value;
    setKeywords(keyword);
    if (keyword.length > 0) {
      navigate(`/search?keywords=${keywords.trim()}`);
    } else {
      navigate("/");
    }
  }

  function nextHome() {
    navigate("/");
    setKeywords("");
  }

  return (
    <div
      className="navbar_container"
      style={
        scrolly < 50
          ? { backgroundColor: "transparent" }
          : { backgroundColor: "#222" }
      }
    >
      <Container maxWidth="xl">
        <div className="navbar">
          <div className="logo">
            <img src={Netfixlogo} alt="" onClick={nextHome} />
          </div>
          <div className="navbar_search">
            <SearchIcon className="iconsearch" />
            <input
              type="text"
              name=""
              id=""
              placeholder="Search"
              className="input"
              value={keywords}
              onChange={handleChangeMovie}
            />
          </div>
          <Box sx={{ position: "absolute", right: "40px" }} id="log_container">
            <>
              {!auth.user ? (
                <Button
                  style={{ color: "white" }}
                  id="btn_login"
                  onClick={() => navigate(`/login`)}
                >
                  <LoginIcon id="icon_login" />
                  Login
                </Button>
              ) : (
                <>
                  <Box
                    style={{
                      display: "flex",
                      alignItems: "center",
                      right: "40px",
                      color: "white",
                    }}
                    id="btn_logout"
                  >
                    <AccountCircleIcon sx={{ mr: 0.5 }} id="icon_account" />
                    <Typography variant="p" />
                    {auth.user.username}
                    <Button
                      style={{ color: "white" }}
                      onClick={() => {
                        auth.logout(() => navigate("/"));
                      }}
                      id="btn_logout"
                    >
                      <LogoutIcon id="icon_login" />
                      Logout
                    </Button>
                  </Box>
                </>
              )}
            </>
          </Box>
          <Box
            sx={{
              height: 350,
              flexGrow: 1,
              maxWidth: "70px",
              position: "absolute",
              top: "-50px",
              left: "5%",
            }}
            id="mode_home"
          >
            <SpeedDial
              ariaLabel=""
              sx={{ position: "absolute", bottom: 10, right: 10 }}
              icon={
                <HomeIcon
                  sx={{
                    color: "black",
                    backgroundColor: "white",
                    width: "60%",
                    height: "60%",
                    borderRadius: "50%",
                  }}
                />
              }
            >
              {actions.map((action) => (
                <SpeedDialAction
                  key={action.name}
                  icon={action.icon}
                  tooltipTitle={action.name}
                  sx={{ color: "black" }}
                />
              ))}
            </SpeedDial>
          </Box>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
