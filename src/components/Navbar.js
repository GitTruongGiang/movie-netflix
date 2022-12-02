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
  TextField,
  Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import ShareIcon from "@mui/icons-material/Share";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const actions = [
  { icon: <AccountCircleIcon />, name: "Acount" },
  { icon: <SettingsIcon />, name: "Setting" },
  { icon: <ShareIcon />, name: "Share" },
];

const styles = {
  fontSize: "14px",
  outline: "none",
  border: "1px solid #fff",
  cursor: "pointer",
  width: 0,
  padding: "10px",
  opacity: 0,
  backgroundColor: " #222",
  transition: "0.3s ease-in",
  color: "white",
  ":focus": {
    paddingLeft: "20px",
    width: "300px",
    cursor: "pointer",
    opacity: 1,
    borderRadius: "6px",
  },
};

function Navbar() {
  const auth = useAuth();
  const [scrolly] = useScrolly();
  let navigate = useNavigate();
  const [keywords, setKeywords] = useState("");
  const params = useParams();
  console.log(params);
  const handleChangeMovie = async (e) => {
    let keyword = e.target.value;
    if (keyword) {
      navigate(`/search?keywords=${keyword.trim()}`);
      setKeywords(keyword);
    } else {
      await navigate("/");
      setKeywords("");
    }
  };

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
              name="search"
              id="search"
              placeholder="Search"
              autoComplete="off"
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
