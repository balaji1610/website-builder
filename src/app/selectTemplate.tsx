"use client";
import { useRouter } from "next/navigation";
import HeroImage from "../../public/blocks-image/heroImage.png";
import Image from "next/image";

export default function selectTemplate() {
  const router = useRouter();

  const handleOnBlock = () => {
    router.push("/canvas");
  };

  return (
    <div>
      <div
        className="card"
        style={{ width: "16rem", border: "1px solid gray", cursor: "pointer" }}
        onClick={handleOnBlock}
        title="Hero Image"
      >
        <Image
          src={HeroImage}
          className="card-img-top"
          alt="ddd"
          style={{ width: "16rem", objectFit: "contain", height: "7rem" }}
        />
        <div className="card-body">
          <h2 className="card-title" style={{ textAlign: "center" }}>
            Hero Image
          </h2>
        </div>
      </div>
    </div>
  );
}
