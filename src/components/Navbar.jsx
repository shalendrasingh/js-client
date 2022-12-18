import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link, NavLink } from "react-router-dom";
import { styled } from "@mui/material";
const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.common.white,
  textDecoration: "none",
}));
const pages = ["Products", "Pricing", "Blog"];

export const Navbar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <StyledLink to="/">JS Assign</StyledLink>
            </Typography>
            <Button color="inherit">
              <StyledLink to="/createvendor">Add New +</StyledLink>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
