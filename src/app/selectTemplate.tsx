"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Button from "@mui/material/Button";
import { toast, ToastContainer } from "react-toastify";

import Architect from "../../public/blocks-image/Architect.png";
import Myblog from "../../public/blocks-image/Mybolg.png";
import NoImage from "../../public/blocks-image/No-image.png";
import Logout from "@/app/components/logout";
import { useApplicationContext } from "./context/applicationContext";
import { getItems, verfiyToken } from "./services/api";

export default function selectTemplate() {
  const {
    setCurrentTemplate,
    block,
    setblock,

    setCurrentUserName,
    serCurrentUserId,

    setUser,
  } = useApplicationContext();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [isTokenValid, setIsTokenValid] = useState<boolean>(false);
  const router = useRouter();
  const currentToken = localStorage.getItem("token");
  const handleOnBlock = (template: any) => {
    router.push("/canvas");
    setCurrentTemplate(template);
  };

  const blockImage = (templateName: string) => {
    let image;
    switch (templateName) {
      case "Blog Template":
        image = Myblog;
        break;
      case "Architect Template":
        image = Architect;
        break;
      default:
        image = NoImage;
    }
    return image;
  };

  useEffect(() => {
    if (currentToken) {
      setIsTokenValid(true);
    } else {
      setIsTokenValid(false);
      toast.error("Invalid Route");
      router.push("/");
    }

    protectedRoute();
  }, []);

  const protectedRoute = async () => {
    const header = { Authorization: `Bearer ${currentToken}` };

    try {
      const response = await verfiyToken(header);

      if (response.statusText == "OK") {
        setCurrentUserName(response.data.user.username);
        serCurrentUserId(response.data.user.id);
        fetchItems(response.data.user.id);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const fetchItems = async (userID: string) => {
    try {
      const response = await getItems(userID);

      if (response.statusText == "OK") {
        setIsLoading(false);
        const getTemplate = response.data.map((el: any) => {
          return el.templates;
        });
        setblock(getTemplate);
        setUser(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <ToastContainer position="top-center" autoClose={2000} />
      {isTokenValid && (
        <>
          {" "}
          <div>
            <Logout />
          </div>
          <div>
            <h1 style={{ margin: "2rem 0 2rem 2rem" }}>Starter Templates</h1>
          </div>
          {isLoading ? (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              {" "}
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <>
              {" "}
              {block.flat().map((el: any) => {
                return (
                  <div
                    style={{
                      width: "16rem",
                      border: "1px solid #DFDFDE",
                      cursor: "pointer",
                      display: "inline-block",
                      margin: "25px",
                      backgroundColor: "#fff",
                    }}
                    onClick={() => handleOnBlock(el)}
                    title={el.title}
                  >
                    <Image
                      src={blockImage(el.title) as any}
                      alt={el.title}
                      style={{
                        width: "16rem",
                        objectFit: "cover",
                        height: "10rem",
                      }}
                    />
                    <div>
                      <h6
                        style={{
                          textAlign: "center",
                          color: "gray",
                          margin: "7px",
                        }}
                      >
                        {el.title}
                      </h6>
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </>
      )}
    </div>
  );
}
