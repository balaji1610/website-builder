"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Stack } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useApplicationContext } from "@/app/context/applicationContext";
import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";
import userservice from "@/app/userservice/userservice";

export default function CreateAccount() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const { setnewUserCrendential, newUserCrendential } = useApplicationContext();
  const { prepareCreateaAccount } = userservice();
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleOnchange = (event: any) => {
    const { name, value } = event.target;
    setnewUserCrendential((prev: any) => {
      return { ...prev, [name]: value };
    });
  };

  const clickSignUp = () => {
    prepareCreateaAccount();
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
              <PersonAddAltRoundedIcon color="primary" fontSize="large" />
            </Box>
            <Box>
              <Typography variant="subtitle1">Create a new account</Typography>
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
              <Button
                variant="contained"
                disabled={
                  newUserCrendential.username.length < 2 ||
                  newUserCrendential.password.length < 2
                }
                onClick={clickSignUp}
              >
                SIGN UP
              </Button>
            </Box>
            <Box>
              Already have an account ?
              <Typography
                variant="subtitle1"
                color="primary"
                sx={{ textAlign: "center", cursor: "pointer" }}
                onClick={() => router.push("./")}
              >
                Login
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Stack>
      <ToastContainer position="top-right" autoClose={2000} />
    </Box>
  );
}
