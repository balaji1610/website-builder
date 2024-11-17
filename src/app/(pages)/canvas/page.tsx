import dynamic from "next/dynamic";

const Canvas = dynamic(() => import("@/app/components/canvas"), {
  ssr: false,
});
export default function CanvasPage() {
  return (
    <>
      <Canvas />
    </>
  );
}
