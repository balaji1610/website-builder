"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";

import Logout from "@/app/components/logout";
import Footer from "@/app/components/footer";
import Architect from "../../../public/template-images/Architect-Template.png";
import CV from "../../../public/template-images/CV-Template.png";
import Gallery from "../../../public/template-images/Gallery-template.png";
import Marketing from "../../../public/template-images/Marketing-Template.png";
import Portfolio from "../../../public/template-images/Portfolio-Template.png";
import NoImage from "../../../public/template-images/No-image.png";
import { useApplicationContext } from "@/app/context/applicationContext";
import userservice from "@/app/userservice/userservice";
import { templateType } from "@/app/interface/interface";

export default function SelectTemplate() {
  const router = useRouter();
  const {
    setSelectedTemplate,
    allTemplates,
    isTokenValid,
    isLoading,
    setIsTokenValid,
  } = useApplicationContext();
  const { protectedRoute } = userservice();

  const handleOnBlock = (template: templateType) => {
    router.push("/canvas");
    setSelectedTemplate(template);
  };

  const blockImage = (templateName: string) => {
    let image;
    switch (templateName) {
      case "CV-Template":
        image = CV;
        break;
      case "Architect-Template":
        image = Architect;
        break;
      case "Gallery-Template":
        image = Gallery;
        break;
      case "Marketing-Template":
        image = Marketing;
        break;
      case "Portfolio-Template":
        image = Portfolio;
        break;
      default:
        image = NoImage;
    }
    return image;
  };

  useEffect(() => {
    if (isTokenValid == false) {
      toast.error("Unauthorized Route");
      setIsTokenValid(null);
      setTimeout(() => {
        router.push("./");
      }, 2000);
    }
    protectedRoute();
    /* eslint-disable */
  }, [setIsTokenValid, isTokenValid]);

  const fromNow = (now: string | null) => {
    if (now) {
      dayjs.extend(relativeTime);

      return dayjs().to(dayjs(now));
    }
  };

  return (
    <Box>
      {isTokenValid ? (
        <>
          <Logout />
          <Box sx={{ m: "1rem 0 1rem 1rem" }}>
            <Typography variant="h5">Starter Templates</Typography>
          </Box>
          {isLoading ? (
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                height: "80vh",
              }}
            >
              <CircularProgress size="30px" />
            </Box>
          ) : (
            <Box sx={{ height: "80vh", marginLeft: "2rem" }}>
              {allTemplates.flat().map((el: templateType, index: number) => {
                return (
                  <Box
                    sx={{
                      m: "10px 20px 10px 20px",
                      border: "1px solid #DFDFDE",
                      display: "inline-block",
                      cursor: "pointer",
                      height: "14rem",
                      borderRadius: "10px",
                    }}
                    key={index}
                    onClick={() => handleOnBlock(el)}
                    title={el.title}
                  >
                    <Stack spacing={1}>
                      <Box>
                        <Image
                          src={blockImage(el.title)}
                          alt="Blog-Template"
                          width={260}
                          height={150}
                          style={{
                            objectFit: "fill",
                          }}
                          priority
                        />
                      </Box>
                      <Box sx={{ borderTop: "1px solid #EBEAFF" }}>
                        <Typography
                          variant="subtitle1"
                          align="center"
                          color="textSecondary"
                          sx={{ mt: "5px", fontWeight: "bold" }}
                        >
                          {el.title}
                        </Typography>
                      </Box>
                      <Box>
                        <Typography
                          variant="subtitle2"
                          align="right"
                          color="textDisabled"
                          sx={{ mr: "4px" }}
                        >
                          {fromNow(el.lastUpdated)}
                        </Typography>
                      </Box>
                    </Stack>
                  </Box>
                );
              })}
            </Box>
          )}

          <>
            {" "}
            <Footer />
          </>
        </>
      ) : (
        <>
          <ToastContainer position="top-center" autoClose={2000} />
        </>
      )}
    </Box>
  );
}
