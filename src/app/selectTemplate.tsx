"use client";
import { useRouter } from "next/navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Architect from "../../public/blocks-image/Architect.png";
import Myblog from "../../public/blocks-image/Mybolg.png";
import NoImage from "../../public/blocks-image/No-image.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useApplicationContext } from "./context/applicationContext";
import { getItems } from "./services/api";

export default function selectTemplate() {
  const { setCurrentTemplate, block, setblock,currentTemplate } = useApplicationContext();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();

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
    fetchItems();
  }, []);
  const fetchItems = async () => {
    try {
      const response = await getItems();
      if (response.statusText == "OK") {
        setIsLoading(false);
        const getTemplate = response.data.map((el: any) => {
          return el;
        });
        setblock(getTemplate);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
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
          {block.map((el: any) => {
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
    </div>
  );
}
