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
import { useFormik } from "formik";
import * as Yup from "yup";
import { FormHelperText } from "@mui/material";

import userservice from "@/app/userservice/userservice";
import { crendentialType } from "@/app/interface/interface";
import { useApplicationContext } from "@/app/context/applicationContext";

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

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },

    validationSchema: Yup.object({
      username: Yup.string().email(),
      password: Yup.string()
        .min(8, "Require 8 to 15 characters")
        .max(15, "Require 8 to 15 characters"),
    }),

    onSubmit: (values) => {
      login();
    },
  });

  return (
    <Box>
      <Stack
        direction="column"
        spacing={1}
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Box
          sx={{
            border: "3px solid #E4E0E1",
            padding: "2rem",
            borderRadius: "20px",
          }}
          component="form"
          onSubmit={formik.handleSubmit}
        >
          <Stack
            direction="column"
            spacing={3}
            justifyContent="center"
            alignItems="center"
          >
            {" "}
            <Box>
              <AccountCircleIcon color="primary" fontSize="large" />
            </Box>
            <Box>
              <TextField
                required
                label="Email Address"
                sx={{ width: "16rem" }}
                type="email"
                name="username"
                value={formik.values.username}
                onChange={(event) => {
                  handleOnchange(event);
                  formik.handleChange(event);
                }}
                helperText={formik.touched.username && formik.errors.username}
                error={
                  formik.touched.username && Boolean(formik.errors.username)
                }
              />
            </Box>
            <Box>
              <FormControl variant="outlined" required>
                <InputLabel error={Boolean(formik.errors.password)}>
                  Password
                </InputLabel>
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
                  value={formik.values.password}
                  onChange={(event) => {
                    handleOnchange(event);
                    formik.handleChange(event);
                  }}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                />
                {formik.touched.password && formik.errors.password && (
                  <FormHelperText error>
                    {formik.errors.password}
                  </FormHelperText>
                )}
              </FormControl>
            </Box>
            <Box>
              <LoadingButton
                type="submit"
                variant="contained"
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
