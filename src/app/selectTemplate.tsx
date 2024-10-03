"use client";
import { useRouter } from "next/navigation";
import HeroImage from "../../public/blocks-image/heroImage.png";
import Testimonial from "../../public/blocks-image/testimonial.png";
import Architect from "../../public/blocks-image/Architect.png";
import Myblog from "../../public/blocks-image/Mybolg.png";
import Image from "next/image";
import Canvas from "./components/canvas";
import { useState } from "react";
import { useApplicationContext } from "./context/applicationContext";
export default function selectTemplate() {
  const { setCurrentBlock } = useApplicationContext();
  const router = useRouter();
  const handleOnBlock = (title: string) => {
    router.push("/canvas");
    setCurrentBlock(title);
  };

  const blocks = [
    {
      img: Myblog,
      title: "Blog Template",
    },
    {
      img: Architect,
      title: "Architect Template",
    },
  ];

  return (
    <div>
      <div>
        <h1 style={{ margin: "2rem 0 2rem 2rem" }}>Starter Templates</h1>
      </div>
      {blocks.map((el) => {
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
            onClick={() => handleOnBlock(el.title)}
            title={el.title}
          >
            <Image
              src={el.img}
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
