"use client";
import { useRouter } from "next/navigation";

import Architect from "../../public/blocks-image/Architect.png";
import Myblog from "../../public/blocks-image/Mybolg.png";
import NoImage from "../../public/blocks-image/No-image.png";
import Image from "next/image";
import Canvas from "./components/canvas";
import { useEffect, useState } from "react";
import { useApplicationContext } from "./context/applicationContext";
import { getItems } from "./services/api";

export default function selectTemplate() {
  const { setCurrentTemplate, block, setblock } = useApplicationContext();

  const router = useRouter();
  const handleOnBlock = (template: any) => {
    router.push("/canvas");
    setCurrentTemplate(template);
  };

  // const blocks = [
  //   {
  //     img: Myblog,
  //     title: "Blog Template",
  //   },
  //   {
  //     img: Architect,
  //     title: "Architect Template",
  //   },
  // ];

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
    const data = await getItems();

    const getTemplate = data.map((el: any) => {
      return el;
    });

    setblock(getTemplate);
  };

  return (
    <div>
      <div>
        <h1 style={{ margin: "2rem 0 2rem 2rem" }}>Starter Templates</h1>
      </div>
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
              style={{ width: "16rem", objectFit: "cover", height: "10rem" }}
            />
            <div>
              <h3 style={{ textAlign: "center", color: "gray" }}>{el.title}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}
