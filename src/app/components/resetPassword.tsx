"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { Box, Stack } from "@mui/material";
import HttpsIcon from "@mui/icons-material/Https";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useApplicationContext } from "@/app/context/applicationContext";

export default function ResetPassword() {
  const router = useRouter();
  const { resetPassword } = useApplicationContext();
  const [resetUsername, setResetUsername] = useState<any>({
    username: "",
  });

  const handleOnChangeResetPassword = (event: any) => {
    const { name, value } = event.target;
    setResetUsername((prev: any) => {
      return { ...prev, [name]: value };
    });
  };

  const handleClickResetPassword = () => {
    resetPassword(resetUsername);
  };

  return (
    <Box>
      <Stack
        direction="column"
        spacing={1}
        justifyContent="flex-end"
        alignItems="center"
        height="27rem"
      >
        <Box
          sx={{
            border: "1px solid #E4E0E1",
            padding: "2rem",
            borderRadius: "20px",
          }}
        >
          <Stack
            direction="column"
            spacing={3}
            justifyContent="center"
            alignItems="center"
          >
            <Box>
              <HttpsIcon color="primary" fontSize="large" />
            </Box>
            <Box>
              {" "}
              <Typography variant="h6">Reset Your Password</Typography>
            </Box>
            <Box>
              {" "}
              <TextField
                required
                label="Enter Your Email"
                name="username"
                onChange={(event) => handleOnChangeResetPassword(event)}
              />
            </Box>
            <Box>
              <Button
                variant="contained"
                size="large"
                sx={{ width: "14rem" }}
                onClick={handleClickResetPassword}
              >
                Reset Password
              </Button>
            </Box>
            <Box>
              <Stack direction="row" spacing={1}>
                {" "}
                <ArrowBackIcon color="primary" />
                <Typography
                  color="primary"
                  sx={{ cursor: "pointer" }}
                  onClick={() => router.push("./")}
                >
                  Back to login
                </Typography>
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Stack>
      <ToastContainer position="top-right" autoClose={2000} />
    </Box>
  );
}
