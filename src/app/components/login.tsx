"use client";
import { useState } from "react";

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
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
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
                />
              </FormControl>
            </Box>
            <Box>
              <Button variant="contained">LOGIN</Button>
            </Box>
            <Box>
              <Typography
                variant="subtitle1"
                color="primary"
                sx={{ textAlign: "center" }}
              >
                Reset password?
              </Typography>
              Don't have an account yet ?
              <Typography
                variant="subtitle1"
                color="primary"
                sx={{ display: "inline-block" }}
              >
                &nbsp;Create account
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}
