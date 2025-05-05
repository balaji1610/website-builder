import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export default function Footer() {
  const currentYear = new Date();
  return (
    <Box
      sx={{
        border: "2px solid #ffffff",
        backgroundColor: "#444444",
        mt: "10px",
        color: "#ffffff",
      }}
    >
      <Stack spacing={1}>
        <Box sx={{ pt: "20px" }}>
          <Typography variant="subtitle1" align="center">
            © Copyright&nbsp;{currentYear.getFullYear()}
            <Typography component="span" sx={{ color: "#219B9D" }}>
              <Link
                href="https://balajidev.onrender.com/"
                target="_blank"
                underline="none"
                sx={{
                  color: "#4ED7F1",
                  fontWeight: "900",
                  fontStyle: "italic",
                  fontFamily: "verdana",
                }}
              >
                &nbsp;Balaji
              </Link>
            </Typography>
            &nbsp; All Rights Reserved
          </Typography>
        </Box>
        <Box>
          <Typography variant="subtitle2" align="center" sx={{ color: "#fff" }}>
            version : 1.2.0
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}
