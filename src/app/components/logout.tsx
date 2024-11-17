"use client";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { useApplicationContext } from "../context/applicationContext";
import userservice from "@/app/userservice/userservice";

export default function Logout() {
  const router = useRouter();
  const pathname = usePathname();

  const { currentUserName, setIsTokenValid } = useApplicationContext();
  const { downloadfile } = userservice();

  const [isPublish, setISPublish] = useState<boolean>(false);

  const avatarName = currentUserName.split("@")[0];
  const avater = currentUserName?.at(0)?.toUpperCase();

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
    setIsTokenValid(null);
    router.push("/");
  };

  useEffect(() => {
    if (pathname == "/canvas") {
      setISPublish(true);
    }
  }, [pathname]);

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
        <Grid container spacing={1}>
          <Grid size={4}></Grid>
          <Grid size={4}></Grid>
          <Grid size={4}>
            <Stack
              direction="row"
              sx={{
                justifyContent: "flex-end",
              }}
              spacing={2}
            >
              <Box>
                {isPublish && (
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => downloadfile()}
                    sx={{ mt: "5px" }}
                  >
                    Publish
                  </Button>
                )}
              </Box>
              <Box>
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
