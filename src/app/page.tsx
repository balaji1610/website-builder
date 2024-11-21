"use client";

import Login from "./components/login";
import useMediaQuery from "@mui/material/useMediaQuery";
export default function Home() {
  const ismobileDevice = useMediaQuery("(max-width:600px)");
  return <>{ismobileDevice ? <h1>Available on desktop only</h1> : <Login />}</>;
}
