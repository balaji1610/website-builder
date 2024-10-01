"use client";
import { useRouter } from "next/navigation";
import HeroImage from "../../public/blocks-image/heroImage.png";
import Testimonial from "../../public/blocks-image/testimonial.png";
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
      img: HeroImage,
      title: "Hero",
    },
    {
      img: Testimonial,
      title: "Testimonial",
    },
  ];

  return (
    <div>
      {blocks.map((el) => {
        return (
          <div
            className="card"
            style={{
              width: "16rem",
              border: "1px solid gray",
              cursor: "pointer",
            }}
            onClick={() => handleOnBlock(el.title)}
            title={el.title}
          >
            <Image
              src={el.img}
              className="card-img-top"
              alt="ddd"
              style={{ width: "16rem", objectFit: "contain", height: "7rem" }}
            />
            <div className="card-body">
              <h2 className="card-title" style={{ textAlign: "center" }}>
                {el.title}
              </h2>
            </div>
          </div>
        );
      })}
    </div>
  );
}
