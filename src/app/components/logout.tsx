"use client";
import { useState } from "react";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useApplicationContext } from "../context/applicationContext";
export default function Logout() {
  const { currentUserName } = useApplicationContext();

  const avatarName = currentUserName.split("@")[0];
  const avater = currentUserName?.at(0)?.toUpperCase();
  const router = useRouter();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setAnchorEl(null);
    localStorage.removeItem("token");
    router.push("/");
  };
  return (
    <>
      <Box
        sx={{
          borderBottom: "1px solid gray",
          width: "100%",
          height: "3rem",
          backgroundColor: "#444444",
          color: "#fff",
          fontWeight: "bold",
        }}
      >
        <Grid container spacing={2}>
          <Grid size={4}></Grid>
          <Grid size={6}></Grid>
          <Grid size={2}>
            <Stack direction="row" spacing={2}>
              <Box>
                {" "}
                <Avatar>{avater}</Avatar>
              </Box>
              <Box sx={{ marginTop: "8px !important" }}>{avatarName}</Box>
              <Box>
                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <KeyboardArrowUpIcon sx={{ color: "gray" }} />
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
