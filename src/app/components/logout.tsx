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
import LoadingButton from "@mui/lab/LoadingButton";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { useApplicationContext } from "../context/applicationContext";
import userservice from "@/app/userservice/userservice";

import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
export default function Logout() {
  const router = useRouter();
  const pathname = usePathname();

  const { currentUserName, setIsTokenValid, selectedTemplate, loadingButton } =
    useApplicationContext();
  const { downloadfile } = userservice();

  const [isCanvasPage, setIsCanvasPage] = useState<boolean>(false);

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
      setIsCanvasPage(true);
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
          <Grid size={2}>
            {isCanvasPage && (
              <Box
                sx={{ cursor: "pointer", m: "10px 0 10px 10px" }}
                title="Back"
                onClick={() => router.push("./selecttemplate")}
              >
                <ArrowBackIosNewOutlinedIcon />
              </Box>
            )}
          </Grid>
          <Grid size={6}>
            {isCanvasPage && (
              <Typography variant="h5" align="center" sx={{ mt: "10px" }}>
                {selectedTemplate?.title}
              </Typography>
            )}
          </Grid>
          <Grid size={4}>
            <Stack
              direction="row"
              sx={{
                justifyContent: "flex-end",
              }}
              spacing={2}
            >
              <Box>
                {isCanvasPage && (
                  <LoadingButton
                    variant="contained"
                    color={
                      loadingButton.isPublishLoading ? "primary" : "success"
                    }
                    onClick={() => downloadfile()}
                    sx={{
                      mt: "5px",
                    }}
                    loading={loadingButton.isPublishLoading}
                  >
                    Publish
                  </LoadingButton>
                )}
              </Box>
              <Box>
                <Avatar>{avater}</Avatar>
              </Box>
              <Box sx={{ marginTop: "8px !important" }}>
                {avatarName.toUpperCase()}
              </Box>
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
