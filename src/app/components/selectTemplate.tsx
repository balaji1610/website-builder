"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Architect from "../../../public/blocks-image/Architect.png";
import Myblog from "../../../public/blocks-image/Mybolg.png";
import NoImage from "../../../public/blocks-image/No-image.png";
import Logout from "@/app/components/logout";
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
    <>
      {isTokenValid ? (
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
              {allTemplates.flat().map((el: templateType, index: number) => {
                return (
                  <div
                    style={{
                      width: "16rem",
                      height: "15rem",
                      border: "1px solid #DFDFDE",
                      cursor: "pointer",
                      display: "inline-block",
                      margin: "25px",
                      backgroundColor: "#fff",
                    }}
                    key={index}
                    onClick={() => handleOnBlock(el)}
                    title={el.title}
                  >
                    <Image
                      src={blockImage(el.title)}
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

                      <h6>{fromNow(el.lastUpdated)}</h6>
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </>
      ) : (
        <div>
          <ToastContainer position="top-center" autoClose={2000} />
        </div>
      )}
    </>
  );
}
