"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Stack } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Typography from "@mui/material/Typography";
import LoadingButton from "@mui/lab/LoadingButton";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useApplicationContext } from "@/app/context/applicationContext";
import userservice from "@/app/userservice/userservice";
import { crendentialType } from "@/app/interface/interface";

export default function Login() {
  const router = useRouter();
  const { setCrendential, crendential, isActionLoading } =
    useApplicationContext();
  const { login } = userservice();

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleOnchange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setCrendential((prev: crendentialType) => {
      return { ...prev, [name]: value };
    });
  };

  const clickLogin = () => {
    login();
  };

  return (
    <Box>
      <Stack
        direction="column"
        spacing={1}
        justifyContent="flex-end"
        alignItems="center"
        height="30rem"
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
              <AccountCircleIcon color="primary" fontSize="large" />
            </Box>
            <Box>
              <TextField
                required
                label="Email Address"
                sx={{ width: "16rem" }}
                name="username"
                onChange={(event) => handleOnchange(event)}
              />
            </Box>
            <Box>
              <FormControl variant="outlined" required>
                <InputLabel>Password</InputLabel>
                <OutlinedInput
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton onClick={handleClickShowPassword} edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                  name="password"
                  onChange={(event) => handleOnchange(event)}
                />
              </FormControl>
            </Box>
            <Box>
              <LoadingButton
                variant="contained"
                disabled={
                  crendential.username.length < 2 ||
                  crendential.password.length < 2
                }
                onClick={clickLogin}
                loading={isActionLoading}
              >
                LOGIN
              </LoadingButton>
            </Box>
            <Box>
              <Typography
                variant="subtitle1"
                color="primary"
                sx={{ textAlign: "center", cursor: "pointer" }}
                onClick={() => router.push("./resetpassword")}
              >
                Reset password?
              </Typography>
              Don&apos;t have an account yet ?
              <Typography
                variant="subtitle1"
                color="primary"
                sx={{ display: "inline-block", cursor: "pointer" }}
                onClick={() => router.push("./createaccount")}
              >
                &nbsp;Create account
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Stack>
      <ToastContainer position="top-right" autoClose={2000} />
    </Box>
  );
}
